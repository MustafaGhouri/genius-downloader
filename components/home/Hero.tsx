'use client'
import { Loader, Search } from 'lucide-react'
import { BackgroundCircles } from '../ui/Parallax'
import { useEffect, useRef, useState } from 'react'
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
    const [fileSize, setFileSize] = useState('');
    const [fileDuration, setFileDuration] = useState(0);
    const [downloadLoading, setDownloadLoading] = useState(false);
    const [mediaUrl, setMediaUrl] = useState('');

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };
    useEffect(() => {
        if (mediaUrl && videoRef.current) {
            videoRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
            getFileDetails(mediaUrl)
        }
    }, [mediaUrl])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!urlInput) {
            setErrorMessage('Provide Url first')
            return
        } else setErrorMessage('');

        const parsedUrl = mediaUrlSchema.safeParse({ url: urlInput });
        if (parsedUrl.error) {
            let messages = ''
            parsedUrl.error.issues.map((i, _) => (
                messages += `${_ > 0 ? ' & ' : ''}` + i.message
            ))
            setErrorMessage(messages)

            return;
        } else setErrorMessage('');

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
            if (!res.ok) {
                setErrorMessage(data?.error || res.statusText)
            } else setErrorMessage('');
            setMediaUrl(data.media_url);
            getFileDetails(data.media_url)
        } catch (error) {
            console.log(error)
            setErrorMessage((error as Error).message)
        }
        finally {
            setDownloadLoading(false)
        }
    }
    async function downloadFile(url: string) {
        if (!urlInput) {
            return
        };
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

    async function getFileDetails(url: string) {
        if (!url) return;

        try {
            const res = await fetch(url);
            const blob = await res.blob();
            if (res.ok) {
                setErrorMessage('')
            }

            const sizeInBytes = blob.size;
            const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2);
            setFileSize(sizeInMB)
            const videoEl = document.createElement("video");
            videoEl.preload = "metadata";

            const objectUrl = URL.createObjectURL(blob);
            videoEl.src = objectUrl;

            videoEl.onloadedmetadata = () => {
                const duration = videoEl.duration;
                setFileDuration(duration)
                URL.revokeObjectURL(objectUrl);
            };

        } catch (error) {
            console.error(error);
            setErrorMessage('Failed to get video details: ' + (error as Error).message);
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
                        delayPerItem={0.03}
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
                    </div>
                    <button
                        type='submit'
                        disabled={downloadLoading}
                        className="hidden md:flex justify-center items-center btn-animated min-w-[120px] sm:min-w-[150px] md:min-w-[180px] rounded py-3.5 sm:py-[22px] font-body text-base text-[10px]  gap-1 sm:text-lg md:text-xl">
                        <span className="btn-text mx-2 flex items-center justify-center gap-2">Download {downloadLoading ? <Loader className='animate-spin' /> : ''}</span>
                    </button>
                </form>
                {/* Preview */}
                {mediaUrl && (
                    <>
                        <div id='video-preview' className="flex pb-18 my-5 flexs-col items-center justify-center gap-5 p-2 rounded-md bg-white/10 backdrop-blur-md border border-white/20 shadow-lg w-full max-w-2xl mx-auto">

                            <div className="relative  w-full max-w-md mx-auto aspect-[4/3] bg-black rounded-md overflow-hidden shadow-md">

                                <video
                                    ref={videoRef}
                                    src={mediaUrl}
                                    className="w-full h-full object-cover object-top rounded-md"
                                />

                                <div
                                    onClick={togglePlay}
                                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                >
                                    {!isPlaying && (
                                        <div className="bg-gray-600/50 p-4 rounded-full backdrop-blur-sm transition-all hover:bg-black/60">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-12 w-12 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className=' w-full '>
                                <div className="flex w-full flex-col gap-4">

                                    <button
                                        onClick={() => downloadFile(mediaUrl)}
                                        className="block px-5 py-2.5 text-sm md:text-[15px] font-normal tracking-wide btn-animated">
                                        <span className="btn-text">Download</span>
                                    </button>
                                    <a
                                        href={mediaUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-2 rounded-lg bg-white text-black font-semibold shadow-md hover:bg-white transition"
                                    >
                                        Open in New Tab
                                    </a>
                                </div>
                            </div>
                            {fileDuration > 0 && fileSize !== '' && < div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-row gap-3 bg-black/50 px-2 py-1 rounded-full text-white text-sm font-medium backdrop-blur-sm shadow-md">
                                {fileDuration !== null && (
                                    <p className="m-0">Duration: {fileDuration?.toString()}s</p>
                                )}
                                {fileSize !== null && <p className="m-0">Size: {fileSize} MB</p>}
                            </div>}

                        </div>
                    </>
                )}

                {errorMessage && <p className='text-white'>{errorMessage}</p>}

            </div>
        </section >
    )
}

export default Hero
