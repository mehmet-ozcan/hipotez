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
    searchPh: 'Ara…',
    filterAll: 'Tümü',
    filterAllTypes: 'Tüm Tipler',
    filterAllStages: 'Tüm Aşamalar',
    filterClear: 'Filtreleri Temizle',
    emptyFiltered: 'Filtreye uyan proje yok',
    fNotes: 'Notlar',
    fNotesPh: 'Serbest metin…',
    btnLock: 'Gizle',
    btnUnlock: 'Kilidi Aç',
    pinTitleSet: 'Şifre Belirle',
    pinDescSet: 'İlk gizli dosyanız için 4 haneli bir şifre belirleyin.',
    pinTitleEnter: 'Şifre Girin',
    pinDescEnter: 'Gizli kartları açmak için şifrenizi girin.',
    pinErrorLength: 'Şifre 4 haneli olmalıdır.',
    pinErrorWrong: 'Hatalı şifre!',
    fTargetDate: 'Hedef Tarih',
    cardTargetOverdue: 'Gecikmiş',
    cardStartLabel: 'Başl.',
    cardTargetLabel: 'Hedef',
    popStartDate: 'Başlangıç Tarihi',
    popTargetDate: 'Hedef Tarih',
    popNotes: 'Notlar',
    btnClear: 'Temizle',
    btnDone: 'Tamam',
    metaCreated: 'Oluşturuldu',
    metaUpdated: 'Son güncelleme',
    metaStart: 'Başlangıç',
    statsOngoing: 'Devam',
    statsFuture: 'Gelecek',
    statsCompleted: 'Bitmiş',
    statsTotal: 'Toplam',
    stages: {
      idea: 'Fikir',
      planning: 'Planlama',
      literature: 'Literatür Taraması',
      empirical: 'Ampirik Analiz',
      discussion: 'Tartışma-Sonuç',
      polishing: 'Gönderi Öncesi Cilalama',
      submitted: 'Gönderildi',
      revision: 'Hakem Düzeltmesi',
      completed: 'Tamamlandı'
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
    searchPh: 'Search…',
    filterAll: 'All',
    filterAllTypes: 'All Types',
    filterAllStages: 'All Stages',
    filterClear: 'Clear Filters',
    emptyFiltered: 'No projects match the filter',
    fNotes: 'Notes',
    fNotesPh: 'Free text…',
    btnLock: 'Hide',
    btnUnlock: 'Unlock',
    pinTitleSet: 'Set PIN',
    pinDescSet: 'Set a 4-digit PIN for your first hidden project.',
    pinTitleEnter: 'Enter PIN',
    pinDescEnter: 'Enter your PIN to unlock hidden cards.',
    pinErrorLength: 'PIN must be 4 digits.',
    pinErrorWrong: 'Incorrect PIN!',
    fTargetDate: 'Target Date',
    cardTargetOverdue: 'Overdue',
    cardStartLabel: 'Start',
    cardTargetLabel: 'Target',
    popStartDate: 'Start Date',
    popTargetDate: 'Target Date',
    popNotes: 'Notes',
    btnClear: 'Clear',
    btnDone: 'Done',
    metaCreated: 'Created',
    metaUpdated: 'Last updated',
    metaStart: 'Start',
    statsOngoing: 'Ongoing',
    statsFuture: 'Future',
    statsCompleted: 'Done',
    statsTotal: 'Total',
    stages: {
      idea: 'Idea',
      planning: 'Planning',
      literature: 'Literature Review',
      empirical: 'Empirical Analysis',
      discussion: 'Discussion-Conclusion',
      polishing: 'Pre-submission Polishing',
      submitted: 'Submitted',
      revision: 'Reviewer Revision',
      completed: 'Completed'
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
  'idea',
  'planning',
  'literature',
  'empirical',
  'discussion',
  'polishing',
  'submitted',
  'revision',
  'completed'
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
  { key: 'sienna', hex: '#4a3520' },
  { key: 'ocean', hex: '#1a3b5c' },
  { key: 'emerald', hex: '#174029' },
  { key: 'crimson', hex: '#5c1a1f' },
  { key: 'violet', hex: '#381c5e' },
  { key: 'bronze', hex: '#5c3a1a' },
  { key: 'sapphire', hex: '#162b59' },
  { key: 'moss', hex: '#2b3b1c' },
  { key: 'wine', hex: '#4f162c' },
  { key: 'midnight', hex: '#121b2b' },
  { key: 'olive', hex: '#3d4016' },
  { key: 'rust', hex: '#592c16' },
  { key: 'cobalt', hex: '#163659' },
  { key: 'eggplant', hex: '#2d163d' },
  { key: 'pine', hex: '#163d33' },
  { key: 'ruby', hex: '#4a151b' },
  { key: 'charcoal', hex: '#22252a' }
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
  editing: null,
  filters: { q: '', type: 'all', stage: 'all' },
  unlockTarget: null
};

// Drag-and-drop state
let dragState = null; // { id, fromSection }
let suppressClickUntil = 0;

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
function isFilterActive() {
  const f = state.filters;
  return (f.q && f.q.trim()) || f.type !== 'all' || f.stage !== 'all';
}

function matchesFilter(p) {
  const f = state.filters;
  if (f.type !== 'all' && p.type !== f.type) return false;
  if (f.stage !== 'all' && p.stage !== f.stage) return false;
  if (f.q && f.q.trim()) {
    const q = f.q.trim().toLowerCase();
    const hay = [p.name, p.coauthors, p.notes]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    if (!hay.includes(q)) return false;
  }
  return true;
}

function render() {
  for (const sec of SECTIONS) {
    const body = document.getElementById(`col-${sec}`);
    body.innerHTML = '';
    const items = state.data[sec].filter(matchesFilter);
    if (!items.length) {
      const msg = isFilterActive() ? t('emptyFiltered') : t('empty');
      body.append(el('div', { class: 'empty', text: msg }));
      continue;
    }
    for (const p of items) body.append(renderCard(p));
  }
  applyColOrder();
  renderStats();
}

function applyColOrder() {
  const board = document.querySelector('.board');
  const cols = state.settings.colOrder || SECTIONS;
  cols.forEach(colId => {
    const section = document.querySelector(`.column[data-col="${colId}"]`);
    if (section) board.appendChild(section);
  });
}

function renderStats() {
  for (const sec of SECTIONS) {
    const all = state.data[sec].length;
    const shown = state.data[sec].filter(matchesFilter).length;
    const cell = document.getElementById(`stat-${sec}`);
    if (cell) cell.textContent = isFilterActive() && shown !== all
      ? `${shown}/${all}`
      : String(all);
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
    onclick: () => {
      if (Date.now() < suppressClickUntil) return;
      if (p.hidden) return; // Gizliyse doğrudan karta tıklanmaz
      openModal(p.id);
    }
  });
  card.draggable = true;
  if (p.hidden) {
    card.classList.add('hidden-card');
  }
  card.dataset.pid = p.id;

  const lockBtn = el('button', {
    class: 'icon-btn card-lock-btn',
    title: p.hidden ? t('btnUnlock') : t('btnLock'),
    onclick: (e) => {
      e.stopPropagation();
      if (p.hidden) {
        state.unlockTarget = p.id;
        openPinModal();
      } else {
        p.hidden = true;
        p.updatedAt = new Date().toISOString();
        persistProjects().then(() => render());
      }
    }
  });
  lockBtn.innerHTML = p.hidden ? lockClosedSvg() : lockOpenSvg();
  card.append(lockBtn);

  card.addEventListener('dragstart', (e) => onCardDragStart(e, p.id, card));
  card.addEventListener('dragend', () => onCardDragEnd(card));

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

  const extras = renderCardExtras(p);
  if (extras) card.append(extras);

  const stageSelect = el('select', {
    class: 'stage-pill stage-select',
    onclick: (e) => e.stopPropagation()
  });
  for (const k of STAGE_KEYS) {
    const opt = el('option', { value: k, text: t(`stages.${k}`) });
    if (k === p.stage) opt.selected = true;
    stageSelect.append(opt);
  }
  stageSelect.addEventListener('change', async (e) => {
    p.stage = e.target.value;
    p.updatedAt = new Date().toISOString();
    await persistProjects();
    render();
  });

  card.append(
    el(
      'div',
      { class: 'card-foot' },
      stageSelect,
      folderBtn
    )
  );

  return card;
}

