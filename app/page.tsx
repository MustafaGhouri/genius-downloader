import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import ReelSection from "@/components/home/ReelSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="scroll-smooth">

        <Hero />

        <section className="bg-black px-4 py-10 md:py-12 text-center">
          <p className="font-sans text-sm md:text-base text-white leading-relaxed mb-6">
            We dislike ads as much as you. Please help us making the website
            ad-free, while continuing to provide high quality service.
          </p>
          <Link href={"https://ko-fi.com/geniusdownloader"} target="_blank" className="cursor-pointer hover:scale-[97%] duration-300 transition-all inline-flex items-center justify-center rounded border border-brand-gray-dark bg-white px-9 py-3 hover:bg-gray-100">
            <Image
              height={220}
              width={220}
              src="/icons/coffee.png"
              alt="Buy me a coffee"
            />
          </Link>

        </section>

        {/* any lpatform section*/}
        <ReelSection />

        {/* how it works / bblogs section */}
        <HowItWorks />


      </div>
  );
}
