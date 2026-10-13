const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

let mainWindow;
let watcher = null;
let watchDebounce = null;
let lastSelfWrite = 0;

// Dev helper: isolate userData so tests never touch real data
// (Electron resolves appData via the Windows shell API, not %APPDATA%).
if (process.env.HIPOTEZ_USER_DATA) {
  app.setPath('userData', process.env.HIPOTEZ_USER_DATA);
}

// ---------- Single instance ----------

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });
}

// ---------- Paths ----------

function localDir() {
  return app.getPath('userData');
}

function syncConfigPath() {
  return path.join(localDir(), 'sync-config.json');
}

function getSyncConfig() {
  return readJson(syncConfigPath(), { dataFolder: null, driveMap: {} });
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

// Guard against the data folder being (mis)pointed at a Hipotez "backups"
// subfolder. That mistake — usually from picking the wrong folder in the sync
// dialog — splits data across nested projects.json files (…/backups/backups/…)
// and makes newly added cards look like they vanished. Given such a path,
// return the real data folder above the trailing "backups" segment(s); null if
// the path doesn't look like that mistake.
function realDataFolderFrom(p) {
  if (!p) return null;
  let cur = p;
  let stripped = false;
  while (path.basename(cur).toLowerCase() === 'backups') {
    const parent = path.dirname(cur);
    if (!parent || parent === cur) break;
    cur = parent;
    stripped = true;
  }
  if (stripped && safeExists(path.join(cur, 'projects.json'))) return cur;
  return null;
}

// Auto-correct a data folder that got nested into a backups subfolder. Returns
// { from, to } if it repaired anything, else null. Runs at startup before any
// read/write so everything uses the corrected folder.
function repairNestedDataFolder() {
  const cfg = getSyncConfig();
  if (!cfg.dataFolder) return null;
  const real = realDataFolderFrom(cfg.dataFolder);
  if (real && path.normalize(real) !== path.normalize(cfg.dataFolder)) {
    const from = cfg.dataFolder;
    cfg.dataFolder = real;
    setSyncConfig(cfg);
    return { from, to: real };
  }
  return null;
}

// ---------- JSON helpers ----------

function notifyCorrupt(file, backupPath) {
  const opts = {
    type: 'warning',
    title: 'Veri dosyası okunamadı',
    message: `${path.basename(file)} dosyası bozuk görünüyor.`,
    detail:
      `Dosyanın bir kopyası şuraya kaydedildi:\n${backupPath}\n\n` +
      'Uygulama boş/varsayılan veriyle devam edecek. Eğer verileriniz kayıpsa, ' +
      'Ayarlar > Yedekleme bölümünden bir yedeği içe aktarabilir veya veri klasöründeki ' +
      '"backups" klasöründen otomatik yedeklere ulaşabilirsiniz.',
    buttons: ['Tamam']
  };
  if (mainWindow && !mainWindow.isDestroyed()) {
    dialog.showMessageBox(mainWindow, opts);
  } else {
    app.whenReady().then(() => dialog.showMessageBox(opts));
  }
}

function readJson(file, fallback) {
  if (!fs.existsSync(file)) return fallback;
  try {
    const raw = fs.readFileSync(file, 'utf-8');
    if (!raw.trim()) return fallback;
    return JSON.parse(raw);
  } catch {
    // Never let a truncated/corrupt file be silently replaced by defaults:
    // keep a copy aside so the user can recover it.
    try {
      const backupPath = file + '.corrupt-' + Date.now();
      fs.copyFileSync(file, backupPath);
      notifyCorrupt(file, backupPath);
    } catch {}
    return fallback;
  }
}

// Atomic write: write to a temp file first, then rename over the target so a
// crash or a cloud-sync read mid-write can never observe a half-written file.
function writeJson(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = file + '.tmp-' + process.pid;
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2), 'utf-8');
  fs.renameSync(tmp, file);
  lastSelfWrite = Date.now();
}

const DEFAULT_PROJECTS = { ongoing: [], future: [], completed: [] };
const DEFAULT_SETTINGS = { fontScale: 1, bgPreset: 'charcoal', language: 'tr' };

