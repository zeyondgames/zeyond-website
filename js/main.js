/*  Zeyond Games · sayfa davranışları
    Dil (TR / EN), mobil menü, aktif bölüm, kaydırınca belirme, kapalı test
    penceresi. Sayfa bu dosya olmadan da okunur;
    yalnızca bu küçük etkileşimler eksik kalır. */

(function () {
  "use strict";

  var kok = document.documentElement;

  /*──────────  DİL  ──────────*/
  /* Metinlerin iki dili HTML'de yan yana durur, CSS gizler. Burada yalnızca
     metin olmayan şeyler değişir: sekme başlığı, açıklama ve
     data-label-tr / data-alt-tr gibi özniteliklerde duran ekran okuyucu
     metinleri. */

  var basliklar = {
    tr: {
      title: "Zeyond Games · Bağımsız Oyun Stüdyosu",
      description: "Zeyond Games, sistem odaklı taktik aksiyon oyunları geliştiren bağımsız bir oyun stüdyosu. Şu an kapalı testte: Hexafield."
    },
    en: {
      title: "Zeyond Games · Video Game Studio",
      description: "Zeyond Games is an independent video game studio building systems-driven tactical action games. Now in closed test: Hexafield."
    }
  };

  function diliUygula(dil) {
    kok.lang = dil;
    // Devlog sayfaları kendi başlığını <html data-title-tr="..."> ile verir
    document.title = kok.getAttribute("data-title-" + dil) || basliklar[dil].title;
    var aciklama = document.querySelector('meta[name="description"]');
    if (aciklama) aciklama.content = kok.getAttribute("data-description-" + dil) || basliklar[dil].description;

    document.querySelectorAll("[data-label-" + dil + "]").forEach(function (el) {
      el.setAttribute("aria-label", el.getAttribute("data-label-" + dil));
    });
    document.querySelectorAll("[data-alt-" + dil + "]").forEach(function (el) {
      el.alt = el.getAttribute("data-alt-" + dil);
    });
  }

  diliUygula(kok.lang === "tr" ? "tr" : "en");

  document.getElementById("dilDugme").addEventListener("click", function () {
    var yeni = kok.lang === "tr" ? "en" : "tr";
    diliUygula(yeni);
    try { localStorage.setItem("zeyond-dil", yeni); } catch (e) {}
  });

  /*──────────  MOBİL MENÜ  ──────────*/

  var cubuk = document.getElementById("cubuk");
  var menuDugme = document.getElementById("menuDugme");

  function menuyuAc(acik) {
    cubuk.classList.toggle("acik", acik);
    menuDugme.setAttribute("aria-expanded", acik ? "true" : "false");
  }

  menuDugme.addEventListener("click", function () {
    menuyuAc(!cubuk.classList.contains("acik"));
  });
  // Bir bağlantıya basınca, dışarı tıklayınca ya da Esc'ye basınca kapanır
  document.querySelectorAll(".baglar a").forEach(function (a) {
    a.addEventListener("click", function () { menuyuAc(false); });
  });
  document.addEventListener("click", function (e) {
    if (!cubuk.contains(e.target)) menuyuAc(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") menuyuAc(false);
  });

  /*──────────  AKTİF BÖLÜM  ──────────*/
  /* Ekranın ortasındaki bölümün menü bağlantısı renklenir. Yalnızca ana
     sayfada; devlog sayfalarında DEVLOG bağlantısı hep renkli kalır. */

  var baglar = document.querySelectorAll(".baglar a");
  if ("IntersectionObserver" in window && document.getElementById("giris")) {
    var bolumGozcu = new IntersectionObserver(function (girdiler) {
      girdiler.forEach(function (g) {
        if (!g.isIntersecting) return;
        baglar.forEach(function (a) {
          a.classList.toggle("aktif", a.getAttribute("href") === "#" + g.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("#giris, .bolum").forEach(function (b) { bolumGozcu.observe(b); });
  }

  /*──────────  KAYDIRINCA BELİRME  ──────────*/
  /* Aynı kaptaki öğeler sırayla, 90 ms arayla belirir (--sira) */

  var belirenler = document.querySelectorAll(".belir");
  if ("IntersectionObserver" in window) {
    belirenler.forEach(function (el) {
      var kardesler = Array.prototype.filter.call(el.parentElement.children, function (k) {
        return k.classList.contains("belir");
      });
      el.style.setProperty("--sira", kardesler.indexOf(el));
    });
    var belirGozcu = new IntersectionObserver(function (girdiler) {
      girdiler.forEach(function (g) {
        if (g.isIntersecting) {
          g.target.classList.add("gorundu");
          belirGozcu.unobserve(g.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    belirenler.forEach(function (el) { belirGozcu.observe(el); });
  } else {
    belirenler.forEach(function (el) { el.classList.add("gorundu"); });
  }

  /*──────────  KAPALI TEST PENCERESİ  ──────────*/
  /* data-ac="pencereId" taşıyan düğme pencereyi açar; çarpı, Esc ya da
     karartılmış arka plana tıklamak kapatır. */

  document.querySelectorAll("[data-ac]").forEach(function (dugme) {
    var pencere = document.getElementById(dugme.getAttribute("data-ac"));
    if (!pencere || typeof pencere.showModal !== "function") return;
    dugme.addEventListener("click", function () { pencere.showModal(); });
  });
  document.querySelectorAll("dialog").forEach(function (pencere) {
    pencere.addEventListener("click", function (e) {
      if (e.target === pencere || e.target.hasAttribute("data-kapat")) pencere.close();
    });
  });

  /*──────────  YIL  ──────────*/

  var yil = document.getElementById("yil");
  if (yil) yil.textContent = new Date().getFullYear();
})();
