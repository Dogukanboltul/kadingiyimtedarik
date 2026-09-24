import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Butik İçin Toptan Kadın Giyim | Rota Tedarik",
  description:
    "Butik için toptan kadın giyim ürün tedariği. Yeni sezon kadın giyim, takım, bluz, ceket, triko ve dış giyim ürünlerini İstanbul'dan tedarik edin.",
  alternates: {
    canonical:
      "https://kadingiyimtedarik.com/blog/butik-icin-toptan-kadin-giyim",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20buti%C4%9Fim%20i%C3%A7in%20toptan%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BC%20tedarik%20etmek%20istiyorum.";

const products = [
  "Yeni Sezon Ürünler",
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
            BUTİK • TOPTAN KADIN GİYİM • TEDARİK
          </p>

          <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
            Butik İçin Toptan Kadın Giyim
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/65">
            Butiğiniz için satılabilir, güncel ve yeni sezon kadın giyim
            ürünleri mi arıyorsunuz? İstediğiniz ürünün fotoğrafını bize
            gönderin. İstanbul'daki tedarik seçeneklerini araştırıp ürünlerin
            hazırlanması ve gönderilmesi sürecini organize edelim.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-[#202a30] px-7 py-4 text-sm font-bold text-white"
          >
            BUTİĞİM İÇİN ÜRÜN ARA →
          </a>
        </div>

        <section className="my-16 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <div key={product} className="bg-white p-7">
              <p className="text-xs font-bold tracking-[.16em] text-black/35">
                BUTİK TEDARİĞİ
              </p>
              <h2 className="mt-3 font-serif text-2xl">{product}</h2>
              <p className="mt-3 text-sm leading-6 text-black/55">
                Butik ve mağazanız için ürün tedarik talebi oluşturabilirsiniz.
              </p>
            </div>
          ))}
        </section>

        <section className="max-w-4xl space-y-10 text-[17px] leading-8 text-black/70">
          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              Butik İçin Toptan Kadın Giyim Nereden Alınır?
            </h2>
            <p>
              Kadın giyim butikleri için ürün seçimi kadar düzenli tedarik
              süreci de önemlidir. İstanbul ve özellikle Merter gibi tekstil
              bölgelerinde çok sayıda kadın giyim ürünü bulunabilir. Rota
              Tedarik, butiklerin aradığı ürünleri uzaktan talep edebilmesine
              ve tedarik sürecini daha kolay yönetebilmesine yardımcı olur.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              Butiklere Toptan Kadın Giyim Ürünleri
            </h2>
            <p>
              Yeni sezon kadın giyim, takım, bluz, üst giyim, ceket, triko ve
              dış giyim gibi farklı kategoriler için ürün talebi
              oluşturabilirsiniz. Aradığınız belirli bir model varsa ürün
              görselini WhatsApp üzerinden göndermeniz yeterlidir.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              İstanbul'a Gelmeden Butiğinize Ürün Alın
            </h2>
            <p>
              Şehir dışında butik işletiyorsanız her ürün alımında İstanbul'a
              gelmek zaman ve operasyon maliyeti oluşturabilir. Aradığınız
              ürünleri bize ileterek İstanbul'dan uzaktan tedarik talebi
              oluşturabilirsiniz. Ürünler hazırlandıktan sonra gönderim süreci
              organize edilir.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              Merter'den Butik Ürün Tedariği
            </h2>
            <p>
              Merter, kadın giyim ürün çeşitliliğinin yoğun olduğu tekstil
              bölgelerinden biridir. Butiğinizde satmak istediğiniz ürün
              grubunu veya örnek modeli bize göndererek Merter'deki tedarik
              seçenekleri için talep oluşturabilirsiniz.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              Türkiye Geneli Butik Ürün Gönderimi
            </h2>
            <p>
              Tedarik edilen kadın giyim ürünleri Türkiye'nin farklı
              şehirlerindeki butik ve mağazalara gönderilebilir. Kıbrıs'taki
              işletmelerden gelen tedarik talepleri de değerlendirilmektedir.
              Hazır siparişlerde hızlı kargo çıkışı hedeflenir.
            </p>
          </div>
        </section>

        <section className="mt-16 border-y border-black/10 py-12">
          <p className="text-xs font-bold tracking-[.2em] text-black/40">
            3 ADIMDA TEDARİK
          </p>

          <div className="mt-8 grid gap-10 md:grid-cols-3">
            <div>
              <span className="font-serif text-5xl">01</span>
              <h3 className="mt-4 font-semibold">Ürünü Gönder</h3>
              <p className="mt-2 text-sm leading-6 text-black/55">
                Aradığınız ürünün fotoğrafını veya ürün grubunu bize iletin.
              </p>
            </div>

            <div>
              <span className="font-serif text-5xl">02</span>
              <h3 className="mt-4 font-semibold">Ürünü Bulalım</h3>
              <p className="mt-2 text-sm leading-6 text-black/55">
                Talebinize göre uygun tedarik seçeneklerini araştıralım.
              </p>
            </div>

            <div>
              <span className="font-serif text-5xl">03</span>
              <h3 className="mt-4 font-semibold">Kargoya Çıkaralım</h3>
              <p className="mt-2 text-sm leading-6 text-black/55">
                Sipariş hazırlandıktan sonra gönderim sürecini organize edelim.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-14 bg-[#202a30] p-8 text-white md:p-12">
          <p className="text-xs font-bold tracking-[.2em] text-white/55">
            BUTİK TEDARİK HATTI
          </p>

          <h2 className="mt-4 max-w-2xl font-serif text-3xl md:text-4xl">
            Butiğiniz için ürün mü arıyorsunuz?
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-white/65">
            Beğendiğiniz modeli veya aradığınız ürün grubunu WhatsApp'tan
            gönderin. Tedarik seçeneklerini kontrol ederek size dönüş yapalım.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block bg-[#f4f1eb] px-7 py-4 text-sm font-bold text-[#202a30]"
          >
            WHATSAPP'TAN ÜRÜN GÖNDER →
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-6 border-t border-black/10 pt-8 text-sm font-semibold">
          <Link href="/blog/istanbul-toptan-kadin-giyim">
            İstanbul Toptan Kadın Giyim →
          </Link>

          <Link href="/blog/merter-toptan-kadin-giyim">
            Merter Toptan Kadın Giyim →
          </Link>

          <Link href="/blog/merter-kadin-giyim-toptancisi">
            Merter Kadın Giyim Toptancısı →
          </Link>

          <Link href="/blog/kadin-giyim-tedarikcisi">
            Kadın Giyim Tedarikçisi →
          </Link>
        </div>
      </article>
    </main>
  );
}
