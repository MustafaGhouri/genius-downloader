'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

export const BackgroundCircles = ({ parallaxRef }: { parallaxRef?: any }) => {
    const [mounted, setMounted] = useState(false);
    const [enableParallax, setEnableParallax] = useState(true);

    useEffect(() => {
        if (window.innerWidth < 1024) {
            setMounted(true);
            setEnableParallax(false);
        } else {
            setMounted(true);
        }
    }, []);
    return enableParallax && (

        <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
            {/* <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
            <div
              className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
            <div
              className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
            <div
              className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
            <div
              className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
            <div
              className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
            <div
              className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            />
          </div> */}
            <div style={{ animationDuration: `${3 + 2 * 0.3}s` }} className={`absolute ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                } animate-float top-10 md:top-18 left-0 md:left-16 w-20 md:w-36 h-20 md:h-36 opacity-90`}>
                <Image
                    src="/icons/tiktok.png"
                    alt="tiktok"
                    fill
                    className="w-full h-full object-contain -rotate-14"
                />
            </div>

            <div style={{ animationDuration: `${3 + 2 * 0.3}s` }} className={`absolute animate-float top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-24 md:h-32 opacity-90 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}>
                <img
                    // src="/icons/insta.png"
                    src={'https://e1s0bwzoxc.ufs.sh/f/EHhleKT2TuF3ZwzTIDX1TPF5oBNUansJw6khKE2xldzRYAvQ'}
                    alt="insta"
                    // fill
                    className="w-full h-full object-contain -rotate-14"
                />
            </div>

            <div style={{ animationDuration: `${3 + 5 * 0.3}s` }} className={`${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                } absolute animate-float top-12 md:top-8 right-0 md:right-24 w-20 md:w-32 h-20 md:h-32 opacity-90`}>
                <Image
                    src="/icons/x.png"
                    alt="x"
                    fill
                    className="w-full h-full object-contain -rotate-1s4"
                />
            </div>

            <div style={{ animationDuration: `${3 + 3 * 0.3}s` }} className={`${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                } absolute animate-float -bottom-6 left-1/2 w-32 md:w-60 h-32 md:h-60 -translate-x-1/2 opacity-90`}>
                <Image
                    src="/icons/d-arrow.png"
                    alt="d-arroe"
                    fill
                    className="object-contain "
                />
            </div>
            <div style={{ animationDuration: `${3 + 7 * 0.3}s` }} className={`${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                } hidden lg:block animate-float absolute w-48 lg:w-110 h-48 lg:h-110 top-12 md:top-24 -right-24 opacity-90`}>

                <Image
                    src="/icons/d-arrow2.png"
                    alt="d-arrow"
                    fill
                    className="object-contain "
                />
            </div>
            <div style={{ animationDuration: `${3 + 1 * 0.3}s` }} className={`${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                } hidden lg:block animate-float absolute w-32 md:w-60 h-48 md:h-60  top-36 md:top-48 left-4 md:right-24 opacity-90 `}>
                <Image
                    src="/icons/d-arrow3.png"
                    alt="d-arroe"
                    fill
                    className="object-contain "
                />
            </div>


            <div style={{ animationDuration: `${3 + 8 * 0.3}s` }} className={`${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                } absolute animate-float bottom-0 md:bottom-16 left-0 md:left-32 w-16 md:w-28 h-16 md:h-28 opacity-90`}>
                <Image
                    src="/icons/youtube.png"
                    alt="youtube"
                    fill
                    className="w-full h-full object-contain -rotate-13"
                />
            </div>

            <div style={{ animationDuration: `${3 + 9 * 0.3}s` }} className={`${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                } absolute animate-float bottom-0 md:bottom-8 right-0 md:right-24 w-28 md:w-52 h-28 md:h-52 opacity-90`}>
                <Image
                    src="/icons/facebook.png"
                    alt="youtube"
                    fill
                    className="w-full h-full object-contain rotate-1s8"
                />
            </div>
        </MouseParallax>
    );
};