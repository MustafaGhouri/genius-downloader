import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ReelSection from "@/components/ReelSection";

export default function Home() {
  return (
    <div className="">
      
      {/* Hero Section */}
     <Hero/>

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

      {/* Any Platform section*/}
      <ReelSection />

      {/* How it works / Blogs section */}
      <HowItWorks />


    </div>
  );
}
