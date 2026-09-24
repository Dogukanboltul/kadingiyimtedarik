const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20buti%C4%9Fim%20i%C3%A7in%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BC%20tedarik%20etmek%20istiyorum.";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f5f2ed] text-[#181716]">

      <section className="relative min-h-screen bg-[#b7aea4]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-black/50" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 text-white md:px-10">
          <div>
            <p className="text-xl font-semibold tracking-[0.18em]">
              ROTA TEDARİK
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-white/60">
              Kadın Giyim Tedarik
            </p>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/40 px-5 py-3 text-sm backdrop-blur"
          >
            WhatsApp
          </a>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-center px-6 md:px-10">
          <div className="max-w-4xl text-white">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/65">
              İstanbul Tekstil Piyasasından Ürün Tedariği
            </p>

            <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.04em] md:text-8xl">
              Kadın Giyim
              <br />
              Tedarikçisi.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              Butiğiniz veya mağazanız için aradığınız ürünü bulamıyor
              musunuz? Fotoğrafını WhatsApp&apos;tan gönderin. İstanbul
              tekstil piyasasında sizin için araştıralım.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#242321]"
              >
                WhatsApp'tan Ürün Sor →
              </a>

              <a
                href="#nasil-calisir"
                className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white"
              >
                Nasıl Çalışır?
              </a>
            </div>

            <p className="mt-5 text-sm text-white/55">
              0532 497 53 61 • Ürün fotoğrafını göndermeniz yeterli
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            ÜRÜN TEDARİĞİ
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-tight md:text-6xl">
            Siz satışınıza odaklanın.
            <br />
            Ürünü biz bulalım.
          </h2>

          <p className="mt-7 text-lg leading-8 text-neutral-600">
            Butikler, mağazalar ve online satıcılar için İstanbul tekstil
            piyasasında kadın giyim ürünlerini araştırıyor, farklı ürün
            taleplerini tek tedarik sürecinde yönetiyoruz.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            ["Elbise & Takım", "Yeni sezon elbise ve kadın takım modelleri."],
            ["Ceket & Pantolon", "Butik ve mağazalara yönelik kadın giyim ürünleri."],
            ["Gömlek & Bluz", "Güncel model ve koleksiyonlarda ürün araştırması."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl bg-white p-8">
              <h3 className="text-2xl font-medium">{title}</h3>
              <p className="mt-4 leading-7 text-neutral-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="nasil-calisir"
        className="bg-[#242321] px-6 py-24 text-white md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
            NASIL ÇALIŞIR?
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight md:text-6xl">
            Ürün aramak artık daha kolay.
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            <div>
              <span className="text-sm text-white/35">01</span>
              <h3 className="mt-4 text-2xl">Fotoğrafı Gönderin</h3>
              <p className="mt-4 leading-7 text-white/60">
                Aradığınız ürünün fotoğrafını veya ekran görüntüsünü
                WhatsApp&apos;tan gönderin.
              </p>
            </div>

            <div>
              <span className="text-sm text-white/35">02</span>
              <h3 className="mt-4 text-2xl">Biz Araştıralım</h3>
              <p className="mt-4 leading-7 text-white/60">
                Talebinize uygun ürünleri İstanbul tekstil piyasasında
                araştıralım.
              </p>
            </div>

            <div>
              <span className="text-sm text-white/35">03</span>
              <h3 className="mt-4 text-2xl">Siparişi Gönderelim</h3>
              <p className="mt-4 leading-7 text-white/60">
                Sipariş sürecini organize edip Türkiye ve Kıbrıs
                gönderimini planlayalım.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="rounded-[2rem] bg-[#d8d0c5] p-8 md:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            ROTA TEDARİK
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-medium tracking-tight md:text-6xl">
            Aradığınız kadın giyim ürününü bize gönderin.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            İstanbul&apos;a gelmeden ürün araştırın. Fotoğrafı gönderin,
            uygun ürün seçeneklerini sizin için bulalım.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#242321] px-8 py-4 text-sm font-semibold text-white"
          >
            WhatsApp'tan Hemen Yaz →
          </a>

          <p className="mt-5 text-sm text-neutral-500">
            0532 497 53 61
          </p>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <strong>ROTA TEDARİK</strong>
          <span className="text-sm text-neutral-500">
            Kadın Giyim Tedarik • İstanbul
          </span>
        </div>
      </footer>

    </main>
  );
}
