# Zeyond Games · web sitesi

Zeyond Games'in kurumsal sitesi: **https://zeyondgames.com**

Sade HTML, CSS ve biraz JavaScript ile yazılmış statik bir site. Build aracı
ya da framework yok. Dosyayı değiştirip `main` dalına gönderdiğinizde
GitHub Pages siteyi bir iki dakika içinde kendiliğinden günceller.

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Sayfanın tüm içeriği: giriş, oyunlar, hakkımızda, iletişim |
| `style.css` | Renkler, yazı tipleri ve tüm görünüm. Renkler en üstte `:root` içinde |
| `js/main.js` | Dil düğmesi, mobil menü, kapalı test penceresi, fragman oynatıcı |
| `404.html` | Olmayan bir adrese girilince açılan sayfa |
| `img/` | Logo, ikonlar, oyun görselleri, ekip fotoğrafları |
| `CNAME` | Alan adı (`zeyondgames.com`). **Silmeyin**, yoksa domain bağlantısı kopar |
| `.nojekyll` | GitHub'ın siteyi olduğu gibi yayınlamasını sağlar. Silmeyin |

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

**Yeni oyun eklemek:** `index.html` içinde `<article class="oyun" ...>`
bloğunu kopyalayıp altına yapıştırın, içindeki metin ve görselleri
değiştirin.

**Yeni ekip üyesi eklemek:** "Kişi kartları" yorumunun altındaki bir
`<li class="kisi ...">` bloğunu kopyalayın. Fotoğrafı `img/ekip/` içine
kare ve yaklaşık 720×720 piksel olarak koyun.

**Görsel eklerken:** Büyük fotoğrafları siteye koymadan önce küçültün
(genişlik 1400 pikseli geçmesin). Büyük dosyalar siteyi yavaşlatır.

## Bilgisayarda önizlemek

`index.html` dosyasına çift tıklayıp tarayıcıda açmanız yeterli.

## Lisans

Açık kaynak değildir. Ayrıntılar için [LICENSE](LICENSE).
