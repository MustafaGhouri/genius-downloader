'use client'
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
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

            {/* Desktop Navigation */}
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
            <div className="hidden md:block">
              <button className="rounded-lg bg-black px-5 py-2.5 font-body text-sm md:text-[15px] font-normal text-white tracking-wide hover:bg-gray-900 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
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
              <button className="rounded-lg bg-black px-5 py-2.5 font-body text-sm font-normal text-white tracking-wide hover:bg-gray-900 transition-colors">
                Get Started
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