// ---------- Card iteration (works on both v2 and v3 data shapes) ----------

function forEachCard(data, fn) {
  if (!data) return;
  // v2 shape
  for (const sec of ['ongoing', 'future', 'completed']) {
    if (Array.isArray(data[sec])) data[sec].forEach(fn);
  }
  // v3 shape
  if (data.boards) {
    for (const board of Object.values(data.boards)) {
      if (!board || !Array.isArray(board.columns)) continue;
      for (const col of board.columns) {
        if (Array.isArray(col.cards)) col.cards.forEach(fn);
      }
    }
  }
  if (data.archives) {
    for (const arch of Object.values(data.archives)) {
      if (!arch) continue;
      for (const cat of Object.values(arch)) {
        if (cat && Array.isArray(cat.cards)) cat.cards.forEach(fn);
      }
    }
  }
}

function hasAnyCards(data) {
  let found = false;
  forEachCard(data, () => { found = true; });
  return found;
}

// ---------- Rotating backups ----------

function backupProjects(reason) {
  try {
    const src = projectsPath();
    if (!fs.existsSync(src)) return;
    const dir = path.join(dataDir(), 'backups');
    fs.mkdirSync(dir, { recursive: true });
    const stamp = new Date().toISOString().replace(/[:T]/g, '-').slice(0, 19);
    const dest = path.join(dir, `projects-${stamp}${reason ? '-' + reason : ''}.json`);
    fs.copyFileSync(src, dest);
    // Keep only the newest 10 backups
    const files = fs
      .readdirSync(dir)
      .filter((f) => f.startsWith('projects-') && f.endsWith('.json'))
      .map((f) => ({ f, m: fs.statSync(path.join(dir, f)).mtimeMs }))
      .sort((a, b) => b.m - a.m);
    for (const old of files.slice(10)) {
      try { fs.unlinkSync(path.join(dir, old.f)); } catch {}
    }
  } catch (e) {
    console.warn('backup failed:', e.message);
  }
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
    frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadFile('index.html');

  mainWindow.on('maximize', () => {
    if (!mainWindow.isDestroyed()) mainWindow.webContents.send('window:maximized', true);
  });
  mainWindow.on('unmaximize', () => {
    if (!mainWindow.isDestroyed()) mainWindow.webContents.send('window:maximized', false);
  });

  // Surface renderer errors on stdout while developing (npm start)
  if (!app.isPackaged) {
    mainWindow.webContents.on('console-message', (_e, level, message, line, sourceId) => {
      if (level >= 2) {
        console.log(`[renderer:${level === 3 ? 'error' : 'warn'}] ${message} (${sourceId}:${line})`);
      }
    });
  }

  mainWindow.on('closed', () => {
    stopWatcher();
    mainWindow = null;
  });
}

if (process.platform === 'win32') {
  app.setAppUserModelId('com.hipotez.planner');
}