function renderCardExtras(p) {
  const row = el('div', { class: 'card-extras' });

  // Start date pill — always shown (auto-populated on creation, editable)
  const startIso =
    p.startDate ||
    (p.createdAt
      ? p.createdAt.slice(0, 10)
      : new Date().toISOString().slice(0, 10));
  row.append(makeDatePill('start', startIso, p));

  // Target date pill — only if set (status-colored)
  if (p.targetDate) row.append(makeDatePill('target', p.targetDate, p));

  // Notes pill — only if project has notes
  if (p.notes && p.notes.trim()) row.append(makeNotesPill(p));

  return row;
}

function makeDatePill(kind, iso, project) {
  const labelKey = kind === 'start' ? 'cardStartLabel' : 'cardTargetLabel';
  const iconFn = kind === 'start' ? calendarIconSvg : flagIconSvg;
  let cls = 'extra-pill pill-btn';
  let titleText = `${t(labelKey)}: ${formatDate(iso)}`;
  if (kind === 'target') {
    const status = targetDateStatus(iso);
    if (status === 'overdue') {
      cls += ' target-overdue';
      titleText = `${t('cardTargetOverdue')} · ${formatDate(iso)}`;
    } else if (status === 'soon') {
      cls += ' target-soon';
    }
  }
  return el(
    'button',
    {
      class: cls,
      type: 'button',
      title: titleText,
      onclick: (e) => {
        e.stopPropagation();
        openDatePopover(e.currentTarget, kind, project);
      }
    },
    iconFn(),
    document.createTextNode(formatDate(iso))
  );
}

