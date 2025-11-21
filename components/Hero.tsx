import { Search } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-s[url('/images/hero.png')] bg-[#FD5A17] pt-30 pb-24 md:pb-36 psx-4">
            <div className="absolute top-10 md:top-18 left-0 md:left-16 w-20 md:w-36 h-20 md:h-36 opacity-90">
                <Image
                    src="/icons/tiktok.png"
                    alt="insta"
                    fill
                    className="w-full h-full object-contain -rotate-14"
                />
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-24 md:h-32 opacity-90">
                <img
                    // src="/icons/insta.png"
                    src={'https://e1s0bwzoxc.ufs.sh/f/EHhleKT2TuF3ZwzTIDX1TPF5oBNUansJw6khKE2xldzRYAvQ'}
                    alt="insta"
                    // fill
                    className="w-full h-full object-contain -rotate-14"
                />
            </div>

            <div className="absolute top-12 md:top-8 right-0 md:right-24 w-20 md:w-32 h-20 md:h-32 opacity-90">
                <Image
                    src="/icons/x.png"
                    alt="insta"
                    fill
                    className="w-full h-full object-contain -rotate-1s4"
                />
            </div>

            <div className="absolute -bottom-6 left-1/2 w-32 md:w-60 h-32 md:h-60 -translate-x-1/2 opacity-90">
                <Image
                    src="/icons/d-arrow.png"
                    alt="d-arroe"
                    fill
                    className="object-contain "
                />
            </div>
            <div className="hidden lg:block absolute w-48 lg:w-110 h-48 lg:h-110 top-12 md:top-24 -right-24 opacity-90">

                <Image
                    src="/icons/d-arrow2.png"
                    alt="d-arrow"
                    fill
                    className="object-contain "
                />
            </div>
            <div className="hidden lg:block absolute w-32 md:w-60 h-48 md:h-60  top-36 md:top-48 left-4 md:right-24 opacity-90">
                <Image
                    src="/icons/d-arrow3.png"
                    alt="d-arroe"
                    fill
                    className="object-contain "
                />
            </div>


            <div className="absolute bottom-0 md:bottom-16 left-0 md:left-32 w-16 md:w-28 h-16 md:h-28 opacity-90">
                <Image
                    src="/icons/youtube.png"
                    alt="youtube"
                    fill
                    className="w-full h-full object-contain -rotate-13"
                />
            </div>

            <div className="absolute bottom-0 md:bottom-8 right-0 md:right-24 w-28 md:w-52 h-28 md:h-52 opacity-90">
                <Image
                    src="/icons/facebook.png"
                    alt="youtube"
                    fill
                    className="w-full h-full object-contain rotate-1s8"
                />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center mxs-auto">
                <h1 style={{ fontFamily: 'var(--font-ghuthen)' }} className="text-5xl max-w-5xl sm:text-6xl md:text-7xl lg:text-[119px] font-bold text-black leading-[0.95] tracking-wide mb-4 md:mb-6 [text-shadow:1px_1px_0_#000]">
                    One Tool. Every Video.
                    <br />
                    Zero Trouble.
                </h1>

                <p style={{fontFamily:'var(--font-questrial)'}}  className="font-body mx-4 text-base md:text-lg text-black leading-relaxed mb-8 md:mb-12 max-ws-3xl mx-auto">
                    Download videos from YouTube, Instagram, TikTok, Facebook and more
                    — fast, clean, and always in HD
                </p>

                <div className="flex flex-row items-center justify-center gap-3 md:gap-5 max-w-2xl max-sm:px-2 mx-auto">

                    <button
                        className="min-w-[120px] sm:min-w-[150px] md:min-w-[180px] 
               rounded bg-black px-6 sm:px-10 md:px-12 
               py-3 sm:py-4 md:py-5
               font-body text-base text-[10px] sm:text-lg md:text-xl 
               text-white hover:bg-gray-900 transition-colors"
                    >
                        Download
                    </button>

                    {/* Input */}
                    <div className="relative flex-1 w-auto">
                        <input
                            type="text"
                            placeholder="Paste your link"
                            className="w-full max-sm:text-[10px] rounded border-2 border-black outline-none bg-transparent 
                 px-4 md:px-6 
                py-3 md:py-5 
                 text-base sm:text-lg md:text-xl 
                 text-black placeholder:text-black/60"
                        />
                        <button className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 rounded-md border border-black bg-transparent p-2 hover:bg-black/5 transition-colors">
                            <Search className="w-4 h-4 md:w-6 md:h-6 text-black" />
                        </button>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Hero
