# Hedef: Miro Tarzı Beyaz Tahta ve Görsel Denklem Düzenleyici (V2)

Bu plan, Hipotez uygulamasındaki mevcut standart not penceresini kaldırarak yerine sınırsız (kaydırılabilir ve yakınlaştırılabilir) tema uyumlu bir beyaz tahta ve LaTeX bilmeyi gerektirmeyen **görsel bir matematiksel formül editörünü** eklemeyi hedefler. Geliştirme, mevcut projenizi bozmamak için izole bir kopyada yapılacaktır.

## Kullanıcı İncelemesi Gerekenler (User Review Required)

> [!IMPORTANT]
> **Endişeleriniz Giderildi:**
> 1. **Farklı Klasörde Çalışma:** Mevcut uygulamanız bozulmayacak. Çalışmaya başlamadan önce tüm projenizi `D:\Hipotez\v2_beyaz_tahta_test` adlı yeni bir klasöre kopyalayacağız ve geliştirmeyi sadece orada yapacağız.
> 2. **Tema Uyumu (Açık/Koyu):** Tahta arka planı sabit bir renk olmayacak. Uygulama "Açık Tema"dayken tahta **Beyaz**, yazılar ve çizimler Siyah/Koyu gri olacak. "Koyu Tema"dayken tahta **Koyu Antrasit**, yazılar ise Açık Gri/Beyaz olacak şekilde CSS değişkenleri (variables) ile otomatik geçiş sağlanacak.
> 3. **PDF Olarak Kaydetme:** Miro tarzı sonsuz tahtalarda PDF almak teknik olarak mümkündür. Bunun için iki yöntem kullanabiliriz ve ikisini de ekleyeceğiz:
>    - *Seçili Alanı Aktar:* Tahtanın o an ekranda görünen kısmının (Viewport) fotoğrafını çekip yüksek çözünürlüklü PDF'e çeviren bir "PDF'e Aktar" butonu.
>    - *Çerçeveler (Frames):* Tahta içine sanal "A4 Kağıdı" çerçeveleri ekleyebileceksiniz. Dışarı aktar dediğinizde program sadece bu çerçevelerin içindekileri 1., 2. ve 3. sayfa olarak PDF'e basacak.

## Açık Sorular (Open Questions)

> [!QUESTION]
> MathLive formül editörü, bilgisayar klavyesinden yazmanın yanı sıra ekranda iPad tarzı tıklanabilir bir "Matematiksel Sanal Klavye" açabilir. Bu sanal klavyeyi arayüzde formül yazarken göstermemi ister misiniz?

## Önerilen Değişiklikler (Proposed Changes)

Mevcut proje dosyalarınızda (`index.html`, `renderer.js`, `styles.css`) büyük bir yenileme yapacağız.

### 1. Hazırlık Aşaması
* Proje dosyaları `v2_beyaz_tahta_test` klasörüne kopyalanacak. Terminal üzerinden işlemler sadece bu klasörde yapılacak.

### Frontend (Kullanıcı Arayüzü ve Mantık)

#### [MODIFY] `index.html`
* Eski düz metin kutusu devreden çıkacak.
* Tüm ekranı kaplayacak yeni bir `<div id="whiteboard-container">` alanı eklenecek.
* Üstüne (Header) kartın mevcut ayarlarını (Renk, İsim, Yazar, Tarih vs.) ve **"PDF Olarak Kaydet"** butonunu barındıran bir kontrol çubuğu eklenecek.
* HTML'in `<head>` kısmına CDN üzerinden `MathLive` (Görsel Denklem), `Fabric.js` (Tuval) ve `html2pdf.js` (PDF Alma) kütüphaneleri dahil edilecek.

#### [MODIFY] `styles.css`
* `:root` ve `[data-theme="dark"]` sınıflarına tahta renkleri eklenecek. (Örn: `--board-bg-light: #ffffff; --board-bg-dark: #2d2d30;`)
* Temaya göre formül kutucuklarının ve çizimlerin renklerinin (siyah/beyaz) tersine dönmesini sağlayan CSS filtreleri veya renk değişkenleri yazılacak.

#### [MODIFY] `renderer.js`
* **Tahta Etkileşimleri:** Fare ile Kaydırma (Pan) ve Tekerlek ile Yakınlaştırma (Zoom) fonksiyonları kodlanacak.
* **Denklem Düzenleyici:** Çift tıklandığında veya butona basıldığında görsel Word tarzı denklem düzenleyici (`<math-field>`) açılacak.
* **PDF Motoru:** `html2canvas` ve `jsPDF` birleşimi ile tahtanın görünür kısmını anında PDF'e çevirip bilgisayara indiren fonksiyon yazılacak.

### Backend (Veri Yönetimi)

#### [MODIFY] `main.js` & `preload.js`
* Veritabanı (JSON formatı), tahtanın o anki haritasını (yakınlaştırma seviyesi, şekillerin X ve Y koordinatları) tutacak şekilde esnetilecek.

## Doğrulama Planı (Verification Plan)

Geliştirmeyi tamamladıktan sonra şu adımları test edeceğiz:
1. İzolasyon: Mevcut uygulamanın etkilenmediği, sadece yeni klasörde çalışıldığı görülecek.
2. Tema Değişimi: Sistem veya uygulama teması değiştiğinde tahtanın Beyaz <-> Antrasit geçişi test edilecek.
3. PDF Alma: Tahtaya bir matematik denklemi yazıp, buton aracılığıyla A4 boyutunda düzgün bir PDF elde edildiği doğrulanacak.
