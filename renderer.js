// ----------------- i18n -----------------
const I18N = {
  tr: {
    appSub: 'Akademik Çalışma Planlayıcı',
    navResearch: 'Araştırma',
    navCourses: 'Dersler',
    navAdvising: 'Danışmanlık',
    navRefereeing: 'Hakemlik',
    navArchive: 'Arşiv',
    colOngoing: 'Üzerinde Çalışılan',
    colFuture: 'Gelecek Projeler',
    colCompleted: 'Bitmiş Projeler',
    colUg: 'Lisans',
    colMs: 'Yüksek Lisans',
    colPhd: 'Doktora',
    colRefMain: 'Aktif Hakemlikler',
    newColumn: 'Yeni Sütun',
    addColumn: 'Sütun ekle',
    delColumn: 'Sütunu sil (yalnızca boş sütunlar silinebilir)',
    addProject: 'Yeni kart ekle',
    settingsTitle: 'Ayarlar',
    modalNew: 'Yeni Kart',
    modalEdit: 'Kartı Düzenle',
    empty: 'Henüz kart yok',
    fName: 'Proje Adı',
    fNameCourse: 'Ders Adı',
    fNameAdvise: 'Tez / Öğrenci Çalışması',
    fNameRef: 'Makale / Hakemlik Görevi',
    fNamePh: 'Örn. İşsizlik histerezisi',
    fCoauthors: 'Ortak Yazarlar',
    fStudent: 'Öğrenci',
    fJournal: 'Dergi',
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
    metaStudent: 'Öğrenci:',
    metaJournal: 'Dergi:',
    metaNone: '—',
    openFolder: 'Klasörü Aç',
    noFolder: 'Klasör yok',
    folderNotFound: 'Bu klasör yolu bulunamadı. Diğer sürücüler de tarandı ancak eşleşen klasör yok.',
    folderRelinkAsk: 'Bu klasör bu bilgisayarda otomatik bulunamadı. Klasörün bu bilgisayardaki yerini elle göstermek ister misiniz? (Seçiminiz hatırlanır ve benzer klasörler de otomatik eşleştirilir.)',
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
    migrateTitle: 'Veri Taşıma',
    migrateHint: 'V1 sürümünden kalan eski (düz metin) notlarınızı yeni nesil Beyaz Tahta sistemine topluca dönüştürün.',
    migrateBtn: 'Tüm Eski Notları Tahtaya Aktar',
    migratedToast: '{n} karttaki eski notlar tahtaya aktarıldı.',
    migratedNone: 'Aktarılacak eski not bulunamadı.',
    toastSyncSet: 'Veri klasörü ayarlandı',
    toastSyncCleared: 'Yerel klasöre dönüldü',
    toastExported: 'Yedek kaydedildi',
    toastImported: 'Yedek içe aktarıldı',
    toastExternalChange: 'Veriler başka bir cihazdan güncellendi',
    toastImportInvalid: 'Dosya geçerli bir Hipotez yedeği değil',
    toastArchived: 'Kart arşive taşındı',
    toastRestored: 'Kart panoya geri yüklendi',
    searchPh: 'Ara…',
    filterAll: 'Tümü',
    filterAllTypes: 'Tüm Tipler',
    filterAllStages: 'Tüm Aşamalar',
    filterClear: 'Filtreleri Temizle',
    emptyFiltered: 'Filtreye uyan kart yok',
    fNotes: 'Notlar',
    fNotesPh: 'Serbest metin…',
    btnLock: 'Gizle',
    btnUnlock: 'Kilidi Aç',
    pinTitleSet: 'Şifre Belirle',
    pinDescSet: 'İlk gizli kartınız için 4 haneli bir şifre belirleyin.',
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
    statsTotal: 'Toplam',
    btnArchiveCard: 'Arşive Kaldır',
    archPickTitle: 'Hangi kategoriye?',
    archiveTitle: 'Arşiv Odası',
    archResearch: 'Araştırma Arşivi',
    archRefereeing: 'Hakemlik Arşivi',
    archAbandoned: 'Terk Edilenler',
    archPublished: 'Yayınlananlar',
    archAccepted: 'Kabul Edilenler',
    archRejected: 'Reddedilenler',
    archivedAtLabel: 'Arşivlendi',
    btnRestore: 'Geri Yükle',
    btnDeletePerm: 'Kalıcı Sil',
    confirmDeletePerm: 'Bu kart kalıcı olarak silinsin mi? Bu işlem geri alınamaz.',
    emptyArchiveCat: 'Bu kategoride kart yok',
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
    wbTitle: 'Proje Tahtası'
  },
  en: {
    appSub: 'Academic Project Planner',
    navResearch: 'Research',
    navCourses: 'Courses',
    navAdvising: 'Advising',
    navRefereeing: 'Refereeing',
    navArchive: 'Archive',
    colOngoing: 'In Progress',
    colFuture: 'Future Projects',
    colCompleted: 'Completed Projects',
    colUg: 'Undergraduate',
    colMs: "Master's",
    colPhd: 'PhD',
    colRefMain: 'Active Reviews',
    newColumn: 'New Column',
    addColumn: 'Add column',
    delColumn: 'Delete column (only empty columns can be deleted)',
    addProject: 'Add new card',
    settingsTitle: 'Settings',
    modalNew: 'New Card',
    modalEdit: 'Edit Card',
    empty: 'No cards yet',
    fName: 'Project Name',
    fNameCourse: 'Course Name',
    fNameAdvise: 'Thesis / Student Work',
    fNameRef: 'Paper / Review Task',
    fNamePh: 'e.g. Unemployment hysteresis',
    fCoauthors: 'Co-authors',
    fStudent: 'Student',
    fJournal: 'Journal',
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
    metaStudent: 'Student:',
    metaJournal: 'Journal:',
    metaNone: '—',
    openFolder: 'Open Folder',
    noFolder: 'No folder',
    folderNotFound: 'This folder path was not found. Other drives were also scanned, but no match exists.',
    folderRelinkAsk: 'This folder could not be located automatically on this PC. Would you like to point to it manually? (Your choice is remembered, and similar folders are matched automatically too.)',
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
    migrateTitle: 'Data Migration',
    migrateHint: 'Convert plain-text notes left over from V1 into the new Whiteboard system in bulk.',
    migrateBtn: 'Move All Legacy Notes to Whiteboards',
    migratedToast: 'Legacy notes on {n} cards were moved to whiteboards.',
    migratedNone: 'No legacy notes found to migrate.',
    toastSyncSet: 'Data folder updated',
    toastSyncCleared: 'Switched back to local folder',
    toastExported: 'Backup saved',
    toastImported: 'Backup imported',
    toastExternalChange: 'Data updated from another device',
    toastImportInvalid: 'File is not a valid Hipotez backup',
    toastArchived: 'Card archived',
    toastRestored: 'Card restored to board',
    searchPh: 'Search…',
    filterAll: 'All',
    filterAllTypes: 'All Types',
    filterAllStages: 'All Stages',
    filterClear: 'Clear Filters',
    emptyFiltered: 'No cards match the filter',
    fNotes: 'Notes',
    fNotesPh: 'Free text…',
    btnLock: 'Hide',
    btnUnlock: 'Unlock',
    pinTitleSet: 'Set PIN',
    pinDescSet: 'Set a 4-digit PIN for your first hidden card.',
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
    statsTotal: 'Total',
    btnArchiveCard: 'Archive',
    archPickTitle: 'Which category?',
    archiveTitle: 'Archive Room',
    archResearch: 'Research Archive',
    archRefereeing: 'Refereeing Archive',
    archAbandoned: 'Abandoned',
    archPublished: 'Published',
    archAccepted: 'Accepted',
    archRejected: 'Declined',
    archivedAtLabel: 'Archived',
    btnRestore: 'Restore',
    btnDeletePerm: 'Delete Permanently',
    confirmDeletePerm: 'Delete this card permanently? This cannot be undone.',
    emptyArchiveCat: 'No cards in this category',
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
    wbTitle: 'Project Board'
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

const SECTIONS_V2 = ['ongoing', 'future', 'completed'];
const BOARD_KEYS = ['research', 'courses', 'advising', 'refereeing'];

// Per-board behavior. `fixedCols`: column set can't grow/shrink (research keeps
// its 3-stage flow). `archive`: which archive room this board's cards go to.
const BOARD_DEFS = {
  research: {
    fixedCols: true, maxCols: 3, hasTypeStage: true, compact: false,
    archive: 'research', nameLabel: 'fName', peopleLabel: 'fCoauthors', peopleMeta: 'metaCoauthors'
  },
  courses: {
    fixedCols: false, maxCols: 4, hasTypeStage: false, compact: false,
    archive: null, nameLabel: 'fNameCourse', peopleLabel: 'fCoauthors', peopleMeta: 'metaCoauthors'
  },
  advising: {
    fixedCols: false, maxCols: 4, hasTypeStage: false, compact: false,
    archive: null, nameLabel: 'fNameAdvise', peopleLabel: 'fStudent', peopleMeta: 'metaStudent'
  },
  refereeing: {
    fixedCols: false, maxCols: 4, hasTypeStage: false, compact: true,
    archive: 'refereeing', nameLabel: 'fNameRef', peopleLabel: 'fJournal', peopleMeta: 'metaJournal'
  }
};

const ARCHIVE_DEFS = {
  research: { titleKey: 'archResearch', cats: { abandoned: 'archAbandoned', published: 'archPublished' } },
  refereeing: { titleKey: 'archRefereeing', cats: { accepted: 'archAccepted', rejected: 'archRejected' } }
};

// ----------------- State -----------------
const state = {
  data: null, // v3: { schema, boards, archives }
  settings: { fontScale: 1, bgPreset: 'charcoal', language: 'tr' },
  page: 'research', // research | courses | advising | refereeing | archive
  archiveTab: 'research',
  editing: null,
  filters: { q: '', type: 'all', stage: 'all' },
  unlockTarget: null,
  pendingExternalReload: false
};

// Drag-and-drop state
let dragState = null; // { id, fromCol }
let colDragId = null;
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

async function sha256Hex(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

// ----------------- Data model (schema 3) -----------------

function defaultBoards() {
  return {
    research: {
      columns: [
        { id: 'ongoing', nameKey: 'colOngoing', name: null, cards: [] },
        { id: 'future', nameKey: 'colFuture', name: null, cards: [] },
        { id: 'completed', nameKey: 'colCompleted', name: null, cards: [] }
      ]
    },
    courses: {
      columns: [
        { id: 'crs-ug', nameKey: 'colUg', name: null, cards: [] },
        { id: 'crs-ms', nameKey: 'colMs', name: null, cards: [] },
        { id: 'crs-phd', nameKey: 'colPhd', name: null, cards: [] }
      ]
    },
    advising: {
      columns: [
        { id: 'adv-ms', nameKey: 'colMs', name: null, cards: [] },
        { id: 'adv-phd', nameKey: 'colPhd', name: null, cards: [] }
      ]
    },
    refereeing: {
      columns: [{ id: 'ref-main', nameKey: 'colRefMain', name: null, cards: [] }]
    }
  };
}

function defaultArchives() {
  return {
    research: {
      abandoned: { name: null, cards: [] },
      published: { name: null, cards: [] }
    },
    refereeing: {
      accepted: { name: null, cards: [] },
      rejected: { name: null, cards: [] }
    }
  };
}

// Upgrade whatever came off disk (v2 {ongoing,future,completed} or partial v3)
// to a complete schema-3 structure. Returns true if anything was changed.
function ensureV3() {
  let changed = false;
  let d = state.data || {};

  if (!d.boards) {
    const defaults = defaultBoards();
    const legacyNames = (state.settings && state.settings.colNames) || {};
    const legacyOrder = Array.isArray(state.settings && state.settings.colOrder)
      ? state.settings.colOrder
      : SECTIONS_V2;
    const keyMap = { ongoing: 'colOngoing', future: 'colFuture', completed: 'colCompleted' };
    const cols = [];
    for (const sec of legacyOrder) {
      if (!keyMap[sec]) continue;
      cols.push({
        id: sec,
        nameKey: keyMap[sec],
        name: legacyNames[sec] || null,
        cards: Array.isArray(d[sec]) ? d[sec] : []
      });
    }
    for (const sec of SECTIONS_V2) {
      if (!cols.find((c) => c.id === sec)) {
        cols.push({
          id: sec,
          nameKey: keyMap[sec],
          name: legacyNames[sec] || null,
          cards: Array.isArray(d[sec]) ? d[sec] : []
        });
      }
    }
    defaults.research.columns = cols;
    d = { schema: 3, boards: defaults, archives: defaultArchives() };
    changed = true;
  }

  const defB = defaultBoards();
  for (const key of BOARD_KEYS) {
    if (!d.boards[key] || !Array.isArray(d.boards[key].columns) || d.boards[key].columns.length === 0) {
      d.boards[key] = defB[key];
      changed = true;
    }
    for (const col of d.boards[key].columns) {
      if (!Array.isArray(col.cards)) { col.cards = []; changed = true; }
      if (!col.id) { col.id = uid(); changed = true; }
    }
  }

  const defA = defaultArchives();
  if (!d.archives) { d.archives = defA; changed = true; }
  for (const key of Object.keys(ARCHIVE_DEFS)) {
    if (!d.archives[key]) { d.archives[key] = defA[key]; changed = true; }
    for (const cat of Object.keys(ARCHIVE_DEFS[key].cats)) {
      if (!d.archives[key][cat]) { d.archives[key][cat] = { name: null, cards: [] }; changed = true; }
      if (!Array.isArray(d.archives[key][cat].cards)) { d.archives[key][cat].cards = []; changed = true; }
    }
  }

  if (d.schema !== 3) { d.schema = 3; changed = true; }
  state.data = d;

  forAllCards((p) => { if (migrateCard(p)) changed = true; });

  // Legacy settings keys now live in the data file
  if (state.settings.colNames || state.settings.colOrder) {
    delete state.settings.colNames;
    delete state.settings.colOrder;
    persistSettings();
  }

  return changed;
}

function migrateCard(p) {
  let changed = false;
  const set = (k, v) => { p[k] = v; changed = true; };
  if (p.stage && STAGE_LEGACY[p.stage]) set('stage', STAGE_LEGACY[p.stage]);
  if (p.stage === 'drafting') set('stage', 'literature');
  if (!STAGE_KEYS.includes(p.stage)) set('stage', 'planning');
  if (!p.type) set('type', 'undecided');
  if (!TYPE_KEYS.includes(p.type)) set('type', 'undecided');
  if (p.notes === undefined) set('notes', '');
  if (p.targetDate === undefined) set('targetDate', null);
  if (p.updatedAt === undefined) set('updatedAt', p.createdAt || new Date().toISOString());
  if (p.startDate === undefined) {
    set('startDate', p.createdAt ? p.createdAt.slice(0, 10) : new Date().toISOString().slice(0, 10));
  }
  if (!p.id) set('id', uid());
  return changed;
}

function forAllCards(fn) {
  const d = state.data;
  if (!d || !d.boards) return;
  for (const key of BOARD_KEYS) {
    for (const col of d.boards[key].columns) col.cards.forEach(fn);
  }
  for (const arch of Object.values(d.archives || {})) {
    for (const cat of Object.values(arch)) {
      if (cat && Array.isArray(cat.cards)) cat.cards.forEach(fn);
    }
  }
}

function board(key) {
  return state.data.boards[key || (state.page === 'archive' ? 'research' : state.page)];
}

// Locate a card anywhere (boards + archives).
function findCard(id) {
  const d = state.data;
  for (const boardKey of BOARD_KEYS) {
    const cols = d.boards[boardKey].columns;
    for (let ci = 0; ci < cols.length; ci++) {
      const idx = cols[ci].cards.findIndex((p) => p.id === id);
      if (idx !== -1) {
        return {
          kind: 'board', boardKey, colIdx: ci, colId: cols[ci].id,
          index: idx, project: cols[ci].cards[idx], list: cols[ci].cards
        };
      }
    }
  }
  for (const archKey of Object.keys(d.archives || {})) {
    for (const catKey of Object.keys(d.archives[archKey])) {
      const cat = d.archives[archKey][catKey];
      if (!cat || !Array.isArray(cat.cards)) continue;
      const idx = cat.cards.findIndex((p) => p.id === id);
      if (idx !== -1) {
        return {
          kind: 'archive', archKey, catKey,
          index: idx, project: cat.cards[idx], list: cat.cards
        };
      }
    }
  }
  return null;
}

function columnDisplayName(col) {
  return col.name || (col.nameKey ? t(col.nameKey) : t('newColumn'));
}

function archiveCatName(archKey, catKey) {
  const cat = state.data.archives[archKey][catKey];
  return (cat && cat.name) || t(ARCHIVE_DEFS[archKey].cats[catKey]);
}

// ----------------- Persistence -----------------
async function persistProjects() {
  await window.api.saveProjects(state.data);
}

async function persistSettings() {
  await window.api.saveSettings(state.settings);
}

// ----------------- Filters -----------------
function isFilterActive() {
  const f = state.filters;
  return (f.q && f.q.trim()) || f.type !== 'all' || f.stage !== 'all';
}

function matchesFilter(p) {
  const f = state.filters;
  if (state.page === 'research') {
    if (f.type !== 'all' && p.type !== f.type) return false;
    if (f.stage !== 'all' && p.stage !== f.stage) return false;
  }
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

// ----------------- Render: top level -----------------
function render() {
  const boardEl = $('#board');
  const archiveEl = $('#archive-page');
  if (state.page === 'archive') {
    boardEl.classList.add('hidden');
    archiveEl.classList.remove('hidden');
    renderArchivePage();
  } else {
    archiveEl.classList.add('hidden');
    boardEl.classList.remove('hidden');
    renderBoardPage();
  }
  renderNav();
  renderStats();
  updateFilterVisibility();
}

function renderNav() {
  document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.page === state.page);
  });
}

function renderStats() {
  const wrap = $('#top-stats');
  wrap.innerHTML = '';
  if (state.page === 'archive') {
    const arch = state.data.archives[state.archiveTab];
    for (const catKey of Object.keys(ARCHIVE_DEFS[state.archiveTab].cats)) {
      wrap.append(
        el('div', { class: 'stat-chip' },
          el('span', { class: 'stat-dot', 'data-dot': catKey === Object.keys(ARCHIVE_DEFS[state.archiveTab].cats)[0] ? '0' : '1' }),
          el('span', { class: 'stat-label', text: archiveCatName(state.archiveTab, catKey) }),
          el('span', { class: 'stat-val', text: String(arch[catKey].cards.length) })
        )
      );
    }
    return;
  }
  const cols = board().columns;
  cols.forEach((col, i) => {
    const all = col.cards.length;
    const shown = col.cards.filter(matchesFilter).length;
    wrap.append(
      el('div', { class: 'stat-chip' },
        el('span', { class: 'stat-dot', 'data-dot': String(i % 4) }),
        el('span', { class: 'stat-label', text: columnDisplayName(col) }),
        el('span', {
          class: 'stat-val',
          text: isFilterActive() && shown !== all ? `${shown}/${all}` : String(all)
        })
      )
    );
  });
}

function updateFilterVisibility() {
  const showTypeStage = state.page === 'research';
  $('#filter-type').classList.toggle('hidden', !showTypeStage);
  $('#filter-stage').classList.toggle('hidden', !showTypeStage);
}

// ----------------- Render: board page -----------------
function renderBoardPage() {
  const boardEl = $('#board');
  boardEl.innerHTML = '';
  const def = BOARD_DEFS[state.page];
  const b = board();

  boardEl.classList.toggle('compact-board', !!def.compact);
  // Single-column boards shouldn't stretch across the whole window
  boardEl.dataset.cols = String(b.columns.length);

  for (const col of b.columns) {
    boardEl.append(renderColumn(col, def, b));
  }

  if (!def.fixedCols && b.columns.length < def.maxCols) {
    const addCol = el('button', {
      class: 'add-col-tile',
      title: t('addColumn'),
      onclick: async () => {
        b.columns.push({ id: uid(), nameKey: null, name: t('newColumn'), cards: [] });
        await persistProjects();
        render();
      }
    }, el('span', { text: '+' }));
    boardEl.append(addCol);
  }
}

function renderColumn(col, def, b) {
  const section = el('section', { class: 'column' });
  section.dataset.col = col.id;

  const title = el('h2', {
    class: 'col-title',
    contenteditable: 'true',
    spellcheck: 'false',
    text: columnDisplayName(col)
  });

  const head = el('header', { class: 'col-head' });
  head.draggable = true;
  head.append(title);

  if (!def.fixedCols && b.columns.length > 1) {
    const delBtn = el('button', {
      class: 'col-del-btn',
      title: t('delColumn'),
      onclick: async (e) => {
        e.stopPropagation();
        if (col.cards.length > 0) return;
        const i = b.columns.indexOf(col);
        if (i !== -1) {
          b.columns.splice(i, 1);
          await persistProjects();
          render();
        }
      }
    });
    delBtn.innerHTML = trashSvg();
    if (col.cards.length > 0) delBtn.classList.add('disabled');
    head.append(delBtn);
  }

  head.append(
    el('button', {
      class: 'add-btn',
      title: t('addProject'),
      text: '+',
      onclick: () => openModalForColumn(col.id)
    })
  );

  const body = el('div', { class: 'col-body' });
  body.dataset.colId = col.id;

  const items = col.cards.filter(matchesFilter);
  if (!items.length) {
    const msg = isFilterActive() ? t('emptyFiltered') : t('empty');
    body.append(el('div', { class: 'empty', text: msg }));
  } else {
    for (const p of items) body.append(renderCard(p, def));
  }

  section.append(head, body);

  // --- column title editing ---
  title.addEventListener('focus', () => { head.draggable = false; });
  title.addEventListener('blur', async () => {
    head.draggable = true;
    const newName = title.textContent.trim();
    if (newName) {
      const defName = col.nameKey ? t(col.nameKey) : null;
      col.name = newName === defName ? null : newName;
    } else {
      title.textContent = columnDisplayName(col);
    }
    await persistProjects();
    renderStats();
  });
  title.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      title.blur();
    }
  });

  // --- column drag (reorder) ---
  head.addEventListener('dragstart', (e) => {
    if (e.target !== head && e.target.tagName !== 'H2') {
      e.preventDefault();
      return;
    }
    colDragId = col.id;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setDragImage(section, 20, 20);
    section.classList.add('dragging-col');
  });
  head.addEventListener('dragend', () => {
    colDragId = null;
    section.classList.remove('dragging-col');
    document.querySelectorAll('.column').forEach((c) => c.classList.remove('drag-over-col'));
  });
  section.addEventListener('dragover', (e) => {
    if (colDragId && colDragId !== col.id) {
      e.preventDefault();
      section.classList.add('drag-over-col');
    }
  });
  section.addEventListener('dragleave', (e) => {
    if (!section.contains(e.relatedTarget)) {
      section.classList.remove('drag-over-col');
    }
  });
  section.addEventListener('drop', async (e) => {
    if (colDragId && colDragId !== col.id) {
      e.preventDefault();
      section.classList.remove('drag-over-col');
      const cols = b.columns;
      const fromIdx = cols.findIndex((c) => c.id === colDragId);
      const toIdx = cols.findIndex((c) => c.id === col.id);
      if (fromIdx !== -1 && toIdx !== -1) {
        const [moved] = cols.splice(fromIdx, 1);
        cols.splice(toIdx, 0, moved);
        await persistProjects();
        render();
      }
    }
  });

  // --- card drop target ---
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
    await handleCardDrop(col, body, e.clientY);
  });

  return section;
}