app.whenReady().then(() => {
  // Repair a data folder nested into a backups subfolder BEFORE any read/write,
  // so the start backup and the first load use the corrected folder.
  const repairedDataFolder = repairNestedDataFolder();
  backupProjects('start');
  createWindow();
  startWatcher();

  if (repairedDataFolder) {
    const show = () => dialog.showMessageBox(mainWindow, {
      type: 'warning',
      title: 'Veri klasörü düzeltildi',
      message:
        'Veri klasörünüz yanlışlıkla bir "backups" (yedek) alt klasörüne ayarlanmıştı. ' +
        'Bu, eklediğiniz yeni kartların kaybolmuş gibi görünmesine yol açar.',
      detail:
        `Otomatik olarak doğru klasöre geri alındı:\n\nEski: ${repairedDataFolder.from}\nYeni: ${repairedDataFolder.to}\n\n` +
        'Projeleriniz artık bu klasördeki güncel veriden yükleniyor.',
      buttons: ['Tamam']
    });
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.once('did-finish-load', show);
    }
  }

  // Dev smoke test: HIPOTEZ_SMOKE=<dir> walks every page, saves screenshots
  // into <dir> and quits. Never active in normal runs.
  if (process.env.HIPOTEZ_SMOKE) {
    const outDir = process.env.HIPOTEZ_SMOKE;
    mainWindow.webContents.once('did-finish-load', async () => {
      try {
        await new Promise((r) => setTimeout(r, 1200));
        for (const pg of ['research', 'courses', 'advising', 'refereeing', 'archive']) {
          await mainWindow.webContents.executeJavaScript(
            `(() => { const b = document.querySelector('.nav-btn[data-page="${pg}"]'); if (b) b.click(); })()`
          );
          await new Promise((r) => setTimeout(r, 500));
          const img = await mainWindow.webContents.capturePage();
          fs.writeFileSync(path.join(outDir, `smoke-${pg}.png`), img.toPNG());
        }
        if (process.env.HIPOTEZ_SMOKE_DEEP) {
          const shot = async (name) => {
            await new Promise((r) => setTimeout(r, 600));
            const img = await mainWindow.webContents.capturePage();
            fs.writeFileSync(path.join(outDir, `deep-${name}.png`), img.toPNG());
          };
          const js = (code) => mainWindow.webContents.executeJavaScript(code, true);
          await js(`switchPage('research')`);
          await js(`archiveCard('c1', 'research', 'published')`);
          await js(`switchPage('archive')`);
          await shot('archive-published');
          await js(`restoreCard('c1')`);
          await js(`switchPage('research')`);
          await shot('after-restore');
          await js(`openWhiteboard('a1')`);
          await shot('whiteboard');
          await js(`closeWhiteboard()`);
        }
      } catch (e) {
        console.error('smoke failed:', e);
      }
      app.quit();
    });
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// ---------- IPC: window controls ----------

ipcMain.handle('window:minimize', () => {
  if (mainWindow) mainWindow.minimize();
});

ipcMain.handle('window:maximize', () => {
  if (mainWindow) {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  }
});

ipcMain.handle('window:close', () => {
  if (mainWindow) mainWindow.close();
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

// Google Drive / OneDrive / Dropbox (and similar) mounts can get a different
// drive letter — or an entirely different base path — on each PC. When a stored
// path doesn't resolve, we try, in order: a remembered exact mapping, a learned
// prefix mapping (e.g. "G:\My Drive" -> "C:\Users\me\Google Drive"), a drive
// letter swap, and finally a suffix search that looks for the deepest matching
// tail of the path under the synced data folder's ancestors and every drive
// root. Discovered mappings are cached in sync-config.json, which lives in
// userData and is never synced between machines.

function safeExists(p) {
  try { return !!p && fs.existsSync(p); } catch { return false; }
}

// Split a path into its named folder segments, dropping the drive-letter
// ("D:") or the leading UNC "\\server\share" tokens so only folder names
// remain. "G:\My Drive\Proj" -> ["My Drive", "Proj"].
function pathSegments(p) {
  if (!p) return [];
  let rest;
  const unc = /^\\\\[^\\]+\\[^\\]+(.*)$/.exec(p);
  if (unc) rest = unc[1];
  else rest = p.replace(/^[A-Za-z]:/, '');
  return rest.split(/[\\/]+/).filter(Boolean);
}

// Remove `count` trailing folder segments from a path, returning the prefix.
function stripTailSegments(p, count) {
  let s = p;
  for (let i = 0; i < count; i++) {
    s = s.replace(/[\\/]+$/, '');
    const idx = Math.max(s.lastIndexOf('\\'), s.lastIndexOf('/'));
    if (idx < 0) { s = ''; break; }
    s = s.slice(0, idx);
  }
  return s.replace(/[\\/]+$/, '');
}

// Ordered directories to search a path's tail under: the data folder and each
// of its ancestors (most specific first), then every present drive root.
function candidateRoots(cfg) {
  const roots = [];
  const seen = new Set();
  const push = (dir) => {
    const key = (dir || '').toLowerCase();
    if (dir && !seen.has(key)) { seen.add(key); roots.push(dir); }
  };
  if (cfg.dataFolder && safeExists(cfg.dataFolder)) {
    let cur = cfg.dataFolder;
    while (cur) {
      push(cur);
      const parent = path.dirname(cur);
      if (!parent || parent === cur) break;
      cur = parent;
    }
  }
  for (let c = 65; c <= 90; c++) {
    const r = String.fromCharCode(c) + ':\\';
    if (safeExists(r)) push(r);
  }
  return roots;
}

// Apply a learned prefix mapping. Prefix segments are compared without the
// drive letter, so "My Drive\Proj" matches regardless of which letter the
// cloud folder got mounted on.
function applyPrefixMap(p, cfg) {
  const prefixMap = cfg.prefixMap || {};
  const segs = pathSegments(p);
  for (const oldPrefix of Object.keys(prefixMap)) {
    const op = pathSegments(oldPrefix);
    if (segs.length < op.length) continue;
    let match = true;
    for (let i = 0; i < op.length; i++) {
      if (segs[i].toLowerCase() !== op[i].toLowerCase()) { match = false; break; }
    }
    if (!match) continue;
    const candidate = path.join(prefixMap[oldPrefix], ...segs.slice(op.length));
    if (safeExists(candidate)) return candidate;
  }
  return null;
}

// Locate the deepest trailing sub-path of `p` under any candidate root. A
// single-segment tail is accepted only when the original path itself had a
// single segment, so we never grab an unrelated folder that happens to share
// a leaf name.
function resolveBySuffix(p, cfg) {
  const segs = pathSegments(p);
  if (segs.length === 0) return null;
  const minTail = segs.length === 1 ? 1 : 2;
  for (const root of candidateRoots(cfg)) {
    for (let start = 0; start + minTail <= segs.length; start++) {
      const candidate = path.join(root, ...segs.slice(start));
      if (safeExists(candidate)) return candidate;
    }
  }
  return null;
}

function resolveFolderPath(p) {
  if (!p) return null;
  if (safeExists(p)) return p;

  const cfg = getSyncConfig();
  let resolved = null;

  // 1) Remembered exact mapping (from a previous relink/resolution)
  const pathMap = cfg.pathMap || {};
  if (pathMap[p] && safeExists(pathMap[p])) resolved = pathMap[p];

  // 2) Learned prefix mapping (e.g. "G:\My Drive" -> "C:\Users\me\Google Drive")
  if (!resolved) resolved = applyPrefixMap(p, cfg);

  const m = /^([A-Za-z]):([\\/].*)$/.exec(p);
  if (!resolved && m) {
    const origLetter = m[1].toUpperCase();
    const rest = m[2];
    const driveMap = cfg.driveMap || {};

    // 3) Known drive-letter mapping first
    const mapped = driveMap[origLetter];
    if (mapped && safeExists(mapped + ':' + rest)) {
      resolved = mapped + ':' + rest;
    }

    // 4) Probe all present drives for the same remainder path
    if (!resolved) {
      for (let c = 65; c <= 90; c++) {
        const letter = String.fromCharCode(c);
        if (letter === origLetter) continue;
        const candidate = letter + ':' + rest;
        if (safeExists(letter + ':\\') && safeExists(candidate)) {
          cfg.driveMap = Object.assign({}, driveMap, { [origLetter]: letter });
          resolved = candidate;
          break;
        }
      }
    }
  }

  // 5) Suffix search (cloud folder mounted at a different base path per PC)
  if (!resolved) resolved = resolveBySuffix(p, cfg);

  if (resolved && resolved !== pathMap[p]) {
    cfg.pathMap = Object.assign({}, cfg.pathMap || {}, { [p]: resolved });
  }
  if (resolved) setSyncConfig(cfg);
  return resolved;
}

// Remember how a missing path maps to the folder the user picked, and learn a
// reusable prefix (or drive-letter) mapping so sibling folders under the same
// old root resolve automatically next time.
function learnFolderMapping(oldPath, newPath) {
  if (!oldPath || !newPath) return;
  const cfg = getSyncConfig();
  cfg.pathMap = Object.assign({}, cfg.pathMap || {}, { [oldPath]: newPath });

  const o = pathSegments(oldPath);
  const n = pathSegments(newPath);
  let common = 0;
  while (
    common < o.length && common < n.length &&
    o[o.length - 1 - common].toLowerCase() === n[n.length - 1 - common].toLowerCase()
  ) {
    common++;
  }
  const oldPrefix = stripTailSegments(oldPath, common);
  const newPrefix = stripTailSegments(newPath, common);
  const oldLetter = /^([A-Za-z]):/.exec(oldPath);
  const newLetter = /^([A-Za-z]):/.exec(newPath);

  if (pathSegments(oldPrefix).length === 0) {
    // Only the drive letter differs — record a letter mapping.
    if (oldLetter && newLetter) {
      cfg.driveMap = Object.assign({}, cfg.driveMap || {}, {
        [oldLetter[1].toUpperCase()]: newLetter[1].toUpperCase()
      });
    }
  } else if (common > 0 && newPrefix) {
    cfg.prefixMap = Object.assign({}, cfg.prefixMap || {}, { [oldPrefix]: newPrefix });
  }
  setSyncConfig(cfg);
}

ipcMain.handle('folder:pick', async () => {
  const res = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory']
  });
  if (res.canceled || res.filePaths.length === 0) return null;
  return res.filePaths[0];
});

ipcMain.handle('folder:open', async (_e, p) => {
  const resolved = resolveFolderPath(p);
  if (!resolved) return false;
  // On Windows, shell.openPath can launch Explorer in "explore" mode which
  // forces the navigation pane to appear regardless of the user's global
  // "Show navigation pane" setting. Spawning explorer.exe directly with just
  // the folder path opens it in normal mode and respects the user's setting.
  if (process.platform === 'win32') {
    try {
      const child = spawn('explorer.exe', [path.normalize(resolved)], {
        detached: true,
        stdio: 'ignore'
      });
      child.unref();
      return true;
    } catch (e) {
      // fall through to shell.openPath as a last resort
    }
  }
  const err = await shell.openPath(resolved);
  return err === '';
});

// User manually points at the real location of a folder whose stored path no
// longer resolves on this PC. We remember it (and learn a prefix mapping) and
// open it straight away.
ipcMain.handle('folder:relink', async (_e, oldPath) => {
  const res = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory'],
    title: 'Bu kartın klasörünü bu bilgisayarda seç',
    buttonLabel: 'Klasörü bağla'
  });
  if (res.canceled || res.filePaths.length === 0) return { cancelled: true };
  const chosen = res.filePaths[0];
  learnFolderMapping(oldPath, chosen);
  if (process.platform === 'win32') {
    try {
      const child = spawn('explorer.exe', [path.normalize(chosen)], {
        detached: true,
        stdio: 'ignore'
      });
      child.unref();
      return { cancelled: false, path: chosen };
    } catch (e) {}
  }
  await shell.openPath(chosen);
  return { cancelled: false, path: chosen };
});

