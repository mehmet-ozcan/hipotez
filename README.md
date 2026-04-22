# Hipotez

Akademisyenler için, üzerinde çalışılan ve ileriye dönük akademik projeleri takip etmeyi sağlayan masaüstü uygulama. Üç sütunlu Kanban görünümü, aşama takibi, bulut senkronizasyonu ve karanlık tema.

> An academic project planner: three-column Kanban view, stage tracking, cloud sync, dark UI. Built with Electron.

---

## Özellikler

- **Üç bölümlü görünüm**: Üzerinde Çalışılan · Gelecek Projeler · Bitmiş Projeler
- **Proje kartları**: proje adı, ortak yazarlar, proje tipi, aşama, yerel klasör bağlantısı, kart rengi
- **Aşamalar**: Planlama → Taslak Oluşturma → Ampirik Analiz → Tartışma-Sonuç → Gönderi Öncesi Cilalama → Gönderildi → Hakem Düzeltmesi
- **Proje tipleri**: Makale, Sempozyum-Bildiri, Kitap Bölümü, Kitap, Araştırma Projesi, Belirsiz
- **Ayarlanabilir**: Yazı boyutu, arka plan rengi, kart rengi, dil (TR/EN)
- **Senkronizasyon**: Google Drive / OneDrive / Dropbox klasörü üzerinden çoklu cihaz senkronizasyonu (sunucu gerekmez)
- **Yedekleme**: JSON olarak dışa/içe aktarım
- **Karanlık tema**, modern ve sade tasarım

---

## Kurulum (son kullanıcı)

1. [Releases](../../releases) sayfasından en son `Hipotez Setup x.y.z.exe` dosyasını indir.
2. Çift tıklayıp kurulum sihirbazını takip et.
3. Uygulamayı aç, sağ üstteki ⚙ ikonuna tıklayarak dil, yazı boyutu ve bulut klasörünü ayarla.

### Çoklu bilgisayar senkronizasyonu

1. Google Drive (veya OneDrive/Dropbox) içinde bir `Hipotez` klasörü oluştur.
2. Her bilgisayarda uygulamayı kur → **Ayarlar → Veri Klasörünü Seç…** ile aynı klasörü seç.
3. Veriler (projeler + ayarlar) otomatik olarak tüm cihazlarda senkronize olur.

---

## Geliştirme

### Gereksinimler

- [Node.js](https://nodejs.org/) 18 veya üzeri
- Windows 10/11 (derleme için)

### Çalıştır

```bash
git clone https://github.com/<kullanici>/hipotez.git
cd hipotez
npm install
npm start
```

### `.exe` kurulum dosyası üret

```bash
npm run dist
```

Çıktı: `dist/Hipotez Setup x.y.z.exe`

---

## Dizin yapısı

```
.
├── main.js          # Electron ana süreç (pencere, IPC, dosya izleyici)
├── preload.js       # Güvenli IPC köprüsü
├── renderer.js      # UI mantığı, i18n, state
├── index.html       # Arayüz
├── styles.css       # Karanlık tema + responsive layout
├── assets/          # Logo ve ikon dosyaları
│   ├── logo2.png
│   ├── app-icon.ico
│   └── app-icon.png
└── package.json     # electron-builder yapılandırması
```

## Veri saklama

| Dosya | Konum (varsayılan) | Açıklama |
|---|---|---|
| `projects.json` | `%APPDATA%\Hipotez\` veya seçtiğin bulut klasörü | Tüm projeler |
| `settings.json` | Aynı klasör | Font, arka plan, dil, vb. |
| `sync-config.json` | Her zaman `%APPDATA%\Hipotez\` | Bulut klasörünün yerel yolu (PC'ye özgü) |

---

## Lisans

**Tüm hakları saklıdır** © 2026 Mehmet Özcan — ayrıntılar için [LICENSE](LICENSE).

Kaynak kodu incelemeye açıktır; ancak **değiştirilemez, yeniden dağıtılamaz** ve yazılı izin olmaksızın türev çalışma oluşturulamaz. Son kullanıcı olarak bu repo'nun [Releases](../../releases) sayfasından resmi `.exe` dosyasını indirip kurabilir ve kişisel/akademik amaçla kullanabilirsin.

Uygulama, [Doç. Dr. Mehmet Özcan](https://www.ozcanmehmet.com) tarafından geliştirilmiştir.