function makeNotesPill(project) {
  const preview = (project.notes || '').trim();
  const short = preview.length > 160 ? preview.slice(0, 160) + '…' : preview;
  return el(
    'button',
    {
      class: 'extra-pill pill-btn',
      type: 'button',
      title: short,
      onclick: (e) => {
        e.stopPropagation();
        openNotesPopover(e.currentTarget, project);
      }
    },
    notesIconSvg()
  );
}

function targetDateStatus(iso) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(iso + 'T00:00:00');
  const diffDays = Math.round((target - today) / 86400000);
  if (diffDays < 0) return 'overdue';
  if (diffDays <= 7) return 'soon';
  return 'future';
}

function formatDate(iso) {
  if (!iso) return '';
  const locale = state.settings.language === 'en' ? 'en-US' : 'tr-TR';
  try {
    return new Date(iso + 'T00:00:00').toLocaleDateString(locale, {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  } catch {
    return iso;
  }
}

function formatDateTime(iso) {
  if (!iso) return '';
  const locale = state.settings.language === 'en' ? 'en-US' : 'tr-TR';
  try {
    return new Date(iso).toLocaleString(locale, {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch {
    return iso;
  }
}

function calendarIconSvg() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  const p1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  p1.setAttribute('x', '3'); p1.setAttribute('y', '4');
  p1.setAttribute('width', '18'); p1.setAttribute('height', '18');
  p1.setAttribute('rx', '2');
  const p2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  p2.setAttribute('d', 'M16 2v4M8 2v4M3 10h18');
  svg.append(p1, p2);
  return svg;
}

function flagIconSvg() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  p.setAttribute('d', 'M4 22V4h13l-2 4 2 4H4');
  svg.append(p);
  return svg;
}

function notesIconSvg() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M4 6h16M4 12h16M4 18h10');
  svg.append(path);
  return svg;
}

function lockClosedSvg() {
  return `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>`;
}

function lockOpenSvg() {
  return `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
  </svg>`;
}

// ----------------- Popover (date/notes) -----------------
function handlePopoverOutside(e) {
  const pop = document.querySelector('.popover');
  if (!pop) return;
  if (!pop.contains(e.target)) closePopover();
}

function handlePopoverKey(e) {
  if (e.key === 'Escape') closePopover();
}

async function closePopover() {
  const pop = document.querySelector('.popover');
  if (!pop) return;
  if (typeof pop._onBeforeClose === 'function') {
    try {
      await pop._onBeforeClose();
    } catch (_) {}
  }
  pop.remove();
  document.removeEventListener('mousedown', handlePopoverOutside, true);
  document.removeEventListener('keydown', handlePopoverKey);
}

function positionPopover(pop, anchor) {
  document.body.append(pop);
  const ar = anchor.getBoundingClientRect();
  const pr = pop.getBoundingClientRect();
  let top = ar.bottom + 6;
  let left = ar.left;
  if (left + pr.width > window.innerWidth - 8) {
    left = Math.max(8, window.innerWidth - pr.width - 8);
  }
  if (top + pr.height > window.innerHeight - 8) {
    const above = ar.top - pr.height - 6;
    if (above >= 8) top = above;
    else top = Math.max(8, window.innerHeight - pr.height - 8);
  }
  pop.style.top = top + 'px';
  pop.style.left = left + 'px';
}

function openDatePopover(anchor, kind, project) {
  closePopover();
  const field = kind === 'start' ? 'startDate' : 'targetDate';
  const labelKey = kind === 'start' ? 'popStartDate' : 'popTargetDate';
  const current = project[field] || '';

  const input = el('input', { type: 'date' });
  input.value = current;

  const commit = async (newValue) => {
    const normalized = newValue || null;
    if (normalized === (project[field] || null)) return;
    const found = findProject(project.id);
    if (!found) return;
    found.project[field] = normalized;
    found.project.updatedAt = new Date().toISOString();
    await persistProjects();
    render();
  };

  input.addEventListener('change', async () => {
    await commit(input.value);
    closePopover();
  });

  const actions = el('div', { class: 'pop-actions' });
  if (kind === 'target' && current) {
    actions.append(
      el('button', {
        class: 'ghost',
        type: 'button',
        text: t('btnClear'),
        onclick: async () => {
          await commit('');
          closePopover();
        }
      })
    );
  }
  actions.append(
    el('button', {
      class: 'primary',
      type: 'button',
      text: t('btnDone'),
      onclick: () => closePopover()
    })
  );

  const pop = el(
    'div',
    { class: 'popover date-popover' },
    el('div', { class: 'pop-title', text: t(labelKey) }),
    input,
    actions
  );

  positionPopover(pop, anchor);

  setTimeout(() => {
    input.focus();
    if (typeof input.showPicker === 'function') {
      try { input.showPicker(); } catch (_) {}
    }
  }, 30);

  document.addEventListener('mousedown', handlePopoverOutside, true);
  document.addEventListener('keydown', handlePopoverKey);
}

function openNotesPopover(anchor, project) {
  closePopover();

  const textarea = el('textarea', {
    spellcheck: 'true',
    placeholder: t('fNotesPh')
  });
  textarea.value = project.notes || '';

  const saveIfChanged = async () => {
    let changed = false;
    if (textarea.value !== (project.notes || '')) {
      const found = findProject(project.id);
      if (found) {
        found.project.notes = textarea.value;
        found.project.updatedAt = new Date().toISOString();
        changed = true;
      }
    }
    
    const popNode = document.querySelector('.notes-popover');
    if (popNode) {
      const w = popNode.offsetWidth + 'px';
      const h = popNode.offsetHeight + 'px';
      if (w !== state.settings.notesWidth || h !== state.settings.notesHeight) {
        state.settings.notesWidth = w;
        state.settings.notesHeight = h;
        changed = true;
      }
    }
    
    if (changed) {
      await persistSettings();
      await persistProjects();
      render();
    }
  };

  const pop = el(
    'div',
    { class: 'popover notes-popover' },
    el(
      'div',
      { class: 'pop-head' },
      el('span', { class: 'pop-title-inline', text: t('popNotes') }),
      el('button', {
        class: 'icon-btn',
        type: 'button',
        title: t('btnClose'),
        text: '×',
        onclick: () => closePopover()
      })
    ),
    textarea
  );
  pop._onBeforeClose = saveIfChanged;

  if (state.settings.notesWidth) pop.style.width = state.settings.notesWidth;
  if (state.settings.notesHeight) pop.style.height = state.settings.notesHeight;

  positionPopover(pop, anchor);

  const head = pop.querySelector('.pop-head');
  let isDragging = false;
  let startX, startY, startLeft, startTop;

  head.addEventListener('mousedown', (e) => {
    if (e.target.tagName === 'BUTTON') return;
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    const rect = pop.getBoundingClientRect();
    startLeft = rect.left;
    startTop = rect.top;
    e.preventDefault();
    
    const onMove = (ev) => {
      pop.style.left = (startLeft + ev.clientX - startX) + 'px';
      pop.style.top = (startTop + ev.clientY - startY) + 'px';
      pop.style.bottom = 'auto';
      pop.style.right = 'auto';
    };
    
    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  });

  setTimeout(() => {
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  }, 30);

  document.addEventListener('mousedown', handlePopoverOutside, true);
  document.addEventListener('keydown', handlePopoverKey);
}

// ----------------- Drag & drop -----------------
function sectionOfCard(cardEl) {
  const body = cardEl.closest('.col-body');
  if (!body) return null;
  return body.id.replace('col-', '');
}

function onCardDragStart(e, id, cardEl) {
  const fromSection = sectionOfCard(cardEl);
  if (!fromSection) return;
  dragState = { id, fromSection };
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', id);
  // Delay class add so the drag image is captured pre-opacity
  requestAnimationFrame(() => cardEl.classList.add('dragging'));
}

function onCardDragEnd(cardEl) {
  cardEl.classList.remove('dragging');
  document
    .querySelectorAll('.col-body.drag-over')
    .forEach((n) => n.classList.remove('drag-over'));
  hideDropIndicator();
  dragState = null;
  // Suppress the click that may follow a cancelled drag
  suppressClickUntil = Date.now() + 150;
}

function computeDropIndex(bodyEl, clientY) {
  // Returns insertion index into the list that WILL remain after the dragged
  // card is spliced out (so no off-by-one adjustment is needed downstream).
  const cards = [...bodyEl.querySelectorAll('.card:not(.dragging)')];
  for (let i = 0; i < cards.length; i++) {
    const rect = cards[i].getBoundingClientRect();
    if (clientY < rect.top + rect.height / 2) return i;
  }
  return cards.length;
}

function showDropIndicator(bodyEl, toIndex) {
  hideDropIndicator();
  const ind = document.createElement('div');
  ind.className = 'drop-indicator';
  ind.id = 'drop-indicator';
  const cards = [...bodyEl.querySelectorAll('.card:not(.dragging)')];
  if (toIndex >= cards.length) bodyEl.appendChild(ind);
  else bodyEl.insertBefore(ind, cards[toIndex]);
}

function hideDropIndicator() {
  document.getElementById('drop-indicator')?.remove();
}

async function handleDrop(bodyEl, clientY) {
  if (!dragState) return;
  const toSection = bodyEl.id.replace('col-', '');
  const toIndex = computeDropIndex(bodyEl, clientY);

  const list = state.data[dragState.fromSection];
  const fromIndex = list.findIndex((p) => p.id === dragState.id);
  if (fromIndex === -1) return;

  // computeDropIndex already excludes the dragged card from its search set,
  // so toIndex is the correct position in the post-splice list.
  const [proj] = list.splice(fromIndex, 1);
  state.data[toSection].splice(toIndex, 0, proj);
  await persistProjects();
  render();
}

function wireColumnDnD() {
  let draggedCol = null;

  document.querySelectorAll('.column').forEach(col => {
    const head = col.querySelector('.col-head');
    
    head.addEventListener('dragstart', (e) => {
      // Don't drag if we're interacting with a child (like button or editable title focus)
      if (e.target !== head && e.target.tagName !== 'H2') {
        e.preventDefault();
        return;
      }
      draggedCol = col.dataset.col;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setDragImage(col, 20, 20);
      col.classList.add('dragging-col');
    });

    head.addEventListener('dragend', () => {
      draggedCol = null;
      col.classList.remove('dragging-col');
      document.querySelectorAll('.column').forEach(c => c.classList.remove('drag-over-col'));
    });

    col.addEventListener('dragover', (e) => {
      if (draggedCol && draggedCol !== col.dataset.col) {
        e.preventDefault();
        col.classList.add('drag-over-col');
      }
    });

    col.addEventListener('dragleave', (e) => {
      if (!col.contains(e.relatedTarget)) {
        col.classList.remove('drag-over-col');
      }
    });

    col.addEventListener('drop', async (e) => {
      if (draggedCol && draggedCol !== col.dataset.col) {
        e.preventDefault();
        col.classList.remove('drag-over-col');
        
        let cols = Array.from(state.settings.colOrder || SECTIONS);
        const fromIdx = cols.indexOf(draggedCol);
        const toIdx = cols.indexOf(col.dataset.col);
        
        cols.splice(fromIdx, 1);
        cols.splice(toIdx, 0, draggedCol);
        
        state.settings.colOrder = cols;
        await persistSettings();
        applyColOrder();
      }
    });
  });

  for (const sec of SECTIONS) {
    const body = document.getElementById(`col-${sec}`);
    body.addEventListener('dragover', (e) => {
      if (!dragState) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      body.classList.add('drag-over');
      const idx = computeDropIndex(body, e.clientY);
      showDropIndicator(body, idx);
    });
    body.addEventListener('dragleave', (e) => {
      if (!body.contains(e.relatedTarget)) {
        body.classList.remove('drag-over');
        hideDropIndicator();
      }
    });
    body.addEventListener('drop', async (e) => {
      if (!dragState) return;
      e.preventDefault();
      body.classList.remove('drag-over');
      hideDropIndicator();
      await handleDrop(body, e.clientY);
    });
  }
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
    $('#f-target').value = p.targetDate || '';
    $('#f-notes').value = p.notes || '';
    pendingCardColor = p.color || null;
    renderMetaInfo(p);
  } else {
    $('#f-name').value = '';
    $('#f-coauthors').value = '';
    $('#f-type').value = 'undecided';
    $('#f-stage').value = 'planning';
    $('#f-folder').value = '';
    $('#f-target').value = '';
    $('#f-notes').value = '';
    pendingCardColor = null;
    $('#f-meta').innerHTML = '';
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
  const targetDate = $('#f-target').value || null;
  const notes = $('#f-notes').value;
  const now = new Date().toISOString();

  if (state.editing) {
    const found = findProject(state.editing);
    if (!found) return;
    const p = found.project;
    Object.assign(p, {
      name,
      coauthors,
      type,
      stage,
      folder,
      color,
      targetDate,
      notes,
      updatedAt: now
    });
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
      targetDate,
      notes,
      hidden: false,
      startDate: now.slice(0, 10),
      createdAt: now,
      updatedAt: now
    });
  }

  await persistProjects();
  render();
  closeModal();
}