// ----------------- Render: cards -----------------
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

function trashSvg() {
  return `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>`;
}

function archiveBoxSvg() {
  return `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="21 8 21 21 3 21 3 8"></polyline>
    <rect x="1" y="3" width="22" height="5"></rect>
    <line x1="10" y1="12" x2="14" y2="12"></line>
  </svg>`;
}

function restoreSvg() {
  return `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="1 4 1 10 7 10"></polyline>
    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
  </svg>`;
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

function makeFolderBtn(p, compact) {
  const hasFolder = !!p.folder;
  const folderBtn = el(
    'button',
    {
      class: 'folder-link' + (compact ? ' compact' : ''),
      title: p.folder || t('noFolder'),
      onclick: async (e) => {
        e.stopPropagation();
        if (!p.folder) return;
        const ok = await window.api.openFolder(p.folder);
        if (!ok) {
          // Auto-resolution failed — offer a one-time manual relink that the
          // app remembers (and generalizes to sibling folders).
          if (confirm(t('folderRelinkAsk'))) {
            const r = await window.api.relinkFolder(p.folder);
            if (!r || r.cancelled) return;
          } else {
            alert(t('folderNotFound'));
          }
        }
      }
    },
    folderIconSvg(),
    compact ? null : document.createTextNode(hasFolder ? t('openFolder') : t('noFolder'))
  );
  if (!hasFolder) folderBtn.disabled = true;
  return folderBtn;
}

function makeArchiveBtn(p, def) {
  return el('button', {
    class: 'icon-btn card-archive-btn',
    title: t('btnArchiveCard'),
    onclick: (e) => {
      e.stopPropagation();
      openArchivePicker(e.currentTarget, p, def.archive);
    }
  }, htmlToNode(archiveBoxSvg()));
}

function htmlToNode(html) {
  const tpl = document.createElement('template');
  tpl.innerHTML = html.trim();
  return tpl.content.firstChild;
}

function renderCard(p, def) {
  const card = el('div', {
    class: 'card' + (def.compact ? ' card-compact' : ''),
    onclick: () => {
      if (Date.now() < suppressClickUntil) return;
      if (p.hidden) return; // Gizliyse doğrudan karta tıklanmaz
      openModal(p.id);
    }
  });
  card.draggable = true;
  if (p.hidden) card.classList.add('hidden-card');
  card.dataset.pid = p.id;

  const cornerBtns = el('div', { class: 'card-corner' });
  if (def.archive) cornerBtns.append(makeArchiveBtn(p, def));
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
  cornerBtns.append(lockBtn);
  card.append(cornerBtns);

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

  if (def.compact) {
    // Refereeing: small card — journal line + deadline + folder
    if (p.coauthors && p.coauthors.trim()) {
      card.append(el('div', { class: 'card-meta compact-meta', text: p.coauthors }));
    }
    const foot = el('div', { class: 'card-foot compact-foot' });
    if (p.targetDate) foot.append(makeDatePill('target', p.targetDate, p));
    if (p.notes && p.notes.trim() || p.whiteboardData) foot.append(makeNotesPill(p));
    foot.append(makeFolderBtn(p, true));
    card.append(foot);
    return card;
  }

  if (def.hasTypeStage && p.type) {
    card.append(el('div', { class: 'card-type', text: t(`types.${p.type}`) }));
  }

  card.append(
    el(
      'div',
      { class: 'card-meta' },
      el('span', { class: 'label', text: t(def.peopleMeta) + ' ' }),
      document.createTextNode(
        p.coauthors && p.coauthors.trim() ? p.coauthors : t('metaNone')
      )
    )
  );

  const extras = renderCardExtras(p);
  if (extras) card.append(extras);

  const foot = el('div', { class: 'card-foot' });
  if (def.hasTypeStage) {
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
    foot.append(stageSelect);
  }
  foot.append(makeFolderBtn(p, false));
  card.append(foot);

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

  // Notes pill — opens the whiteboard
  if ((p.notes && p.notes.trim()) || p.whiteboardData) row.append(makeNotesPill(p));

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
      title: short || t('wbTitle'),
      onclick: (e) => {
        e.stopPropagation();
        openWhiteboard(project.id);
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

// ----------------- Archive -----------------
function openArchivePicker(anchor, project, archKey) {
  closePopover();
  const pop = el('div', { class: 'popover archive-popover' },
    el('div', { class: 'pop-title', text: t('archPickTitle') })
  );
  for (const catKey of Object.keys(ARCHIVE_DEFS[archKey].cats)) {
    pop.append(
      el('button', {
        class: 'secondary archive-cat-btn',
        type: 'button',
        text: archiveCatName(archKey, catKey),
        onclick: async () => {
          closePopover();
          await archiveCard(project.id, archKey, catKey);
        }
      })
    );
  }
  positionPopover(pop, anchor);
  document.addEventListener('mousedown', handlePopoverOutside, true);
  document.addEventListener('keydown', handlePopoverKey);
}

async function archiveCard(cardId, archKey, catKey) {
  const found = findCard(cardId);
  if (!found || found.kind !== 'board') return;
  const [card] = found.list.splice(found.index, 1);
  card.archivedAt = new Date().toISOString();
  card.archivedFrom = found.boardKey;
  state.data.archives[archKey][catKey].cards.unshift(card);
  await persistProjects();
  render();
  showToast(t('toastArchived'));
}

async function restoreCard(cardId) {
  const found = findCard(cardId);
  if (!found || found.kind !== 'archive') return;
  const [card] = found.list.splice(found.index, 1);
  const boardKey = card.archivedFrom && BOARD_KEYS.includes(card.archivedFrom)
    ? card.archivedFrom
    : (found.archKey === 'refereeing' ? 'refereeing' : 'research');
  delete card.archivedAt;
  delete card.archivedFrom;
  card.updatedAt = new Date().toISOString();
  state.data.boards[boardKey].columns[0].cards.unshift(card);
  await persistProjects();
  render();
  showToast(t('toastRestored'));
}

function renderArchivePage() {
  const page = $('#archive-page');
  page.innerHTML = '';

  const tabs = el('div', { class: 'archive-tabs' });
  for (const archKey of Object.keys(ARCHIVE_DEFS)) {
    tabs.append(
      el('button', {
        class: 'archive-tab' + (state.archiveTab === archKey ? ' active' : ''),
        text: t(ARCHIVE_DEFS[archKey].titleKey),
        onclick: () => {
          state.archiveTab = archKey;
          render();
        }
      })
    );
  }
  page.append(
    el('div', { class: 'archive-head' },
      el('h2', { class: 'archive-title', text: t('archiveTitle') }),
      tabs
    )
  );

  const cols = el('div', { class: 'archive-cols' });
  const archKey = state.archiveTab;
  for (const catKey of Object.keys(ARCHIVE_DEFS[archKey].cats)) {
    cols.append(renderArchiveColumn(archKey, catKey));
  }
  page.append(cols);
}

function renderArchiveColumn(archKey, catKey) {
  const cat = state.data.archives[archKey][catKey];
  const section = el('section', { class: 'column archive-column' });

  const title = el('h2', {
    class: 'col-title',
    contenteditable: 'true',
    spellcheck: 'false',
    text: archiveCatName(archKey, catKey)
  });
  title.addEventListener('blur', async () => {
    const newName = title.textContent.trim();
    if (newName) {
      cat.name = newName === t(ARCHIVE_DEFS[archKey].cats[catKey]) ? null : newName;
    } else {
      title.textContent = archiveCatName(archKey, catKey);
    }
    await persistProjects();
    renderStats();
  });
  title.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); title.blur(); }
  });

  section.append(
    el('header', { class: 'col-head' },
      title,
      el('span', { class: 'arch-count', text: String(cat.cards.length) })
    )
  );

  const body = el('div', { class: 'col-body' });
  const items = cat.cards.filter(matchesFilter);
  if (!items.length) {
    body.append(el('div', { class: 'empty', text: t('emptyArchiveCat') }));
  } else {
    for (const p of items) body.append(renderArchiveCard(p, archKey));
  }
  section.append(body);
  return section;
}

