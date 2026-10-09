#!/usr/bin/env node
'use strict';

/*
 * Hipotez MCP Server
 * ------------------
 * A zero-dependency Model Context Protocol server (stdio transport, JSON-RPC
 * 2.0, newline-delimited) that lets an AI agent — Claude Desktop or any other
 * MCP client — drive Hipotez: create/update cards, create project folders on
 * disk, and write interpretations onto a card's whiteboard.
 *
 * It reads and writes the SAME projects.json the desktop app uses, in the same
 * schema-3 shape, with atomic writes and rotating backups. The running app
 * watches that file and live-reloads, so the agent's changes appear instantly.
 *
 * Data location (mirrors the app's logic):
 *   1. $HIPOTEZ_DATA_DIR                       (explicit override, if it exists)
 *   2. sync-config.json -> "dataFolder"        (the app's synced data folder)
 *   3. the app's userData directory            (local fallback)
 *
 * No external packages are required — only Node.js built-ins.
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const readline = require('readline');

// ------------------------------------------------------------------ constants

const SERVER_NAME = 'hipotez';
const SERVER_VERSION = '3.0.1';
const PROTOCOL_VERSION = '2025-06-18';

const BOARD_KEYS = ['research', 'courses', 'advising', 'refereeing'];
const STAGE_KEYS = [
  'idea', 'planning', 'literature', 'empirical', 'discussion',
  'polishing', 'submitted', 'revision', 'completed'
];
const TYPE_KEYS = ['article', 'symposium', 'bookChapter', 'book', 'research', 'undecided'];

// Board and default-column display names exactly as they appear in the app's
// UI (TR + EN). Used both for display and for matching boards/columns by the
// name the user actually sees — so commands can be given in Turkish with the
// on-screen names, not internal ids. Custom-renamed columns carry their own
// `name`, which also matches.
const BOARD_LABELS = {
  research:   { tr: 'Araştırma', en: 'Research' },
  courses:    { tr: 'Dersler', en: 'Courses' },
  advising:   { tr: 'Danışmanlık', en: 'Advising' },
  refereeing: { tr: 'Hakemlik', en: 'Refereeing' }
};

const COL_DEFAULT_LABELS = {
  colOngoing:   { tr: 'Üzerinde Çalışılan', en: 'In Progress' },
  colFuture:    { tr: 'Gelecek Projeler', en: 'Future Projects' },
  colCompleted: { tr: 'Bitmiş Projeler', en: 'Completed Projects' },
  colUg:        { tr: 'Lisans', en: 'Undergraduate' },
  colMs:        { tr: 'Yüksek Lisans', en: "Master's" },
  colPhd:       { tr: 'Doktora', en: 'PhD' },
  colRefMain:   { tr: 'Aktif Hakemlikler', en: 'Active Reviews' }
};

// Whiteboard text color for the app's default (dark) theme.
const WB_TEXT_COLOR = '#e6e8ec';

// ------------------------------------------------------------- data locations

function candidateUserDataDirs() {
  const dirs = [];
  if (process.env.HIPOTEZ_USER_DATA) dirs.push(process.env.HIPOTEZ_USER_DATA);
  const names = ['hipotez', 'Hipotez'];
  let base;
  if (process.platform === 'win32') {
    base = process.env.APPDATA || path.join(os.homedir(), 'AppData', 'Roaming');
    for (const n of names) dirs.push(path.join(base, n));
  } else if (process.platform === 'darwin') {
    base = path.join(os.homedir(), 'Library', 'Application Support');
    for (const n of names) dirs.push(path.join(base, n));
  } else {
    base = process.env.XDG_CONFIG_HOME || path.join(os.homedir(), '.config');
    for (const n of names) dirs.push(path.join(base, n));
  }
  return dirs;
}

function resolveUserDataDir() {
  const dirs = candidateUserDataDirs();
  // Prefer a dir that actually holds the app's sync-config.json.
  for (const d of dirs) {
    try { if (fs.existsSync(path.join(d, 'sync-config.json'))) return d; } catch {}
  }
  for (const d of dirs) {
    try { if (fs.existsSync(d)) return d; } catch {}
  }
  return dirs[dirs.length - 1];
}

function resolveDataDir() {
  // 1) explicit override
  const override = process.env.HIPOTEZ_DATA_DIR;
  if (override) {
    try { if (fs.existsSync(override)) return override; } catch {}
  }
  const userData = resolveUserDataDir();
  // 2) synced data folder from sync-config.json
  try {
    const cfgRaw = fs.readFileSync(path.join(userData, 'sync-config.json'), 'utf-8');
    const cfg = JSON.parse(cfgRaw);
    if (cfg && cfg.dataFolder && fs.existsSync(cfg.dataFolder)) return cfg.dataFolder;
  } catch {}
  // 3) local fallback
  return userData;
}

function projectsFile() { return path.join(resolveDataDir(), 'projects.json'); }
function settingsFile() { return path.join(resolveDataDir(), 'settings.json'); }

// ------------------------------------------------------------------ data I/O

function defaultBoards() {
  return {
    research: { columns: [
      { id: 'ongoing', nameKey: 'colOngoing', name: null, cards: [] },
      { id: 'future', nameKey: 'colFuture', name: null, cards: [] },
      { id: 'completed', nameKey: 'colCompleted', name: null, cards: [] }
    ] },
    courses: { columns: [
      { id: 'crs-ug', nameKey: 'colUg', name: null, cards: [] },
      { id: 'crs-ms', nameKey: 'colMs', name: null, cards: [] },
      { id: 'crs-phd', nameKey: 'colPhd', name: null, cards: [] }
    ] },
    advising: { columns: [
      { id: 'adv-ms', nameKey: 'colMs', name: null, cards: [] },
      { id: 'adv-phd', nameKey: 'colPhd', name: null, cards: [] }
    ] },
    refereeing: { columns: [
      { id: 'ref-main', nameKey: 'colRefMain', name: null, cards: [] }
    ] }
  };
}

function defaultArchives() {
  return {
    research: { abandoned: { name: null, cards: [] }, published: { name: null, cards: [] } },
    refereeing: { accepted: { name: null, cards: [] }, rejected: { name: null, cards: [] } }
  };
}

function defaultData() {
  return { schema: 3, boards: defaultBoards(), archives: defaultArchives() };
}

function readProjects() {
  const file = projectsFile();
  if (!fs.existsSync(file)) return defaultData();
  const raw = fs.readFileSync(file, 'utf-8');
  if (!raw.trim()) return defaultData();
  const data = JSON.parse(raw);
  // Make sure every board/column the agent may target exists.
  if (!data.boards) data.boards = defaultBoards();
  const defB = defaultBoards();
  for (const key of BOARD_KEYS) {
    if (!data.boards[key] || !Array.isArray(data.boards[key].columns)) {
      data.boards[key] = defB[key];
    }
    for (const col of data.boards[key].columns) {
      if (!Array.isArray(col.cards)) col.cards = [];
    }
  }
  if (!data.archives) data.archives = defaultArchives();
  if (data.schema !== 3) data.schema = 3;
  return data;
}

function backupProjects(file) {
  try {
    if (!fs.existsSync(file)) return;
    const dir = path.join(path.dirname(file), 'backups');
    fs.mkdirSync(dir, { recursive: true });
    const stamp = new Date().toISOString().replace(/[:T]/g, '-').slice(0, 19);
    fs.copyFileSync(file, path.join(dir, `projects-${stamp}-mcp.json`));
    const files = fs.readdirSync(dir)
      .filter((f) => f.startsWith('projects-') && f.endsWith('.json'))
      .map((f) => ({ f, m: fs.statSync(path.join(dir, f)).mtimeMs }))
      .sort((a, b) => b.m - a.m);
    for (const old of files.slice(20)) {
      try { fs.unlinkSync(path.join(dir, old.f)); } catch {}
    }
  } catch (e) {
    process.stderr.write('backup failed: ' + e.message + '\n');
  }
}

// Atomic write (tmp + rename), identical in spirit to the app's writeJson, so
// the app's watcher never observes a half-written file.
function writeProjects(data) {
  const file = projectsFile();
  fs.mkdirSync(path.dirname(file), { recursive: true });
  backupProjects(file);
  const tmp = file + '.tmp-mcp-' + process.pid;
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2), 'utf-8');
  fs.renameSync(tmp, file);
}

function readSettings() {
  try {
    const raw = fs.readFileSync(settingsFile(), 'utf-8');
    return JSON.parse(raw);
  } catch { return { fontScale: 1, bgPreset: 'charcoal', language: 'tr' }; }
}

// ------------------------------------------------------------------- helpers

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

// The name the user sees for a column in the app.
function colLabel(col) {
  if (col.name) return col.name;
  if (col.nameKey && COL_DEFAULT_LABELS[col.nameKey]) return COL_DEFAULT_LABELS[col.nameKey].tr;
  return col.nameKey || col.id;
}

// The name the user sees for a board.
function boardLabel(key) {
  return BOARD_LABELS[key] ? BOARD_LABELS[key].tr : key;
}

function norm(s) {
  return String(s == null ? '' : s).trim().toLowerCase().replace(/\s+/g, ' ');
}

// Resolve a board reference that may be an internal key ("research") or the
// name the user sees ("Araştırma" / "Research"). Returns the key, or undefined
// if nothing matched.
function resolveBoardKey(ref) {
  const n = norm(ref);
  if (!n) return undefined;
  for (const k of BOARD_KEYS) {
    const l = BOARD_LABELS[k];
    if (norm(k) === n || norm(l.tr) === n || norm(l.en) === n) return k;
  }
  // Looser contains match (e.g. "araştırma panosu").
  for (const k of BOARD_KEYS) {
    const l = BOARD_LABELS[k];
    if (n.includes(norm(l.tr)) || n.includes(norm(l.en))) return k;
  }
  return undefined;
}

// Resolve a column reference within a board. Accepts the column id, the user's
// custom name, or the default Turkish/English label. Returns the column object,
// or undefined if nothing matched.
function resolveColumn(board, ref) {
  const n = norm(ref);
  if (!n) return undefined;
  // 1) exact id
  let col = board.columns.find((c) => norm(c.id) === n);
  if (col) return col;
  // 2) exact custom name
  col = board.columns.find((c) => c.name && norm(c.name) === n);
  if (col) return col;
  // 3) exact default label (tr/en)
  col = board.columns.find((c) => {
    const d = COL_DEFAULT_LABELS[c.nameKey];
    return d && (norm(d.tr) === n || norm(d.en) === n);
  });
  if (col) return col;
  // 4) looser contains match on the displayed name (min 3 chars to stay safe)
  if (n.length >= 3) {
    col = board.columns.find((c) => {
      const disp = norm(colLabel(c));
      return disp.includes(n) || n.includes(disp);
    });
    if (col) return col;
  }
  return undefined;
}

function listColumnsForError(board) {
  return board.columns
    .map((c) => `"${colLabel(c)}" (id: ${c.id})`)
    .join(', ');
}

// Walk every card across boards + archives. fn receives (card, location).
function forEachCard(data, fn) {
  for (const boardKey of BOARD_KEYS) {
    const b = data.boards[boardKey];
    if (!b) continue;
    for (const col of b.columns) {
      for (const card of col.cards) {
        fn(card, { kind: 'board', boardKey, colId: col.id, colLabel: colLabel(col) });
      }
    }
  }
  for (const archKey of Object.keys(data.archives || {})) {
    const arch = data.archives[archKey];
    for (const catKey of Object.keys(arch)) {
      const cat = arch[catKey];
      if (!cat || !Array.isArray(cat.cards)) continue;
      for (const card of cat.cards) {
        fn(card, { kind: 'archive', archKey, catKey });
      }
    }
  }
}

function findCard(data, id) {
  for (const boardKey of BOARD_KEYS) {
    const b = data.boards[boardKey];
    if (!b) continue;
    for (const col of b.columns) {
      const idx = col.cards.findIndex((c) => c.id === id);
      if (idx !== -1) {
        return { card: col.cards[idx], list: col.cards, index: idx,
                 kind: 'board', boardKey, colId: col.id };
      }
    }
  }
  for (const archKey of Object.keys(data.archives || {})) {
    const arch = data.archives[archKey];
    for (const catKey of Object.keys(arch)) {
      const cat = arch[catKey];
      if (!cat || !Array.isArray(cat.cards)) continue;
      const idx = cat.cards.findIndex((c) => c.id === id);
      if (idx !== -1) {
        return { card: cat.cards[idx], list: cat.cards, index: idx,
                 kind: 'archive', archKey, catKey };
      }
    }
  }
  return null;
}

function sanitizeFolderName(name) {
  return String(name || 'Proje')
    .replace(/[<>:"/\\|?*\u0000-\u001f]/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/[. ]+$/g, '')
    .trim()
    .slice(0, 120) || 'Proje';
}

function projectsBaseDir() {
  return process.env.HIPOTEZ_PROJECTS_DIR || path.join(resolveDataDir(), 'ProjectFiles');
}

// Resolve a requested folder to an absolute path and (optionally) create it.
// Absolute paths are used as-is; relative paths and bare names resolve under
// the projects base dir.
function resolveAndMaybeCreateFolder(folder, create) {
  let target;
  if (folder && path.isAbsolute(folder)) {
    target = path.normalize(folder);
  } else {
    const base = projectsBaseDir();
    target = path.normalize(path.join(base, sanitizeFolderName(folder)));
    // Guard against path traversal escaping the base dir for relative inputs.
    if (!target.toLowerCase().startsWith(path.normalize(base).toLowerCase())) {
      throw new Error('Geçersiz göreli klasör yolu: ' + folder);
    }
  }
  if (create) fs.mkdirSync(target, { recursive: true });
  return target;
}

function extractWhiteboardText(card) {
  const out = { notes: [], math: [] };
  const wb = card.whiteboardData;
  if (!wb) return out;
  let canvas = wb.canvas;
  if (typeof canvas === 'string') { try { canvas = JSON.parse(canvas); } catch { canvas = null; } }
  if (canvas && Array.isArray(canvas.objects)) {
    for (const o of canvas.objects) {
      if ((o.type === 'textbox' || o.type === 'i-text') && typeof o.text === 'string') {
        out.notes.push(o.text);
      }
    }
  }
  if (Array.isArray(wb.mathList)) {
    for (const m of wb.mathList) if (m && m.value) out.math.push(m.value);
  }
  return out;
}

function makeCard(fields) {
  const now = new Date().toISOString();
  const type = TYPE_KEYS.includes(fields.type) ? fields.type : 'undecided';
  const stage = STAGE_KEYS.includes(fields.stage) ? fields.stage : 'planning';
  return {
    id: uid(),
    name: fields.name,
    coauthors: fields.coauthors || '',
    type,
    stage,
    folder: fields.folder || null,
    color: fields.color || null,
    targetDate: fields.targetDate || null,
    notes: fields.notes || '',
    hidden: false,
    startDate: now.slice(0, 10),
    createdAt: now,
    updatedAt: now
  };
}

function cardSummary(card, loc) {
  return {
    id: card.id,
    name: card.name,
    board: loc.kind === 'board' ? loc.boardKey : ('archive:' + loc.archKey + '/' + loc.catKey),
    column: loc.kind === 'board' ? loc.colId : undefined,
    type: card.type,
    stage: card.stage,
    folder: card.folder || null,
    targetDate: card.targetDate || null,
    hasWhiteboard: !!card.whiteboardData,
    notesPreview: (card.notes || '').slice(0, 140)
  };
}

// ------------------------------------------------------------------ WB append

function appendWhiteboardNote(card, text, opts) {
  opts = opts || {};
  if (!card.whiteboardData) {
    card.whiteboardData = { canvas: { version: '5.3.0', objects: [] }, mathList: [] };
  }
  let wb = card.whiteboardData;
  if (typeof wb.canvas === 'string') { try { wb.canvas = JSON.parse(wb.canvas); } catch { wb.canvas = { version: '5.3.0', objects: [] }; } }
  if (!wb.canvas || typeof wb.canvas !== 'object') wb.canvas = { version: '5.3.0', objects: [] };
  if (!Array.isArray(wb.canvas.objects)) wb.canvas.objects = [];
  if (!wb.canvas.version) wb.canvas.version = '5.3.0';

  const textboxes = wb.canvas.objects.filter((o) => o.type === 'textbox' || o.type === 'i-text');
  const left = (typeof opts.x === 'number') ? opts.x : 50;
  // Stack beneath existing notes unless an explicit y is given.
  const top = (typeof opts.y === 'number')
    ? opts.y
    : 50 + textboxes.length * 40;

  wb.canvas.objects.push({
    type: 'textbox',
    version: '5.3.0',
    originX: 'left',
    originY: 'top',
    left,
    top,
    width: (typeof opts.width === 'number') ? opts.width : 460,
    fill: opts.color || WB_TEXT_COLOR,
    text: String(text),
    fontSize: (typeof opts.fontSize === 'number') ? opts.fontSize : 20,
    fontFamily: 'sans-serif',
    textAlign: 'left'
  });

  // Keep the card's plain notes from being auto-injected on top of ours.
  card.notesMigrated = true;
  card.updatedAt = new Date().toISOString();
  return { left, top };
}

// --------------------------------------------------------------------- tools

const TOOLS = [
  {
    name: 'get_data_location',
    description: 'Hipotez veri klasörünün yerini ve projects.json yolunu döndürür (kurulum/teşhis için). Returns the resolved Hipotez data folder and projects.json path.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false }
  },
  {
    name: 'list_boards',
    description: 'Tüm panoları, sütunlarını (id + görünen ad) ve kart sayılarını listeler. Lists all boards, their columns (id + display name), and card counts. Use the column id when creating cards.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false }
  },
  {
    name: 'list_cards',
    description: 'Kartları listeler. Lists cards (id, name, board, column, stage, type, folder, whiteboard flag).',
    inputSchema: {
      type: 'object',
      properties: {
        board: { type: 'string', description: 'Yalnızca bu panonun kartları: id ya da gördüğünüz ad. Omit for all boards.' },
        includeArchives: { type: 'boolean', description: 'Arşivlenmiş kartları da dahil et. Default false.' },
        query: { type: 'string', description: 'İsimde/notlarda geçen metne göre filtrele (case-insensitive).' }
      },
      additionalProperties: false
    }
  },
  {
    name: 'get_card',
    description: 'Tek bir kartın tüm ayrıntılarını (beyaz tahta metinleri dahil) döndürür. Returns full details of one card including extracted whiteboard text.',
    inputSchema: {
      type: 'object',
      properties: { id: { type: 'string', description: 'Kart id.' } },
      required: ['id'], additionalProperties: false
    }
  },
  {
    name: 'create_card',
    description: 'Yeni bir kart oluşturur. Creates a new card on a board/column. Optionally creates a project folder on disk and attaches it.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Kart/çalışma başlığı (zorunlu).' },
        board: { type: 'string', description: 'Hedef pano: id ("research"/"courses"/"advising"/"refereeing") ya da gördüğünüz ad ("Araştırma", "Dersler", "Danışmanlık", "Hakemlik"). Default "research".' },
        column: { type: 'string', description: 'Hedef sütun: id ya da uygulamada gördüğünüz sütun adı (ör. "Gelecek Projeler" veya kendi verdiğiniz ad). Emin değilseniz list_boards ile bakın. Omit = ilk sütun.' },
        coauthors: { type: 'string', description: 'Ortak yazarlar / öğrenci / dergi (panoya göre).' },
        type: { type: 'string', enum: TYPE_KEYS, description: 'Çalışma türü (research panosu için). Default "undecided".' },
        stage: { type: 'string', enum: STAGE_KEYS, description: 'Aşama. Default "planning".' },
        notes: { type: 'string', description: 'Kısa not metni.' },
        color: { type: 'string', description: 'Kart rengi anahtarı (ör. "indigo", "ruby").' },
        targetDate: { type: 'string', description: 'Hedef tarih (YYYY-MM-DD).' },
        folder: { type: 'string', description: 'Dosya yolu. Mutlak yol aynen kullanılır; göreli ad projects taban klasörü altına çözülür.' },
        createFolder: { type: 'boolean', description: 'true ise klasörü diskte oluşturur. folder verilmezse başlıktan bir klasör üretilir. Default false.' }
      },
      required: ['name'], additionalProperties: false
    }
  },
  {
    name: 'update_card',
    description: 'Mevcut bir kartı günceller ve/veya başka pano/sütuna taşır. Updates fields of an existing card and/or moves it.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'string', description: 'Kart id (zorunlu).' },
        name: { type: 'string' },
        coauthors: { type: 'string' },
        type: { type: 'string', enum: TYPE_KEYS },
        stage: { type: 'string', enum: STAGE_KEYS },
        notes: { type: 'string' },
        color: { type: 'string' },
        targetDate: { type: ['string', 'null'] },
        folder: { type: ['string', 'null'] },
        board: { type: 'string', description: 'Taşımak için hedef pano: id ya da gördüğünüz ad ("Araştırma" vb.).' },
        column: { type: 'string', description: 'Taşımak için hedef sütun: id ya da gördüğünüz sütun adı.' }
      },
      required: ['id'], additionalProperties: false
    }
  },
  {
    name: 'set_card_folder',
    description: 'Bir kartın dosya yolunu ayarlar ve istenirse klasörü diskte oluşturur. Sets a card\'s folder path and optionally creates the directory on disk.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'string', description: 'Kart id.' },
        folder: { type: 'string', description: 'Mutlak yol ya da göreli ad. Göreli ise projects taban klasörü altına oluşturulur.' },
        create: { type: 'boolean', description: 'Klasörü diskte oluştur. Default true.' }
      },
      required: ['id', 'folder'], additionalProperties: false
    }
  },
  {
    name: 'append_whiteboard_note',
    description: 'Kartın beyaz tahtasına bir metin notu (yorum/bulgu) ekler. Appends a text note to a card\'s whiteboard. Great for saving interpretations and findings.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'string', description: 'Kart id.' },
        text: { type: 'string', description: 'Tahtaya yazılacak metin (çok satırlı olabilir).' },
        x: { type: 'number', description: 'Sol konum (px). Default 50.' },
        y: { type: 'number', description: 'Üst konum (px). Verilmezse mevcut notların altına yerleşir.' },
        fontSize: { type: 'number', description: 'Yazı boyutu. Default 20.' },
        width: { type: 'number', description: 'Metin kutusu genişliği. Default 460.' },
        color: { type: 'string', description: 'Metin rengi (hex). Default koyu tema için açık renk.' }
      },
      required: ['id', 'text'], additionalProperties: false
    }
  },
  {
    name: 'get_whiteboard',
    description: 'Bir kartın beyaz tahtasındaki metin notlarını ve matematik ifadelerini döndürür. Returns the text notes and math expressions on a card\'s whiteboard.',
    inputSchema: {
      type: 'object',
      properties: { id: { type: 'string', description: 'Kart id.' } },
      required: ['id'], additionalProperties: false
    }
  }
];

// ------------------------------------------------------------- tool dispatch

function okText(obj, extraText) {
  const parts = [];
  if (extraText) parts.push(extraText);
  parts.push('```json\n' + JSON.stringify(obj, null, 2) + '\n```');
  return { content: [{ type: 'text', text: parts.join('\n\n') }] };
}

function callTool(name, args) {
  args = args || {};
  switch (name) {
    case 'get_data_location': {
      const dir = resolveDataDir();
      return okText({
        dataDir: dir,
        projectsFile: projectsFile(),
        settingsFile: settingsFile(),
        projectsExists: fs.existsSync(projectsFile()),
        userDataDir: resolveUserDataDir(),
        projectsBaseDir: projectsBaseDir(),
        language: readSettings().language || 'tr'
      }, 'Hipotez veri konumu:');
    }

    case 'list_boards': {
      const data = readProjects();
      const boards = {};
      for (const key of BOARD_KEYS) {
        const b = data.boards[key];
        boards[key] = {
          name: boardLabel(key),
          columns: b.columns.map((c) => ({
            id: c.id, name: colLabel(c), cardCount: c.cards.length
          }))
        };
      }
      return okText({ boards },
        'Panolar ve sütunlar. Kart oluştururken sütunun "name" değerini (gördüğünüz ad) ya da "id" değerini kullanabilirsiniz:');
    }

    case 'list_cards': {
      const data = readProjects();
      const q = (args.query || '').toLowerCase();
      const boardFilter = args.board ? resolveBoardKey(args.board) : null;
      if (args.board && !boardFilter) {
        throw new Error('Pano bulunamadı: "' + args.board + '". Geçerli panolar: ' +
          BOARD_KEYS.map((k) => `"${boardLabel(k)}" (id: ${k})`).join(', '));
      }
      const rows = [];
      forEachCard(data, (card, loc) => {
        if (loc.kind === 'archive' && !args.includeArchives) return;
        if (boardFilter && !(loc.kind === 'board' && loc.boardKey === boardFilter)) return;
        if (q) {
          const hay = (card.name + ' ' + (card.notes || '')).toLowerCase();
          if (!hay.includes(q)) return;
        }
        rows.push(cardSummary(card, loc));
      });
      return okText({ count: rows.length, cards: rows }, rows.length + ' kart bulundu:');
    }

    case 'get_card': {
      const data = readProjects();
      const found = findCard(data, args.id);
      if (!found) throw new Error('Kart bulunamadı: ' + args.id);
      const card = found.card;
      const loc = found.kind === 'board'
        ? { kind: 'board', boardKey: found.boardKey, colId: found.colId }
        : { kind: 'archive', archKey: found.archKey, catKey: found.catKey };
      return okText({
        ...cardSummary(card, loc),
        coauthors: card.coauthors || '',
        color: card.color || null,
        notes: card.notes || '',
        createdAt: card.createdAt, updatedAt: card.updatedAt,
        whiteboard: extractWhiteboardText(card)
      });
    }

    case 'create_card': {
      if (!args.name || !String(args.name).trim()) throw new Error('name zorunludur.');
      const data = readProjects();
      const boardKey = args.board ? resolveBoardKey(args.board) : 'research';
      if (!boardKey) {
        throw new Error('Pano bulunamadı: "' + args.board + '". Geçerli panolar: ' +
          BOARD_KEYS.map((k) => `"${boardLabel(k)}" (id: ${k})`).join(', '));
      }
      const board = data.boards[boardKey];
      let col;
      if (args.column) {
        col = resolveColumn(board, args.column);
        if (!col) {
          throw new Error('Sütun bulunamadı: "' + args.column + '". Bu panodaki sütunlar: ' +
            listColumnsForError(board));
        }
      } else {
        col = board.columns[0];
      }

      let folder = args.folder || null;
      if (args.createFolder) {
        folder = resolveAndMaybeCreateFolder(args.folder || args.name, true);
      } else if (folder && !path.isAbsolute(folder)) {
        folder = resolveAndMaybeCreateFolder(folder, false);
      }

      const card = makeCard({
        name: String(args.name).trim(),
        coauthors: args.coauthors,
        type: args.type,
        stage: args.stage,
        notes: args.notes,
        color: args.color,
        targetDate: args.targetDate,
        folder
      });
      col.cards.push(card);
      writeProjects(data);
      return okText(
        { id: card.id, board: boardKey, column: col.id, folder: card.folder },
        'Kart oluşturuldu. Uygulama açıksa değişiklik anında görünür.'
      );
    }

    case 'update_card': {
      const data = readProjects();
      const found = findCard(data, args.id);
      if (!found) throw new Error('Kart bulunamadı: ' + args.id);
      const card = found.card;
      const set = (k) => Object.prototype.hasOwnProperty.call(args, k);

      if (set('name')) card.name = String(args.name);
      if (set('coauthors')) card.coauthors = String(args.coauthors);
      if (set('type')) {
        if (!TYPE_KEYS.includes(args.type)) throw new Error('Geçersiz type: ' + args.type);
        card.type = args.type;
      }
      if (set('stage')) {
        if (!STAGE_KEYS.includes(args.stage)) throw new Error('Geçersiz stage: ' + args.stage);
        card.stage = args.stage;
      }
      if (set('notes')) card.notes = String(args.notes);
      if (set('color')) card.color = args.color;
      if (set('targetDate')) card.targetDate = args.targetDate || null;
      if (set('folder')) card.folder = args.folder || null;
      card.updatedAt = new Date().toISOString();

      // Optional relocation (board and/or column).
      let moved = null;
      if (set('board') || set('column')) {
        if (found.kind !== 'board') throw new Error('Arşivlenmiş kart taşınamaz.');
        const targetBoardKey = set('board') ? resolveBoardKey(args.board) : found.boardKey;
        if (!targetBoardKey) {
          throw new Error('Pano bulunamadı: "' + args.board + '". Geçerli panolar: ' +
            BOARD_KEYS.map((k) => `"${boardLabel(k)}" (id: ${k})`).join(', '));
        }
        const targetBoard = data.boards[targetBoardKey];
        let targetCol;
        if (set('column')) {
          targetCol = resolveColumn(targetBoard, args.column);
          if (!targetCol) {
            throw new Error('Sütun bulunamadı: "' + args.column + '". Bu panodaki sütunlar: ' +
              listColumnsForError(targetBoard));
          }
        } else {
          targetCol = targetBoard.columns.find((c) => c.id === found.colId) || targetBoard.columns[0];
        }
        if (!(targetBoardKey === found.boardKey && targetCol.id === found.colId)) {
          found.list.splice(found.index, 1);
          targetCol.cards.push(card);
          moved = { board: targetBoardKey, column: targetCol.id };
        }
      }

      writeProjects(data);
      return okText({ id: card.id, moved }, 'Kart güncellendi.');
    }

    case 'set_card_folder': {
      if (!args.folder) throw new Error('folder zorunludur.');
      const data = readProjects();
      const found = findCard(data, args.id);
      if (!found) throw new Error('Kart bulunamadı: ' + args.id);
      const create = args.create !== false;
      const resolved = resolveAndMaybeCreateFolder(args.folder, create);
      found.card.folder = resolved;
      found.card.updatedAt = new Date().toISOString();
      writeProjects(data);
      return okText({ id: args.id, folder: resolved, created: create },
        create ? 'Klasör oluşturuldu ve karta bağlandı.' : 'Klasör yolu karta bağlandı.');
    }

    case 'append_whiteboard_note': {
      if (!args.text || !String(args.text).length) throw new Error('text zorunludur.');
      const data = readProjects();
      const found = findCard(data, args.id);
      if (!found) throw new Error('Kart bulunamadı: ' + args.id);
      const pos = appendWhiteboardNote(found.card, args.text, {
        x: args.x, y: args.y, fontSize: args.fontSize, width: args.width, color: args.color
      });
      writeProjects(data);
      return okText({ id: args.id, placedAt: pos },
        'Not beyaz tahtaya eklendi. Kartın not balonuna tıklayınca görünür.');
    }

    case 'get_whiteboard': {
      const data = readProjects();
      const found = findCard(data, args.id);
      if (!found) throw new Error('Kart bulunamadı: ' + args.id);
      return okText({ id: args.id, whiteboard: extractWhiteboardText(found.card) });
    }

    default:
      throw new Error('Bilinmeyen araç: ' + name);
  }
}

// -------------------------------------------------------------- JSON-RPC core

function send(msg) {
  process.stdout.write(JSON.stringify(msg) + '\n');
}

function handleMessage(msg) {
  if (!msg || msg.jsonrpc !== '2.0') return;
  const { id, method, params } = msg;
  const isNotification = (id === undefined || id === null);

  try {
    if (method === 'initialize') {
      const clientProto = params && typeof params.protocolVersion === 'string'
        ? params.protocolVersion : PROTOCOL_VERSION;
      send({ jsonrpc: '2.0', id, result: {
        protocolVersion: clientProto,
        capabilities: { tools: { listChanged: false } },
        serverInfo: { name: SERVER_NAME, version: SERVER_VERSION, title: 'Hipotez' }
      } });
      return;
    }
    if (method === 'ping') { send({ jsonrpc: '2.0', id, result: {} }); return; }
    if (method === 'tools/list') {
      send({ jsonrpc: '2.0', id, result: { tools: TOOLS } });
      return;
    }
    if (method === 'tools/call') {
      const toolName = params && params.name;
      const args = (params && params.arguments) || {};
      try {
        const result = callTool(toolName, args);
        send({ jsonrpc: '2.0', id, result });
      } catch (err) {
        // Tool-level errors are reported as a normal result with isError so the
        // model can read and recover from them.
        send({ jsonrpc: '2.0', id, result: {
          content: [{ type: 'text', text: 'Hata: ' + (err && err.message ? err.message : String(err)) }],
          isError: true
        } });
      }
      return;
    }
    // Notifications we simply acknowledge by doing nothing.
    if (isNotification) return;
    if (method && method.startsWith('notifications/')) return;

    // Unknown request method.
    send({ jsonrpc: '2.0', id, error: { code: -32601, message: 'Method not found: ' + method } });
  } catch (err) {
    if (!isNotification) {
      send({ jsonrpc: '2.0', id, error: { code: -32603, message: 'Internal error: ' + (err && err.message) } });
    }
    process.stderr.write('handler error: ' + (err && err.stack || err) + '\n');
  }
}

function main() {
  process.stderr.write(`[hipotez-mcp] starting; dataDir=${resolveDataDir()}\n`);
  const rl = readline.createInterface({ input: process.stdin });
  rl.on('line', (line) => {
    const text = line.trim();
    if (!text) return;
    let msg;
    try { msg = JSON.parse(text); }
    catch {
      send({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } });
      return;
    }
    if (Array.isArray(msg)) msg.forEach(handleMessage);
    else handleMessage(msg);
  });
  rl.on('close', () => process.exit(0));
}

main();