ipcMain.handle('external:open', async (_e, url) => {
  if (!url) return false;
  if (!/^https?:\/\//i.test(url)) return false;
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
  let chosen = res.filePaths[0];

  // Guard: don't let the data folder be set to a Hipotez "backups" subfolder —
  // that splits data across nested files and makes new cards seem to vanish.
  const realFromChosen = realDataFolderFrom(chosen);
  if (realFromChosen) {
    const r = await dialog.showMessageBox(mainWindow, {
      type: 'warning',
      title: 'Yanlış klasör seçildi',
      message: 'Seçtiğiniz klasör bir Hipotez "backups" (yedek) klasörü gibi görünüyor.',
      detail:
        'Bunu veri klasörü olarak seçmek verilerinizi böler ve yeni kartların kaybolmuş gibi görünmesine yol açar. ' +
        `Bunun yerine asıl veri klasörünü kullanmanız önerilir:\n\n${realFromChosen}`,
      buttons: ['Asıl klasörü kullan (önerilen)', 'İptal'],
      defaultId: 0,
      cancelId: 1
    });
    if (r.response !== 0) return { cancelled: true };
    chosen = realFromChosen;
  }

  // Current (possibly local) data
  const curProjects = readJson(projectsPath(), DEFAULT_PROJECTS);
  const curSettings = readJson(settingsPath(), DEFAULT_SETTINGS);

  // Data already in chosen folder
  const tgtProjectsFile = path.join(chosen, 'projects.json');
  const tgtSettingsFile = path.join(chosen, 'settings.json');
  const tgtProjects = readJson(tgtProjectsFile, null);
  const tgtSettings = readJson(tgtSettingsFile, null);

  const tgtHas = tgtProjects && hasAnyCards(tgtProjects);
  const curHas = hasAnyCards(curProjects);

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
  const cfg = getSyncConfig();
  cfg.dataFolder = chosen;
  setSyncConfig(cfg);
  startWatcher();
  return { cancelled: false, folder: chosen };
});

ipcMain.handle('sync:clearDataFolder', async () => {
  const cfg = getSyncConfig();
  cfg.dataFolder = null;
  setSyncConfig(cfg);
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
    schema: 3,
    exportedAt: new Date().toISOString(),
    projects: readJson(projectsPath(), DEFAULT_PROJECTS),
    settings: readJson(settingsPath(), DEFAULT_SETTINGS)
  };
  const tmp = res.filePath + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(payload, null, 2), 'utf-8');
  fs.renameSync(tmp, res.filePath);
  return { cancelled: false, path: res.filePath };
});