function renderArchiveCard(p, archKey) {
  const card = el('div', { class: 'card archive-card' });
  if (p.color) {
    const hex = CARD_COLORS.find((c) => c.key === p.color)?.hex;
    if (hex) {
      card.style.backgroundColor = hex;
      card.dataset.colored = '1';
    }
  }
  card.append(el('div', { class: 'card-title', text: p.name || '(…)' }));
  if (p.coauthors && p.coauthors.trim()) {
    card.append(el('div', { class: 'card-meta', text: p.coauthors }));
  }
  if (p.archivedAt) {
    card.append(
      el('div', { class: 'card-meta arch-date', text: `${t('archivedAtLabel')}: ${formatDateTime(p.archivedAt)}` })
    );
  }

  const foot = el('div', { class: 'card-foot arch-foot' });
  foot.append(
    el('button', {
      class: 'extra-pill pill-btn',
      type: 'button',
      title: t('btnRestore'),
      onclick: () => restoreCard(p.id)
    }, htmlToNode(restoreSvg()), document.createTextNode(' ' + t('btnRestore')))
  );
  if (p.whiteboardData || (p.notes && p.notes.trim())) {
    foot.append(makeNotesPill(p));
  }
  if (p.folder) {
    foot.append(makeFolderBtn(p, true));
  }
  foot.append(
    el('button', {
      class: 'extra-pill pill-btn danger-pill',
      type: 'button',
      title: t('btnDeletePerm'),
      onclick: async () => {
        if (!confirm(t('confirmDeletePerm'))) return;
        const found = findCard(p.id);
        if (found && found.kind === 'archive') {
          found.list.splice(found.index, 1);
          await persistProjects();
          render();
        }
      }
    }, htmlToNode(trashSvg()))
  );
  card.append(foot);
  return card;
}

