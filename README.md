# Zeyond Games · web sitesi

Zeyond Games'in kurumsal sitesi: **https://zeyondgames.com**

Sade HTML, CSS ve biraz JavaScript ile yazılmış statik bir site. Dosyayı
değiştirip `main` dalına gönderdiğinizde GitHub Pages siteyi bir iki dakika
içinde kendiliğinden günceller. Devlog sayfalarını GitHub'ın yerleşik
Jekyll'ı üretir; bilgisayarınıza bir şey kurmanız gerekmez.

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Sayfanın tüm içeriği: giriş, Hexafield, platformlar, stüdyo, iletişim |
| `style.css` | Renkler, yazı tipleri ve tüm görünüm. Renkler en üstte `:root` içinde |
| `js/main.js` | Dil düğmesi, mobil menü, kapalı test penceresi |
| `404.html` | Olmayan bir adrese girilince açılan sayfa |
| `img/` | Logo, ikonlar, oyun görselleri, ekip fotoğrafları |
| `CNAME` | Alan adı (`zeyondgames.com`). **Silmeyin**, yoksa domain bağlantısı kopar |
| `_posts/` | Devlog yazıları. Her yazı bir `.md` dosyası |
| `devlog/index.html` | Devlog liste sayfası. Yazıları kendiliğinden listeler |
| `_layouts/` | Devlog sayfalarının şablonları (üst çubuk, yazı düzeni) |
| `_config.yml` | Jekyll ayarları |
| `img/devlog/` | Devlog yazılarındaki görseller |

## Devlog yazısı eklemek

1. `_posts/` içinde yeni bir dosya açın. Adı **tarih-ile-baslar.md**
   biçiminde olmalı, örneğin `2026-11-05-yeni-robot-sinifi.md`. Dosya adındaki
   kısım adres olur: `zeyondgames.com/devlog/yeni-robot-sinifi/`. Türkçe
   karakter ve boşluk kullanmayın.
2. Dosyanın en üstüne bu bilgileri yazın:

   ```
   ---
   baslik_tr: Yeni robot sınıfı
   baslik_en: A new robot class
   ozet_tr: Listede görünen bir iki cümlelik özet.
   ozet_en: A one or two sentence summary for the list.
   oyun: HEXAFIELD
   kapak: /img/devlog/yeni-robot.jpg
   ---
   ```

   `oyun` ve `kapak` isteğe bağlı; istemezseniz satırı silin.
3. Altına önce Türkçe metni, sonra `<!-- EN -->` satırını, sonra İngilizce
   metni yazın. Bu satırı tam olarak böyle yazın; sitedeki dil düğmesi metni
   bu satırdan ayırır.
4. Görselleri `img/devlog/` içine koyun (genişlik en fazla 1400 piksel) ve
   metinde şöyle kullanın: `![Robotun ekran görüntüsü](/img/devlog/yeni-robot.jpg)`
5. Gönderin (commit + push). 1-2 dakika sonra yazı `/devlog/` sayfasında
   en üstte görünür.

Metin biçimleri: `## Ara başlık`, `**kalın**`, `- liste maddesi`,
`[bağlantı](https://...)`. Örnek için `_posts/` içindeki ilk yazıya bakın.

Tarihi bugünden ileri bir güne ayarlarsanız yazı o gün gelmeden yayınlanmaz.

Bir yazı yayınlanmadıysa GitHub'da depo sayfasındaki **Actions** sekmesine
bakın. Kırmızı çarpı varsa hata mesajı orada yazar (genellikle üstteki `---`
bölümündeki bir yazım hatası).

## Sık yapılacak değişiklikler

**Bir metni değiştirmek:** `index.html` içinde metni bulun. Her metin iki
dilde yan yana yazılıdır; ikisini de güncelleyin:

```html
<p lang="tr">Türkçe metin</p>
<p lang="en">English text</p>
```

**Sosyal medya linki eklemek:** `index.html` içinde "Sosyal medya" yorumunu
bulun. İlgili satırda `href="#"` yerine linki yazın ve aynı satırdaki
`hidden` kelimesini silin.

**Giriş videosunu (fragman) eklemek:** Sayfanın en üstünde şimdilik bir
oynanış görüntüsü (`img/hexafield/oynanis.jpg`) duruyor. Fragman hazır
olunca:

1. Videoyu `img/hexafield/fragman.mp4` adıyla kaydedin. Ses gerekmez (sessiz
   oynar). 1920×1080 ya da 1280×720, 15-30 saniyelik, başı ve sonu birbirine
   bağlanan bir döngü olsun. Her ziyaretçi videoyu indireceği için dosyayı
   10 MB'ın altında tutmaya çalışın.
2. `index.html` içinde "FRAGMAN HAZIR OLUNCA" yorumunu bulun ve altındaki
   `<video ...>` satırının başındaki `<!--` ve sonundaki `-->` işaretlerini
   silin.

Video yüklenene kadar ve tarayıcı otomatik oynatmaya izin vermezse arkadaki
görüntü görünür. Bilgisayarında "hareketi azalt" ayarı açık olanlara video
oynatılmaz.

**Steam sayfası açılınca:** `index.html` içinde "Steam sayfası açılınca"
yorumunu bulun. Altındaki satırı Steam bağlantısına çevirin (`<p` yerine
`<a href="https://store.steampowered.com/app/..."`, sonundaki `</p>` yerine
`</a>`) ve metni "Steam'de istek listene ekle" / "Wishlist on Steam" yapın.

**Yeni oyun eklemek:** `index.html` içinde `<section class="bolum" id="hexafield">`
bölümünü kopyalayıp yeni bir `id` ile altına yapıştırın, içindeki metin ve
görselleri değiştirin ve üst menüye o bölüme giden bir bağlantı ekleyin.

**Yeni ekip üyesi eklemek:** "Kişi kartları" yorumunun altındaki bir
`<li class="kisi ...">` bloğunu kopyalayın. Fotoğrafı `img/ekip/` içine
kare ve yaklaşık 720×720 piksel olarak koyun.

**Görsel eklerken:** Büyük fotoğrafları siteye koymadan önce küçültün
(genişlik 1400 pikseli geçmesin). Büyük dosyalar siteyi yavaşlatır. Tek
istisna, tüm ekranı kaplayan giriş görüntüsü (`oynanis.jpg`, 1920 piksel).

## Bilgisayarda önizlemek

`index.html` dosyasına çift tıklayıp tarayıcıda açmanız yeterli. Devlog
sayfaları bilgisayarda bu şekilde açılmaz; onları GitHub'a gönderdikten
sonra sitede görürsünüz.

## Lisans

Açık kaynak değildir. Ayrıntılar için [LICENSE](LICENSE).
