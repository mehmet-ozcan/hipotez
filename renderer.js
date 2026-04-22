// ----------------- i18n -----------------
const I18N = {
  tr: {
    appSub: 'Akademik Proje Planlayıcı',
    colOngoing: 'Üzerinde Çalışılan',
    colFuture: 'Gelecek Projeler',
    colCompleted: 'Bitmiş Projeler',
    addProject: 'Yeni proje ekle',
    settingsTitle: 'Ayarlar',
    modalNew: 'Yeni Proje',
    modalEdit: 'Projeyi Düzenle',
    empty: 'Henüz proje yok',
    fName: 'Proje Adı',
    fNamePh: 'Örn. İşsizlik histerezisi',
    fCoauthors: 'Ortak Yazarlar',
    fCoauthorsPh: 'Virgülle ayırın',
    fType: 'Proje Tipi',
    fStage: 'Aşama',
    fSection: 'Bölüm',
    fFolder: 'Klasör',
    fFolderNone: 'Henüz seçilmedi',
    fFolderPick: 'Seç…',
    fColor: 'Kart Rengi',
    btnSave: 'Kaydet',
    btnCancel: 'Vazgeç',
    btnDelete: 'Sil',
    btnClose: 'Kapat',
    metaCoauthors: 'Ortak:',
    metaNone: '—',
    openFolder: 'Klasörü Aç',
    noFolder: 'Klasör yok',
    settingsFont: 'Yazı Boyutu',
    settingsBg: 'Arka Plan Rengi',
    settingsLang: 'Dil',
    chipNone: 'Yok',
    syncTitle: 'Senkronizasyon',
    syncHint:
      'Veri klasörünü Google Drive / OneDrive / Dropbox içindeki bir klasöre yönlendir; tüm bilgisayarlarında aynı klasörü seç, otomatik senkronize olsun.',
    syncPick: 'Veri Klasörünü Seç…',
    syncClear: 'Yerel Klasöre Dön',
    syncActive: 'Bulut Senkron',
    syncLocal: 'Yerel',
    syncPathLocal: 'Yerel klasör kullanılıyor (uygulama veri klasörü)',
    backupTitle: 'Yedekleme',
    backupHint:
      'Tüm projeleri ve ayarları tek bir JSON dosyasına aktar veya bir yedekten içe aktar.',
    backupExport: 'Dışa Aktar…',
    backupImport: 'İçe Aktar…',
    toastSyncSet: 'Veri klasörü ayarlandı',
    toastSyncCleared: 'Yerel klasöre dönüldü',
    toastExported: 'Yedek kaydedildi',
    toastImported: 'Yedek içe aktarıldı',
    toastExternalChange: 'Veriler başka bir cihazdan güncellendi',
    toastImportInvalid: 'Dosya geçerli bir Hipotez yedeği değil',
    stages: {
      planning: 'Planlama',
      drafting: 'Taslak Oluşturma',
      empirical: 'Ampirik Analiz',
      discussion: 'Tartışma-Sonuç',
      polishing: 'Gönderi Öncesi Cilalama',
      submitted: 'Gönderildi',
      revision: 'Hakem Düzeltmesi'
    },
    types: {
      article: 'Makale',
      symposium: 'Sempozyum-Bildiri',
      bookChapter: 'Kitap Bölümü',
      book: 'Kitap',
      research: 'Araştırma Projesi',
      undecided: 'Belirsiz'
    },
    footerSuffix: ' tarafından geliştirilmiştir. Tüm hakları saklıdır.',
    footerName: 'Doç. Dr. Mehmet Özcan'
  },
  en: {
    appSub: 'Academic Project Planner',
    colOngoing: 'In Progress',
    colFuture: 'Future Projects',
    colCompleted: 'Completed Projects',
    addProject: 'Add new project',
    settingsTitle: 'Settings',
    modalNew: 'New Project',
    modalEdit: 'Edit Project',
    empty: 'No projects yet',
    fName: 'Project Name',
    fNamePh: 'e.g. Unemployment hysteresis',
    fCoauthors: 'Co-authors',
    fCoauthorsPh: 'Comma separated',
    fType: 'Project Type',
    fStage: 'Stage',
    fSection: 'Section',
    fFolder: 'Folder',
    fFolderNone: 'Not selected',
    fFolderPick: 'Choose…',
    fColor: 'Card Color',
    btnSave: 'Save',
    btnCancel: 'Cancel',
    btnDelete: 'Delete',
    btnClose: 'Close',
    metaCoauthors: 'Co-authors:',
    metaNone: '—',
    openFolder: 'Open Folder',
    noFolder: 'No folder',
    settingsFont: 'Font Size',
    settingsBg: 'Background Color',
    settingsLang: 'Language',
    chipNone: 'None',
    syncTitle: 'Sync',
    syncHint:
      'Point the data folder to a folder inside Google Drive / OneDrive / Dropbox; pick the same folder on all your computers to sync automatically.',
    syncPick: 'Choose Data Folder…',
    syncClear: 'Use Local Folder',
    syncActive: 'Cloud Synced',
    syncLocal: 'Local',
    syncPathLocal: 'Using local folder (app data directory)',
    backupTitle: 'Backup',
    backupHint:
      'Export all projects and settings to a single JSON file, or import from a backup.',
    backupExport: 'Export…',
    backupImport: 'Import…',
    toastSyncSet: 'Data folder updated',
    toastSyncCleared: 'Switched back to local folder',
    toastExported: 'Backup saved',
    toastImported: 'Backup imported',
    toastExternalChange: 'Data updated from another device',
    toastImportInvalid: 'File is not a valid Hipotez backup',
    stages: {
      planning: 'Planning',
      drafting: 'Drafting',
      empirical: 'Empirical Analysis',
      discussion: 'Discussion-Conclusion',
      polishing: 'Pre-submission Polishing',
      submitted: 'Submitted',
      revision: 'Referee Revision'
    },
    types: {
      article: 'Article',
      symposium: 'Conference Paper',
      bookChapter: 'Book Chapter',
      book: 'Book',
      research: 'Research Project',
      undecided: 'Undecided'
    },
    footerSuffix: '. All rights reserved.',
    footerName: 'Developed by Assoc. Prof. Dr. Mehmet Özcan'
  }
};

