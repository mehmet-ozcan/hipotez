# Hipotez

**🇹🇷 [Türkçe](#türkçe) · 🇬🇧 [English](#english)**

Akademisyenler için, üzerinde çalışılan ve ileriye dönük akademik projeleri takip etmeyi sağlayan masaüstü uygulama. Üç sütunlu Kanban görünümü, aşama takibi, bulut senkronizasyonu ve karanlık tema.

> An academic project planner: three-column Kanban view, stage tracking, cloud sync, dark UI. Built with Electron.

---

## Türkçe

### Özellikler

- **Üç bölümlü görünüm**: Üzerinde Çalışılan · Gelecek Projeler · Bitmiş Projeler
- **Proje kartları**: proje adı, ortak yazarlar, proje tipi, aşama, yerel klasör bağlantısı, kart rengi
- **Aşamalar**: Planlama → Taslak Oluşturma → Ampirik Analiz → Tartışma-Sonuç → Gönderi Öncesi Cilalama → Gönderildi → Hakem Düzeltmesi
- **Proje tipleri**: Makale, Sempozyum-Bildiri, Kitap Bölümü, Kitap, Araştırma Projesi, Belirsiz
- **Ayarlanabilir**: Yazı boyutu, arka plan rengi, kart rengi, dil (TR/EN)
- **Senkronizasyon**: Google Drive / OneDrive / Dropbox klasörü üzerinden çoklu cihaz senkronizasyonu (sunucu gerekmez)
- **Yedekleme**: JSON olarak dışa/içe aktarım
- **Karanlık tema**, modern ve sade tasarım

### Kurulum (son kullanıcı)

1. [Releases](../../releases) sayfasından en son `Hipotez Setup x.y.z.exe` dosyasını indir.
2. Çift tıklayıp kurulum sihirbazını takip et.
3. Uygulamayı aç, sağ üstteki ⚙ ikonuna tıklayarak dil, yazı boyutu ve bulut klasörünü ayarla.

### Çoklu bilgisayar senkronizasyonu

1. Google Drive (veya OneDrive/Dropbox) içinde bir `Hipotez` klasörü oluştur.
2. Her bilgisayarda uygulamayı kur → **Ayarlar → Veri Klasörünü Seç…** ile aynı klasörü seç.
3. Veriler (projeler + ayarlar) otomatik olarak tüm cihazlarda senkronize olur.

### Geliştirme

**Gereksinimler:** [Node.js](https://nodejs.org/) 18+ ve Windows 10/11

```bash
git clone https://github.com/mehmet-ozcan/hipotez.git
cd hipotez
npm install
npm start          # geliştirme modunda çalıştır
npm run dist       # .exe kurulum dosyası üret → dist/
```

### Dizin yapısı

```
.
├── main.js          # Electron ana süreç (pencere, IPC, dosya izleyici)
├── preload.js       # Güvenli IPC köprüsü
├── renderer.js      # UI mantığı, i18n, state
├── index.html       # Arayüz
├── styles.css       # Karanlık tema + responsive layout
├── assets/          # Logo ve ikon dosyaları
└── package.json     # electron-builder yapılandırması
```

### Veri saklama

| Dosya | Konum (varsayılan) | Açıklama |
|---|---|---|
| `projects.json` | `%APPDATA%\Hipotez\` veya seçtiğin bulut klasörü | Tüm projeler |
| `settings.json` | Aynı klasör | Font, arka plan, dil, vb. |
| `sync-config.json` | Her zaman `%APPDATA%\Hipotez\` | Bulut klasörünün yerel yolu (PC'ye özgü) |

### Lisans

**Tüm hakları saklıdır** © 2026 Mehmet Özcan — ayrıntılar için [LICENSE](LICENSE).

Kaynak kodu incelemeye açıktır; ancak **değiştirilemez, yeniden dağıtılamaz** ve yazılı izin olmaksızın türev çalışma oluşturulamaz. Son kullanıcı olarak bu repo'nun [Releases](../../releases) sayfasından resmi `.exe` dosyasını indirip kurabilir ve kişisel/akademik amaçla kullanabilirsin.

Uygulama, [Doç. Dr. Mehmet Özcan](https://www.ozcanmehmet.com) tarafından geliştirilmiştir.

---

## English

### Features

- **Three-column board**: In Progress · Future Projects · Completed Projects
- **Project cards**: name, co-authors, project type, stage, local folder link, card color
- **Stages**: Planning → Drafting → Empirical Analysis → Discussion-Conclusion → Pre-submission Polishing → Submitted → Referee Revision
- **Project types**: Article, Conference Paper, Book Chapter, Book, Research Project, Undecided
- **Customizable**: font size, background color, card color, language (TR/EN)
- **Sync**: multi-device synchronization via a Google Drive / OneDrive / Dropbox folder — no server required
- **Backup**: JSON export / import
- **Dark theme**, modern and minimal design

### Installation (end user)

1. Download the latest `Hipotez Setup x.y.z.exe` from the [Releases](../../releases) page.
2. Double-click it and follow the installer.
3. Launch the app, click the ⚙ icon in the top-right to set language, font size, and cloud folder.

### Multi-device sync

1. Create a `Hipotez` folder inside Google Drive (or OneDrive/Dropbox).
2. On each computer, install the app → **Settings → Choose Data Folder…** and select the same folder.
3. Data (projects + settings) syncs automatically across all devices.

### Development

**Requirements:** [Node.js](https://nodejs.org/) 18+ and Windows 10/11

```bash
git clone https://github.com/mehmet-ozcan/hipotez.git
cd hipotez
npm install
npm start          # run in development mode
npm run dist       # build .exe installer → dist/
```

### Project layout

```
.
├── main.js          # Electron main process (window, IPC, file watcher)
├── preload.js       # Secure IPC bridge
├── renderer.js      # UI logic, i18n, state
├── index.html       # UI markup
├── styles.css       # Dark theme + responsive layout
├── assets/          # Logo and icon files
└── package.json     # electron-builder configuration
```

### Data storage

| File | Default location | Purpose |
|---|---|---|
| `projects.json` | `%APPDATA%\Hipotez\` or your chosen cloud folder | All projects |
| `settings.json` | Same folder | Font, background, language, etc. |
| `sync-config.json` | Always `%APPDATA%\Hipotez\` | Local path to the cloud folder (per-machine) |

### License

**All Rights Reserved** © 2026 Mehmet Özcan — see [LICENSE](LICENSE) for details.

Source code is publicly visible for transparency; however, it **may not be modified, redistributed**, or used to create derivative works without prior written permission. As an end user, you are welcome to download the official `.exe` from the [Releases](../../releases) page of this repository and use the installed application for personal or academic purposes.

Developed by [Assoc. Prof. Dr. Mehmet Özcan](https://www.ozcanmehmet.com).
