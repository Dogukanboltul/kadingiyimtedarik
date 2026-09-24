import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merter Kadın Giyim Toptancısı | Rota Tedarik",
  description:
    "Merter kadın giyim toptancısı arayan butik ve mağazalara ürün tedarik desteği. Yeni sezon kadın giyim, ceket, takım, triko ve üst giyim ürünleri.",
  alternates: {
    canonical: "https://kadingiyimtedarik.com/blog/merter-kadin-giyim-toptancisi",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20Merter%27den%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BC%20tedarik%20etmek%20istiyorum.";

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
          <p className="mb-5 text-xs font-bold tracking-[.22em] text-black/60">
            MERTER • KADIN GİYİM • TOPTAN TEDARİK
          </p>

          <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
            Merter Kadın Giyim Toptancısı
          </h1>

          <p className="mt-8 text-lg leading-8 text-black/65">
            Merter'den kadın giyim ürünü almak isteyen butik, mağaza ve online
            satış işletmelerine tedarik desteği sağlıyoruz. Aradığınız ürünü
            bize gönderin; ürün araştırması, tedarik ve gönderim sürecini
            organize edelim.
          </p>
        </div>

        <div className="my-14 grid border-y border-black/10 md:grid-cols-3">
          <div className="py-7 md:border-r md:border-black/10">
            <p className="text-xs tracking-widest text-black/45">01</p>
            <h2 className="mt-2 font-semibold">ÜRÜNÜ GÖNDERİN</h2>
            <p className="mt-2 text-sm text-black/55">
              Fotoğraf veya ürün bilgisini WhatsApp'tan iletin.
            </p>
          </div>

          <div className="py-7 md:border-r md:border-black/10 md:px-7">
            <p className="text-xs tracking-widest text-black/45">02</p>
            <h2 className="mt-2 font-semibold">TEDARİK EDELİM</h2>
            <p className="mt-2 text-sm text-black/55">
              Merter'deki uygun ürün seçeneklerini araştıralım.
            </p>
          </div>

          <div className="py-7 md:pl-7">
            <p className="text-xs tracking-widest text-black/45">03</p>
            <h2 className="mt-2 font-semibold">KARGO ÇIKIŞI</h2>
            <p className="mt-2 text-sm text-black/55">
              Hazırlanan siparişi adresinize gönderelim.
            </p>
          </div>
        </div>

        <section className="max-w-4xl space-y-8 text-[17px] leading-8 text-black/70">
          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              Merter'de Kadın Giyim Toptan Ürün Tedariği
            </h2>
            <p>
              Merter tekstil bölgesindeki kadın giyim ürünlerine ulaşmak isteyen
              işletmeler için tedarik sürecini kolaylaştırıyoruz. Özellikle
              İstanbul dışında faaliyet gösteren butik ve mağazalar, ihtiyaç
              duydukları ürünleri uzaktan bize ileterek tedarik talebi
              oluşturabilir.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              Butikler İçin Merter Kadın Giyim Ürünleri
            </h2>
            <p>
              Butiğiniz için yeni sezon ürün, kadın takım, ceket, bluz, üst
              giyim, triko veya dış giyim arıyorsanız istediğiniz modeli bize
              gönderebilirsiniz. Talebe göre ürün bulunabilirliği ve tedarik
              seçenekleri kontrol edilir.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              İstanbul'a Gelmeden Merter'den Ürün Tedariği
            </h2>
            <p>
              Merter'den ürün almak için her siparişte İstanbul'a gelmek
              istemeyen işletmelere uzaktan tedarik desteği sunuyoruz.
              Ürün fotoğrafınızı veya istediğiniz ürün grubunu WhatsApp
              üzerinden göndererek talebinizi oluşturabilirsiniz.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl text-[#202a30]">
              Türkiye Geneli ve Kıbrıs'a Gönderim
            </h2>
            <p>
              Tedarik edilen ürünler hazırlanarak Türkiye'nin farklı
              şehirlerindeki ve Kıbrıs'taki butik ve mağazalara gönderilebilir.
              Uygun ve hazır siparişlerde aynı gün kargo çıkışı hedeflenir.
            </p>
          </div>
        </section>

        <div className="mt-14 bg-[#202a30] p-8 text-white md:p-12">
          <p className="text-xs font-bold tracking-[.2em] text-white/60">
            ROTA TEDARİK
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">
            Merter'den hangi ürünü arıyorsunuz?
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/65">
            Ürün fotoğrafını bize WhatsApp'tan gönderin. Tedarik imkanını
            kontrol edip size dönüş yapalım.
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
          <Link href="/blog/kadin-giyim-tedarikcisi">
            Kadın Giyim Tedarikçisi →
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
