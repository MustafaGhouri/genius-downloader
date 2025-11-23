import { Search } from 'lucide-react'
import Image from 'next/image'
import SplitText from '../ui/split-effect'
import { BackgroundCircles } from '../ui/Parallax'
import { SplitText2 } from '../ui/split-effect-ssr'

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-s[url('/images/hero.png')] bg-[#FD5A17] pt-30 pb-24 md:pb-36 psx-4">
            <BackgroundCircles />

            <div className="relative z-10 flex flex-col items-center text-center mxs-auto">
                <h1 style={{ fontFamily: 'var(--font-ghuthen)' }} className="text-5xl max-w-5xl sm:text-6xl md:text-7xl h1-fade lg:text-[119px] font-bold text-black leading-[0.95] tracking-wide mb-4 md:mb-6 [text-shadow:1px_1px_0_#000]">
                    One Tool. Every Video.
                    <br />
                    Zero Trouble.
                </h1>
                {/* <div style={{ fontFamily: 'var(--font-ghuthen)' }} >
                    <SplitText2
                        text={'One Tool. Every Video. Zero Trouble.'}
                        mode={'words'}
                        className="text-5xl max-w-5xl sm:text-6xl md:text-7xl lg:text-[119px] font-bold text-black leading-[0.95] tracking-wide mb-4 md:mb-6 [text-shadow:1px_1px_0_#000]"
                        itemClassName="mx-[1px]"
                        delayPerItem={0.02}
                        duration={0.2}
                        y={12}
                    />
                </div> */}
                {/* <div style={{ fontFamily: 'var(--font-questrial)' }} >
                    <SplitText2
                        text={'Download videos from YouTube, Instagram, TikTok, Facebook and more — fast, clean, and always in HD'}
                        mode={'words'}
                        className="font-body text-base md:text-lg text-black leading-relaxed mb-8 md:mb-12 max-ws-3xl mx-2"
                        itemClassName="mx-[1px]"
                        delayPerItem={0.02}
                        duration={0.2}

                        y={12}
                    />
                </div> */}
                <p style={{ fontFamily: 'var(--font-questrial)' }} className="font-body text-base md:text-lg p-fade text-black leading-relaxed mb-8 md:mb-12 max-ws-3xl mx-2">
                    Download videos from YouTube, Instagram, TikTok, Facebook and more — fast, clean, and always in HD
                </p>
                <div className="flex btns-fade flex-row items-center justify-center gap-3 md:gap-5 max-w-2xl max-sm:px-2 mx-auto">

                    <button className="hidden md:block btn-animated min-w-[120px] sm:min-w-[150px] md:min-w-[180px] rounded py-3.5 sm:py-[22px] font-body text-base text-[10px] sm:text-lg md:text-xl">
                        <span className="btn-text">Download</span>
                    </button>

                    <div className="relative flex-1 w-auto">
                        <input
                            type="text"
                            placeholder="Paste your link"
                            className="w-full max-sm:text-[10px] rounded border-2 border-black bg-transparent px-4 md:px-6 py-3 md:py-5 text-base sm:text-lg md:text-xl text-black placeholder:text-black/60"
                        />
                        <button title='confirm search' className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 rounded-md border border-black bg-transparent p-2 hover:bg-black/5 transition-colors">
                            <Search className="w-4 h-4 md:w-6 md:h-6 text-black" />
                        </button>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Hero
