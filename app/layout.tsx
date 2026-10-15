import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GLOSSARMOR | Perlindungan Cat Mobil & Motor No. 1 - PPF & Ceramic Coating",
  description:
    "Perlindungan maksimal cat mobil & motor Anda. Paint Protection Film (PPF) Self-Healing & Ceramic Coating 10H bergaransi resmi hingga 10 tahun.",
  keywords: [
    "PPF Mobil",
    "PPF Motor",
    "Ceramic Coating",
    "Nano Coating",
    "Paint Protection Film Indonesia",
    "Self Healing PPF",
    "Auto Detailing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${jakarta.variable}`}>
      <body className="bg-brand-darker text-slate-100 font-sans antialiased selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