function renderMetaInfo(p) {
  const parts = [];
  if (p.startDate) parts.push(`${t('metaStart')}: ${formatDate(p.startDate)}`);
  if (p.createdAt) parts.push(`${t('metaCreated')}: ${formatDateTime(p.createdAt)}`);
  if (p.updatedAt && p.updatedAt !== p.createdAt) {
    parts.push(`${t('metaUpdated')}: ${formatDateTime(p.updatedAt)}`);
  }
  $('#f-meta').textContent = parts.join(' · ');
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

function openPinModal() {
  $('#pin-input').value = '';
  $('#pin-error').textContent = '';
  
  if (!state.settings.pin) {
    $('#pin-title').textContent = t('pinTitleSet');
    $('#pin-desc').textContent = t('pinDescSet');
  } else {
    $('#pin-title').textContent = t('pinTitleEnter');
    $('#pin-desc').textContent = t('pinDescEnter');
  }
  
  $('#pin-modal').classList.remove('hidden');
  setTimeout(() => $('#pin-input').focus(), 40);
}

function closePinModal() {
  $('#pin-modal').classList.add('hidden');
}

async function submitPin() {
  const pin = $('#pin-input').value;
  if (pin.length !== 4) {
    $('#pin-error').textContent = t('pinErrorLength');
    return;
  }
  
  if (!state.settings.pin) {
    state.settings.pin = pin;
    await persistSettings();
    if (state.unlockTarget) {
      const found = findProject(state.unlockTarget);
      if (found) {
        found.project.hidden = false;
        found.project.updatedAt = new Date().toISOString();
        await persistProjects();
      }
      state.unlockTarget = null;
    }
    closePinModal();
    render();
  } else {
    if (state.settings.pin === pin) {
      if (state.unlockTarget) {
        const found = findProject(state.unlockTarget);
        if (found) {
          found.project.hidden = false;
          found.project.updatedAt = new Date().toISOString();
          await persistProjects();
        }
        state.unlockTarget = null;
      }
      closePinModal();
      render();
    } else {
      $('#pin-error').textContent = t('pinErrorWrong');
      $('#pin-input').value = '';
      $('#pin-input').focus();
    }
  }
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
  
  // Custom column titles
  document.querySelectorAll('.col-title').forEach((n) => {
    const colId = n.dataset.col;
    if (state.settings.colNames && state.settings.colNames[colId]) {
      n.textContent = state.settings.colNames[colId];
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach((n) => {
    n.setAttribute('title', t(n.getAttribute('data-i18n-title')));
  });
  document.querySelectorAll('[data-i18n-ph]').forEach((n) => {
    n.setAttribute('placeholder', t(n.getAttribute('data-i18n-ph')));
  });
  buildFilterSelects();
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
function buildFilterSelects() {
  const typeSel = $('#filter-type');
  typeSel.innerHTML = '';
  const allType = document.createElement('option');
  allType.value = 'all';
  allType.textContent = t('filterAllTypes');
  typeSel.append(allType);
  for (const k of TYPE_KEYS) {
    const opt = document.createElement('option');
    opt.value = k;
    opt.textContent = t(`types.${k}`);
    typeSel.append(opt);
  }
  typeSel.value = state.filters.type;

  const stageSel = $('#filter-stage');
  stageSel.innerHTML = '';
  const allStage = document.createElement('option');
  allStage.value = 'all';
  allStage.textContent = t('filterAllStages');
  stageSel.append(allStage);
  for (const k of STAGE_KEYS) {
    const opt = document.createElement('option');
    opt.value = k;
    opt.textContent = t(`stages.${k}`);
    stageSel.append(opt);
  }
  stageSel.value = state.filters.stage;
}

function updateFilterBarState() {
  document
    .querySelector('.filterbar')
    .classList.toggle('filtering', isFilterActive());
}

function wireEvents() {
  // Title bar
  const btnMin = $('#btn-minimize');
  if (btnMin) btnMin.addEventListener('click', () => window.api.windowMinimize());
  const btnMax = $('#btn-maximize');
  if (btnMax) btnMax.addEventListener('click', () => window.api.windowMaximize());
  const btnClose = $('#btn-close');
  if (btnClose) btnClose.addEventListener('click', () => window.api.windowClose());

  document.querySelectorAll('.add-btn').forEach((btn) => {
    btn.addEventListener('click', () => openModalForSection(btn.dataset.add));
  });

  $('#filter-q').addEventListener('input', (e) => {
    state.filters.q = e.target.value;
    updateFilterBarState();
    render();
  });
  $('#filter-type').addEventListener('change', (e) => {
    state.filters.type = e.target.value;
    updateFilterBarState();
    render();
  });
  $('#filter-stage').addEventListener('change', (e) => {
    state.filters.stage = e.target.value;
    updateFilterBarState();
    render();
  });
  $('#filter-clear').addEventListener('click', () => {
    state.filters = { q: '', type: 'all', stage: 'all' };
    $('#filter-q').value = '';
    $('#filter-type').value = 'all';
    $('#filter-stage').value = 'all';
    updateFilterBarState();
    render();
  });

  $('#f-target-clear').addEventListener('click', () => {
    $('#f-target').value = '';
  });

  document.querySelectorAll('.col-title').forEach(el => {
    el.addEventListener('focus', () => {
      el.closest('.col-head').draggable = false;
    });
    el.addEventListener('blur', async () => {
      el.closest('.col-head').draggable = true;
      const colId = el.dataset.col;
      if (!state.settings.colNames) state.settings.colNames = {};
      const newName = el.textContent.trim();
      if (newName) {
        state.settings.colNames[colId] = newName;
      } else {
        el.textContent = t(colId === 'ongoing' ? 'colOngoing' : colId === 'future' ? 'colFuture' : 'colCompleted');
        delete state.settings.colNames[colId];
      }
      await persistSettings();
    });
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        el.blur();
      }
    });
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

  // PIN Modal
  $('#pin-close').addEventListener('click', closePinModal);
  $('#pin-submit').addEventListener('click', submitPin);
  $('#pin-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submitPin();
  });
  $('#pin-modal').addEventListener('click', (e) => {
    if (e.target.id === 'pin-modal') closePinModal();
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
      if (e.key === 'Enter' && e.target.tagName === 'INPUT' && e.target.id !== 'pin-input') saveFromModal();
    } else if (!$('#settings-modal').classList.contains('hidden')) {
      if (e.key === 'Escape') closeSettings();
    } else if (!$('#pin-modal').classList.contains('hidden')) {
      if (e.key === 'Escape') closePinModal();
    }
  });
}

// ----------------- Migration -----------------
function migrateProjects() {
  for (const sec of SECTIONS) {
    if (!Array.isArray(state.data[sec])) state.data[sec] = [];
    for (const p of state.data[sec]) {
      if (p.stage && STAGE_LEGACY[p.stage]) p.stage = STAGE_LEGACY[p.stage];
      if (p.stage === 'drafting') p.stage = 'literature';
      if (!STAGE_KEYS.includes(p.stage)) p.stage = 'planning';
      if (!p.type) p.type = 'undecided';
      if (!TYPE_KEYS.includes(p.type)) p.type = 'undecided';
      if (p.notes === undefined) p.notes = '';
      if (p.targetDate === undefined) p.targetDate = null;
      if (p.updatedAt === undefined) p.updatedAt = p.createdAt || new Date().toISOString();
      if (p.startDate === undefined) {
        p.startDate = p.createdAt
          ? p.createdAt.slice(0, 10)
          : new Date().toISOString().slice(0, 10);
      }
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
  buildFilterSelects();
  updateFilterBarState();
  wireEvents();
  wireColumnDnD();
  render();
}

init();
