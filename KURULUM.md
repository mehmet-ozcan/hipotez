# Hipotez — Kurulum ve Derleme

Akademik proje planlayıcı masaüstü uygulaması (Electron).

## .exe kurulum dosyasını üretmek için

1. **Node.js** kur (tek seferlik): <https://nodejs.org/> — LTS sürümünü indir.
2. Bu klasörde PowerShell/CMD aç, şu komutları çalıştır:

   ```
   npm install
   npm run dist
   ```

3. Kurulum dosyası `dist/` klasörüne çıkar:
   `Hipotez Setup 1.0.0.exe`
   Bu dosyaya çift tıklayarak Windows'a kurabilirsin.

## Geliştirme modunda çalıştırmak

```
npm install
npm start
```

## Veri saklama

Projeler `%APPDATA%\Hipotez\projects.json` içinde tutulur.
Uygulamayı kaldırsan bile bu dosya korunur.

## Aşamalar

Planlama · Taslak Oluşturma · Ampirik Analiz · Tartışma-Sonuç ·
Gönderi Öncesi Cilalama · Gönderildi · Hakem Düzeltmesi

## Kullanım

- Her kolonun sağ üstündeki **+** ile proje ekle.
- Kart üstüne tıklayınca düzenleme penceresi açılır; bölüm
  alanından projeyi başka sütuna taşıyabilirsin.
- **Klasörü Aç** butonu, projeye bağladığın yerel klasörü
  Windows Gezgini'nde açar.
