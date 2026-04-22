const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;
let watcher = null;
let watchDebounce = null;
let lastSelfWrite = 0;

// ---------- Paths ----------

function localDir() {
  return app.getPath('userData');
}

function syncConfigPath() {
  return path.join(localDir(), 'sync-config.json');
}

function getSyncConfig() {
  return readJson(syncConfigPath(), { dataFolder: null });
}

function setSyncConfig(cfg) {
  writeJson(syncConfigPath(), cfg);
}

function dataDir() {
  const cfg = getSyncConfig();
  if (cfg.dataFolder && fs.existsSync(cfg.dataFolder)) return cfg.dataFolder;
  return localDir();
}

function projectsPath() {
  return path.join(dataDir(), 'projects.json');
}

function settingsPath() {
  return path.join(dataDir(), 'settings.json');
}

// ---------- JSON helpers ----------

function readJson(file, fallback) {
  if (!fs.existsSync(file)) return fallback;
  try {
    const raw = fs.readFileSync(file, 'utf-8');
    if (!raw.trim()) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function writeJson(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
  lastSelfWrite = Date.now();
}

const DEFAULT_PROJECTS = { ongoing: [], future: [], completed: [] };
const DEFAULT_SETTINGS = { fontScale: 1, bgPreset: 'charcoal', language: 'tr' };

function isEmptyProjects(p) {
  if (!p) return true;
  return (
    (!p.ongoing || p.ongoing.length === 0) &&
    (!p.future || p.future.length === 0) &&
    (!p.completed || p.completed.length === 0)
  );
}

// ---------- File watcher ----------

function startWatcher() {
  stopWatcher();
  const dir = dataDir();
  if (!fs.existsSync(dir)) return;
  try {
    watcher = fs.watch(dir, { persistent: false }, (_evt, filename) => {
      if (filename !== 'projects.json' && filename !== 'settings.json') return;
      if (Date.now() - lastSelfWrite < 1500) return;
      clearTimeout(watchDebounce);
      watchDebounce = setTimeout(() => {
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send('data:external-change', filename);
        }
      }, 700);
    });
  } catch (e) {
    console.warn('watcher failed:', e.message);
  }
}

function stopWatcher() {
  if (watcher) {
    try { watcher.close(); } catch {}
    watcher = null;
  }
}

// ---------- Window ----------

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1000,
    minHeight: 640,
    backgroundColor: '#0f1115',
    title: 'Hipotez',
    icon: path.join(__dirname, 'assets', 'app-icon.ico'),
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadFile('index.html');
  mainWindow.on('closed', () => {
    stopWatcher();
    mainWindow = null;
  });
}

if (process.platform === 'win32') {
  app.setAppUserModelId('com.hipotez.planner');
}

app.whenReady().then(() => {
  createWindow();
  startWatcher();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// ---------- IPC: projects / settings ----------

ipcMain.handle('projects:load', () =>
  readJson(projectsPath(), DEFAULT_PROJECTS)
);

ipcMain.handle('projects:save', (_e, data) => {
  writeJson(projectsPath(), data);
  return true;
});

ipcMain.handle('settings:load', () =>
  readJson(settingsPath(), DEFAULT_SETTINGS)
);

ipcMain.handle('settings:save', (_e, data) => {
  writeJson(settingsPath(), data);
  return true;
});

// ---------- IPC: folder/external ----------

ipcMain.handle('folder:pick', async () => {
  const res = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory']
  });
  if (res.canceled || res.filePaths.length === 0) return null;
  return res.filePaths[0];
});

ipcMain.handle('folder:open', async (_e, p) => {
  if (!p) return false;
  const err = await shell.openPath(p);
  return err === '';
});

ipcMain.handle('external:open', async (_e, url) => {
  if (!url) return false;
  await shell.openExternal(url);
  return true;
});

// ---------- IPC: sync / data folder ----------

ipcMain.handle('sync:status', () => {
  const cfg = getSyncConfig();
  return {
    dataFolder: cfg.dataFolder || null,
    active: !!(cfg.dataFolder && fs.existsSync(cfg.dataFolder)),
    localFallback: localDir()
  };
});

