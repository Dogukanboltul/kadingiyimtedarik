import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "İstanbul Toptan Kadın Giyim | Rota Tedarik",
  description:
    "İstanbul toptan kadın giyim ürünleri için profesyonel tedarik desteği. Butik, mağaza ve online satıcılar için kadın giyim ürün tedariği ve Türkiye geneli gönderim.",
  alternates: {
    canonical:
      "https://kadingiyimtedarik.com/blog/istanbul-toptan-kadin-giyim",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20%C4%B0stanbul%27dan%20toptan%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BC%20tedarik%20etmek%20istiyorum.";

const categories = [
  "Yeni Sezon Kadın Giyim",
  "Kadın Takım",
  "Bluz & Üst Giyim",
  "Ceket",
  "Triko",
  "Dış Giyim",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-[#202a30]">
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-semibold tracking-[.18em]">
            ROTA TEDARİK
          </Link>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#202a30] px-5 py-3 text-xs font-bold tracking-wider text-white"
          >
            ÜRÜN TALEBİ
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-bold tracking-[.22em] text-black/50">
            İSTANBUL • TOPTAN KADIN GİYİM • B2B TEDARİK
          </p>

          <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
            İstanbul Toptan Kadın Giyim
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/65">
            İstanbul'dan toptan kadın giyim ürünü almak isteyen butik,
            mağaza ve online satıcılara ürün tedarik desteği sağlıyoruz.
            Aradığınız modeli bize gönderin; ürün araştırması, tedarik
            ve gönderim sürecini organize edelim.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-[#202a30] px-7 py-4 text-sm font-bold text-white"
          >
            WHATSAPP'TAN ÜRÜN GÖNDER →
          </a>
        </div>

        <div className="my-16 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((item) => (
            <div key={item} className="bg-white p-7">
              <p className="text-xs font-bold tracking-[.18em] text-black/35">
                TOPTAN TEDARİK
              </p>
              <h2 className="mt-3 font-serif text-2xl">{item}</h2>
            </div>
          ))}
        </div>

        <section className="max-w-4xl space-y-10 text-[17px] leading-8 text-black/70">
          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              İstanbul'dan Toptan Kadın Giyim Tedariği
            </h2>
            <p>
              İstanbul, kadın giyim üretimi ve toptan tekstil ticaretinin
              yoğun olduğu merkezlerden biridir. Butik ve mağazalar için
              farklı ürün gruplarına ulaşmak mümkün olsa da doğru ürünü
              bulmak, siparişi hazırlamak ve gönderimi organize etmek zaman
              alabilir. Rota Tedarik bu süreci işletmeler adına
              kolaylaştırmaya odaklanır.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              Butiklere Toptan Kadın Giyim
            </h2>
            <p>
              Butiğiniz için yeni sezon ürünler arıyorsanız istediğiniz
              modelin fotoğrafını veya ürün grubunu bize iletebilirsiniz.
              Talebinize göre uygun ürün ve tedarik seçenekleri araştırılır.
              Böylece İstanbul dışında olsanız bile ürün tedariği için
              talep oluşturabilirsiniz.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              İstanbul Kadın Giyim Toptancılarından Ürün Bulma
            </h2>
            <p>
              Kadın takım, bluz, ceket, triko, dış giyim ve sezonluk
              modeller için ürün araştırması yapılabilir. Aradığınız ürünün
              görselini WhatsApp üzerinden göndermeniz tedarik sürecinin
              daha hızlı ve doğru ilerlemesine yardımcı olur.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              Merter Kadın Giyim Tedarik Ağı
            </h2>
            <p>
              İstanbul kadın giyim tedariğinde Merter önemli bölgelerden
              biridir. Merter'den ürün arayan butik ve mağazalar için
              ürün araştırması ve tedarik talepleri alınmaktadır. Böylece
              işletmeler ihtiyaç duydukları ürünleri uzaktan talep edebilir.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              Türkiye Geneli Toptan Kadın Giyim Gönderimi
            </h2>
            <p>
              İstanbul'dan tedarik edilen ürünler Türkiye'nin farklı
              şehirlerindeki butik ve mağazalara gönderilebilir. Kıbrıs
              için de tedarik talepleri değerlendirilmektedir. Hazır
              siparişlerde hızlı kargo çıkışı hedeflenir.
            </p>
          </div>
        </section>

        <section className="mt-16 bg-white p-8 md:p-12">
          <p className="text-xs font-bold tracking-[.2em] text-black/40">
            ROTA TEDARİK SİSTEMİ
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div>
              <span className="font-serif text-4xl">01</span>
              <h3 className="mt-3 font-semibold">Ürünü Gönder</h3>
              <p className="mt-2 text-sm leading-6 text-black/55">
                Fotoğraf veya ürün bilgisini WhatsApp'tan gönderin.
              </p>
            </div>

            <div>
              <span className="font-serif text-4xl">02</span>
              <h3 className="mt-3 font-semibold">Tedarik Edelim</h3>
              <p className="mt-2 text-sm leading-6 text-black/55">
                Talebinize uygun ürün seçeneklerini araştıralım.
              </p>
            </div>

            <div>
              <span className="font-serif text-4xl">03</span>
              <h3 className="mt-3 font-semibold">Gönderelim</h3>
              <p className="mt-2 text-sm leading-6 text-black/55">
                Siparişinizi hazırlayıp kargo sürecini organize edelim.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-14 bg-[#202a30] p-8 text-white md:p-12">
          <p className="text-xs font-bold tracking-[.2em] text-white/55">
            İSTANBUL KADIN GİYİM TEDARİĞİ
          </p>

          <h2 className="mt-4 max-w-2xl font-serif text-3xl md:text-4xl">
            Mağazanız için hangi ürünü arıyorsunuz?
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-white/65">
            Ürün fotoğrafını bize gönderin. İstanbul'daki tedarik
            seçeneklerini kontrol ederek size dönüş yapalım.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block bg-[#f4f1eb] px-7 py-4 text-sm font-bold text-[#202a30]"
          >
            WHATSAPP'TAN TEDARİK TALEBİ →
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-6 border-t border-black/10 pt-8 text-sm font-semibold">
          <Link href="/blog/merter-toptan-kadin-giyim">
            Merter Toptan Kadın Giyim →
          </Link>

          <Link href="/blog/merter-kadin-giyim-toptancisi">
            Merter Kadın Giyim Toptancısı →
          </Link>

          <Link href="/blog/merter-toptan-kadin-giyim-firmalari">
            Merter Toptan Kadın Giyim Firmaları →
          </Link>

          <Link href="/blog/kadin-giyim-tedarikcisi">
            Kadın Giyim Tedarikçisi →
          </Link>
        </div>
      </article>
    </main>
  );
}
