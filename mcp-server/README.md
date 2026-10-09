# Hipotez MCP Server

Bu klasör, Hipotez'i bir **yapay zeka ajanına** (Claude Desktop veya başka bir
MCP istemcisi) kullandırmanı sağlayan bir **MCP (Model Context Protocol)
sunucusu** içerir. Ajan; kart oluşturabilir, karta diskte bir **dosya yolu
(klasör)** açıp bağlayabilir ve bulgularını/yorumlarını kartın **beyaz
tahtasına** yazabilir.

Sunucu, masaüstü uygulamanın kullandığı **aynı `projects.json`** dosyasını aynı
şemayla okur/yazar. Uygulama açıksa dosyayı izlediği için ajanın yaptığı
değişiklikler **anında** ekranda belirir.

> Harici bağımlılık yoktur — yalnızca Node.js yeterlidir. `npm install`
> gerekmez.

## Gereksinim

- Node.js (uygulamada zaten kullanılıyor). `node -v` çalışıyorsa hazırsın.

## Claude Desktop'a tanıtma

Claude Desktop yapılandırma dosyasını aç:

```
%APPDATA%\Claude\claude_desktop_config.json
```

`mcpServers` altına `hipotez` girdisini ekle (varsa diğer sunucuları silme):

```json
{
  "mcpServers": {
    "hipotez": {
      "command": "C:\\Program Files\\nodejs\\node.exe",
      "args": ["D:\\Programlar\\Hipotez\\Hipotez_v2-v3\\mcp-server\\hipotez-mcp.js"]
    }
  }
}
```

Kaydet ve **Claude Desktop'ı tamamen kapatıp yeniden aç** (sistem tepsisinden de
çıkmış olduğundan emin ol). Artık sohbette "Hipotez'de … bir kart oluştur" gibi
isteklerde bulunabilirsin.

### İsteğe bağlı ortam değişkenleri

`"env"` bloğuyla verilebilir:

| Değişken | Açıklama |
|---|---|
| `HIPOTEZ_DATA_DIR` | `projects.json`'ın bulunduğu klasörü elle belirler. Verilmezse uygulamanın `sync-config.json` → `dataFolder` ayarı, o da yoksa yerel userData klasörü kullanılır. |
| `HIPOTEZ_PROJECTS_DIR` | `createFolder` ile üretilen proje klasörlerinin oluşturulacağı taban dizin. Varsayılan: `<veri klasörü>\ProjectFiles`. |

Örnek:

```json
"hipotez": {
  "command": "C:\\Program Files\\nodejs\\node.exe",
  "args": ["D:\\Programlar\\Hipotez\\Hipotez_v2-v3\\mcp-server\\hipotez-mcp.js"],
  "env": {
    "HIPOTEZ_PROJECTS_DIR": "C:\\Users\\OzcanPC\\Drive'ım\\Calismalar\\Akademik"
  }
}
```

## Sunulan araçlar

| Araç | Ne yapar |
|---|---|
| `get_data_location` | Veri klasörünü ve `projects.json` yolunu döndürür (teşhis). |
| `list_boards` | Panoları, sütunları (id + ad) ve kart sayılarını listeler. |
| `list_cards` | Kartları listeler (pano/sorgu/arşiv filtreleriyle). |
| `get_card` | Bir kartın tüm ayrıntıları + beyaz tahta metinleri. |
| `create_card` | Yeni kart oluşturur; isteğe bağlı klasör açar. |
| `update_card` | Kart alanlarını günceller ve/veya başka pano/sütuna taşır. |
| `set_card_folder` | Karta dosya yolu bağlar; isteğe bağlı klasörü diskte oluşturur. |
| `append_whiteboard_note` | Beyaz tahtaya metin notu (yorum/bulgu) ekler. |
| `get_whiteboard` | Beyaz tahtadaki notları ve matematik ifadelerini döndürür. |

### Türkçe, gördüğün adlarla konuşabilirsin

Pano ve sütunları **uygulamada gördüğün adla** söyleyebilirsin; dahili id
ezberlemen gerekmez. Sunucu şunların hepsini kabul eder:

- Pano: `Araştırma` / `Dersler` / `Danışmanlık` / `Hakemlik` (veya id:
  `research` / `courses` / `advising` / `refereeing`).
- Sütun: kendi verdiğin ad (ör. **"Gelecek Çalışmalar"**), varsayılan Türkçe ad
  (ör. "Gelecek Projeler", "Doktora") ya da id. Kısmi eşleşme de çalışır
  (ör. "gelecek").

Emin değilsen `list_boards` güncel ad ve sayıları gösterir. Eşleşme bulunamazsa
hata mesajı o panodaki **gerçek sütun adlarını** listeler.

## Örnek istek (tamamen Türkçe)

> "Bu çalışma için Hipotez'de **Araştırma** panosunda **Gelecek Çalışmalar**
> sütununa '…' başlıklı bir kart aç, diske bir klasör oluşturup bağla; sonra şu
> yorumları beyaz tahtaya yaz: …"

Ajan sırasıyla `create_card` (board: "Araştırma", column: "Gelecek Çalışmalar",
createFolder: true) ve `append_whiteboard_note` çağırır.

## Sorun giderme: "araç görünmüyor"

Hipotez araçları sohbette çıkmıyorsa sırayla:

1. **Girdi config'te duruyor mu?** `claude_desktop_config.json` → `mcpServers`
   içinde `hipotez` olmalı. Uygulama bazen açıkken yapılan elle değişiklikleri
   kapanırken geri yazabiliyor. En garantili yol: **Claude Desktop'ı tamamen
   kapat** (sistem tepsisi → Çıkış) ve `register-claude.bat` dosyasına çift
   tıkla; bu, girdiyi uygulama kapalıyken yazar. Sonra Claude'u başlat.
2. **Tam yeniden başlatma.** Pencereyi kapatmak yetmez; tepsiden Çıkış yapıp
   yeniden aç. Sunucu kodunu her değiştirdiğinde de bu gerekir.
3. **Bağlayıcıyı o sohbet için etkinleştir.** Sohbetteki bağlayıcı/araçlar
   menüsünden `hipotez`i aç (zotero'yu açtığın yerin aynısı). Bir sohbette etkin
   değilse araçlar görünmez.
4. **Doğru yüzey.** Yerel (stdio) sunucular, hesabına **köprülenen** araçlar
   olarak görünür — tıpkı zotero gibi. zotero hangi sohbet/araç menüsünde
   görünüyorsa hipotez de orada görünür. zotero'yu görebildiğin bir yerde dene.
5. **Logları oku.** `%APPDATA%\Claude\logs\mcp.log` ve
   `%APPDATA%\Claude\logs\mcp-server-hipotez.log` sunucunun başlatılıp
   başlatılmadığını ve hata olup olmadığını gösterir.

## Notlar

- Her yazma öncesi `projects.json` otomatik olarak `backups/` klasörüne
  yedeklenir (son 20 yedek tutulur) ve yazma atomiktir (önce `.tmp`, sonra
  rename) — uygulama hiçbir zaman yarım yazılmış dosya görmez.
- Uygulama ile ajan aynı anda aynı karti düzenlerse **son yazan kazanır**. Ajan
  her işlemde dosyayı yazmadan hemen önce en güncel hâlini okur; yine de kritik
  düzenlemeleri aynı anda iki taraftan yapmamaya dikkat et.
- Sunucu stdout'a yalnızca MCP protokol mesajları yazar; günlükler stderr'e
  gider.
