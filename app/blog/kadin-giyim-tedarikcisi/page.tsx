import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kadın Giyim Tedarikçisi | Toptan Ürün Tedariki | Rota Tedarik",
  description:
    "Kadın giyim tedarikçisi arayan butik, mağaza ve online satıcılar için ürün tedariği. İstanbul'dan Türkiye geneli ve Kıbrıs'a kadın giyim tedarik hizmeti.",
  alternates: {
    canonical: "https://kadingiyimtedarik.com/blog/kadin-giyim-tedarikcisi",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BC%20tedarik%20etmek%20istiyorum.";

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
          KADIN GİYİM • B2B TEDARİK
        </p>

        <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
          Kadın Giyim Tedarikçisi
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-black/65">
          Butik, mağaza ve online satış yapan işletmeler için kadın giyim
          ürünlerinin tedariğini organize ediyoruz. İhtiyacınız olan ürünleri
          bize iletin; uygun ürünlerin bulunması, hazırlanması ve kargoya
          verilmesi sürecini tek noktadan yönetin.
        </p>

        <div className="my-12 border-y border-black/10 py-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <b>AYNI GÜN TEDARİK</b>
              <p className="mt-2 text-sm text-black/60">
                Uygun ürünlerde hızlı tedarik süreci.
              </p>
            </div>
            <div>
              <b>AYNI GÜN KARGO</b>
              <p className="mt-2 text-sm text-black/60">
                Hazır siparişlerde hızlı kargo çıkışı.
              </p>
            </div>
            <div>
              <b>TÜRKİYE & KIBRIS</b>
              <p className="mt-2 text-sm text-black/60">
                Mağaza ve butiklere gönderim.
              </p>
            </div>
          </div>
        </div>

        <section className="space-y-6 text-[17px] leading-8 text-black/70">
          <h2 className="font-serif text-3xl text-[#202a30]">
            Kadın giyim ürün tedariği
          </h2>
          <p>
            Kadın giyim sektöründe doğru ürüne hızlı ulaşmak, özellikle butik
            ve mağazalar için önemli bir operasyon sürecidir. Rota Tedarik;
            yeni sezon kadın giyim ürünleri, bluz, üst giyim, ceket, takım,
            dış giyim ve triko gibi farklı ürün gruplarında tedarik taleplerini
            karşılamak için çalışır.
          </p>

          <h2 className="pt-5 font-serif text-3xl text-[#202a30]">
            Butik ve mağazalar için tedarik
          </h2>
          <p>
            İstanbul dışında olmanız ürün tedariğine engel değildir. Aradığınız
            modeli veya ürün grubunu WhatsApp üzerinden bize gönderebilirsiniz.
            Talebinize göre ürün araştırması yapılarak tedarik süreci
            başlatılır ve hazırlanan ürünler adresinize kargolanır.
          </p>

          <h2 className="pt-5 font-serif text-3xl text-[#202a30]">
            Hangi ürünleri tedarik ediyoruz?
          </h2>
          <p>
            Kadın giyim koleksiyonlarında bluz ve üst giyim, ceket, takım,
            triko, dış giyim ve sezonluk ürün grupları için tedarik desteği
            sunuyoruz. Böylece farklı ürün ihtiyaçlarınızı tek bir tedarik
            süreci üzerinden yönetebilirsiniz.
          </p>

          <h2 className="pt-5 font-serif text-3xl text-[#202a30]">
            Kadın giyim tedarikçisi arıyorsanız
          </h2>
          <p>
            Mağazanız veya online satış kanalınız için aradığınız kadın giyim
            ürününün fotoğrafını ya da ürün grubunu bize gönderin. Tedarik
            imkanını kontrol ederek süreç hakkında bilgi verelim.
          </p>
        </section>

        <div className="mt-14 bg-[#202a30] p-8 text-white md:p-12">
          <p className="text-xs font-bold tracking-[.2em] text-white/60">
            ROTA TEDARİK
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">
            Aradığınız kadın giyim ürününü bize gönderin.
          </h2>
          <p className="mt-4 max-w-xl text-white/65">
            Fotoğraf veya ürün bilgisini WhatsApp üzerinden iletin, tedarik
            sürecini başlatalım.
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
      </article>
    </main>
  );
}
