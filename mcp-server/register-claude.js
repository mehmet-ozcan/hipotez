#!/usr/bin/env node
'use strict';

/*
 * Hipotez MCP — Claude Desktop'a kayıt betiği
 * -------------------------------------------
 * claude_desktop_config.json içindeki "mcpServers" bölümüne "hipotez" girdisini
 * (zotero ile aynı biçimde, yerel stdio sunucusu olarak) ekler. Mevcut diğer
 * sunuculara ve ayarlara dokunmaz. Zaten varsa günceller.
 *
 * ÖNEMLİ: Bu betiği Claude Desktop TAMAMEN KAPALIYKEN çalıştır. Uygulama açıkken
 * yapılan elle değişiklikleri, uygulama kapanırken kendi hafızasından yeniden
 * yazıp silebilir.
 *
 * Kullanım:
 *   node register-claude.js
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

function configPath() {
  if (process.platform === 'win32') {
    const base = process.env.APPDATA || path.join(os.homedir(), 'AppData', 'Roaming');
    return path.join(base, 'Claude', 'claude_desktop_config.json');
  }
  if (process.platform === 'darwin') {
    return path.join(os.homedir(), 'Library', 'Application Support', 'Claude', 'claude_desktop_config.json');
  }
  return path.join(process.env.XDG_CONFIG_HOME || path.join(os.homedir(), '.config'), 'Claude', 'claude_desktop_config.json');
}

// This server file lives next to this script.
const serverScript = path.join(__dirname, 'hipotez-mcp.js');

// Prefer the Node that is running this script; fall back to "node" on PATH.
const nodeCmd = process.execPath || 'node';

function main() {
  const cfgFile = configPath();
  let cfg = {};
  if (fs.existsSync(cfgFile)) {
    try {
      cfg = JSON.parse(fs.readFileSync(cfgFile, 'utf-8'));
    } catch (e) {
      console.error('HATA: Mevcut config geçerli JSON değil, dokunulmadı:', cfgFile);
      console.error(e.message);
      process.exit(1);
    }
  } else {
    fs.mkdirSync(path.dirname(cfgFile), { recursive: true });
  }

  if (!cfg.mcpServers || typeof cfg.mcpServers !== 'object') cfg.mcpServers = {};
  cfg.mcpServers.hipotez = { command: nodeCmd, args: [serverScript] };

  // Atomic write to avoid a half-written config.
  const tmp = cfgFile + '.tmp-register';
  fs.writeFileSync(tmp, JSON.stringify(cfg, null, 2), 'utf-8');
  fs.renameSync(tmp, cfgFile);

  console.log('Tamam. "hipotez" sunucusu kaydedildi:');
  console.log('  config : ' + cfgFile);
  console.log('  command: ' + nodeCmd);
  console.log('  script : ' + serverScript);
  console.log('  mevcut sunucular: ' + Object.keys(cfg.mcpServers).join(', '));
  console.log('\nŞimdi Claude Desktop\'ı başlat. Sohbette bağlayıcı menüsünden "hipotez"i etkinleştir.');
}

main();