ipcMain.handle('sync:pickDataFolder', async () => {
  const res = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory', 'createDirectory'],
    title: 'Veri klasörünü seç (ör. Google Drive içinde bir klasör)'
  });
  if (res.canceled || res.filePaths.length === 0) return { cancelled: true };
  const chosen = res.filePaths[0];

  // Current (possibly local) data
  const curProjects = readJson(projectsPath(), DEFAULT_PROJECTS);
  const curSettings = readJson(settingsPath(), DEFAULT_SETTINGS);

  // Data already in chosen folder
  const tgtProjectsFile = path.join(chosen, 'projects.json');
  const tgtSettingsFile = path.join(chosen, 'settings.json');
  const tgtProjects = readJson(tgtProjectsFile, null);
  const tgtSettings = readJson(tgtSettingsFile, null);

  const tgtHas = tgtProjects && !isEmptyProjects(tgtProjects);
  const curHas = !isEmptyProjects(curProjects);

  let decision = 'seed'; // default: seed cloud from current

  if (tgtHas && curHas) {
    const r = await dialog.showMessageBox(mainWindow, {
      type: 'question',
      title: 'Veri çakışması',
      message: 'Bu klasörde zaten Hipotez verisi var.',
      detail:
        'Seçtiğin klasörde mevcut projeler bulundu. Hangisini kullanmak istiyorsun?',
      buttons: [
        'Klasördeki veriyi kullan (önerilen)',
        'Mevcut veriyi klasöre kopyala (üstüne yaz)',
        'İptal'
      ],
      defaultId: 0,
      cancelId: 2
    });
    if (r.response === 2) return { cancelled: true };
    decision = r.response === 0 ? 'useRemote' : 'overwriteRemote';
  } else if (tgtHas && !curHas) {
    decision = 'useRemote';
  } else if (!tgtHas && curHas) {
    decision = 'overwriteRemote';
  } else {
    decision = 'overwriteRemote'; // both empty — just link up
  }

  // Apply decision BEFORE switching, using explicit file paths
  if (decision === 'overwriteRemote') {
    writeJson(tgtProjectsFile, curProjects);
    writeJson(tgtSettingsFile, curSettings);
  }
  // else useRemote: leave target alone

  // Switch
  setSyncConfig({ dataFolder: chosen });
  startWatcher();
  return { cancelled: false, folder: chosen };
});

ipcMain.handle('sync:clearDataFolder', async () => {
  setSyncConfig({ dataFolder: null });
  startWatcher();
  return true;
});

// ---------- IPC: export / import ----------

ipcMain.handle('data:export', async () => {
  const today = new Date().toISOString().slice(0, 10);
  const res = await dialog.showSaveDialog(mainWindow, {
    title: 'Yedeği kaydet',
    defaultPath: `hipotez-yedek-${today}.json`,
    filters: [{ name: 'JSON', extensions: ['json'] }]
  });
  if (res.canceled || !res.filePath) return { cancelled: true };

  const payload = {
    app: 'Hipotez',
    schema: 1,
    exportedAt: new Date().toISOString(),
    projects: readJson(projectsPath(), DEFAULT_PROJECTS),
    settings: readJson(settingsPath(), DEFAULT_SETTINGS)
  };
  fs.writeFileSync(res.filePath, JSON.stringify(payload, null, 2), 'utf-8');
  return { cancelled: false, path: res.filePath };
});

ipcMain.handle('data:import', async () => {
  const res = await dialog.showOpenDialog(mainWindow, {
    title: 'Yedek dosyasını seç',
    properties: ['openFile'],
    filters: [{ name: 'JSON', extensions: ['json'] }]
  });
  if (res.canceled || res.filePaths.length === 0) return { cancelled: true };

  let payload;
  try {
    payload = JSON.parse(fs.readFileSync(res.filePaths[0], 'utf-8'));
  } catch (e) {
    return { error: 'invalid-json' };
  }

  if (!payload || payload.app !== 'Hipotez' || !payload.projects) {
    return { error: 'invalid-schema' };
  }

  const confirm = await dialog.showMessageBox(mainWindow, {
    type: 'warning',
    title: 'İçe aktar',
    message: 'Mevcut veriler bu yedekle değiştirilsin mi?',
    detail:
      'Bu işlem, uygulamadaki tüm projeleri ve ayarları seçtiğin dosyadakiyle değiştirir. Geri alınamaz.',
    buttons: ['Değiştir', 'İptal'],
    defaultId: 1,
    cancelId: 1
  });
  if (confirm.response !== 0) return { cancelled: true };

  writeJson(projectsPath(), payload.projects);
  if (payload.settings) writeJson(settingsPath(), payload.settings);

  return { cancelled: false };
});
