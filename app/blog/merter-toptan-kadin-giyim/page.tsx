import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merter Toptan Kadın Giyim | Rota Tedarik",
  description:
    "Merter toptan kadın giyim ürün tedariği. Butik ve mağazalar için Merter kadın giyim modelleri, yeni sezon ürünler ve Türkiye geneli tedarik hizmeti.",
  alternates: {
    canonical: "https://kadingiyimtedarik.com/blog/merter-toptan-kadin-giyim",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20Merter%20toptan%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BC%20tedarik%20etmek%20istiyorum.";

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

      <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <p className="mb-5 text-xs font-bold tracking-[.22em] text-black/60">
          MERTER • TOPTAN KADIN GİYİM • TEDARİK
        </p>

        <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
          Merter Toptan Kadın Giyim
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-black/65">
          Merter toptan kadın giyim ürünleri arayan butik, mağaza ve online
          satıcılar için ürün tedarik sürecini kolaylaştırıyoruz. Aradığınız
          modeli veya ürün grubunu bize iletin, Merter bölgesinden tedarik
          sürecini organize edelim.
        </p>

        <div className="my-12 grid gap-px bg-black/10 md:grid-cols-3">
          {[
            ["MERTER TEDARİK", "Kadın giyim ürün araştırması"],
            ["AYNI GÜN KARGO", "Uygun siparişlerde hızlı çıkış"],
            ["TÜRKİYE & KIBRIS", "Butik ve mağazalara gönderim"],
          ].map(([title, text]) => (
            <div key={title} className="bg-white p-7">
              <b className="text-sm">{title}</b>
              <p className="mt-2 text-sm leading-6 text-black/55">{text}</p>
            </div>
          ))}
        </div>

        <section className="space-y-7 text-[17px] leading-8 text-black/70">
          <h2 className="font-serif text-3xl text-[#202a30]">
            Merter'den Toptan Kadın Giyim Tedariği
          </h2>

          <p>
            İstanbul Merter, kadın giyim sektöründe çok sayıda üretici,
            toptancı ve koleksiyonun bir arada bulunduğu önemli tekstil
            bölgelerinden biridir. Rota Tedarik, Merter toptan kadın giyim
            ürünlerine ulaşmak isteyen işletmelerin ürün tedarik sürecine
            destek olur.
          </p>

          <p>
            İstanbul dışında bulunan butik ve mağazalar da Merter'deki ürünler
            için tedarik talebi oluşturabilir. Aradığınız ürünün fotoğrafını,
            modelini veya ürün grubunu WhatsApp üzerinden göndererek süreci
            başlatabilirsiniz.
          </p>

          <h2 className="pt-4 font-serif text-3xl text-[#202a30]">
            Merter Kadın Giyim Ürünleri
          </h2>

          <p>
            Yeni sezon kadın giyim modelleri, bluz ve üst giyim, kadın takım,
            ceket, triko, dış giyim ve farklı sezonluk ürün gruplarında tedarik
            talepleri alınmaktadır. Amaç, farklı ürün ihtiyaçlarını tek bir
            iletişim noktası üzerinden daha kolay yönetebilmektir.
          </p>

          <h2 className="pt-4 font-serif text-3xl text-[#202a30]">
            Butikler İçin Merter Toptan Giyim
          </h2>

          <p>
            Mağazanız için İstanbul'a gelmeden ürün arıyorsanız talebinizi bize
            iletebilirsiniz. İlgilendiğiniz ürün veya model için tedarik
            imkanını kontrol ederek sipariş ve gönderim süreci hakkında bilgi
            veriyoruz.
          </p>

          <h2 className="pt-4 font-serif text-3xl text-[#202a30]">
            Merter Toptan Kadın Giyim Tedarikçisi
          </h2>

          <p>
            Merter toptan kadın giyim tedarikçisi arayan işletmeler için
            ürün bulma, tedarik ve gönderim sürecini tek noktadan yönetiyoruz.
            Türkiye'nin farklı şehirlerindeki ve Kıbrıs'taki butik ve
            mağazalardan gelen kadın giyim taleplerine göre çalışıyoruz.
          </p>
        </section>

        <div className="mt-14 bg-[#202a30] p-8 text-white md:p-12">
          <p className="text-xs font-bold tracking-[.2em] text-white/60">
            MERTER'DEN ÜRÜN MÜ ARIYORSUNUZ?
          </p>

          <h2 className="mt-4 font-serif text-3xl md:text-4xl">
            Aradığınız kadın giyim ürününü bize gönderin.
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-white/65">
            Ürün fotoğrafını veya istediğiniz modeli WhatsApp üzerinden
            iletin. Merter tedarik sürecini başlatalım.
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

        <div className="mt-10 border-t border-black/10 pt-8">
          <Link
            href="/blog/kadin-giyim-tedarikcisi"
            className="text-sm font-semibold underline underline-offset-4"
          >
            Kadın Giyim Tedarikçisi →
          </Link>
        </div>
      </article>
    </main>
  );
}
