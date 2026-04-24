# Hipotez — Geliştirici Devir Notu (Handover)

> Bu dosya, projede şimdiye kadar yapılan işleri ve dikkat edilmesi gereken noktaları **herhangi bir yapay zekanın / geliştiricinin** sıfırdan anlayabilmesi için hazırlanmıştır. Yeni sezonda bu dosyayı okuyup devam edin.

---

## 1. Proje Kimliği

- **Ad:** Hipotez — Academic Project Planner
- **Sahip:** Mehmet Özcan — <https://www.ozcanmehmet.com>
- **Repo:** <https://github.com/mehmet-ozcan/hipotez>
- **Lisans:** All Rights Reserved (c) 2026 Mehmet Özcan (repoda `LICENSE` dosyası)
- **Mevcut Sürüm:** `1.6.0` (yayınlanmış GitHub Release mevcut)
- **Teknoloji:** Electron 33 + electron-builder 25 (NSIS x64 kurulum)
- **Dil:** Arayüz TR/EN (i18n), kod yorumları TR
- **Platform:** Windows (öncelik), macOS/Linux yapılandırılmamış

### Dosya Yapısı

```
deneme app/
├── main.js           # Electron main process, IPC handlers
├── preload.js        # contextBridge API köprüsü
├── renderer.js       # Tüm UI mantığı (kart/kolon/modal/popover/i18n)
├── index.html        # Tek sayfa shell
├── styles.css        # Tüm stil (tema, kart, popover, sürükle-bırak vs.)
├── assets/           # İkonlar (app-icon.ico, logo2.png, ...)
├── package.json      # v1.6.0, electron-builder build config
├── LICENSE           # All Rights Reserved
├── README.md
└── .claude/
    ├── settings.json         # Ortak ayarlar (attribution kapalı + hooks)
    └── settings.local.json   # Kullanıcıya özel izinler
```

### Çalıştırma

```bash
npm start                # Geliştirme
npm run dist             # Windows x64 NSIS installer üretir (dist/ altına)
```

Kurulum çıktısı: `dist/Hipotez Setup 1.6.0.exe`

---

## 2. v1.5.1 — Klasör Açma Düzeltmesi

**Sorun:** Kart üstündeki "Klasörü Aç" düğmesi `shell.openPath` ile çalışıyor, Windows bu komutla Explorer'ı "Gezinti Bölmesi (Navigation Pane)" zorla açık şekilde başlatıyordu. Kullanıcı gezinti bölmesinin açılmamasını istedi.

**Çözüm:** `main.js` içinde `folder:open` IPC handler'ı `child_process.spawn('explorer.exe', [path])` kullanacak şekilde yeniden yazıldı. Bu yöntem kullanıcının global Explorer tercihine saygı gösteriyor.

```js
// main.js — folder:open (özet)
const { spawn } = require('child_process');
ipcMain.handle('folder:open', async (_e, p) => {
  if (!p || !fs.existsSync(p)) return false;
  if (process.platform === 'win32') {
    const child = spawn('explorer.exe', [path.normalize(p)], {
      detached: true, stdio: 'ignore'
    });
    child.unref();
    return true;
  }
  const err = await shell.openPath(p);  // macOS/Linux fallback
  return err === '';
});
```

---

## 3. v1.6.0 — Yeni Özellikler

### 3.1 Aynı Sütun İçinde Sürükle-Bırak
- HTML5 drag-and-drop, `computeDropIndex(col, y)` ile dikey eksende ekleme indeksi hesaplanıyor.
- **Dikkat:** `computeDropIndex` sürüklenen kartı DOM sorgusundan zaten hariç tuttuğu için eski `if (fromIndex < toIndex) toIndex--` düzeltmesi kaldırıldı (çift düzeltme yapıyordu).
- `showDropIndicator` / `hideDropIndicator` `dragover`/`dragleave`/`drop`/`dragend` olaylarında çağrılıyor.
- CSS: `.drop-indicator { height: 3px; background: var(--accent); ... }`

### 3.2 Tarih & Not İkonlarının Yeri
- Kart içinde `card-extras` satırı `card-foot`tan **önce** üretiliyor (simgeler "Klasörü Aç" tuşunun **üstünde**).
- `renderCardExtras(project)` her zaman başlangıç tarihi pilini emitliyor, hedef tarih ve notlar varsa ek pil ekliyor.
- Yardımcılar: `makeDatePill(kind, iso, project)`, `makeNotesPill(project)`, `flagIconSvg()`, `calendarIconSvg()`.

### 3.3 Notlar Pop-over (Yeniden Boyutlandırılabilir)
- Kart üzerindeki not simgesine tıklayınca açılan pop-over içinde büyük `<textarea>`.
- CSS: `.popover.notes-popover { resize: both; width: 22rem; height: 15rem; overflow: auto; }`
- Kullanıcı pencereyi boyutlandırabiliyor; `Done` ile kaydediliyor, `Esc`/dışarı tıklama iptal.

### 3.4 Tarih Pop-over (Mini Takvim)
- Tarih piline tıklayınca `<input type="date">` içeren küçük pop-over açılıyor.
- Açılır açılmaz `HTMLInputElement.showPicker()` ile native takvim gösteriliyor.
- `Clear` seçeneği hedef tarih için (başlangıç tarihi zorunlu), `Done` kaydediyor.
- `positionPopover`: viewport-aware flip mantığı (alt/sağ sığmazsa üste/sola yerleştiriyor).

### 3.5 Proje Başlangıç Tarihi
- Yeni proje oluşturulurken `startDate: new Date().toISOString().slice(0, 10)` otomatik atanıyor.
- Eski projeler `migrateProjects` içinde `createdAt.slice(0,10)` veya bugüne göre doldurulur (geri uyumlu).
- Kart yüzünde `cardStartLabel` pili ve detay metasında `metaStart` satırı görünür.
- Başlangıç tarihi düzenlenebilir ama **silinemez** (Clear butonu yok).