const STAGE_KEYS = [
  'planning',
  'drafting',
  'empirical',
  'discussion',
  'polishing',
  'submitted',
  'revision'
];

const TYPE_KEYS = [
  'article',
  'symposium',
  'bookChapter',
  'book',
  'research',
  'undecided'
];

// Backward-compat: old saved Turkish values → keys
const STAGE_LEGACY = {
  'Planlama': 'planning',
  'Taslak Oluşturma': 'drafting',
  'Ampirik Analiz': 'empirical',
  'Tartışma-Sonuç': 'discussion',
  'Gönderi Öncesi Cilalama': 'polishing',
  'Gönderildi': 'submitted',
  'Hakem Düzeltmesi': 'revision'
};

// Palettes
const CARD_COLORS = [
  { key: 'slate', hex: '#2a3140' },
  { key: 'indigo', hex: '#2f3668' },
  { key: 'teal', hex: '#1e4747' },
  { key: 'amber', hex: '#574620' },
  { key: 'rose', hex: '#5a2a3a' },
  { key: 'forest', hex: '#264d2d' },
  { key: 'plum', hex: '#3e2a4a' },
  { key: 'sienna', hex: '#4a3520' }
];

const BG_PRESETS = [
  { key: 'charcoal', swatch: '#0f1115' },
  { key: 'midnight', swatch: '#0a1228' },
  { key: 'slate', swatch: '#14181f' },
  { key: 'coffee', swatch: '#18130f' },
  { key: 'forest', swatch: '#0d1512' },
  { key: 'plum', swatch: '#130f1a' }
];

const SECTIONS = ['ongoing', 'future', 'completed'];

// ----------------- State -----------------
const state = {
  data: { ongoing: [], future: [], completed: [] },
  settings: { fontScale: 1, bgPreset: 'charcoal', language: 'tr' },
  editing: null
};

const $ = (sel) => document.querySelector(sel);
const el = (tag, attrs = {}, ...children) => {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') e.className = v;
    else if (k === 'text') e.textContent = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v);
  }
  for (const c of children) if (c != null) e.append(c);
  return e;
};

const uid = () =>
  Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

const t = (key) => {
  const dict = I18N[state.settings.language] || I18N.tr;
  return key.split('.').reduce((o, k) => (o ? o[k] : undefined), dict) ?? key;
};

// ----------------- Persistence -----------------
async function persistProjects() {
  await window.api.saveProjects(state.data);
}

async function persistSettings() {
  await window.api.saveSettings(state.settings);
}

function findProject(id) {
  for (const sec of SECTIONS) {
    const list = state.data[sec];
    const idx = list.findIndex((p) => p.id === id);
    if (idx !== -1) return { section: sec, index: idx, project: list[idx] };
  }
  return null;
}

