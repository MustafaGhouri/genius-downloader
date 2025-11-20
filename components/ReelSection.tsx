import Image from 'next/image'

const ReelSection = () => {
    return (
        <section className="relative">
            {/* bg-mage */}
            <Image
                src={'/images/reel-section.png'}
                alt="Any Platform Any video"
                fill
                style={{ objectFit: 'cover' }}
                className="-z-10 absolute"
            />

            {/* Main Content */}
            <div className="flex flex-col gap-6 items-center pt-24">
                <div className="font-(--font-Adieu) text-center flex flex-col items-center ">
                    <h1 className='text-3xl sm:text-6xl'>Any Platform, Any Quality</h1>
                    <p className='text-sm sm:text-lg font-thin'>YouTube, Instagram, TikTok... Get the highest resolution media instantly.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    {/* Left Column */}
                    <div className="grid grid-rows-2 gap-4">
                        <Image
                            src="/images/Reel.png"
                            alt="Any Platform Any video"
                            width={350}
                            height={350}
                            className="w-full h-auto object-cover"
                        />
                        <Image
                            src="/images/reel4.png"
                            alt="Any Platform Any video"
                            width={350}
                            height={350}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Middle Column */}
                    <div className="flex flex-col gap-4">
                        <Image
                            src="/images/reel2.png"
                            alt="Any Platform Any video"
                            width={450}
                            height={450}
                            className="w-full h-auto object-cover"
                        />
                        <Image
                            src="/images/reel5.png"
                            alt="Any Platform Any video"
                            width={450}
                            height={450}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Right Column */}
                    <div className="grid grid-rows-2 gap-4">
                        <Image
                            src="/images/reel3.png"
                            alt="Any Platform Any video"
                            width={380}
                            height={380}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default ReelSection
