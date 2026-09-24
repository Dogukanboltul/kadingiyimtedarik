import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kadingiyimtedarik.com"),
  title: {
    default: "Kadın Giyim Tedarikçisi | Rota Tedarik",
    template: "%s | Rota Tedarik",
  },
  description:
    "Butik, mağaza ve online satıcılar için kadın giyim ürün tedariği. Aradığınız ürünün fotoğrafını gönderin, İstanbul tekstil piyasasında sizin için bulalım.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