// ----------------- Popover (date/archive) -----------------
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
    const found = findCard(project.id);
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

// ----------------- Drag & drop: cards -----------------
function onCardDragStart(e, id, cardEl) {
  const body = cardEl.closest('.col-body');
  if (!body || !body.dataset.colId) return;
  dragState = { id, fromCol: body.dataset.colId };
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

async function handleCardDrop(toCol, bodyEl, clientY) {
  if (!dragState) return;
  const b = board();
  const fromCol = b.columns.find((c) => c.id === dragState.fromCol);
  if (!fromCol) return;
  const fromIndex = fromCol.cards.findIndex((p) => p.id === dragState.id);
  if (fromIndex === -1) return;

  const toIndex = computeDropIndex(bodyEl, clientY);
  // computeDropIndex already excludes the dragged card from its search set,
  // so toIndex is the correct position in the post-splice list.
  const [proj] = fromCol.cards.splice(fromIndex, 1);
  toCol.cards.splice(toIndex, 0, proj);
  await persistProjects();
  render();
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

function buildSectionOptions() {
  const sel = $('#f-section');
  sel.innerHTML = '';
  for (const col of board().columns) {
    const opt = document.createElement('option');
    opt.value = col.id;
    opt.textContent = columnDisplayName(col);
    sel.append(opt);
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
  const def = BOARD_DEFS[state.page === 'archive' ? 'research' : state.page];
  $('#modal-title').textContent = t(isEdit ? 'modalEdit' : 'modalNew');
  $('#modal-delete').classList.toggle('hidden', !isEdit);

  // Per-board field labels & visibility
  $('#f-name-label').textContent = t(def.nameLabel);
  $('#f-coauthors-label').textContent = t(def.peopleLabel);
  $('#row-type').classList.toggle('hidden', !def.hasTypeStage);
  $('#row-stage').classList.toggle('hidden', !def.hasTypeStage);

  buildSelectOptions($('#f-type'), TYPE_KEYS, 'types');
  buildSelectOptions($('#f-stage'), STAGE_KEYS, 'stages');
  buildSectionOptions();

  if (isEdit) {
    const found = findCard(id);
    if (!found || found.kind !== 'board') return;
    const p = found.project;
    $('#f-name').value = p.name || '';
    $('#f-coauthors').value = p.coauthors || '';
    $('#f-type').value = p.type || 'undecided';
    $('#f-stage').value = p.stage || 'planning';
    $('#f-section').value = found.colId;
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

function openModalForColumn(colId) {
  openModal(null);
  $('#f-section').value = colId;
}

function closeModal() {
  $('#modal').classList.add('hidden');
  state.editing = null;
  maybeRunPendingReload();
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
  const colId = $('#f-section').value;
  const folder = $('#f-folder').value.trim() || null;
  const color = pendingCardColor || null;
  const targetDate = $('#f-target').value || null;
  const notes = $('#f-notes').value;
  const now = new Date().toISOString();
  const b = board();

  if (state.editing) {
    const found = findCard(state.editing);
    if (!found || found.kind !== 'board') return;
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
    if (found.colId !== colId) {
      const toCol = b.columns.find((c) => c.id === colId);
      if (toCol) {
        found.list.splice(found.index, 1);
        toCol.cards.push(p);
      }
    }
  } else {
    const toCol = b.columns.find((c) => c.id === colId) || b.columns[0];
    toCol.cards.push({
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
  const found = findCard(state.editing);
  if (!found) return;
  found.list.splice(found.index, 1);
  await persistProjects();
  render();
  closeModal();
}

// ----------------- PIN (stored as SHA-256 hash) -----------------
function openPinModal() {
  $('#pin-input').value = '';
  $('#pin-error').textContent = '';

  if (!state.settings.pinHash) {
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

async function unlockPendingTarget() {
  if (state.unlockTarget) {
    const found = findCard(state.unlockTarget);
    if (found) {
      found.project.hidden = false;
      found.project.updatedAt = new Date().toISOString();
      await persistProjects();
    }
    state.unlockTarget = null;
  }
}

async function submitPin() {
  const pin = $('#pin-input').value;
  if (pin.length !== 4) {
    $('#pin-error').textContent = t('pinErrorLength');
    return;
  }

  const hash = await sha256Hex(pin);
  if (!state.settings.pinHash) {
    state.settings.pinHash = hash;
    await persistSettings();
    await unlockPendingTarget();
    closePinModal();
    render();
  } else if (state.settings.pinHash === hash) {
    await unlockPendingTarget();
    closePinModal();
    render();
  } else {
    $('#pin-error').textContent = t('pinErrorWrong');
    $('#pin-input').value = '';
    $('#pin-input').focus();
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
  const link = el('a', {
    href: '#',
    text: lang === 'en' ? 'Assoc. Prof. Dr. Mehmet Özcan' : 'Doç. Dr. Mehmet Özcan',
    onclick: (e) => {
      e.preventDefault();
      window.api.openExternal('https://www.ozcanmehmet.com');
    }
  });
  if (lang === 'en') {
    foot.append(
      document.createTextNode('Developed by '),
      link,
      document.createTextNode('. All rights reserved.')
    );
  } else {
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
  const node = $('#toast');
  node.textContent = msg;
  node.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => node.classList.remove('show'), 2400);
}

async function reloadFromDisk() {
  state.data = await window.api.loadProjects();
  const loaded = await window.api.loadSettings();
  state.settings = Object.assign(
    { fontScale: 1, bgPreset: 'charcoal', language: 'tr' },
    loaded
  );
  const migrated = ensureV3();
  if (migrated) await persistProjects();
  await migratePinIfNeeded();
  applyFont();
  applyBg();
  applyLocale();
  $('#s-font').value = state.settings.fontScale;
  $('#s-lang').value = state.settings.language;
  buildBgChips();
  render();
}

async function migratePinIfNeeded() {
  if (state.settings.pin && !state.settings.pinHash) {
    state.settings.pinHash = await sha256Hex(String(state.settings.pin));
    delete state.settings.pin;
    await persistSettings();
  }
}

function maybeRunPendingReload() {
  if (!state.pendingExternalReload) return;
  const anyModalOpen =
    !$('#modal').classList.contains('hidden') ||
    !$('#whiteboard-modal').classList.contains('hidden');
  if (anyModalOpen) return;
  state.pendingExternalReload = false;
  reloadFromDisk().then(() => {
    refreshSyncStatus();
    showToast(t('toastExternalChange'));
  });
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

function switchPage(page) {
  if (state.page === page) return;
  state.page = page;
  // Reset filters between pages to avoid invisible filtering surprises
  state.filters = { q: '', type: 'all', stage: 'all' };
  $('#filter-q').value = '';
  $('#filter-type').value = 'all';
  $('#filter-stage').value = 'all';
  updateFilterBarState();
  render();
}

function wireEvents() {
  // Title bar
  const btnMin = $('#btn-minimize');
  if (btnMin) btnMin.addEventListener('click', () => window.api.windowMinimize());
  const btnMax = $('#btn-maximize');
  if (btnMax) btnMax.addEventListener('click', () => window.api.windowMaximize());
  const btnClose = $('#btn-close');
  if (btnClose) btnClose.addEventListener('click', () => window.api.windowClose());

  if (window.api.onMaximizedChange) {
    window.api.onMaximizedChange((isMax) => {
      const svg = $('#btn-maximize-svg');
      if (!svg) return;
      svg.innerHTML = isMax
        ? '<path d="M 3 4 L 3 9 L 8 9 L 8 4 Z M 4.5 4 L 4.5 2 L 9 2 L 9 6.5 L 8 6.5" fill="none" stroke="currentColor" stroke-width="1.2"/>'
        : '<path d="M 2 2 L 8 2 L 8 8 L 2 8 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>';
    });
  }

  // Page navigation
  document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => switchPage(btn.dataset.page));
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

  $('#s-migrate-notes').addEventListener('click', () => {
    let count = 0;
    const isLight = document.querySelector('.whiteboard-container').classList.contains('force-light');
    const textColor = isLight ? '#111111' : '#e6e8ec';

    forAllCards((p) => {
      if (!p.notesMigrated && p.notes && p.notes.trim().length > 0 && !p.whiteboardData) {
        p.whiteboardData = {
          canvas: {
            version: '5.3.0',
            objects: [{
              type: 'textbox',
              version: '5.3.0',
              originX: 'left',
              originY: 'top',
              left: 50,
              top: 50,
              width: 400,
              fill: textColor,
              text: p.notes,
              fontSize: 20,
              fontFamily: 'sans-serif'
            }]
          },
          mathList: []
        };
        p.notesMigrated = true;
        count++;
      }
    });

    if (count > 0) {
      persistProjects();
      showToast(t('migratedToast').replace('{n}', String(count)));
    } else {
      showToast(t('migratedNone'));
    }
  });

  // External change (another device wrote to the data folder).
  // Defer the reload while an edit surface (modal or whiteboard) is open so
  // in-progress edits are never clobbered; apply it when they close.
  window.api.onExternalChange(async () => {
    const busy =
      !$('#modal').classList.contains('hidden') ||
      !$('#whiteboard-modal').classList.contains('hidden');
    if (busy) {
      state.pendingExternalReload = true;
      return;
    }
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

// ----------------- Init -----------------
async function init() {
  if (window.MathfieldElement) {
    try {
      MathfieldElement.fontsDirectory = './vendor/mathlive/fonts';
      MathfieldElement.soundsDirectory = null;
    } catch (_) {}
  }
  state.data = await window.api.loadProjects();
  state.settings = Object.assign(
    { fontScale: 1, bgPreset: 'charcoal', language: 'tr' },
    await window.api.loadSettings()
  );
  const migrated = ensureV3();
  if (migrated) await persistProjects();
  await migratePinIfNeeded();
  applyFont();
  applyBg();
  applyLocale();
  buildFilterSelects();
  updateFilterBarState();
  wireEvents();
  render();
}

init();

// ----------------- Whiteboard Logic (V3) -----------------
let wbCanvas = null;
let wbCurrentProjId = null;
let wbSaveTimer = null;

// All whiteboard mutations funnel through this debounce so rapid events
// (zoom wheel, dragging, typing) produce a single disk write.
function scheduleWbSave() {
  if (!wbCurrentProjId) return;
  clearTimeout(wbSaveTimer);
  wbSaveTimer = setTimeout(() => saveWhiteboardData(), 800);
}

function flushWbSave() {
  clearTimeout(wbSaveTimer);
  wbSaveTimer = null;
  saveWhiteboardData();
}

function initWhiteboard() {
  if (wbCanvas) return;
  const canvasEl = document.getElementById('wb-canvas');
  const bodyEl = document.getElementById('wb-body');

  canvasEl.width = bodyEl.clientWidth;
  canvasEl.height = bodyEl.clientHeight;

  wbCanvas = new fabric.Canvas('wb-canvas', {
    isDrawingMode: false,
    selection: true,
    fireRightClick: true,
    stopContextMenu: true
  });

  let mathContainer = document.getElementById('wb-math-container');
  if (!mathContainer) {
    mathContainer = document.createElement('div');
    mathContainer.id = 'wb-math-container';
    mathContainer.style.position = 'absolute';
    mathContainer.style.top = '0';
    mathContainer.style.left = '0';
    mathContainer.style.width = '100%';
    mathContainer.style.height = '100%';
    mathContainer.style.pointerEvents = 'none';
    mathContainer.style.transformOrigin = '0 0';
    mathContainer.style.zIndex = '5';
    document.getElementById('wb-body').appendChild(mathContainer);
  }

  wbCanvas.on('after:render', function() {
    if (mathContainer && wbCanvas) {
      const vpt = wbCanvas.viewportTransform;
      mathContainer.style.transform = `matrix(${vpt[0]}, ${vpt[1]}, ${vpt[2]}, ${vpt[3]}, ${vpt[4]}, ${vpt[5]})`;
    }
  });

  // Prevent Textbox from scaling visually; instead adjust its width so text reflows
  wbCanvas.on('object:scaling', function(e) {
    if (e.target && e.target.type === 'textbox') {
      const obj = e.target;
      const w = obj.width * obj.scaleX;
      obj.set({
        width: w,
        scaleX: 1,
        scaleY: 1
      });
    }
  });

  window.addEventListener('resize', () => {
    if (!wbCanvas) return;
    wbCanvas.setWidth(bodyEl.clientWidth);
    wbCanvas.setHeight(bodyEl.clientHeight);
    wbCanvas.renderAll();
  });

  const wbContainer = document.querySelector('.whiteboard-container');
  const wbHeader = document.getElementById('wb-header');

  const resizeObserver = new ResizeObserver(() => {
    if (wbCanvas && !document.getElementById('whiteboard-modal').classList.contains('hidden')) {
      wbCanvas.setWidth(bodyEl.clientWidth);
      wbCanvas.setHeight(bodyEl.clientHeight);
      wbCanvas.renderAll();
    }
  });
  resizeObserver.observe(wbContainer);

  let isWbDragging = false;
  let wbStartX, wbStartY, wbStartLeft, wbStartTop;

  wbHeader.addEventListener('mousedown', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT' || e.target.closest('.wb-tools') || e.target.closest('.wb-text-tools')) return;
    if (wbContainer.classList.contains('fullscreen')) return;
    isWbDragging = true;
    wbStartX = e.clientX;
    wbStartY = e.clientY;
    const rect = wbContainer.getBoundingClientRect();
    wbStartLeft = rect.left;
    wbStartTop = rect.top;
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isWbDragging) return;
    // Calculate new position
    let newLeft = wbStartLeft + e.clientX - wbStartX;
    let newTop = wbStartTop + e.clientY - wbStartY;

    // Bounds check so it doesn't get lost
    if (newTop < 0) newTop = 0;
    if (newLeft < -wbContainer.offsetWidth + 50) newLeft = -wbContainer.offsetWidth + 50; // Don't drag too far left

    wbContainer.style.left = newLeft + 'px';
    wbContainer.style.top = newTop + 'px';
  });

  document.addEventListener('mouseup', () => {
    isWbDragging = false;
  });

  // Pan and Zoom logic
  wbCanvas.on('mouse:wheel', function(opt) {
    var delta = opt.e.deltaY;
    var zoom = wbCanvas.getZoom();
    zoom *= 0.999 ** delta;
    if (zoom > 20) zoom = 20;
    if (zoom < 0.01) zoom = 0.01;
    wbCanvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
    opt.e.preventDefault();
    opt.e.stopPropagation();
    scheduleWbSave();
  });

  // Disable context menu on canvas to allow right-click panning
  document.getElementById('wb-body').addEventListener('contextmenu', e => e.preventDefault());

  wbCanvas.on('mouse:down', function(opt) {
    var evt = opt.e;

    // Pan condition: Alt key OR Panning tool OR Right Click OR (Left click on empty space and not drawing)
    const isRightClick = evt.button === 2;
    const isLeftClickEmpty = evt.button === 0 && !opt.target && !wbCanvas.isDrawingMode;

    if (evt.altKey === true || document.getElementById('wb-tool-select').classList.contains('panning') || isRightClick || isLeftClickEmpty) {
      this.isDragging = true;
      this.selection = false;
      this.lastPosX = evt.clientX;
      this.lastPosY = evt.clientY;
      if (isRightClick) evt.preventDefault();
    }
  });

  wbCanvas.on('mouse:move', function(opt) {
    if (this.isDragging) {
      var e = opt.e;
      var vpt = this.viewportTransform;
      vpt[4] += e.clientX - this.lastPosX;
      vpt[5] += e.clientY - this.lastPosY;
      this.requestRenderAll();
      this.lastPosX = e.clientX;
      this.lastPosY = e.clientY;
    }
  });

  wbCanvas.on('mouse:up', function(opt) {
    const wasPanning = this.isDragging;
    this.setViewportTransform(this.viewportTransform);
    this.isDragging = false;
    this.selection = true;
    if (wasPanning) scheduleWbSave();
  });

  wbCanvas.on('object:modified', scheduleWbSave);
  wbCanvas.on('object:added', scheduleWbSave);
  wbCanvas.on('object:removed', scheduleWbSave);
  wbCanvas.on('path:created', scheduleWbSave);

  // Toolbar buttons
  document.getElementById('wb-close').addEventListener('click', closeWhiteboard);

  const btnSelect = document.getElementById('wb-tool-select');
  const btnDraw = document.getElementById('wb-tool-draw');

  btnSelect.addEventListener('click', () => {
    wbCanvas.isDrawingMode = false;
    btnSelect.classList.add('active');
    btnDraw.classList.remove('active');
  });

  btnDraw.addEventListener('click', () => {
    wbCanvas.isDrawingMode = true;
    const isLight = document.querySelector('.whiteboard-container').classList.contains('force-light');
    wbCanvas.freeDrawingBrush.color = isLight ? '#111111' : '#e6e8ec';
    wbCanvas.freeDrawingBrush.width = 3;
    btnDraw.classList.add('active');
    btnSelect.classList.remove('active');
  });

  document.getElementById('wb-add-math').addEventListener('click', addMathEquation);
  document.getElementById('wb-export-pdf').addEventListener('click', exportWhiteboardPDF);

  // Theme Toggle
  document.getElementById('wb-theme-toggle').addEventListener('click', () => {
    const container = document.querySelector('.whiteboard-container');
    const isNowLight = container.classList.toggle('force-light');

    if (!wbCanvas) return;
    const darkColors = ['#e6e8ec', '#d1d5db', '#c8cdd5'];
    const lightColors = ['#111111', '#333333', '#222222'];
    const toColor = isNowLight ? '#111111' : '#e6e8ec';

    wbCanvas.getObjects().forEach(obj => {
      const currentFill = obj.fill;
      const currentStroke = obj.stroke;
      if (obj.type === 'textbox' || obj.type === 'i-text') {
        const palette = isNowLight ? darkColors : lightColors;
        if (palette.includes(currentFill) || currentFill === (isNowLight ? '#e6e8ec' : '#111111')) {
          obj.set('fill', toColor);
        }
      } else if (obj.type === 'rect' || obj.type === 'circle') {
        const palette = isNowLight ? darkColors : lightColors;
        if (palette.includes(currentStroke) || currentStroke === (isNowLight ? '#e6e8ec' : '#111111')) {
          obj.set('stroke', toColor);
        }
      } else if (obj.type === 'path') {
        const palette = isNowLight ? darkColors : lightColors;
        if (palette.includes(currentStroke) || currentStroke === (isNowLight ? '#e6e8ec' : '#111111')) {
          obj.set('stroke', toColor);
        }
      }
    });
    wbCanvas.freeDrawingBrush.color = toColor;
    wbCanvas.renderAll();
    scheduleWbSave();
  });

  // Maximize toggle
  document.getElementById('wb-maximize').addEventListener('click', () => {
    const container = document.querySelector('.whiteboard-container');
    container.classList.toggle('fullscreen');
    setTimeout(() => {
      const bodyEl2 = document.getElementById('wb-body');
      wbCanvas.setWidth(bodyEl2.clientWidth);
      wbCanvas.setHeight(bodyEl2.clientHeight);
      wbCanvas.renderAll();
    }, 300); // Wait for transition
  });

  // Image Upload
  document.getElementById('wb-add-image').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/png, image/jpeg, image/webp';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (f) => {
        const data = f.target.result;
        fabric.Image.fromURL(data, (img) => {
          img.set({
            left: window.innerWidth / 2 - 100,
            top: window.innerHeight / 2 - 100
          });
          img.scaleToWidth(200);
          wbCanvas.add(img);
          wbCanvas.setActiveObject(img);
          scheduleWbSave();
        });
      };
      reader.readAsDataURL(file);
    };
    input.click();
  });

  // Text Tools Events
  const textTools = document.getElementById('wb-text-tools');
  const btnBold = document.getElementById('wb-font-bold');
  const btnItalic = document.getElementById('wb-font-italic');
  const inpSize = document.getElementById('wb-font-size');

  const isTextObj = (obj) => obj && (obj.type === 'textbox' || obj.type === 'i-text');

  const updateTextTools = () => {
    const obj = wbCanvas.getActiveObject();
    if (isTextObj(obj)) {
      textTools.classList.remove('hidden');
      btnBold.style.color = obj.fontWeight === 'bold' ? 'var(--accent)' : '';
      btnItalic.style.color = obj.fontStyle === 'italic' ? 'var(--accent)' : '';
      inpSize.value = obj.fontSize || 24;
    } else {
      textTools.classList.add('hidden');
    }
  };

  wbCanvas.on('selection:created', updateTextTools);
  wbCanvas.on('selection:updated', updateTextTools);
  wbCanvas.on('selection:cleared', updateTextTools);

  btnBold.addEventListener('click', () => {
    const obj = wbCanvas.getActiveObject();
    if (isTextObj(obj)) {
      obj.set('fontWeight', obj.fontWeight === 'bold' ? 'normal' : 'bold');
      wbCanvas.renderAll();
      updateTextTools();
      scheduleWbSave();
    }
  });

  btnItalic.addEventListener('click', () => {
    const obj = wbCanvas.getActiveObject();
    if (isTextObj(obj)) {
      obj.set('fontStyle', obj.fontStyle === 'italic' ? 'normal' : 'italic');
      wbCanvas.renderAll();
      updateTextTools();
      scheduleWbSave();
    }
  });

  inpSize.addEventListener('change', (e) => {
    const obj = wbCanvas.getActiveObject();
    if (isTextObj(obj)) {
      obj.set('fontSize', parseInt(e.target.value, 10));
      wbCanvas.renderAll();
      scheduleWbSave();
    }
  });

  // Add Shapes/Text
  const getStrokeColor = () => {
    const isLight = document.querySelector('.whiteboard-container').classList.contains('force-light');
    return isLight ? '#111111' : '#e6e8ec';
  };

  document.getElementById('wb-add-text').addEventListener('click', () => {
    wbCanvas.isDrawingMode = false;
    const text = new fabric.Textbox('Metin...', {
      left: window.innerWidth / 2,
      top: window.innerHeight / 2,
      width: 300,
      fill: getStrokeColor(),
      fontSize: 24,
      fontFamily: 'sans-serif',
      dynamicMinWidth: true
    });
    text.setControlsVisibility({ mt: false, mb: false });
    wbCanvas.add(text);
    wbCanvas.setActiveObject(text);
    btnSelect.click();
  });

  document.getElementById('wb-add-rect').addEventListener('click', () => {
    wbCanvas.isDrawingMode = false;
    const rect = new fabric.Rect({
      left: window.innerWidth / 2,
      top: window.innerHeight / 2,
      fill: 'transparent',
      stroke: getStrokeColor(),
      strokeWidth: 2,
      width: 100,
      height: 100
    });
    wbCanvas.add(rect);
    wbCanvas.setActiveObject(rect);
    btnSelect.click();
  });

  document.getElementById('wb-add-circle').addEventListener('click', () => {
    wbCanvas.isDrawingMode = false;
    const circle = new fabric.Circle({
      left: window.innerWidth / 2,
      top: window.innerHeight / 2,
      fill: 'transparent',
      stroke: getStrokeColor(),
      strokeWidth: 2,
      radius: 50
    });
    wbCanvas.add(circle);
    wbCanvas.setActiveObject(circle);
    btnSelect.click();
  });

  // Keyboard delete support
  window.addEventListener('keydown', (e) => {
    if (document.getElementById('whiteboard-modal').classList.contains('hidden')) return;
    if (e.key === 'Delete' || e.key === 'Backspace') {
      // Don't delete if we are typing inside an active IText or Math field or input
      if (wbCanvas.getActiveObject() && wbCanvas.getActiveObject().isEditing) return;
      const tag = document.activeElement.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'MATH-FIELD') return;

      const activeObjects = wbCanvas.getActiveObjects();
      if (activeObjects.length) {
        activeObjects.forEach(obj => wbCanvas.remove(obj));
        wbCanvas.discardActiveObject();
        scheduleWbSave();
      }
    }
  });

  // Never lose the last edits on app close
  window.addEventListener('beforeunload', () => {
    if (wbCurrentProjId && wbSaveTimer) flushWbSave();
  });
}

// Old boards were saved with editable "i-text" objects; we now use "textbox"
// everywhere. Convert on the parsed structure (never with string replace,
// which could corrupt user text containing the same literal).
function convertITextToTextbox(node) {
  if (!node || typeof node !== 'object') return;
  if (node.type === 'i-text') node.type = 'textbox';
  if (Array.isArray(node.objects)) node.objects.forEach(convertITextToTextbox);
}

function openWhiteboard(id) {
  const found = findCard(id);
  if (!found) return;
  const p = found.project;
  wbCurrentProjId = id;

  document.getElementById('whiteboard-modal').classList.remove('hidden');
  document.getElementById('wb-title').textContent = (p.name || 'Proj') + ' - ' + t('wbTitle');

  const hex = p.color ? CARD_COLORS.find(c => c.key === p.color)?.hex : 'transparent';
  document.getElementById('wb-color').style.backgroundColor = hex;

  initWhiteboard();

  // Ensure canvas is resized to the visible container
  const bodyEl = document.getElementById('wb-body');
  wbCanvas.setWidth(bodyEl.clientWidth);
  wbCanvas.setHeight(bodyEl.clientHeight);

  document.getElementById('wb-tool-select').click(); // Default select tool

  // Clear any existing math wrappers
  document.querySelectorAll('.math-wrapper').forEach(e => e.remove());

  const runMigration = () => {
    if (!p.notesMigrated && p.notes && p.notes.trim().length > 0) {
      const isLight = document.querySelector('.whiteboard-container').classList.contains('force-light');
      const textColor = isLight ? '#111111' : '#e6e8ec';
      const oldNotesText = new fabric.Textbox(p.notes, {
        left: 50,
        top: 50,
        width: 400,
        fill: textColor,
        fontSize: 20,
        fontFamily: 'sans-serif',
        dynamicMinWidth: true
      });
      oldNotesText.setControlsVisibility({ mt: false, mb: false });
      wbCanvas.add(oldNotesText);
      p.notesMigrated = true;
      scheduleWbSave();
    }
  };

  wbCanvas.clear();
  wbCanvas.setViewportTransform([1,0,0,1,0,0]);

  const savedVpt = p.whiteboardData ? p.whiteboardData.viewportTransform : null;

  if (p.whiteboardData) {
    let canvasData = p.whiteboardData.canvas;
    if (canvasData) {
      canvasData = typeof canvasData === 'string' ? JSON.parse(canvasData) : JSON.parse(JSON.stringify(canvasData));
      convertITextToTextbox(canvasData);
    }

    wbCanvas.loadFromJSON(canvasData, function() {
      wbCanvas.getObjects().forEach(obj => {
        if (obj.type === 'textbox') {
          obj.set({ dynamicMinWidth: true });
          obj.setControlsVisibility({ mt: false, mb: false });
        }
      });
      if (savedVpt && Array.isArray(savedVpt) && savedVpt.length === 6) {
        wbCanvas.setViewportTransform(savedVpt.slice());
      }
      runMigration();
      wbCanvas.requestRenderAll();
    });
    if (p.whiteboardData.mathList) {
      p.whiteboardData.mathList.forEach(m => {
        addMathEquation(null, m.x, m.y, m.value);
      });
    }
  } else {
    runMigration();
  }
}

function closeWhiteboard() {
  flushWbSave();
  document.getElementById('whiteboard-modal').classList.add('hidden');
  wbCurrentProjId = null;
  render();
  maybeRunPendingReload();
}

function saveWhiteboardData() {
  if (!wbCurrentProjId) return;
  const found = findCard(wbCurrentProjId);
  if (!found) return;

  const mathElements = document.querySelectorAll('.math-wrapper');
  const mathList = Array.from(mathElements).map(el => {
    const mf = el.querySelector('math-field');
    return {
      x: el.style.left,
      y: el.style.top,
      value: mf.getValue('latex')
    };
  });

  found.project.whiteboardData = {
    canvas: wbCanvas.toJSON(),
    mathList: mathList,
    viewportTransform: wbCanvas.viewportTransform.slice(),
    zoom: wbCanvas.getZoom()
  };

  found.project.updatedAt = new Date().toISOString();
  persistProjects();
}

function addMathEquation(e, x = '100px', y = '100px', value = '') {
  const wrapper = document.createElement('div');
  wrapper.className = 'math-wrapper highlight';
  setTimeout(() => wrapper.classList.remove('highlight'), 2000);
  wrapper.style.left = x;
  wrapper.style.top = y;

  const mf = document.createElement('math-field');
  const initialValue = value || 'f(x) = x^2';
  mf.setValue(initialValue, {suppressChangeNotifications: true});
  // Virtual Keyboard explicitly disabled as requested
  mf.mathVirtualKeyboardPolicy = "none";
  mf.addEventListener('input', () => scheduleWbSave());

  const closeBtn = document.createElement('div');
  closeBtn.className = 'math-close';
  closeBtn.textContent = '×';
  closeBtn.addEventListener('click', () => {
    wrapper.remove();
    scheduleWbSave();
  });

  wrapper.appendChild(mf);
  wrapper.appendChild(closeBtn);
  wrapper.style.pointerEvents = 'auto';

  let mathContainer = document.getElementById('wb-math-container');
  if (mathContainer) {
    mathContainer.appendChild(wrapper);
  } else {
    document.getElementById('wb-body').appendChild(wrapper);
  }

  // Draggable logic for math wrapper. Document-level listeners are attached
  // only for the duration of a drag (and removed on mouseup) so repeated
  // whiteboard openings don't accumulate global listeners.
  wrapper.addEventListener('mousedown', (ev) => {
    if (ev.target.tagName === 'MATH-FIELD' || ev.target.className === 'math-close') return;
    const startX = ev.clientX;
    const startY = ev.clientY;
    const startLeft = parseInt(wrapper.style.left || 0, 10);
    const startTop = parseInt(wrapper.style.top || 0, 10);
    // The math container is scaled by the canvas viewport transform, so
    // convert screen-pixel deltas into board coordinates.
    const scale = wbCanvas ? (wbCanvas.viewportTransform[0] || 1) : 1;
    ev.preventDefault();

    const onMove = (mv) => {
      wrapper.style.left = (startLeft + (mv.clientX - startX) / scale) + 'px';
      wrapper.style.top = (startTop + (mv.clientY - startY) / scale) + 'px';
    };
    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      scheduleWbSave();
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  });
}

function sanitizeFilename(name) {
  return (name || 'whiteboard')
    .replace(/[\\/:*?"<>|]/g, '_')
    .trim()
    .slice(0, 80) || 'whiteboard';
}

function exportWhiteboardPDF() {
  const found = wbCurrentProjId ? findCard(wbCurrentProjId) : null;
  const base = found ? sanitizeFilename(found.project.name) : 'whiteboard';
  const element = document.getElementById('wb-body');
  const opt = {
    margin:       0,
    filename:     base + '-tahta.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
  };
  html2pdf().set(opt).from(element).save();
}