// ----------------- Render: cards -----------------
function render() {
  for (const sec of SECTIONS) {
    const body = document.getElementById(`col-${sec}`);
    body.innerHTML = '';
    const items = state.data[sec];
    if (!items.length) {
      body.append(el('div', { class: 'empty', text: t('empty') }));
      continue;
    }
    for (const p of items) body.append(renderCard(p));
  }
}

function folderIconSvg() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.8');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute(
    'd',
    'M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'
  );
  svg.append(path);
  return svg;
}

function renderCard(p) {
  const hasFolder = !!p.folder;
  const folderBtn = el(
    'button',
    {
      class: 'folder-link',
      title: p.folder || t('noFolder'),
      onclick: async (e) => {
        e.stopPropagation();
        if (!p.folder) return;
        await window.api.openFolder(p.folder);
      }
    },
    folderIconSvg(),
    document.createTextNode(hasFolder ? t('openFolder') : t('noFolder'))
  );
  if (!hasFolder) folderBtn.disabled = true;

  const card = el('div', {
    class: 'card',
    onclick: () => openModal(p.id)
  });

  if (p.color) {
    const hex = CARD_COLORS.find((c) => c.key === p.color)?.hex;
    if (hex) {
      card.style.backgroundColor = hex;
      card.dataset.colored = '1';
    }
  }

  card.append(el('div', { class: 'card-title', text: p.name || '(…)' }));

  if (p.type) {
    card.append(el('div', { class: 'card-type', text: t(`types.${p.type}`) }));
  }

  card.append(
    el(
      'div',
      { class: 'card-meta' },
      el('span', { class: 'label', text: t('metaCoauthors') + ' ' }),
      document.createTextNode(
        p.coauthors && p.coauthors.trim() ? p.coauthors : t('metaNone')
      )
    )
  );

  card.append(
    el(
      'div',
      { class: 'card-foot' },
      el('span', { class: 'stage-pill', text: t(`stages.${p.stage}`) }),
      folderBtn
    )
  );

  return card;
}

// ----------------- Project modal -----------------
function buildSelectOptions(selectEl, keys, i18nPath) {
  selectEl.innerHTML = '';
  for (const k of keys) {
    const opt = document.createElement('option');
    opt.value = k;
    opt.textContent = t(`${i18nPath}.${k}`);
    selectEl.append(opt);
  }
}

function buildColorChips(container, currentKey, onPick) {
  container.innerHTML = '';
  const none = el('div', {
    class: 'chip none' + (!currentKey ? ' selected' : ''),
    title: t('chipNone'),
    text: '∅',
    onclick: () => {
      onPick(null);
      buildColorChips(container, null, onPick);
    }
  });
  container.append(none);
  for (const c of CARD_COLORS) {
    const chip = el('div', {
      class: 'chip' + (currentKey === c.key ? ' selected' : ''),
      title: c.key,
      onclick: () => {
        onPick(c.key);
        buildColorChips(container, c.key, onPick);
      }
    });
    chip.style.backgroundColor = c.hex;
    container.append(chip);
  }
}

let pendingCardColor = null;

function openModal(id = null) {
  state.editing = id;
  const isEdit = !!id;
  $('#modal-title').textContent = t(isEdit ? 'modalEdit' : 'modalNew');
  $('#modal-delete').classList.toggle('hidden', !isEdit);

  buildSelectOptions($('#f-type'), TYPE_KEYS, 'types');
  buildSelectOptions($('#f-stage'), STAGE_KEYS, 'stages');

  if (isEdit) {
    const found = findProject(id);
    if (!found) return;
    const p = found.project;
    $('#f-name').value = p.name || '';
    $('#f-coauthors').value = p.coauthors || '';
    $('#f-type').value = p.type || 'undecided';
    $('#f-stage').value = p.stage || 'planning';
    $('#f-section').value = found.section;
    $('#f-folder').value = p.folder || '';
    pendingCardColor = p.color || null;
  } else {
    $('#f-name').value = '';
    $('#f-coauthors').value = '';
    $('#f-type').value = 'undecided';
    $('#f-stage').value = 'planning';
    $('#f-folder').value = '';
    pendingCardColor = null;
  }

  buildColorChips($('#f-color-chips'), pendingCardColor, (v) => {
    pendingCardColor = v;
  });

  $('#modal').classList.remove('hidden');
  setTimeout(() => $('#f-name').focus(), 40);
}

function openModalForSection(section) {
  openModal(null);
  $('#f-section').value = section;
}

