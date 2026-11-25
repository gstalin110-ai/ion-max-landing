import AnimacionReveal from "./components/AnimacionReveal";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "IÓN MAX - ULTIMATE | Marca de productos digitales",
  description: "IÓN MAX Ultimate es la marca detrás de productos digitales innovadores. Hoy: Tienda Online — marketplace para comprar, vender y reservar servicios. Más productos próximamente.",
  metadataBase: new URL("https://ionmaxultimate.com"),
  alternates: {
    canonical: "https://ionmaxultimate.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  openGraph: {
    title: "IÓN MAX - ULTIMATE",
    description: "IÓN MAX - Marketplace de compras y servicios. Compra, vende y reserva — dedicados a Ecuador, próximamente más países.",
    url: "https://ionmaxultimate.com",
    siteName: "IÓN MAX",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "IÓN MAX",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IÓN MAX - ULTIMATE",
    description: "IÓN MAX - Marketplace de compras y servicios. Compra, vende y reserva — dedicados a Ecuador, próximamente más países.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-white">
        <AnimacionReveal />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