### Ortak Pop-over Altyapısı
`renderer.js` içinde yeni modül:
- `openDatePopover(anchor, project, kind)` ve `openNotesPopover(anchor, project)`
- `handlePopoverOutside`, `handlePopoverKey`, `closePopover` (`_onBeforeClose` destekli)
- `positionPopover(anchor, el)` — sabit konumlu, kenar taşmasında flip.

### i18n Anahtarları (TR/EN)
Eklendi: `cardStartLabel`, `cardTargetLabel`, `popStartDate`, `popTargetDate`, `popNotes`, `btnClear`, `btnDone`, `metaStart`.

---

## 4. Paketleme & Release Akışı

Her iş bitiminde standart akış (kullanıcı hatırlatılmasını istedi):

```bash
# 1) Sürüm yükselt
# package.json → "version": "x.y.z"

# 2) Installer üret
npm run dist
# Çıktı: dist/Hipotez Setup x.y.z.exe

# 3) Commit + tag + push
git add -A
git commit -m "release: vX.Y.Z"
git tag vX.Y.Z
git push origin main
git push origin vX.Y.Z

# 4) GitHub Release (gh CLI)
gh release create vX.Y.Z "dist/Hipotez Setup X.Y.Z.exe" \
  --title "Hipotez vX.Y.Z" \
  --notes "Sürüm notları..."
```

> **Yol kuralı:** gh CLI Windows'ta `"/c/Program Files/GitHub CLI/gh.exe"` olarak çağrılabilir.

---

## 5. ÇOK ÖNEMLİ — Atıf (Attribution) Kuralı

**Kullanıcı, hiçbir commit / PR / dosya içeriğinde yapay zeka atfının bulunmasını istemiyor.** Geçmişte izinsiz eklendi, temizlendi ve koruma kurulumu yapıldı.

### Yapılan Temizlik
- `v1.6.0` commit'indeki yapay zeka ortak yazar trailer'ı `git commit --amend` ile çıkarıldı.
- `v1.6.0` etiketi yeniden oluşturuldu.
- `git push --force-with-lease origin main` + `git push --force origin v1.6.0` yapıldı.
- Tüm commit'ler doğrulandı: trailer sorgusu boş döndü.

### Kurulan Koruma — `.claude/settings.json`
Dosyada şunlar ayarlı:
- `attribution.commit = ""` ve `attribution.pr = ""`
- `includeCoAuthoredBy = false`
- İki adet `PreToolUse` hook'u: yapay zeka ortak yazar satırı içeren `Bash` komutlarını veya `Write|Edit` içeriklerini **engelliyor** (grep ile tespit + `exit 2`).

### Yapay Zeka İçin Kesin Kurallar
1. **ASLA** commit mesajlarına yapay zeka ortak yazar satırı ekleme.
2. **ASLA** PR açıklamalarına "Generated with Claude Code" / robot emoji / benzeri imzalar ekleme.
3. **ASLA** kod/yorum/dosya içine Claude atfı yazma.
4. Commit yaparken `includeCoAuthoredBy: false` ve `attribution.commit: ""` ayarlarına güven; manuel trailer ekleme.
5. Kullanıcı sormadan sürüm yükseltme / paketleme / push yapma; ama her iş bitiminde akışı **hatırlat**.

### GitHub Contributor Önbelleği (Bilinen Sorun)
- GitHub'ın web UI'sındaki "Contributors" listesi sunucu tarafında async cachelenir. Orphan commit'lerdeki eski yazarlar force-push sonrası saatler/günlerce görünmeye devam edebilir.
- API doğrulaması temiz: `https://api.github.com/repos/mehmet-ozcan/hipotez/contributors` yalnızca `mehmet-ozcan` döndürüyor.
- Kalıcı görünürse GitHub Support'a ticket açılması gerekir (Claude Code bunu yapamaz).

---

## 6. Kullanıcı Hakkında

- **Ad:** Mehmet Özcan
- **Rol:** Akademisyen, Hipotez'in tek sahibi ve geliştiricisi
- **Dil:** Türkçe yanıt bekliyor
- **Tarz:** Net, adım adım açıklama ister; Electron/Node akışında yönlendirme bekliyor; her iş bitiminde paketleme + GitHub push akışının hatırlatılmasını istiyor
- **Hassasiyet:** Atıf konusunda çok hassas. Sormadan atıf eklemek **ağır bir güven kaybı** yarattı — tekrarlama.

---

## 7. Açık / Bekleyen İşler

- **Kodda bekleyen bir iş yok** (v1.6.0 yayınlandı).
- Yeni sezonda kullanıcı yeni özellik getirebilir. Bu dosyayı okuyup v1.6.0 tabanında devam edin.

---

## 8. Yeni Sezon için Yapay Zekaya Hatırlatma

1. İlk iş: `package.json`, `main.js`, `renderer.js`, `styles.css` ve bu dosyayı oku.
2. `.claude/settings.json` ve `.claude/settings.local.json` ayarlarını **değiştirme**, yalnızca zorunluysa ve kullanıcı onayıyla.
3. Kullanıcı dilini (Türkçe) koru.
4. Commit mesajı örneği (doğru):
   ```
   feat: add column filter on kanban board
   ```
   (HİÇBİR trailer ekleme.)
5. Paketleme + push + release akışını iş bitince hatırlat.
6. Bir şey belirsizse **uydurma, sor**.

---

*Son güncelleme: 2026-04-24 — v1.6.0 sonrası devir notu.*