function closeModal() {
  $('#modal').classList.add('hidden');
  state.editing = null;
}

async function saveFromModal() {
  const name = $('#f-name').value.trim();
  if (!name) {
    $('#f-name').focus();
    return;
  }
  const coauthors = $('#f-coauthors').value.trim();
  const type = $('#f-type').value;
  const stage = $('#f-stage').value;
  const section = $('#f-section').value;
  const folder = $('#f-folder').value.trim() || null;
  const color = pendingCardColor || null;

  if (state.editing) {
    const found = findProject(state.editing);
    if (!found) return;
    const p = found.project;
    Object.assign(p, { name, coauthors, type, stage, folder, color });
    if (found.section !== section) {
      state.data[found.section].splice(found.index, 1);
      state.data[section].push(p);
    }
  } else {
    state.data[section].push({
      id: uid(),
      name,
      coauthors,
      type,
      stage,
      folder,
      color,
      createdAt: new Date().toISOString()
    });
  }

  await persistProjects();
  render();
  closeModal();
}

async function deleteCurrent() {
  if (!state.editing) return;
  const found = findProject(state.editing);
  if (!found) return;
  state.data[found.section].splice(found.index, 1);
  await persistProjects();
  render();
  closeModal();
}

// ----------------- Settings modal -----------------
function buildBgChips() {
  const container = $('#s-bg-chips');
  container.innerHTML = '';
  for (const b of BG_PRESETS) {
    const chip = el('div', {
      class:
        'chip' + (state.settings.bgPreset === b.key ? ' selected' : ''),
      title: b.key,
      onclick: async () => {
        state.settings.bgPreset = b.key;
        applyBg();
        await persistSettings();
        buildBgChips();
      }
    });
    chip.style.backgroundColor = b.swatch;
    container.append(chip);
  }
}

function applyFont() {
  document.documentElement.style.fontSize =
    (15 * state.settings.fontScale).toFixed(2) + 'px';
  const pct = Math.round(state.settings.fontScale * 100);
  $('#s-font-val').textContent = pct + '%';
}

function applyBg() {
  document.body.setAttribute('data-bg', state.settings.bgPreset);
}

function applyLocale() {
  document.documentElement.setAttribute('lang', state.settings.language);
  document.querySelectorAll('[data-i18n]').forEach((n) => {
    n.textContent = t(n.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-title]').forEach((n) => {
    n.setAttribute('title', t(n.getAttribute('data-i18n-title')));
  });
  document.querySelectorAll('[data-i18n-ph]').forEach((n) => {
    n.setAttribute('placeholder', t(n.getAttribute('data-i18n-ph')));
  });
  renderFooter();
}

function renderFooter() {
  const foot = $('#foot-text');
  foot.innerHTML = '';
  const lang = state.settings.language;
  if (lang === 'en') {
    // "Developed by Assoc. Prof. Dr. Mehmet Özcan. All rights reserved."
    const link = el('a', {
      href: '#',
      text: 'Assoc. Prof. Dr. Mehmet Özcan',
      onclick: (e) => {
        e.preventDefault();
        window.api.openExternal('https://www.ozcanmehmet.com');
      }
    });
    foot.append(
      document.createTextNode('Developed by '),
      link,
      document.createTextNode('. All rights reserved.')
    );
  } else {
    const link = el('a', {
      href: '#',
      text: 'Doç. Dr. Mehmet Özcan',
      onclick: (e) => {
        e.preventDefault();
        window.api.openExternal('https://www.ozcanmehmet.com');
      }
    });
    foot.append(
      link,
      document.createTextNode(' tarafından geliştirilmiştir. Tüm hakları saklıdır.')
    );
  }
}

async function refreshSyncStatus() {
  const status = await window.api.syncStatus();
  const badge = $('#s-sync-badge');
  const pathEl = $('#s-sync-path');
  if (status.active) {
    badge.textContent = t('syncActive');
    badge.classList.add('active');
    pathEl.textContent = status.dataFolder;
  } else {
    badge.textContent = t('syncLocal');
    badge.classList.remove('active');
    pathEl.textContent = t('syncPathLocal');
  }
}

function showToast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => el.classList.remove('show'), 2400);
}

async function reloadFromDisk() {
  state.data = await window.api.loadProjects();
  const loaded = await window.api.loadSettings();
  state.settings = Object.assign(
    { fontScale: 1, bgPreset: 'charcoal', language: 'tr' },
    loaded
  );
  migrateProjects();
  applyFont();
  applyBg();
  applyLocale();
  $('#s-font').value = state.settings.fontScale;
  $('#s-lang').value = state.settings.language;
  buildBgChips();
  render();
}

