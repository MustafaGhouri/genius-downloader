import type { Metadata } from "next";
import {Inter,Caveat,Questrial } from "next/font/google";
import  localFont  from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});
const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight:['400']
});
const adieu = localFont({
  variable:'--font-Adieu',
  src: './font/Adieu.ttf',
})
 
export const metadata: Metadata = {
  title: "Genius Downloader",
  description: "One Tool. Every Video.Zero Trouble. Download videos from YouTube, Instagram, TikTok, Facebook and more — fast, clean, and always in HD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  ${adieu.className} ${caveat.variable} ${questrial.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
