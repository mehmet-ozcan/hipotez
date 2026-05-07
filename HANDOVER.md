# Hipotez — Geliştirici Devir Notu (Handover)

> **YAPAY ZEKA (AGENT) İÇİN ÖZEL NOT:** 
> Bu dosya, projede şimdiye kadar yapılan işleri, mimariyi ve dikkat edilmesi gereken çok hassas kuralları **herhangi bir yapay zekanın (Agent) veya geliştiricinin** projeyi sıfırdan ve eksiksiz anlayabilmesi için hazırlanmıştır. Geliştirmeye başlamadan önce bu dosyayı baştan sona dikkatlice okuyun.

---

## 1. Proje Kimliği ve Temel Mimari

- **Ad:** Hipotez — Academic Project Planner
- **Sahip:** Doç. Dr. Mehmet Özcan — <https://www.ozcanmehmet.com>
- **Repo:** <https://github.com/mehmet-ozcan/hipotez>
- **Mevcut Sürüm:** `2.1.0`
- **Teknoloji:** Electron 33 + Node.js + Vanilla JavaScript, HTML, CSS. Projede interaktif beyaz tahta için `Fabric.js`, matematiksel denklemler için `MathLive` ve dışa aktarım için `html2pdf.js` kütüphaneleri kullanılmaktadır (Büyük bir UI framework'ü kullanılmamaktadır). Paketlenme `electron-builder` 25 ile (NSIS x64) yapılmaktadır.
- **Dil:** Arayüz TR/EN i18n destekli, kod yorumları Türkçe ve İngilizce karışıktır. İletişim dili **Türkçe** olmalıdır.
- **Platform:** Windows (öncelikli platform, `appUserModelId` ve `.exe` özel yapılandırmaları mevcuttur).

### Dosya Yapısı ve İşlevler

```text
hipotez/
├── main.js           # Electron ana süreci (Main Process). Pencere yönetimi, IPC handler'ları, FileWatcher (fs.watch) ve dış komutlar (explorer.exe vb.).
├── preload.js        # contextBridge ile IPC köprüsü (Güvenlik katmanı).
├── renderer.js       # Tüm UI mantığı (Kanban drag-drop, state yönetimi, i18n, popover ve DOM manipülasyonu).
├── index.html        # Tek sayfalık arayüz iskeleti.
├── styles.css        # Vanilla CSS, CSS değişkenleri ile tema yönetimi, sürükle-bırak animasyonları.
├── package.json      # Bağımlılıklar ve electron-builder build (dist) ayarları.
├── .claude/          # Güvenlik ve yapay zeka atıf kısıtlamalarını içeren klasör.
└── assets/           # İkonlar ve logolar.
```

---

## 2. Veri Yönetimi ve Senkronizasyon (Cloud Sync)

Uygulama sunucusuz (serverless) çalışır ve verileri yerel JSON dosyalarında tutar. Kullanıcı, verileri Google Drive, Dropbox veya OneDrive gibi senkronizasyon araçlarının klasörlerine kaydederek cihazlar arası eşzamanlama sağlar.

- **`projects.json`**: Tahtadaki kartların (ongoing, future, completed) tutulduğu veri dosyası.
- **`settings.json`**: Tema, font boyutu, dil seçeneği, sütun sırası (`colOrder`) ve özel sütun başlıkları (`colNames`) gibi kişisel ayarların tutulduğu dosya.
- **`sync-config.json`**: Bulut klasörünün (veri klasörünün) yolunu tutan, her cihaza özel olan yapılandırma dosyasıdır. (Genellikle `%APPDATA%\Hipotez\` altında bulunur).

**FileWatcher Entegrasyonu:**
`main.js` içerisinde bir `fs.watch` mekanizması çalışır. Eğer başka bir cihazdan bulut klasöründeki JSON dosyaları güncellenirse, uygulama içi FileWatcher bunu tespit edip `renderer.js`'ye haber verir ve UI otomatik yenilenir. Çift tetiklemeleri önlemek için `lastSelfWrite` debounce mekanizması bulunmaktadır.

---

## 3. UI/UX ve Özellik Detayları (`renderer.js`)

### Kanban Tahtası ve Kartlar
- **3 Ana Sütun:** Üzerinde Çalışılan, Gelecek Projeler, Bitmiş Projeler.
- **Sütun Özelleştirme:** Kolonlar kendi aralarında sürüklenebilir ve sıraları kaydedilir (`state.settings.colOrder`). Kolon başlıkları tıklanarak düzenlenebilir (içerik `state.settings.colNames` olarak kaydedilir).
- **Kart İçi Drag & Drop:** HTML5 drag-and-drop API kullanılarak aynı veya farklı sütunlara taşınabilir. Drop esnasında kartın y eksenindeki (Y) pozisyonuna göre hedef indeks (`computeDropIndex`) belirlenir.
- **Renk Paleti:** Kartlara 24 farklı renk atanabilir.
- **Proje Aşaması (Stage Select):** Kart altındaki aşama göstergesi (stage-pill) doğrudan `<select>` elementi ile açılır menüdür. (Fikir, Planlama, Literatür, Ampirik vb.).

### Beyaz Tahta (Whiteboard) ve Çalışma Alanı
- **Miro Tarzı Sonsuz Çalışma Alanı:** Eski versiyondaki basit metin tabanlı "Notlar" özelliği yerine her proje için özel bir interaktif Beyaz Tahta (Whiteboard) eklenmiştir. Karttaki notlar simgesine tıklandığında `openWhiteboard(project.id)` çalışır.
- **Özellikler:** `Fabric.js` kullanılarak serbest çizim, şekiller (dikdörtgen, çember), resim ekleme, zengin metin ve `MathLive` ile matematiksel denklem ekleme özellikleri bulunur. Tahta içeriği canvas state olarak JSON formatında kaydedilir. Panning (kaydırma) ve zooming (yakınlaştırma) özellikleri mevcuttur.
- **PDF Dışa Aktarım:** Beyaz tahta içeriği `html2pdf.js` ile PDF olarak dışa aktarılabilir.
- **Dinamik Tema:** Beyaz tahta, açık ve koyu tema arasında geçiş yapabilir.

### Ekstra Özellikler ve Pop-over'lar
- **Klasör Aç Düğmesi:** 
  Windows Explorer'ın navigasyon bölmesi (navigation pane) sorunu yaşamaması adına, `main.js` içindeki `folder:open` IPC handler'ı `shell.openPath` yerine doğrudan `child_process.spawn('explorer.exe', [path])` kullanılarak çalıştırılmaktadır.
- **Dinamik Popover Sistemi:** 
  Tarih seçimi (`<input type="date">`) için dinamik bir popover altyapısı mevcuttur. Popover pozisyonları ekran kenarlarına taştığında (`positionPopover`) dinamik olarak ters yöne açılır (flip). Eski "Notlar" popover'ı yerini büyük ölçüde Beyaz Tahta'ya bırakmıştır.
- **Gizli Kartlar (Pin Lock):** 
  Projeler kilitlenebilir (`p.hidden`). Kilitli kartlara tıklanamaz, içerikleri bulanıklaştırılır (CSS: `filter: blur()`). Açmak için 4 haneli PIN girilmesi gerekir.

---

## 4. Yayın (Release) ve Paketleme Akışı

Her iş/görev tamamlandığında ve çalışırlığı onaylandığında aşağıdaki standart akış (veya bu akışın hatırlatılması) beklenir:

```bash
# 1) Sürüm yükselt (package.json içindeki versiyon güncellenir)
# 2) Installer üret:
npm run dist
# Bu işlem dist/ altında "Hipotez Setup x.y.z.exe" üretir.

# 3) Git işlemleri (Commit, Tag, Push):
git add -A
git commit -m "feat: yeni özellik eklendi"
git tag vX.Y.Z
git push origin main
git push origin vX.Y.Z

# 4) GitHub Release (gh CLI ile):
gh release create vX.Y.Z "dist/Hipotez Setup X.Y.Z.exe" --title "Hipotez vX.Y.Z" --notes "Sürüm notları..."
```

---

## 5. ÇOK ÖNEMLİ — Atıf (Attribution) Kuralı 🚨

**Bu proje kapsamında kullanıcının EN HASSAS OLDUĞU KONU budur. İhlal edilmesi halinde güven kaybı oluşur ve işlemler reddedilir.**

Kullanıcı, hiçbir commit mesajında, PR'da veya kod içeriğinde yapay zeka (AI) atfının bulunmasını KESİNLİKLE İSTEMİYOR. Bu durum repoyu temiz tutmak için tasarlanmıştır (`.claude/settings.json` ile koruma altına alınmıştır).

### Kesin Kurallar:
1. **ASLA** commit mesajlarına yapay zeka ortak yazar satırı (`Co-authored-by: ...`) veya `Generated with AI` vb. imzalar EKLEMEYİN.
2. **ASLA** Pull Request açıklamalarına robot emojisi veya AI imzası EKLEMEYİN.
3. **ASLA** kod veya dosya yorumlarının (yorum satırlarının) içine kendinize ait bir atıf EKLEMEYİN.
4. Git commit atarken her zaman temiz, standart formatlı (Örn: `feat: add ...`, `fix: resolve ...`) commit mesajları kullanın.
5. Kullanıcı açıkça talep etmedikçe push, release veya paketleme adımlarını kendiniz çalıştırmayın; ancak iş bitiminde kullanıcıya bu adımları **hatırlatın**.

---

## 6. Yeni Ajan İçin Görev Yönergesi (Checklist)

Projeyi devralan Agent:
1. İşe başlamadan önce `package.json`, `main.js`, `renderer.js` ve `styles.css` dosyalarının genel yapısını incelemelidir.
2. `.claude/settings.json` ve `.claude/settings.local.json` ayarlarını **asla değiştirmemelidir**.
3. Çıktı dili olarak **Türkçe** kullanmalı, açıklamaları ve UI metin güncellemelerini TR/EN i18n sözlüğüne uygun yapmalıdır.
4. Karmaşık bir özellik istenirse, öncelikle nasıl yapılacağına dair (özellikle Vanilla JS DOM manipülasyonu açısından) kullanıcıdan veya `renderer.js`'deki mevcut kod desenlerinden fikir almalıdır. Kütüphane yüklemek yerine mevcut Vanilla JS altyapısına sadık kalınmalıdır.
5. Her işin sonunda yayın (release) akışının geldiğini kullanıcıya kibarca hatırlatmalıdır.

*Bu dosya, projeye katılacak her yeni yapay zeka oturumu veya geliştirici tarafından başlangıç rehberi olarak kullanılacaktır.*
