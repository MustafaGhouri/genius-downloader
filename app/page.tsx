import Footer from "@/components/Footer";
import ReelSection from "@/components/ReelSection";
import { Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-orange">
      {/* Header */}
      <header className="bg-orange-600 px-4 py-2 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl bg-[rgba(255,88,1,0.04)] backdrop-blur-sm">
            <div className="flex items-center justify-between px-6 md:px-20 py-4">
              {/* Logo */}
              <div className="shrink-0">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4c2d0856bbd3c15ad06ffb4717d7124dd9d662c7?width=107"
                  alt="Genius"
                  className="h-16 md:h-[70px] w-auto"
                />
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-8 lg:gap-12">
                <a
                  href="#how-it-works"
                  className="font-sans text-sm font-normal text-black tracking-wide hover:opacity-70 transition-opacity"
                >
                  How it works
                </a>
                <a
                  href="#blogs"
                  className="font-sans text-sm font-normal text-black tracking-wide hover:opacity-70 transition-opacity"
                >
                  Blogs
                </a>
                <a
                  href="#faqs"
                  className="font-sans text-sm font-normal text-black tracking-wide hover:opacity-70 transition-opacity"
                >
                  FAQs
                </a>
              </nav>

              {/* CTA Button */}
              <button className="rounded-lg bg-black px-5 py-2.5 font-body text-sm md:text-[15px] font-normal text-white tracking-wide hover:bg-gray-900 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-s[url('/images/hero.png')] bg-orange-600 pt-32 md:pt-40 pb-16 md:pb-24 psx-4">
        <div className="mxs-7xl">
          <div className="absolute top-20 md:top-24 left-4 md:left-16 w-20 md:w-28 h-20 md:h-28 opacity-90">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/85fa9220401187cfbeda46a21a794011c871c9d0?width=212"
              alt=""
              className="w-full h-full object-contain rotate-23"
            />
          </div>

          <div className="absolute top-8 md:top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-24 md:h-32 opacity-90">
            <Image
              src="/icons/insta.png"
              alt=""
              fill
              className="w-full h-full object-contain -rotate-14"
            />
          </div>

          <div className="absolute top-12 md:top-8 right-4 md:right-24 w-24 md:w-32 h-24 md:h-32 opacity-90">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2831e714da31e3f221ab034d710d996d57ab8f63?width=233"
              alt=""
              className="w-full h-full object-contain rotate-14"
            />
          </div>

          <div className="absolute bottom-0 left-[550px] w-32 md:w-48 h-32 md:h-48 opacity-90">
            <img
              src="/icons/d-arrow.png"
              alt=""
              className="w-full h-full object-contain "
            />
          </div>  <div className="absolute top-12 md:top-24 rigssht-4 md: right-0 w-32 md:w-48 h-32 md:h-48 opacity-90">
            <img
              src="/icons/d-arrow2.png"
              alt=""
              className="w-full h-full object-contain "
            />
          </div>  <div className="absolute top-36 md:top-48 left-4 md:right-24 w-32 md:w-48 h-32 md:h-48 opacity-90">
            <img
              src="/icons/d-arrow3.png"
              alt=""
              className="w-full h-full object-contain "
            />
          </div>


          <div className="absolute bottom-32 md:bottom-24 left-8 md:left-32 w-20 md:w-28 h-20 md:h-28 opacity-90">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4dc98feb856acdb1a57e4f9150636ebc3ba3e9e2?width=218"
              alt=""
              className="w-full h-full object-contain -rotate-13"
            />
          </div>

          <div className="absolute bottom-16 md:bottom-8 right-8 md:right-24 w-32 md:w-48 h-20 md:h-32 opacity-90">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/19c7a409ceb4e0350714f7e9b782bd5e7416afeb?width=388"
              alt=""
              className="w-full h-full object-contain rotate-18"
            />
          </div>

          {/* Main content */}
          <div style={{ fontFamily: 'var(--font-caveat)' }} className="relative z-10 text-center max-w-5xl mx-auto">
            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[112px] font-semibold text-black leading-[0.95] tracking-wide mb-4 md:mb-6 [text-shadow:1px_1px_0_#000]">
              One Tool. Every Video.
              <br />
              Zero Trouble.
            </h1>

            {/* Subheading */}
            <p className="font-body text-base md:text-lg text-black leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto">
              Download videos from YouTube, Instagram, TikTok, Facebook and more
              — fast, clean, and always in HD
            </p>

            {/* Download form */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 max-w-2xl mx-auto">
              <button
                // onClick={handleDownload}
                className="w-full sm:w-auto rounded bg-black px-12 py-5 font-body text-lg md:text-xl font-normal text-white hover:bg-gray-900 transition-colors"
              >
                Download
              </button>

              <div className="relative w-full sm:flex-1">
                <input
                  type="text"
                  placeholder="Paste your link"
                  // value={url}
                  // onChange={(e) => setUrl(e.target.value)}
                  className="w-full rounded border-2 border-black outline-none bg-transparent px-8 py-5 font-sans text-lg text-black placeholder:text-black/60 focus:outline-none"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-black bg-transparent p-2.5 hover:bg-black/5 transition-colors">
                  <Search className="w-6 h-6 text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad-free support section */}
      <section className="bg-black px-4 py-10 md:py-12 text-center">
        <p className="font-sans text-sm md:text-base text-white leading-relaxed mb-6">
          We dislike ads as much as you. Please help us making the website
          ad-free, while continuing to provide high quality service.
        </p>
        <button className="inline-flex items-center justify-center rounded border border-brand-gray-dark bg-white px-9 py-3 hover:bg-gray-100 transition-colors">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e4a17037ada580d488b9c663105db0ef663c6011?width=392"
            alt="Buy me a coffee"
            className="h-10"
          />
        </button>
      </section>

      {/* Any Platform section
      <section className="px-4 py-16 md:py-24">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/3bf3bd9e5ed483440300a6b8aa0317083e53ff29?width=2560"
          alt="Any Platform, Any Quality"
          className="w-full max-w-7xl mx-auto"
        />
      </section> */}
      <ReelSection />
      {/* How it works / Blogs section */}
      <section className="px-4 pb-16 md:pb-24">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/48789abd1329682477ff6e7f69606fa7a7f4742f?width=2560"
          alt="How it works and Blog section"
          className="w-full max-w-7xl mx-auto"
        />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
