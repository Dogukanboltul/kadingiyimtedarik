import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merter Kadın Giyim Toptan Satış | Rota Tedarik",
  description:
    "Merter kadın giyim toptan satış ürünleri için tedarik desteği. Butik, mağaza ve online satıcılar için yeni sezon kadın giyim ürünlerini Merter'den tedarik edin.",
  alternates: {
    canonical:
      "https://kadingiyimtedarik.com/blog/merter-kadin-giyim-toptan-satis",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20Merter%27den%20toptan%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BC%20almak%20istiyorum.";

const products = [
  "Kadın Takım",
  "Bluz & Üst Giyim",
  "Ceket",
  "Triko",
  "Dış Giyim",
  "Yeni Sezon Modeller",
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
            TOPTAN ÜRÜN TALEBİ
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-bold tracking-[.22em] text-black/55">
            MERTER • TOPTAN SATIŞ • KADIN GİYİM
          </p>

          <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
            Merter Kadın Giyim Toptan Satış
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/65">
            Butiğiniz, mağazanız veya online satış kanalınız için Merter'den
            toptan kadın giyim ürünü tedarik edin. Aradığınız modeli bize
            gönderin; ürün araştırması, tedarik ve kargo sürecini organize
            edelim.
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

        <div className="my-16 grid gap-px bg-black/10 border border-black/10 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <div key={product} className="bg-white p-6">
              <p className="text-xs font-bold tracking-[.15em] text-black/35">
                TOPTAN
              </p>
              <h2 className="mt-3 font-serif text-2xl">{product}</h2>
              <p className="mt-3 text-sm leading-6 text-black/55">
                Merter kadın giyim tedarik seçenekleri için ürün talebi
                oluşturabilirsiniz.
              </p>
            </div>
          ))}
        </div>

        <section className="max-w-4xl space-y-10 text-[17px] leading-8 text-black/70">
          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              Merter'den Toptan Kadın Giyim Alımı
            </h2>
            <p>
              Merter, İstanbul'da kadın giyim üretimi ve toptan satışın yoğun
              olduğu tekstil bölgelerinden biridir. Butik ve mağazalar için
              farklı ürün gruplarında sezonluk ve güncel modeller bulunabilir.
              Rota Tedarik, Merter'den ürün almak isteyen işletmelerin tedarik
              sürecini kolaylaştırmayı amaçlar.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              Butikler İçin Toptan Kadın Giyim
            </h2>
            <p>
              Butik işletmelerinde ürün çeşitliliğini güncel tutmak önemlidir.
              Aradığınız kadın giyim modelinin fotoğrafını veya ürün grubunu
              WhatsApp üzerinden göndererek Merter'den tedarik talebi
              oluşturabilirsiniz.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              Merter Kadın Giyim Ürünleri
            </h2>
            <p>
              Kadın takım, ceket, bluz, triko, dış giyim ve yeni sezon
              modelleri başta olmak üzere farklı ürün grupları için tedarik
              desteği sağlanabilir. Ürün bulunabilirliği modele ve döneme göre
              değişebileceği için güncel talepler üzerinden kontrol yapılır.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              İstanbul'a Gelmeden Ürün Tedarik Edin
            </h2>
            <p>
              İstanbul dışında bulunan butik ve mağazalar, her ürün alımında
              Merter'e gelmek yerine ihtiyaç duydukları modelleri uzaktan
              iletebilir. Ürün araştırması ve tedarik süreci tamamlandıktan
              sonra siparişler kargoya hazırlanır.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              Türkiye Geneli ve Kıbrıs'a Toptan Gönderim
            </h2>
            <p>
              Merter'den tedarik edilen kadın giyim ürünleri Türkiye genelindeki
              butik ve mağazalara gönderilebilir. Kıbrıs'taki işletmeler için
              de ürün tedarik ve gönderim talepleri alınmaktadır. Hazır
              siparişlerde hızlı kargo çıkışı hedeflenir.
            </p>
          </div>
        </section>

        <section className="mt-16 border border-black/10 bg-white p-8 md:p-12">
          <p className="text-xs font-bold tracking-[.2em] text-black/40">
            NASIL ÇALIŞIR?
          </p>

          <div className="mt-7 grid gap-8 md:grid-cols-3">
            <div>
              <span className="font-serif text-4xl">01</span>
              <h3 className="mt-4 font-semibold">Ürünü Gönder</h3>
              <p className="mt-2 text-sm leading-6 text-black/55">
                İstediğiniz ürünün fotoğrafını veya bilgisini iletin.
              </p>
            </div>

            <div>
              <span className="font-serif text-4xl">02</span>
              <h3 className="mt-4 font-semibold">Tedarik Edelim</h3>
              <p className="mt-2 text-sm leading-6 text-black/55">
                Talebinize göre uygun tedarik seçeneklerini araştıralım.
              </p>
            </div>

            <div>
              <span className="font-serif text-4xl">03</span>
              <h3 className="mt-4 font-semibold">Kargoya Verelim</h3>
              <p className="mt-2 text-sm leading-6 text-black/55">
                Hazırlanan siparişinizin gönderimini organize edelim.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-14 bg-[#202a30] p-8 text-white md:p-12">
          <p className="text-xs font-bold tracking-[.2em] text-white/55">
            ROTA TEDARİK
          </p>

          <h2 className="mt-4 font-serif text-3xl md:text-4xl">
            Merter'den toptan ürün mü arıyorsunuz?
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-white/65">
            Aradığınız kadın giyim ürününü WhatsApp'tan gönderin. Ürün ve
            tedarik seçeneklerini kontrol edelim.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block bg-[#f4f1eb] px-7 py-4 text-sm font-bold text-[#202a30]"
          >
            ÜRÜN TALEBİ OLUŞTUR →
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
        </div>
      
        <div className="mx-auto mt-12 max-w-4xl border border-black/10 bg-white p-7">
          <p className="text-xs font-bold tracking-[.18em] text-black/40">
            MERTER TOPTAN TEDARİK
          </p>
          <p className="mt-3 leading-7 text-black/65">
            Merterde toptan ürün tedariği hakkında detaylı bilgi ve ürün
            grupları için ana rehberimizi inceleyebilirsiniz.
          </p>
          <Link
            href="/merter-toptan"
            className="mt-5 inline-block font-semibold underline underline-offset-4"
          >
            Merter Toptan →
          </Link>
        </div>
</article>
    </main>
  );
}