function collectDriveLetters(projects) {
  const letters = new Set();
  forEachCard(projects, (p) => {
    if (p.folder && /^[A-Za-z]:[\\/]/.test(p.folder)) {
      letters.add(p.folder[0].toUpperCase());
    }
  });
  return letters;
}

function remapDriveLetters(projects, mapping) {
  forEachCard(projects, (p) => {
    if (p.folder && /^[A-Za-z]:[\\/]/.test(p.folder)) {
      const oldLetter = p.folder[0].toUpperCase();
      if (mapping[oldLetter]) {
        p.folder = mapping[oldLetter] + p.folder.substring(1);
      }
    }
  });
  return projects;
}

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
      'Bu işlem, uygulamadaki tüm projeleri ve ayarları seçtiğin dosyadakiyle değiştirir. ' +
      'Mevcut verinin bir yedeği otomatik olarak "backups" klasörüne alınacak.',
    buttons: ['Değiştir', 'İptal'],
    defaultId: 1,
    cancelId: 1
  });
  if (confirm.response !== 0) return { cancelled: true };

  const driveLetters = collectDriveLetters(payload.projects);
  if (driveLetters.size > 0) {
    const brokenLetters = [];
    for (const letter of driveLetters) {
      const testPath = letter + ':\\';
      if (!fs.existsSync(testPath)) {
        brokenLetters.push(letter);
      }
    }

    if (brokenLetters.length > 0) {
      const remapAsk = await dialog.showMessageBox(mainWindow, {
        type: 'question',
        title: 'Sürücü harfi uyumsuzluğu',
        message: `Yedekteki bazı klasör yolları bu bilgisayarda bulunamayan sürücü harfleri içeriyor: ${brokenLetters.join(', ')}`,
        detail: 'Sürücü harflerini bu bilgisayara uygun şekilde güncellemek ister misiniz? (Güncellemeseniz bile uygulama, klasör açılırken doğru sürücüyü otomatik bulmaya çalışır.)',
        buttons: ['Güncelle', 'Olduğu gibi bırak'],
        defaultId: 0,
        cancelId: 1
      });

      if (remapAsk.response === 0) {
        const mapping = {};
        for (const oldLetter of brokenLetters) {
          const pickRes = await dialog.showOpenDialog(mainWindow, {
            title: `"${oldLetter}:\\" sürücüsü yerine hangi klasörü kullanmak istiyorsunuz?`,
            properties: ['openDirectory'],
            buttonLabel: 'Bu sürücüyü seç'
          });
          if (!pickRes.canceled && pickRes.filePaths.length > 0) {
            const newLetter = pickRes.filePaths[0][0].toUpperCase();
            mapping[oldLetter] = newLetter;
          }
        }
        if (Object.keys(mapping).length > 0) {
          payload.projects = remapDriveLetters(payload.projects, mapping);
        }
      }
    }
  }

  backupProjects('pre-import');
  writeJson(projectsPath(), payload.projects);
  if (payload.settings) writeJson(settingsPath(), payload.settings);

  return { cancelled: false };
});
