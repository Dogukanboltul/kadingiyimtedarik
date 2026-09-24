const whatsapp = "https://wa.me/905324975361?text=Merhaba%2C%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BC%20tedarik%20etmek%20istiyorum.";

const products = [
  ["/images/bisou.jpeg", "Bluz & Üst Giyim"],
  ["/images/toptankadingiyimmodel.jpeg", "Yeni Sezon"],
  ["/images/toptanceket.jpeg", "Ceket"],
  ["/images/model.jpeg", "Kadın Takım"],
  ["/images/merterkoleksiyon.jpeg", "Dış Giyim"],
  ["/images/kadinkazak.jpeg", "Triko"],
];

export default function Home() {
  return (
    <main className="bg-[#f4f1eb] text-[#171817]">

      <div className="bg-[#eeeae3] text-[#202a30]">
        <div className="mx-auto flex max-w-[1500px] items-center justify-center px-6 py-2.5 md:justify-between md:px-10">
          <div className="hidden items-center gap-2 md:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            <span className="text-[10px] font-bold tracking-[.18em] text-black/50">
              AKTİF TEDARİK
            </span>
          </div>

          <div className="text-[10px] font-bold tracking-[.18em] md:text-[11px]">
            AYNI GÜN TEDARİK
            <span className="mx-3 text-[#c7a56a]">•</span>
            AYNI GÜN KARGO
          </div>

          <div className="hidden text-[10px] font-bold tracking-[.16em] text-black/50 md:block">
            TÜRKİYE & KIBRIS
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 text-[#202a30] backdrop-blur-xl">
        <div className="mx-auto flex h-[82px] max-w-[1500px] items-center justify-between px-6 md:px-10">

          <a href="#" className="border-r border-black/15 pr-8">
            <div className="text-[21px] font-light tracking-[.14em]">
              KADIN GİYİM
            </div>
            <div className="mt-1 text-[9px] font-bold tracking-[.32em] text-black/45">
              TEDARİK
            </div>
          </a>

          <nav className="hidden items-center gap-10 text-[12px] font-semibold text-black/65 lg:flex">
            <a href="#tedarik" className="transition hover:text-black">
              TEDARİK
            </a>
            <a href="#koleksiyon" className="transition hover:text-black">
              ÜRÜN GRUPLARI
            </a>
            <a href="#sistem" className="transition hover:text-black">
              NASIL ÇALIŞIR?
            </a>
            <a href="#hakkimizda" className="transition hover:text-black">
              HAKKIMIZDA
            </a>
          </nav>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#202a30]/50 px-5 py-3 text-[10px] font-bold tracking-[.13em] transition hover:bg-white hover:text-[#344149] md:px-7"
          >
            ÜRÜN TALEBİ →
          </a>
        </div>
      </header>

      <section id="tedarik" className="relative min-h-[680px] overflow-hidden bg-[#101312] text-white">

        <img
          src="/images/toptankadingiyim.jpeg"
          alt="Kadın giyim tedarik"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15"></div>

        <div className="relative mx-auto grid min-h-[680px] max-w-[1500px] items-center gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1fr_.9fr]">

          <div className="max-w-[720px]">
            <div className="mb-7 flex items-center gap-3">
              <div className="h-px w-12 bg-[#d4b477]"></div>
              <span className="text-[10px] font-bold tracking-[.24em] text-white/65">
                İSTANBUL • KADIN GİYİM • B2B TEDARİK
              </span>
            </div>

            <h1
              className="max-w-[700px] text-[48px] font-normal leading-[1.03] tracking-[-.045em] md:text-[68px] lg:text-[76px]"
              style={{ fontFamily: "Georgia, Times New Roman, serif" }}
            >
              Kadın Giyim
              <br />
              Tedariğinin
              <br />
              Profesyonel
              <br />
              Çözüm Ortağı
            </h1>

            <p className="mt-7 max-w-[600px] text-[15px] font-medium leading-7 text-black/65 md:text-[17px]">
              Butik, mağaza ve online satıcılar için İstanbul tekstil
              piyasasından ürün araştırma ve tedarik hizmeti.
              Aradığınız modeli bize gönderin, sizin için araştıralım.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white bg-[#596972]/80 px-7 py-4 text-[11px] font-bold tracking-[.13em] backdrop-blur transition hover:bg-white hover:text-[#202a30]"
              >
                WHATSAPP&apos;TAN ÜRÜN GÖNDER
              </a>

              <a
                href="#sistem"
                className="border border-white/25 px-7 py-4 text-[11px] font-bold tracking-[.13em] text-white/80 transition hover:border-white"
              >
                NASIL ÇALIŞIYOR?
              </a>
            </div>
          </div>

          <div className="relative hidden min-h-[530px] lg:block">

            <div className="absolute left-[5%] top-[4%] h-[430px] w-[285px] overflow-hidden border border-white/60 bg-black/30 p-2 backdrop-blur-sm">
              <img
                src="/images/bisou.jpeg"
                alt="Kadın giyim ürün tedariği"
                className="h-full w-full object-cover"
              />

              <div className="absolute left-5 top-5 bg-[#f4f1eb] px-3 py-2 text-[9px] font-black tracking-[.14em] text-[#202a30]">
                YENİ SEZON
              </div>
            </div>

            <div className="absolute right-[1%] top-[22%] w-[310px] border border-white/30 bg-[#d9d4ca]/95 p-7 text-[#202a30] shadow-2xl">
              <div className="flex items-center justify-between border-b border-black/15 pb-4">
                <span className="text-[9px] font-black tracking-[.18em]">
                  TEDARİK OPERASYONU
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
              </div>

              <div className="py-7">
                <div className="text-[10px] font-bold tracking-[.18em] text-black/45">
                  HIZLI TEDARİK SİSTEMİ
                </div>

                <div
                  className="mt-3 text-[38px] leading-[1.02]"
                  style={{ fontFamily: "Georgia, Times New Roman, serif" }}
                >
                  Aynı Gün
                  <br />
                  Tedarik & Kargo
                </div>

                <p className="mt-5 max-w-[330px] text-[12px] font-medium leading-6 text-black/55">
                  Aradığınız kadın giyim ürününün fotoğrafını gönderin.
                  İstanbul tekstil piyasasında sizin için araştıralım,
                  siparişinizi hazırlayalım ve kargo sürecini organize edelim.
                </p>

                <div className="mt-6 grid grid-cols-3 border-y border-black/15 py-4 text-center">
                  <div className="border-r border-black/15">
                    <div className="text-[9px] font-bold tracking-[.14em] text-black/40">HİZMET</div>
                    <div className="mt-1 text-[10px] font-black">B2B TEDARİK</div>
                  </div>
                  <div className="border-r border-black/15">
                    <div className="text-[9px] font-bold tracking-[.14em] text-black/40">BÖLGE</div>
                    <div className="mt-1 text-[10px] font-black">TÜRKİYE</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-bold tracking-[.14em] text-black/40">GÖNDERİM</div>
                    <div className="mt-1 text-[10px] font-black">TR & KIBRIS</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-3 text-[11px] font-semibold">
                  <div className="flex items-center justify-between border-b border-black/10 pb-3">
                    <span className="font-bold text-black/35">01</span>
                    <span>ÜRÜN FOTOĞRAFINI GÖNDER</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-black/10 pb-3">
                    <span className="font-bold text-black/35">02</span>
                    <span>BİZ ARAŞTIRALIM</span>
                  </div>

                  <div className="flex items-center justify-between pb-3">
                    <span className="font-bold text-black/35">03</span>
                    <span>SİPARİŞİ KARGOYA VERELİM</span>
                  </div>
                </div>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-between bg-[#26343b] px-5 py-4 text-white transition hover:bg-[#172126]"
                >
                  <div>
                    <div className="text-[8px] font-bold tracking-[.18em] text-white/50">
                      TEDARİK HATTI
                    </div>
                    <div className="mt-1 text-[10px] font-black tracking-[.08em]">
                      WHATSAPP&apos;TAN ÜRÜN GÖNDER
                    </div>
                  </div>
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>

            <div className="absolute bottom-[1%] right-[20%] w-[210px] overflow-hidden border-[7px] border-[#101312] shadow-2xl">
              <img
                src="/images/toptanceket.jpeg"
                alt="Toptan kadın giyim"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#cbc5bb] bg-[#f4f1eb]">
        <div className="mx-auto max-w-[1500px] px-6 py-9 text-center md:px-10">
          <h2
            className="text-[27px] tracking-[-.03em] md:text-[38px]"
            style={{ fontFamily: "Georgia, Times New Roman, serif" }}
          >
            İstanbul tekstil piyasasından Türkiye ve Kıbrıs&apos;a ürün tedariği
          </h2>
        </div>

        <div className="border-t border-[#cbc5bb]">
          <div className="mx-auto grid max-w-[1500px] grid-cols-2 md:grid-cols-4">
            {[
              ["01", "AYNI GÜN TEDARİK"],
              ["02", "AYNI GÜN KARGO"],
              ["03", "TÜRKİYE GENELİ"],
              ["04", "KIBRIS GÖNDERİM"],
            ].map(([n, text]) => (
              <div
                key={text}
                className="border-r border-[#cbc5bb] px-5 py-6 text-center last:border-r-0"
              >
                <div className="text-[9px] font-bold tracking-[.15em] text-black/35">
                  {n}
                </div>
                <div className="mt-2 text-[11px] font-black tracking-[.12em]">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="koleksiyon" className="bg-[#eeeae3] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]">

          <div className="mb-14 grid gap-8 lg:grid-cols-2">
            <div>
              <div className="text-[10px] font-black tracking-[.2em] text-[#7b6c58]">
                ÜRÜN GRUPLARI
              </div>

              <h2
                className="mt-4 max-w-[650px] text-[44px] leading-[1.02] tracking-[-.045em] md:text-[62px]"
                style={{ fontFamily: "Georgia, Times New Roman, serif" }}
              >
                Aradığınız modeli bize gönderin.
              </h2>
            </div>

            <div className="flex items-end lg:justify-end">
              <p className="max-w-[500px] text-[15px] leading-7 text-black/55">
                Tek bir marka veya koleksiyonla sınırlı değiliz.
                Talebinize uygun kadın giyim ürünlerini İstanbul tekstil
                piyasasında araştırıyoruz.
              </p>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-12">
            {products.map(([image, title], index) => (
              <a
                key={title}
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  "group relative overflow-hidden bg-[#202a30] " +
                  (index === 0 || index === 5
                    ? "min-h-[520px] md:col-span-7"
                    : "min-h-[420px] md:col-span-5")
                }
              >
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent"></div>

                <div className="absolute left-6 top-6 border border-white/50 bg-black/20 px-3 py-2 text-[9px] font-bold tracking-[.15em] text-white backdrop-blur">
                  0{index + 1}
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-7 text-white md:p-9">
                  <div>
                    <div className="text-[9px] font-bold tracking-[.18em] text-white/60">
                      KADIN GİYİM
                    </div>

                    <h3
                      className="mt-2 text-[30px] md:text-[38px]"
                      style={{ fontFamily: "Georgia, Times New Roman, serif" }}
                    >
                      {title}
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#202a30]/50 text-lg transition group-hover:bg-white group-hover:text-black">
                    ↗
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="sistem" className="bg-[#e6e0d7] px-6 py-24 text-[#202a30] md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]">

          <div className="text-[10px] font-bold tracking-[.2em] text-[#d4b477]">
            TEDARİK SİSTEMİ
          </div>

          <h2
            className="mt-5 max-w-[850px] text-[43px] leading-[1.05] tracking-[-.04em] md:text-[64px]"
            style={{ fontFamily: "Georgia, Times New Roman, serif" }}
          >
            Fotoğrafı gönderin.
            <br />
            Gerisini biz araştıralım.
          </h2>

          <div className="mt-16 grid border-y border-black/15 md:grid-cols-3">
            {[
              ["01", "ÜRÜNÜ GÖNDER", "Aradığınız modelin fotoğrafını veya ekran görüntüsünü WhatsApp üzerinden iletin."],
              ["02", "BİZ ARAŞTIRALIM", "Talebinize uygun ürünü İstanbul tekstil piyasasında araştırıp seçenekleri size iletelim."],
              ["03", "KARGOYA VERELİM", "Siparişinizi organize ederek Türkiye veya Kıbrıs gönderim sürecini başlatalım."],
            ].map(([n, title, text]) => (
              <div
                key={n}
                className="border-b border-black/15 py-9 md:border-b-0 md:border-r md:border-black/15 md:px-9 md:first:pl-0 md:last:border-r-0"
              >
                <div className="text-[11px] font-bold tracking-[.18em] text-[#d4b477]">
                  {n}
                </div>

                <h3 className="mt-10 text-[18px] font-black tracking-[.08em]">
                  {title}
                </h3>

                <p className="mt-4 max-w-[360px] text-[14px] leading-7 text-black/50">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hakkimizda" className="bg-[#f4f1eb] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-2">

          <div>
            <div className="text-[10px] font-black tracking-[.2em] text-[#7b6c58]">
              ROTA TEDARİK
            </div>

            <h2
              className="mt-5 text-[44px] leading-[1.03] tracking-[-.045em] md:text-[62px]"
              style={{ fontFamily: "Georgia, Times New Roman, serif" }}
            >
              Toptancı aramayın.
              <br />
              Ürünü arayın.
            </h2>
          </div>

          <div className="flex items-end">
            <div className="max-w-[590px]">
              <p className="text-[17px] leading-8 text-black/60">
                Kadın Giyim Tedarik; butik, mağaza ve online satıcıların
                İstanbul tekstil piyasasındaki ürünlere daha kolay ulaşmasına
                yardımcı olan ürün araştırma ve tedarik hizmetidir.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block border-b border-black pb-2 text-[11px] font-black tracking-[.15em]"
              >
                ÜRÜN TALEBİ OLUŞTUR →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ded7cc] px-6 py-24 text-center text-[#202a30] md:px-10 md:py-32">
        <div className="mx-auto max-w-[1000px]">
          <div className="text-[10px] font-bold tracking-[.22em] text-[#d4b477]">
            WHATSAPP TEDARİK HATTI
          </div>

          <h2
            className="mt-6 text-[45px] leading-[1.02] tracking-[-.045em] md:text-[70px]"
            style={{ fontFamily: "Georgia, Times New Roman, serif" }}
          >
            Aradığınız modeli
            <br />
            bulamadınız mı?
          </h2>

          <p className="mx-auto mt-6 max-w-[550px] text-[15px] leading-7 text-black/50">
            Fotoğrafını gönderin. İstanbul tekstil piyasasında sizin için
            araştıralım.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block border border-white bg-white px-9 py-5 text-[11px] font-black tracking-[.15em] text-[#111514] transition hover:bg-transparent hover:text-black"
          >
            WHATSAPP&apos;TAN GÖNDER →
          </a>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#f4f1eb] px-6 py-10 text-[#202a30] md:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="text-[16px] tracking-[.15em]">
              KADIN GİYİM TEDARİK
            </div>
            <div className="mt-2 text-[9px] font-bold tracking-[.2em] text-black/35">
              ROTA TEDARİK • İSTANBUL
            </div>
          </div>

          <div className="text-[11px] tracking-[.1em] text-black/45">
            0532 497 53 61
          </div>
        </div>
      </footer>

    </main>
  );
}
