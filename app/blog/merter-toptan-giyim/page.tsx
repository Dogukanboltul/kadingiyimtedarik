import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merter Toptan Giyim | Kadın Giyim Tedarik | Rota Tedarik",
  description:
    "Merter toptan giyim ürün tedariği. Butik ve mağazalar için Merter'den kadın giyim, takım, ceket, bluz, triko ve yeni sezon ürün tedariği.",
  alternates: {
    canonical: "https://kadingiyimtedarik.com/blog/merter-toptan-giyim",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20Merter%27den%20toptan%20giyim%20%C3%BCr%C3%BCn%C3%BC%20tedarik%20etmek%20istiyorum.";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-[#202a30]">
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-semibold tracking-[.18em]">
            ROTA TEDARİK
          </Link>

          <Link
            href="/merter-toptan"
            className="text-sm font-semibold"
          >
            MERTER TOPTAN →
          </Link>
        </div>
      </header>

      <article>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold tracking-[.22em] text-black/45">
              MERTER • TOPTAN GİYİM • TEDARİK
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[1.02] md:text-7xl">
              Merter Toptan Giyim
            </h1>

            <p className="mt-7 text-lg leading-8 text-black/65">
              Merter'den toptan giyim ürünü arayan butik, mağaza ve online
              satıcılar için kadın giyim ürün tedariği. Aradığınız ürünü bize
              gönderin, tedarik seçeneklerini araştırıp sipariş sürecini
              organize edelim.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-fit bg-[#202a30] px-7 py-4 text-sm font-bold text-white"
            >
              ÜRÜNÜ WHATSAPP'TAN GÖNDER →
            </a>
          </div>

          <div className="relative min-h-[500px] overflow-hidden bg-white">
            <Image
              src="/images/mertertoptantekstil.png"
              alt="Merter toptan giyim kadın giyim ürünleri"
              fill
              priority
              className="object-cover"
            />
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl md:grid-cols-4">
            {[
              ["MERTER", "Toptan Tedarik"],
              ["KADIN GİYİM", "Yeni Sezon"],
              ["B2B", "Butik & Mağaza"],
              ["KARGO", "Türkiye Geneli"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border-b border-black/10 p-7 md:border-b-0 md:border-r"
              >
                <p className="font-serif text-2xl">{title}</p>
                <p className="mt-1 text-sm text-black/50">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="font-serif text-4xl">
            Merter Toptan Giyim Ürün Tedariği
          </h2>

          <p className="mt-6 text-[17px] leading-8 text-black/65">
            Merter, İstanbul'da tekstil ve toptan giyim ticaretinin yoğun
            olduğu bölgelerden biridir. Özellikle butik ve mağazalar için kadın
            giyim ürünlerinde farklı model ve koleksiyon seçeneklerine
            ulaşılabilir. Rota Tedarik, Merter'den ürün almak isteyen
            işletmelerin ürün araştırma ve tedarik sürecini kolaylaştırır.
          </p>

          <h2 className="mt-12 font-serif text-4xl">
            Merter Toptan Kadın Giyim Ürünleri
          </h2>

          <p className="mt-6 text-[17px] leading-8 text-black/65">
            Yeni sezon kadın giyim, takım, ceket, bluz, üst giyim, triko ve dış
            giyim ürünleri için tedarik talebi oluşturabilirsiniz. Belirli bir
            ürün arıyorsanız ürünün fotoğrafını WhatsApp üzerinden göndermeniz,
            aradığınız modele yönelik tedarik sürecini başlatmayı kolaylaştırır.
          </p>

          <div className="my-12 grid gap-4 sm:grid-cols-2">
            {[
              "Toptan Kadın Takım",
              "Toptan Ceket",
              "Toptan Bluz & Üst Giyim",
              "Toptan Triko",
              "Yeni Sezon Kadın Giyim",
              "Toptan Dış Giyim",
            ].map((item) => (
              <div
                key={item}
                className="border border-black/10 bg-white px-6 py-5 font-semibold"
              >
                {item}
              </div>
            ))}
          </div>

          <h2 className="mt-12 font-serif text-4xl">
            Butikler İçin Merter Toptan Giyim
          </h2>

          <p className="mt-6 text-[17px] leading-8 text-black/65">
            Butik işletmeleri için düzenli ürün tedariği koleksiyonun güncel
            tutulmasına yardımcı olur. İstanbul dışında faaliyet gösteren
            işletmeler de aradıkları modelleri uzaktan ileterek Merter'den
            ürün tedarik talebi oluşturabilir.
          </p>

          <h2 className="mt-12 font-serif text-4xl">
            Merter'e Gelmeden Ürün Tedarik Edin
          </h2>

          <p className="mt-6 text-[17px] leading-8 text-black/65">
            Her ürün alımında İstanbul'a gelmek yerine aradığınız modeli veya
            ürün grubunu bize gönderebilirsiniz. Talebe göre ürün seçenekleri
            araştırılır, sipariş detayları netleştirilir ve gönderim süreci
            organize edilir.
          </p>

          <div className="mt-14 border border-black/10 bg-white p-8 md:p-10">
            <p className="text-xs font-bold tracking-[.2em] text-black/40">
              ANA MERTER TEDARİK REHBERİ
            </p>

            <h2 className="mt-4 font-serif text-3xl">
              Merter Toptan
            </h2>

            <p className="mt-4 leading-7 text-black/60">
              Merter'den toptan ürün tedariği, ürün grupları ve butiklere
              yönelik tedarik sistemi hakkında ana sayfamızı inceleyin.
            </p>

            <Link
              href="/merter-toptan"
              className="mt-6 inline-block bg-[#202a30] px-7 py-4 text-sm font-bold text-white"
            >
              MERTER TOPTAN REHBERİ →
            </Link>
          </div>

          <h2 className="mt-14 font-serif text-4xl">
            Türkiye Geneli Merter Toptan Gönderim
          </h2>

          <p className="mt-6 text-[17px] leading-8 text-black/65">
            Merter'den tedarik edilen kadın giyim ürünleri Türkiye'nin farklı
            şehirlerindeki butik ve mağazalara gönderilebilir. Kıbrıs'taki
            işletmeler için de tedarik talepleri değerlendirilmektedir.
          </p>
        </section>

        <section className="bg-[#202a30] text-white">
          <div className="mx-auto max-w-4xl px-6 py-16 text-center">
            <p className="text-xs font-bold tracking-[.22em] text-white/45">
              MERTER TOPTAN GİYİM
            </p>

            <h2 className="mt-5 font-serif text-4xl md:text-5xl">
              Aradığınız ürünü bize gönderin.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/60">
              Ürün fotoğrafını WhatsApp üzerinden iletin. Tedarik seçeneklerini
              kontrol ederek size dönüş yapalım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-[#f4f1eb] px-8 py-4 text-sm font-bold text-[#202a30]"
            >
              WHATSAPP'TAN ÜRÜN GÖNDER →
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-wrap gap-5 text-sm font-semibold">
            <Link href="/merter-toptan">
              Merter Toptan →
            </Link>

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
        </section>
      </article>
    </main>
  );
}
