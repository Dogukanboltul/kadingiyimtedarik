const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BC%20tedarik%20etmek%20istiyorum.";

const photoWhatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20arad%C4%B1%C4%9F%C4%B1m%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BCn%C3%BCn%20foto%C4%9Fraf%C4%B1n%C4%B1%20g%C3%B6ndermek%20istiyorum.";

const categories = [
  ["BLUZ & ÜST GİYİM", "Yeni sezon kadın bluz ve üst giyim modelleri", "/images/bisou.jpeg"],
  ["BLUZ & ÜST GİYİM", "Yeni sezon bluz ve kadın üst giyim modelleri", "/images/toptankadingiyimmodel.jpeg"],
  ["CEKET", "Sezonluk ve klasik kadın ceket modelleri", "/images/toptanceket.jpeg"],
  ["TAKIM", "Kadın ikili takım ve sezonluk takım modelleri", "/images/model.jpeg"],
  ["DERİ & CEKET", "Yeni sezon kadın ceket ve deri görünümlü modeller", "/images/merterkoleksiyon.jpeg"],
  ["SWEATSHIRT & TRİKO", "Sweatshirt, kazak ve sezonluk üst giyim ürünleri", "/images/kadinkazak.jpeg"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#101828]">

      {/* HEADER */}
      <div className="bg-[#3157d5] px-4 py-2.5 text-center text-[11px] font-black tracking-[0.18em] text-white md:text-xs">AYNI GÜN TEDARİK <span className="mx-2 text-white/40">•</span> AYNI GÜN KARGO</div>
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <div>
            <div className="text-xl font-black tracking-[-0.05em] md:text-2xl">
              KADIN GİYİM
              <span className="text-[#3157d5]"> TEDARİK</span>
            </div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Rota Tedarik
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#urunler">Ürün Grupları</a>
            <a href="#sistem">Nasıl Çalışır?</a>
            <a href="#hakkimizda">Hakkımızda</a>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#101828] px-5 py-3 text-sm font-semibold text-white"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f7f8fb]">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#dce5ff]" />
        <div className="absolute -bottom-52 left-[35%] h-[420px] w-[420px] rounded-full bg-white" />

        <div className="relative mx-auto grid min-h-[700px] max-w-7xl items-center gap-16 px-5 py-20 md:grid-cols-[1.1fr_.9fr] md:px-10">

          <div>
            <div className="inline-flex rounded-full border border-[#3157d5]/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3157d5]">
              İstanbul Kadın Giyim Tedarik Ağı
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.065em] md:text-[82px]">
              Aradığın ürünü
              <br />
              <span className="text-[#3157d5]">biz bulalım.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Butik, mağaza ve online satıcılar için kadın giyim ürün
              tedariği. Aradığınız modelin fotoğrafını gönderin,
              İstanbul tekstil piyasasında sizin için araştıralım.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={photoWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#3157d5] px-7 py-4 text-center text-sm font-bold text-white shadow-lg shadow-blue-200"
              >
                📷 Ürün Fotoğrafı Gönder
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-300 bg-white px-7 py-4 text-center text-sm font-bold"
              >
                WhatsApp'tan Yaz
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500">
              <span>✓ Butiklere özel</span>
              <span>✓ Türkiye geneli</span>
              <span>✓ Kıbrıs gönderimi</span>
            </div>
          </div>

          {/* HERO PANEL */}
          <div className="relative">
            <div className="premium-shadow overflow-hidden rounded-[2rem] bg-[#101828] p-5 text-white md:p-6">

              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60"></span>
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400"></span>
                    </span>

                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
                      TEDARİK MASASI
                    </p>
                  </div>

                  <h2 className="mt-3 text-2xl font-black tracking-[-0.04em]">
                    Bugün aranan ürünler
                  </h2>
                </div>

                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-bold text-white/60">
                  İSTANBUL
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2.5">
                {[
                  ["/images/bisou.jpeg", "Elbise"],
                  ["/images/toptankadingiyimmodel.jpeg", "Takım"],
                  ["/images/toptanceket.jpeg", "Ceket"],
                ].map(([image, name]) => (
                  <a
                    key={name}
                    href={photoWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-[3/4] overflow-hidden rounded-[1.1rem] bg-white/5"
                  >
                    <img
                      src={image}
                      alt={`${name} kadın giyim tedarik`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    <span className="absolute bottom-3 left-3 text-xs font-bold">
                      {name}
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-5 rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                      NASIL ÇALIŞIR?
                    </p>

                    <p className="mt-2 max-w-[280px] text-sm font-semibold leading-6 text-white/90">
                      Ürünün fotoğrafını gönder, İstanbul tekstil
                      piyasasında senin için araştıralım.
                    </p>
                  </div>

                  <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3157d5] text-lg sm:flex">
                    ↗
                  </div>
                </div>
              </div>

              <a
                href={photoWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-between rounded-[1.15rem] bg-white px-5 py-4 text-[#101828] transition hover:bg-[#f2f5ff]"
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#3157d5]">
                    WHATSAPP
                  </p>
                  <p className="mt-1 text-sm font-black">
                    Aradığın ürünü gönder
                  </p>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3157d5] font-bold text-white">
                  →
                </span>
              </a>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">
                    HİZMET
                  </p>
                  <p className="mt-1 text-xs font-semibold text-white/70">
                    Butik • Mağaza • Online Satıcı
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">
                    İLETİŞİM
                  </p>
                  <p className="mt-1 text-xs font-bold">
                    0532 497 53 61
                  </p>
                </div>
              </div>

            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl md:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                GÖNDERİM
              </p>

              <p className="mt-1 text-sm font-black text-[#101828]">
                Türkiye & Kıbrıs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 px-5 md:grid-cols-4 md:px-10">
          {[
            ["İSTANBUL", "Tekstil piyasası"],
            ["TÜRKİYE", "Gönderim"],
            ["KIBRIS", "Ürün tedariği"],
            ["WHATSAPP", "Hızlı iletişim"],
          ].map(([a, b]) => (
            <div key={a} className="px-5 py-7">
              <p className="text-sm font-black">{a}</p>
              <p className="mt-1 text-xs text-slate-400">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="urunler" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3157d5]">
              ÜRÜN GRUPLARI
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Ne arıyorsanız
              <br />
              bize gönderin.
            </h2>
          </div>

          <p className="max-w-md leading-7 text-slate-500">
            Belirli bir marka veya tek bir koleksiyonla sınırlı değiliz.
            Talebinize göre ürün araştırması yapıyoruz.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {categories.map(([title, text, image], index) => (
            <a
              key={title}
              href={photoWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card group overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white transition duration-500 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-2xl"
            >
              <div className="relative h-[350px] overflow-hidden bg-slate-100">
                <img
                  src={image}
                  alt={`${title} kadın giyim tedarik`}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-2 text-[11px] font-black backdrop-blur">
                  0{index + 1}
                </div>

                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#3157d5] shadow">
                  ↗
                </div>

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-black tracking-[-0.04em]">
                  {title}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
                  {text}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#3157d5]">
                    ÜRÜN SOR
                  </span>
                  <span className="text-sm text-slate-400">
                    WhatsApp →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="sistem" className="bg-[#101828] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f9cff]">
            TEDARİK SİSTEMİ
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
            3 adımda ürününüzü araştıralım.
          </h2>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-3">
            {[
              [
                "01",
                "Fotoğrafı gönder",
                "Aradığınız modelin fotoğrafını veya ekran görüntüsünü WhatsApp'tan iletin.",
              ],
              [
                "02",
                "Biz araştıralım",
                "Talebinize uygun ürünleri İstanbul tekstil piyasasında araştıralım.",
              ],
              [
                "03",
                "Siparişi hazırlayalım",
                "Uygun ürünler belirlendiğinde sipariş ve gönderim sürecini planlayalım.",
              ],
            ].map(([num, title, text]) => (
              <div key={num} className="bg-[#101828] p-8 md:p-10">
                <span className="text-5xl font-black text-white/10">{num}</span>
                <h3 className="mt-12 text-2xl font-bold">{title}</h3>
                <p className="mt-4 leading-7 text-white/50">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="hakkimizda" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3157d5]">
              KADIN GİYİM TEDARİK
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Toptancı aramak yerine ürünü arayın.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Kadın Giyim Tedarik, butiklerin, mağazaların ve online
              satıcıların İstanbul tekstil piyasasındaki ürünlere daha
              kolay ulaşmasına yardımcı olmak amacıyla çalışır.
            </p>

            <p>
              Aradığınız ürünü bize iletin. Ürün grubuna ve talebinize
              göre uygun seçeneklerin araştırılmasını sağlayalım.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-8 md:px-10">
        <div className="premium-shadow relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#3157d5] px-7 py-16 text-white md:px-16 md:py-24">
          <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                ÜRÜN BULMA TALEBİ
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
                Fotoğrafı gönder.
                <br />
                Biz araştıralım.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                Butiğiniz için aradığınız ürünü WhatsApp üzerinden
                gönderin. İstanbul tekstil piyasasında sizin için
                araştıralım.
              </p>
            </div>

            <a
              href={photoWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-8 py-5 text-center text-sm font-black text-[#101828]"
            >
              WHATSAPP'TAN GÖNDER →
            </a>
          </div>
        </div>
      </section>

      <footer className="px-5 py-12 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-slate-200 pt-9 md:flex-row">
          <div>
            <strong className="text-lg">
              KADIN GİYİM <span className="text-[#3157d5]">TEDARİK</span>
            </strong>
            <p className="mt-2 text-sm text-slate-400">
              Rota Tedarik • İstanbul
            </p>
          </div>

          <div className="text-sm text-slate-500">
            WhatsApp: 0532 497 53 61
          </div>
        </div>
      </footer>

    </main>
  );
}
