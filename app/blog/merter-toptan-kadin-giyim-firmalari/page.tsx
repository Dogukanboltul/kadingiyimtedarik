import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merter Toptan Kadın Giyim Firmaları | Rota Tedarik",
  description:
    "Merter toptan kadın giyim firmalarından ürün arayan butik ve mağazalar için tedarik desteği. Merter kadın giyim ürünlerini bulun, tedarik edin ve adresinize gönderin.",
  alternates: {
    canonical:
      "https://kadingiyimtedarik.com/blog/merter-toptan-kadin-giyim-firmalari",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20Merter%20toptan%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCnleri%20i%C3%A7in%20tedarik%20deste%C4%9Fi%20istiyorum.";

const categories = [
  "Yeni Sezon Kadın Giyim",
  "Bluz & Üst Giyim",
  "Kadın Takım",
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
        <p className="mb-5 text-xs font-bold tracking-[.22em] text-black/55">
          MERTER • TOPTAN GİYİM • B2B TEDARİK
        </p>

        <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl">
          Merter Toptan Kadın Giyim Firmaları
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-black/65">
          Merter toptan kadın giyim firmalarındaki ürünlere ulaşmak isteyen
          butik, mağaza ve online satıcılara tedarik desteği sunuyoruz.
          Aradığınız modeli bize gönderin; ürün araştırma, tedarik ve gönderim
          sürecini tek noktadan yönetelim.
        </p>

        <div className="my-14 border-y border-black/10 py-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <span className="text-xs tracking-widest text-black/40">01</span>
              <h2 className="mt-2 font-semibold">ÜRÜNÜ BELİRLEYİN</h2>
              <p className="mt-2 text-sm leading-6 text-black/55">
                Aradığınız modelin fotoğrafını veya ürün grubunu gönderin.
              </p>
            </div>

            <div>
              <span className="text-xs tracking-widest text-black/40">02</span>
              <h2 className="mt-2 font-semibold">TEDARİK SÜRECİ</h2>
              <p className="mt-2 text-sm leading-6 text-black/55">
                Talebinize uygun ürün seçenekleri için tedarik süreci yürütülür.
              </p>
            </div>

            <div>
              <span className="text-xs tracking-widest text-black/40">03</span>
              <h2 className="mt-2 font-semibold">KARGO</h2>
              <p className="mt-2 text-sm leading-6 text-black/55">
                Hazırlanan ürünler Türkiye geneli veya Kıbrıs'a gönderilir.
              </p>
            </div>
          </div>
        </div>

        <section className="max-w-4xl space-y-9 text-[17px] leading-8 text-black/70">
          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              Merter Toptan Kadın Giyim Firmalarından Ürün Tedariği
            </h2>
            <p>
              Merter, kadın giyim üretimi ve toptan satış alanında çok sayıda
              işletmenin faaliyet gösterdiği İstanbul tekstil bölgelerinden
              biridir. Farklı firmaları ve ürün seçeneklerini tek tek takip
              etmek özellikle şehir dışındaki butik ve mağazalar için zaman
              alabilir. Rota Tedarik bu süreçte ürün talebinin alınması,
              araştırılması ve tedariğinin organize edilmesine destek olur.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              Merter'de Hangi Kadın Giyim Ürünleri Bulunabilir?
            </h2>

            <div className="grid gap-px bg-black/10 sm:grid-cols-2">
              {categories.map((category) => (
                <div key={category} className="bg-white px-5 py-4">
                  {category}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              Butik ve Mağazalar İçin Merter Tedarik Hizmeti
            </h2>
            <p>
              İstanbul dışında faaliyet gösteren işletmeler de Merter kadın
              giyim ürünleri için tedarik talebi oluşturabilir. Aradığınız
              ürünün görselini WhatsApp üzerinden ileterek ürün araştırması
              başlatabilirsiniz. Böylece her ürün arayışında fiziksel olarak
              Merter'e gelmeden tedarik sürecini yönetebilirsiniz.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              Merter Toptan Kadın Giyim Ürünlerini Nasıl Tedarik Edebilirsiniz?
            </h2>
            <p>
              İhtiyacınız olan ürün grubunu, modeli veya ürün fotoğrafını bize
              iletin. Talebiniz doğrultusunda uygun tedarik seçenekleri
              araştırılır. Ürün ve sipariş detayları netleştikten sonra
              hazırlanan siparişin gönderim süreci organize edilir.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              Merter'den Türkiye Geneli Kadın Giyim Tedariği
            </h2>
            <p>
              Rota Tedarik ile Merter'deki kadın giyim ürünleri için İstanbul
              dışından da talep oluşturabilirsiniz. Türkiye'nin farklı
              şehirlerindeki butik, mağaza ve online satıcılara ürün gönderimi
              yapılabilir. Kıbrıs için de tedarik ve gönderim talepleri
              değerlendirilmektedir.
            </p>
          </div>
        </section>

        <div className="mt-14 bg-[#202a30] p-8 text-white md:p-12">
          <p className="text-xs font-bold tracking-[.2em] text-white/60">
            MERTER ÜRÜN TEDARİĞİ
          </p>

          <h2 className="mt-4 max-w-2xl font-serif text-3xl md:text-4xl">
            Aradığınız modeli bize gönderin.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-white/65">
            Kadın giyim ürününün fotoğrafını WhatsApp üzerinden iletin.
            Tedarik seçeneklerini kontrol ederek süreci başlatalım.
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
