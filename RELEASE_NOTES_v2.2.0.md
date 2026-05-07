# Hipotez v2.2.0 — Release Notes

**Tarih:** 2026-05-07

---

## Yeni Ozellikler

### Yedek Ice Aktarmada Surucu Harfi Esleme
- Yedek dosyasi farkli bir bilgisayardan alindiginda, klasor yollarindaki surucu harfleri (orn. `D:\` → `E:\`) otomatik olarak tespit ediliyor.
- Gecersiz surucu harfleri icin kullaniciya bir eslesme diyalogu sunuluyor.
- Kullanici her eski surucu harfi icin yeni surucu secebiliyor, tum ilgili proje klasor yollari otomatik guncelleniyor.

### Klasor Bulunamadi Uyarisi
- Kart uzerindeki "Klasoru Ac" butonuna tiklandiginda klasor mevcut degilse artik kullaniciya aciklayici bir uyari mesaji gosteriliyor (TR/EN).

---

## Iyilestirmeler

### Beyaz Tahta — Aydinlik Tema
- Header, toolbar butonlari ve matematik alanlari artik aydinlik temada okunabilir renklere sahip.
- Aydinlik tema renk paleti: acik gri arka plan, koyu metin, mavi vurgular.
- Tema gecisinde tum nesne renkleri (yazi, sekil, cizim) genisletilmis bir paletle dogru sekilde donusturuluyor.

### Beyaz Tahta — Gorunum Durumu Kaydi
- Tahta kapatildiginda zoom seviyesi ve pan (kayma) pozisyonu kaydediliyor.
- Tahta yeniden acildiginda tam olarak birakilan sahne geri yukleniyor.
- Zoom degisiklikleri de artik anlik olarak kaydediliyor.

### Beyaz Tahta — Yazi Formatlama Duzeltmesi
- Mevcut yazilarin kalin (bold), italik ve boyut ayarlari yeniden calisir hale getirildi.
- `i-text` → `textbox` migrasyonu sonrasi kirilmis olan tip kontrolleri duzeltildi.

---

## Teknik Detaylar

| Dosya | Degisiklik |
|-------|-----------|
| `main.js` | `collectDriveLetters()`, `remapDriveLetters()` fonksiyonlari eklendi; `data:import` handler'i surucu harfi esleme diyalogu ile genisletildi |
| `renderer.js` | Whiteboard tema gecis mantigi genisletildi; `saveWhiteboardData()` icine `viewportTransform` ve `zoom` eklendi; `openWhiteboard()` icinde viewport geri yukleme duzeltildi; yazi formatlama kontrollerinde `isTextObj()` yardimci fonksiyonu eklendi; `folderNotFound` i18n metinleri eklendi |
| `styles.css` | `.whiteboard-container.force-light` icin header, toolbar, math-wrapper stilleri eklendi |
| `package.json` | Surum `2.1.0` → `2.2.0` |

---

## Tam Surum: 2.2.0
**Platform:** Windows (x64)
