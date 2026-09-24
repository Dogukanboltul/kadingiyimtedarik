import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merter Toptan | Kadın Giyim Tedarikçisi | Rota Tedarik",
  description:
    "Merter toptan kadın giyim tedariği. Butik ve mağazalar için Merter'den yeni sezon kadın giyim, takım, ceket, bluz, triko ve dış giyim ürün tedariği.",
  alternates: {
    canonical: "https://kadingiyimtedarik.com/merter-toptan",
  },
  openGraph: {
    title: "Merter Toptan Kadın Giyim | Rota Tedarik",
    description:
      "Merter'den butik ve mağazalara toptan kadın giyim ürün tedariği.",
    url: "https://kadingiyimtedarik.com/merter-toptan",
    type: "website",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20Merter%27den%20toptan%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BC%20tedarik%20etmek%20istiyorum.";

const categories = [
  ["Yeni Sezon", "/images/toptankadingiyimmodel.jpeg"],
  ["Ceket", "/images/toptanceket.jpeg"],
  ["Kadın Giyim", "/images/bisou.jpeg"],
  ["Triko", "/images/kadinkazak.jpeg"],
  ["Koleksiyon", "/images/merterkoleksiyon.jpeg"],
  ["Butik Ürünleri", "/images/model.jpeg"],
];

const faq = [
  [
    "Merter'den toptan kadın giyim nasıl alınır?",
    "Aradığınız ürünün fotoğrafını veya ürün grubunu WhatsApp üzerinden bize gönderebilirsiniz. Talebe göre Merter'deki tedarik seçenekleri araştırılır ve sipariş süreci organize edilir.",
  ],
  [
    "İstanbul dışında Merter'den ürün alabilir miyim?",
    "Evet. Türkiye'nin farklı şehirlerindeki butik ve mağazalar için uzaktan ürün tedarik talepleri alınmaktadır.",
  ],
  [
    "Merter'den hangi kadın giyim ürünleri tedarik edilebilir?",
    "Yeni sezon kadın giyim, takım, ceket, bluz, üst giyim, triko ve dış giyim başta olmak üzere farklı ürün grupları için talep oluşturabilirsiniz.",
  ],
  [
    "Kıbrıs'a ürün gönderimi yapılıyor mu?",
    "Kıbrıs'taki butik ve mağazalardan gelen tedarik ve gönderim talepleri de değerlendirilmektedir.",
  ],
];

export default function MerterToptanPage() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-[#202a30]">
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-semibold tracking-[.18em]">
            ROTA TEDARİK
          </Link>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#202a30] px-5 py-3 text-xs font-bold tracking-wider text-white"
          >
            ÜRÜN TALEBİ →
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-xs font-bold tracking-[.25em] text-black/50">
            MERTER • TOPTAN GİYİM • B2B TEDARİK
          </p>

          <h1 className="max-w-4xl font-serif text-6xl leading-[.98] md:text-7xl">
            Merter Toptan
            <span className="mt-2 block">Kadın Giyim</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-black/65">
            Merter'den toptan kadın giyim ürünü arayan butik, mağaza ve online
            satıcılara ürün tedarik desteği sunuyoruz. Aradığınız modeli bize
            gönderin; ürün araştırması, tedarik ve gönderim sürecini organize
            edelim.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#202a30] px-7 py-4 text-sm font-bold text-white"
            >
              WHATSAPP'TAN ÜRÜN GÖNDER →
            </a>

            <a
              href="#urunler"
              className="border border-black/20 bg-white px-7 py-4 text-sm font-bold"
            >
              ÜRÜNLERİ İNCELE
            </a>
          </div>
        </div>

        <div className="relative min-h-[540px] overflow-hidden bg-white">
          <Image
            src="/images/merterdentedarik.jpeg"
            alt="Merter toptan kadın giyim ürün tedariği"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-[#202a30]/95 p-7 text-white">
            <p className="text-xs font-bold tracking-[.2em] text-white/55">
              ROTA TEDARİK
            </p>
            <p className="mt-2 font-serif text-2xl">
              Merter'den Türkiye geneline ürün tedariği
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl md:grid-cols-4">
          {[
            ["MERTER", "Ürün Tedariği"],
            ["B2B", "Butik & Mağaza"],
            ["TÜRKİYE", "Geneli Gönderim"],
            ["KIBRIS", "Tedarik Desteği"],
          ].map(([big, small]) => (
            <div
              key={big}
              className="border-b border-black/10 p-7 md:border-b-0 md:border-r"
            >
              <p className="font-serif text-3xl">{big}</p>
              <p className="mt-1 text-sm text-black/50">{small}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="urunler"
        className="mx-auto max-w-7xl px-6 py-20 md:py-24"
      >
        <p className="text-xs font-bold tracking-[.22em] text-black/45">
          MERTER TOPTAN ÜRÜNLER
        </p>

        <h2 className="mt-4 max-w-3xl font-serif text-4xl md:text-5xl">
          Merter kadın giyim ürün grupları
        </h2>

        <p className="mt-5 max-w-3xl leading-7 text-black/60">
          Butiğiniz veya mağazanız için aradığınız ürün grubunu seçebilir ya da
          belirli bir modelin fotoğrafını doğrudan WhatsApp üzerinden
          gönderebilirsiniz.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([name, image]) => (
            <div key={name} className="overflow-hidden bg-white">
              <div className="relative h-80">
                <Image
                  src={image}
                  alt={`Merter toptan ${name.toLocaleLowerCase("tr-TR")}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <p className="text-xs font-bold tracking-[.15em] text-black/35">
                  MERTER TOPTAN
                </p>
                <h3 className="mt-2 font-serif text-2xl">{name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-bold tracking-[.22em] text-black/40">
            MERTER TOPTAN GİYİM
          </p>

          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Merter'den Toptan Kadın Giyim Tedariği
          </h2>

          <div className="mt-9 space-y-8 text-[17px] leading-8 text-black/65">
            <p>
              Merter, İstanbul tekstil sektöründe kadın giyim üretimi ve toptan
              satışın yoğun olduğu bölgelerden biridir. Butikler, mağazalar ve
              online satış işletmeleri farklı kadın giyim kategorilerinde ürün
              arayışları için Merter'deki tedarik seçeneklerinden
              yararlanabilir.
            </p>

            <p>
              Rota Tedarik, özellikle İstanbul dışında faaliyet gösteren
              işletmelerin Merter'den ürün tedarik sürecini kolaylaştırır.
              İhtiyacınız olan ürünün fotoğrafını veya ürün grubunu
              iletebilirsiniz. Talebe uygun seçenekler araştırılarak tedarik
              süreci organize edilir.
            </p>

            <p>
              Yeni sezon kadın giyim, ceket, takım, bluz, triko ve dış giyim
              gibi farklı kategorilerde tedarik talebi oluşturabilirsiniz.
              Ürün bulunabilirliği modele, sezona ve stok durumuna göre
              değişebilir.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[.22em] text-black/40">
              BUTİKLER İÇİN
            </p>

            <h2 className="mt-4 font-serif text-4xl">
              İstanbul'a gelmeden Merter'den ürün alın
            </h2>

            <p className="mt-6 leading-8 text-black/65">
              Şehir dışında butik veya mağaza işletiyorsanız aradığınız ürünleri
              uzaktan bize iletebilirsiniz. Böylece her ürün arayışında
              İstanbul'a gelmek yerine ürün tedarik sürecinizi uzaktan
              yönetebilirsiniz.
            </p>
          </div>

          <div className="bg-[#202a30] p-8 text-white md:p-10">
            <p className="text-xs font-bold tracking-[.2em] text-white/50">
              3 ADIMDA TEDARİK
            </p>

            <div className="mt-7 space-y-6">
              <div className="border-b border-white/10 pb-5">
                <span className="text-xs text-white/40">01</span>
                <h3 className="mt-1 font-serif text-2xl">Ürünü gönderin</h3>
              </div>

              <div className="border-b border-white/10 pb-5">
                <span className="text-xs text-white/40">02</span>
                <h3 className="mt-1 font-serif text-2xl">Tedarik edelim</h3>
              </div>

              <div>
                <span className="text-xs text-white/40">03</span>
                <h3 className="mt-1 font-serif text-2xl">Gönderimi yapalım</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-bold tracking-[.22em] text-black/40">
            SIK SORULAN SORULAR
          </p>

          <h2 className="mt-4 font-serif text-4xl">
            Merter Toptan Hakkında
          </h2>

          <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
            {faq.map(([question, answer]) => (
              <div key={question} className="py-7">
                <h3 className="font-serif text-2xl">{question}</h3>
                <p className="mt-3 max-w-3xl leading-7 text-black/60">
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-xs font-bold tracking-[.22em] text-black/40">
          MERTER REHBERİ
        </p>

        <h2 className="mt-4 font-serif text-4xl">
          Merter kadın giyim içerikleri
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Link
            href="/blog/merter-toptan-kadin-giyim"
            className="border border-black/10 bg-white p-6 font-semibold"
          >
            Merter Toptan Kadın Giyim →
          </Link>

          <Link
            href="/blog/merter-kadin-giyim-toptancisi"
            className="border border-black/10 bg-white p-6 font-semibold"
          >
            Merter Kadın Giyim Toptancısı →
          </Link>

          <Link
            href="/blog/merter-toptan-kadin-giyim-firmalari"
            className="border border-black/10 bg-white p-6 font-semibold"
          >
            Merter Toptan Kadın Giyim Firmaları →
          </Link>

          <Link
            href="/blog/merter-kadin-giyim-toptan-satis"
            className="border border-black/10 bg-white p-6 font-semibold"
          >
            Merter Kadın Giyim Toptan Satış →
          </Link>
        </div>
      </section>

      <section className="bg-[#202a30] text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <p className="text-xs font-bold tracking-[.22em] text-white/45">
            MERTER TOPTAN TEDARİK
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl md:text-5xl">
            Merter'den hangi ürünü arıyorsunuz?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/60">
            Ürünün fotoğrafını WhatsApp'tan gönderin. Tedarik seçeneklerini
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
    </main>
  );
}
