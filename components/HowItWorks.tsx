'use client'

import { useRef } from "react";

export default function HowItWorks() {

  const blogs = [
    { title: 'How to start blogging? Most efficient way to get reach.', image: '/images/blog1.png' },
    { title: '10 Reasons not to use groww for invetments.', image: '/images/blog2.png' },
    { title: 'A blog (contraction of weblog) is a web site with frequent', image: '/images/blog3.png' },
  ]

  const steps = [
    'Copy the URL of the video whichever you like.',
    'Paste that URL over the text box provided.',
    'Select any format (MP4, MP3) and resolution (4k, 1080p, 720p)',
    'Now you will see the Download button, simply Click on it'
  ]
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div id="how-it-works" className="min-h-screen bg-[url('/images/how-it-works.png')] bg-no-repeat bg-containbg-no-repeat
    bg-lesft
    bg-[#FFC803]
    overflow-x-hidden

    bg-size-[1200px_auto]         
    sm:bg-size-[1200px_auto]    
    lg:bg-size-[1400px_auto]">
      <div className="relative w-full px-4 sm:px-8 lg:px-20 py-8 md:py-16 lg:py-20">


        <div className="flex flex-col lg:flex-row justify-center gap-6 md:gap-8 my-8 md:my-12 lg:my-16">

          <div className="w-full lg:min-w-[303px]">
            <div
              className="bg-[#FD5A17] rounded-xl border-2 border-black/50 py-8 md:py-10 lg:py-13 px-8 md:px-7 xl:px-13"
              style={{ boxShadow: '8px 8px 0 0 #000' }}
            >
              <h2 style={{ fontFamily: 'var(--font-ghuthen)' }} className="font-bold text-[42px] sm:text-[50px] md:text-[58px] leading-[39.25px] text-black mb-10 md:mb-12">
                How it works?
              </h2>

              <div className="space-y-6">
                {/* Step 1 */}
                {steps.map((i, _) => (

                  <div key={_} className="flex gap-4">
                    <div className="flex-dshrink-0 w-6 h-6 mt-0.5">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" fill="#FF5A19" />
                        <path d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p style={{ fontFamily: 'var(--font-questrial)' }} className="text-[20px] leading-7 tracking-[-0.4px] text-black">
                      {i}
                    </p>
                  </div>))}
              </div>
            </div>
          </div>

          <div id="blogs" className="w-full lg:flex-1 lg:max-w-160 xl:max-w-none relative">
            <div
              className="bg-[#FD5A17] rounded-xl border-2 border-black/50 pb-3 md:pb-6 lg:pb-8 pt-8 md:pt-12 lg:pt-14"
              style={{ boxShadow: '8px 8px 0 0 #000' }}
            >
              <h2 style={{ fontFamily: 'var(--font-ghuthen)' }} className="px-8 md:px-10 lg:px-14 font-bold text-[42px] sm:text-[50px] md:text-[58px] leading-[39.25px] text-black mb-10 md:mb-12">
                What around the world?
              </h2>

              <div className="relative md:px-10 lg:px-14">
                <div ref={scrollRef}
                  className="flex gap-4 max-sm:ml-8 justify-around grow items-stretch md:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">

                  {blogs.map((i, _) => (
                    <div key={_} className="min-w-52  sm:min-w-[278px] snap-start">
                      <div className="bg-black rounded-lg border border-black overflow-hidden h-full flex flex-col">

                        <div className="bg-[#FFC803] p-4 sm:p-9 border-b border-white">
                          <div className="h-40 bg-white rounded-xl border-2 border-black overflow-hidden">
                            <img
                              src={i.image}
                              alt="Blog thumbnail"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        <div className="p-4 bg-black grow flex items-center">
                          <p style={{ fontFamily: 'var(--font-poppins)' }} className="font-poppins font-medium text-[18px] leading-[29.15px] tracking-[-0.71px] text-white text-center capitalize">
                            {i.title}
                          </p>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => scroll('right')}
                  className="absolute cursor-pointer -bottom-18 lg:bottom-1/2 right-1/3 lg:-right-10 w-20 h-20 md:w-[100px] md:h-[100px] rounded-full bg-[#FD5A17] border-2 border-black flex items-center justify-center hover:scale-105 transition-transform"
                  aria-label="Next articles"
                >
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 30H45M45 30L32.5 17.5M45 30L32.5 42.5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
