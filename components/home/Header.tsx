'use client'
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#FD5A17] px-4 py-2 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl bg-[rgba(255,88,1,0.04)] backdrop-blur-sm">
          <div className="flex items-center justify-between px-6 md:px-20 py-4">

            <Link href={'/'} className="shrink-0">
              <img
                src="/icons/logo.png"
                alt="Genius"
                className="h-16 md:h-[70px] w-auto"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8 lg:gap-12">

              <Link
                href="/#how-it-works"
                className="font-sans text-sm font-normal text-black tracking-wide hover:opacity-70 transition-opacity"
              >
                <ButtonHoverUnderLine>

                  How it works
                </ButtonHoverUnderLine>
              </Link>
              <Link
                href="/#blogs"
                className="font-sans text-sm font-normal text-black tracking-wide hover:opacity-70 transition-opacity"
              >
                <ButtonHoverUnderLine>

                  Blogs
                </ButtonHoverUnderLine>

              </Link>
              <Link
                href="/#faqs"
                className="font-sans text-sm font-normal text-black tracking-wide hover:opacity-70 transition-opacity"
              >
                <ButtonHoverUnderLine>
                  FAQs
                </ButtonHoverUnderLine>
              </Link>
            </nav>

            <div className="hidden md:block">

              <button className="hidden md:block px-5 py-2.5 text-sm md:text-[15px] font-normal tracking-wide btn-animated">
                <span className="btn-text">Get Started</span>
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
                <button title="Mobile Menu" 
                onBlur={() => setTimeout(()=>setIsOpen(false),130)} 
                 className="flex flex-col gap-[4.5px] cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}>
                  <div className={`w-6 h-1 bg-black rounded-sm ${isOpen && "rotate-45"} origin-left ease-in-out duration-300`} />
                  <div className={`w-6 h-1 bg-black rounded-sm ${isOpen && "opacity-0"}  ease-in-out duration-300`} />
                  <div className={`w-6 h-1 bg-black rounded-sm ${isOpen && "-rotate-45"} origin-left ease-in-out duration-300`} />
                </button>
            </div>

          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-orange-600/90 rounded-2xl px-6 py-4 flex flex-col gap-4">
              <Link
                href="#how-it-works"
                className="font-sans text-sm font-normal text-black tracking-wide hover:opacity-70 transition-opacity"
              >
                <ButtonHoverUnderLine>
                  How it works
                </ButtonHoverUnderLine>
              </Link>
              <Link
                href="#blogs"
                className="font-sans text-sm font-normal text-black tracking-wide hover:opacity-70 transition-opacity"
              >
                <ButtonHoverUnderLine>
                  Blogs
                </ButtonHoverUnderLine>
              </Link>
              <Link
                href="#faqs"
                className="font-sans text-sm font-normal text-black tracking-wide hover:opacity-70 transition-opacity"
              >
                <ButtonHoverUnderLine>
                  FAQs
                </ButtonHoverUnderLine>
              </Link>
              <button className="hidden md:block px-5 py-2.5 text-sm md:text-[15px] font-normal tracking-wide btn-animated">
                <span className="btn-text">Get Started</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

const ButtonHoverUnderLine = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className='relative  cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white       after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'    >
      {children}
    </button>
  );
};