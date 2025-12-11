'use client'
import { Loader, Search } from 'lucide-react'
import { BackgroundCircles } from '../ui/Parallax'
import { useState } from 'react'
import z from 'zod';

export const mediaUrlSchema = z.object({
    url: z
        .url("Invalid URL format").min(6, 'Url Is Required')
        .refine((url) => {
            const allowedHosts = [
                "instagram.com",
                "twitter.com",
                "x.com",
                "tiktok.com",
                "vm.tiktok.com",
                "youtube.com",
                "youtu.be",
                "facebook.com",
                "fb.watch",
            ];
            const { hostname } = new URL(url);
            return allowedHosts.some(domain => hostname.includes(domain));
        }, { message: "Unsupported platform" })
        .refine((url) => {
            const newUrl = new URL(url);

            if (newUrl.hostname.includes("youtube.com") || newUrl.hostname.includes("youtu.be")) {
                return /\/shorts\//.test(url);
            }

            if (newUrl.hostname.includes("facebook.com") || newUrl.hostname.includes("fb.watch")) {
                return /\/reel\//.test(url);
            }

            return true;
        }, {
            message: "YouTube: Only Shorts allowed / Facebook: Only Reels allowed"
        }),
});

const Hero = () => {
    const [urlInput, setUrlInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [downloadLoading, setDownloadLoading] = useState(false);
    const [mediaUrl, setMediaUrl] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!urlInput) {
            setErrorMessage('Provide Url first')
            return
        };
        const parsedUrl = mediaUrlSchema.safeParse({ url: urlInput });
        if (parsedUrl.error) {
            let messages = ''
            parsedUrl.error.issues.map((i, _) => (
                messages += `${_ > 0 ? ' & ' : ''}` + i.message
            ))
            setErrorMessage(messages)

            return;
        }
        try {
            setDownloadLoading(true)

            const res = await fetch('https://mariachug.com/api/media/download/', {
                method: "POST",
                body: JSON.stringify({ media_url: parsedUrl.data.url }),
                headers: {
                    // 'Authorization': 'Bearer N15lUIoNycOeUt3B1Y1mVh_cb7fdy4S0',
                    // 'x-api-key': 'b6ac4f750048007378a2f8d0f3bb0c63',
                    'Content-Type': 'application/json'
                },

            })
            const data = await res.json();
            setMediaUrl(data.media_url);
            downloadFile(data.media_url)
        } catch (error) {
            console.log(error)
        }
        finally {
            setDownloadLoading(false)
        }
    }
    async function downloadFile(url: string) {
        try {
            const res = await fetch(url);
            const blob = await res.blob();
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = "video.mp4";
            a.click();
            URL.revokeObjectURL(a.href);
        } catch (error) {
            setErrorMessage((error as Error).message)
            console.log(error);
        }
    }

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
                <form onSubmit={handleSubmit} className="flex btns-fade flex-row items-center justify-center gap-3 md:gap-5 max-w-3xl w-full max-sm:px-2 mx-auto">

                    <button
                        type='submit'
                        disabled={downloadLoading}
                        className="hidden md:flex justify-center items-center btn-animated min-w-[120px] sm:min-w-[150px] md:min-w-[180px] rounded py-3.5 sm:py-[22px] font-body text-base text-[10px]  gap-1 sm:text-lg md:text-xl">
                        <span className="btn-text mx-2 flex items-center justify-center gap-2">Download {downloadLoading ? <Loader className='animate-spin' /> : ''}</span>
                    </button>
                    <div onSubmit={handleSubmit} className="relative flex-1 w-auto">
                        <input
                            type="text"
                            placeholder="Paste your link"
                            className="w-full max-sm:text-[10px] rounded border-2 border-black bg-transparent px-4 md:px-6 py-3 md:py-5 text-base sm:text-lg md:text-xl text-black placeholder:text-black/60"
                            onChange={(e: any) => {
                                setUrlInput(e.target.value);
                                setErrorMessage('')
                            }}
                        />
                        <button type='submit' title='confirm search' className="absolute cursor-pointer right-1 sm:right-3 top-1/2 -translate-y-1/2 rounded-md border border-black bg-transparent p-2 hover:bg-black/5 transition-colors">
                            <Search className="w-4 h-4 md:w-6 md:h-6 text-black" />
                        </button>
                    </div>
                </form>
                {mediaUrl && <div className='flex flex-col gap-3 items-center justify-center'>
                    <p className='text-white'>{mediaUrl}</p>
                    <button onClick={() => downloadFile(mediaUrl)} className='bg-black text-white px-4 py-2 rounded-md'>Download</button>
                    <a href={mediaUrl} download className='bg-black text-white px-4 py-2 rounded-md' target='_blank' rel='noopener noreferrer'>Download Link</a>
                </div>
                }
                {errorMessage && <p className='text-white'>{errorMessage}</p>}

            </div>
        </section>
    )
}

export default Hero
