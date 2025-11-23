import type { Metadata } from "next";
import { Poppins, Questrial } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";


const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: ['400']
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400','600','700','800']
});
const adieu = localFont({
  variable: '--font-Adieu',
  src: './font/Adieu.ttf',
})
const ghuthen = localFont({
  variable: '--font-ghuthen',
  src: './font/Ghuthen.ttf',
  weight: '700'
})
export const metadata: Metadata = {
  title: "Genius Downloader",
  description: "One Tool. Every Video.Zero Trouble. Download videos from YouTube, Instagram, TikTok, Facebook and more — fast, clean, and always in HD.",
  icons:{icon:'/images/footer-logo.png'},
  openGraph: {
    title: "Genius Downloader",
    description: "One Tool. Every Video.Zero Trouble. Download videos from YouTube, Instagram, TikTok, Facebook and more — fast, clean, and always in HD.",
    images: [
      {
        url: '/images/hero-seo.png',
        width: 1024,
        height: 1024,
        alt: 'Project Showcase',
      },
    ],
    siteName: 'Genius_Downloader',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.variable}  ${adieu.className} ${ghuthen.variable} ${questrial.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
