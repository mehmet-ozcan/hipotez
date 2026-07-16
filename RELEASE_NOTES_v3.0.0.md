# Hipotez v3.0.0 — Sürüm Notları

## 🎉 Yeni Özellikler

### Çoklu Pano: Akademik hayatın dört ayağı
Üst bardaki navigasyon ile dört ayrı çalışma alanı:

- **Araştırma** — bilinen üç aşamalı proje panosu (v2 ile aynı akış)
- **Dersler** — varsayılan Lisans / Yüksek Lisans / Doktora sütunları; sütun sayısı 1–4 arasında serbestçe ayarlanabilir
- **Danışmanlık** — YL/Doktora tez süreç takibi; sütunlar eklenebilir, silinebilir, yeniden adlandırılabilir
- **Hakemlik** — tek sütun varsayılanı ve kompakt kartlar (makale adı, dergi, son tarih, klasör)

Tüm kartlarda beyaz tahta ve klasör bağlantısı desteği sürüyor.

### Arşiv Odası
- Araştırma kartları **Terk Edilenler / Yayınlananlar**, hakemlik kartları **Kabul Edilenler / Reddedilenler** kategorilerine tek tuşla arşivlenir (kart üzerindeki kutu simgesi).
- Kategori adları düzenlenebilir; kartlarda arşivlenme tarihi görünür.
- Arşivden **Geri Yükle** veya **Kalıcı Sil**; beyaz tahta arşivde de açılabilir.

### Sürücü harfi otomatik eşleme (Google Drive)
Klasör yolu başka bilgisayarda bulunamadığında uygulama diğer sürücü harflerini otomatik tarar (örn. `G:\Drive\X` yoksa `H:\Drive\X` denenir), bulunca açar ve eşlemeyi o bilgisayara özel yerel yapılandırmaya kaydeder. Veri dosyası tüm bilgisayarlarda aynı kalır.

## 🛡️ Güvenlik ve Veri Güvenliği

- **Atomik kayıt**: dosyalar önce geçici ada yazılır, sonra tek hamlede yerine taşınır — yarım yazılmış dosya asla oluşmaz.
- **Bozuk dosya koruması**: okunamayan veri dosyası sessizce silinmez; `.corrupt-*` kopyası alınır ve kullanıcı uyarılır.
- **Otomatik yedekler**: her açılışta ve içe aktarma öncesinde `backups/` klasörüne rotasyonlu yedek (son 10 adet).
- **Tek örnek kilidi**: uygulama iki kez açılamaz, veri çakışması engellenir.
- **PIN artık SHA-256 hash olarak saklanır** (eski düz PIN otomatik dönüştürülür).
- **Kütüphaneler yerelleştirildi**: fabric.js, MathLive ve html2pdf artık CDN yerine uygulamayla birlikte gelir — internet olmadan da beyaz tahta çalışır; CSP eklendi.

## ⚡ İyileştirmeler

- Beyaz tahta kayıtları artık debounce'lu: zoom/pan/yazım sırasında sürekli disk yazımı yok.
- Beyaz tahta açıkken başka cihazdan gelen senkron değişiklikleri, tahta kapanana kadar ertelenir (üzerine yazma çakışması yok).
- PDF dışa aktarım dosya adı proje adını içerir.
- Pencere büyüt/geri yükle butonu duruma göre ikon değiştirir.
- Yeni uygulama simgesi (Ho3).
- Veri şeması v3'e taşındı; v2 verileri ilk açılışta kayıpsız ve otomatik olarak dönüştürülür (özel sütun adları ve sıralaması dahil).

## 📦 Veri Uyumluluğu

- **v2 → v3**: otomatik, kayıpsız. İlk açılıştan önce `backups/` klasörüne v2 yedeği alınır.
- **Dışa/içe aktarma**: v3 yedekleri tüm panoları ve arşivleri içerir; v2 yedekleri de içe aktarılabilir (otomatik dönüştürülür).
- v3'e geçtikten sonra aynı veri klasörünü v2 sürümüyle **kullanmayın**.
