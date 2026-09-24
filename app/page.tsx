const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BC%20tedarik%20etmek%20istiyorum.";

const photoWhatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20arad%C4%B1%C4%9F%C4%B1m%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BCn%C3%BCn%20foto%C4%9Fraf%C4%B1n%C4%B1%20g%C3%B6ndermek%20istiyorum.";

const categories = [
  ["ELBİSE", "Günlük, özel gün ve yeni sezon modeller", "/images/elbise.jpeg"],
  ["TAKIM", "Butiklere yönelik kadın takım seçenekleri", "/images/takim.jpeg"],
  ["CEKET", "Sezonluk ve klasik kadın ceket modelleri", "/images/ceket.jpeg"],
  ["PANTOLON", "Farklı kesim ve kumaş seçenekleri", "/images/pantolon.jpeg"],
  ["GÖMLEK", "Güncel kadın gömlek koleksiyonları", "/images/gomlek.jpeg"],
  ["TRİKO", "Kazak, hırka ve sezonluk triko ürünleri", "/images/triko.jpeg"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#101828]">

      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <div>
            <div className="text-xl font-black tracking-[-0.04em] md:text-2xl">
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
      <section className="relative overflow-hidden bg-[#f4f7ff]">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#dce5ff]" />
        <div className="absolute -bottom-52 left-[35%] h-[420px] w-[420px] rounded-full bg-white" />

        <div className="relative mx-auto grid min-h-[700px] max-w-7xl items-center gap-16 px-5 py-20 md:grid-cols-[1.1fr_.9fr] md:px-10">

          <div>
            <div className="inline-flex rounded-full border border-[#3157d5]/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3157d5]">
              İstanbul Kadın Giyim Tedarik Ağı
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] md:text-7xl">
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
            <div className="rounded-[2rem] bg-[#101828] p-6 shadow-2xl md:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                    ÜRÜN BULMA SERVİSİ
                  </p>
                  <p className="mt-2 text-xl font-bold text-white">
                    Ne arıyorsunuz?
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3157d5] text-xl">
                  ↗
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  "Kadın elbise",
                  "Kadın takım",
                  "Ceket & pantolon",
                  "Gömlek & bluz",
                ].map((item) => (
                  <a
                    key={item}
                    href={photoWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-4 text-white transition hover:bg-white/10"
                  >
                    <span>{item}</span>
                    <span className="text-white/35">→</span>
                  </a>
                ))}
              </div>

              <a
                href={photoWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-white px-5 py-4 text-sm font-bold text-[#101828]"
              >
                Farklı Bir Ürün Sor →
              </a>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-xl md:block">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                İLETİŞİM
              </p>
              <p className="mt-2 font-black">0532 497 53 61</p>
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
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#3157d5] hover:shadow-2xl"
            >
              <div className="relative h-[310px] overflow-hidden bg-slate-100">
                <img
                  src={image}
                  alt={`${title} kadın giyim tedarik`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-2 text-[11px] font-black backdrop-blur">
                  0{index + 1}
                </div>

                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#3157d5] shadow">
                  ↗
                </div>

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black tracking-[-0.03em]">
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
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#3157d5] px-7 py-16 text-white md:px-16 md:py-20">
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