function openSettings() {
  $('#s-font').value = state.settings.fontScale;
  applyFont();
  $('#s-lang').value = state.settings.language;
  buildBgChips();
  refreshSyncStatus();
  $('#settings-modal').classList.remove('hidden');
}

function closeSettings() {
  $('#settings-modal').classList.add('hidden');
}

// ----------------- Events -----------------
function wireEvents() {
  document.querySelectorAll('.add-btn').forEach((btn) => {
    btn.addEventListener('click', () => openModalForSection(btn.dataset.add));
  });

  $('#modal-close').addEventListener('click', closeModal);
  $('#modal-cancel').addEventListener('click', closeModal);
  $('#modal-save').addEventListener('click', saveFromModal);
  $('#modal-delete').addEventListener('click', deleteCurrent);

  $('#modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') closeModal();
  });

  $('#f-folder-pick').addEventListener('click', async () => {
    const p = await window.api.pickFolder();
    if (p) $('#f-folder').value = p;
  });

  $('#f-folder-clear').addEventListener('click', () => {
    $('#f-folder').value = '';
  });

  // Settings
  $('#open-settings').addEventListener('click', openSettings);
  $('#settings-close').addEventListener('click', closeSettings);
  $('#settings-done').addEventListener('click', closeSettings);
  $('#settings-modal').addEventListener('click', (e) => {
    if (e.target.id === 'settings-modal') closeSettings();
  });

  $('#s-font').addEventListener('input', async (e) => {
    state.settings.fontScale = parseFloat(e.target.value);
    applyFont();
  });
  $('#s-font').addEventListener('change', persistSettings);

  $('#s-lang').addEventListener('change', async (e) => {
    state.settings.language = e.target.value;
    applyLocale();
    render();
    refreshSyncStatus();
    await persistSettings();
  });

  $('#s-pick-folder').addEventListener('click', async () => {
    const r = await window.api.pickDataFolder();
    if (r && !r.cancelled) {
      await reloadFromDisk();
      await refreshSyncStatus();
      showToast(t('toastSyncSet'));
    }
  });

  $('#s-clear-folder').addEventListener('click', async () => {
    await window.api.clearDataFolder();
    await reloadFromDisk();
    await refreshSyncStatus();
    showToast(t('toastSyncCleared'));
  });

  $('#s-export').addEventListener('click', async () => {
    const r = await window.api.exportData();
    if (r && !r.cancelled) showToast(t('toastExported'));
  });

  $('#s-import').addEventListener('click', async () => {
    const r = await window.api.importData();
    if (!r || r.cancelled) return;
    if (r.error) {
      showToast(t('toastImportInvalid'));
      return;
    }
    await reloadFromDisk();
    showToast(t('toastImported'));
  });

  // External change (another device wrote to the data folder)
  window.api.onExternalChange(async () => {
    // Skip reload while a modal is open to avoid disrupting editing
    const projectModalOpen = !$('#modal').classList.contains('hidden');
    if (projectModalOpen) return;
    await reloadFromDisk();
    await refreshSyncStatus();
    showToast(t('toastExternalChange'));
  });

  document.addEventListener('keydown', (e) => {
    if (!$('#modal').classList.contains('hidden')) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'Enter' && e.target.tagName === 'INPUT') saveFromModal();
    } else if (!$('#settings-modal').classList.contains('hidden')) {
      if (e.key === 'Escape') closeSettings();
    }
  });
}

// ----------------- Migration -----------------
function migrateProjects() {
  for (const sec of SECTIONS) {
    if (!Array.isArray(state.data[sec])) state.data[sec] = [];
    for (const p of state.data[sec]) {
      if (p.stage && STAGE_LEGACY[p.stage]) p.stage = STAGE_LEGACY[p.stage];
      if (!STAGE_KEYS.includes(p.stage)) p.stage = 'planning';
      if (!p.type) p.type = 'undecided';
      if (!TYPE_KEYS.includes(p.type)) p.type = 'undecided';
    }
  }
}

// ----------------- Init -----------------
async function init() {
  state.data = await window.api.loadProjects();
  state.settings = Object.assign(
    { fontScale: 1, bgPreset: 'charcoal', language: 'tr' },
    await window.api.loadSettings()
  );
  migrateProjects();
  applyFont();
  applyBg();
  applyLocale();
  wireEvents();
  render();
}

init();
