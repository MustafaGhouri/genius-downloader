import Image from "next/image";

const ReelSection = () => {
  return (
    <div className="min-h-screen bg-[url('/images/reel-section.png')] max-sm:bg-[url('/images/reel-section-mob.png')] max-sm: bg-bottom bg-no-repeat bg-contain bg-[#FD5A17] relative overflow-hidden">

      <div className="container mx-auto px-4 py-11 lg:py-16 relative z-10">
        <div className="flex flex-col items-center gap-3 mb-8 lg:mb-12">
          <h1 className="text-black text-center font-adieu text-4xl sm:text-6xl lg:text-[58px] font-normal">
            Any Platform, Any Quality.
          </h1>
          <p style={{fontFamily:'var(--font-questrial)'}}   className="text-black text-center font-questrial text-base sm:text-lg lg:text-[18px] font-light">
            YouTube, Instagram, TikTok... Get the highest resolution media instantly.
          </p>
        </div>

        <div className="relative hisdden mb-12 lg:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 max-w-7xl mx-auto">
            <div className="lg:col-span-3 grid grid-cols-1 gap-4 lg:gap-5">
              <div className="relative aspect-289/380 lg:aspect-289/380">
                <Image
                  fill
                  src="/images/Reel.png"
                  alt="Samsung Presents"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div style={{ boxShadow: '8px 8px 0 0 #FFC803' }} className="border-gray-900 lg:border-2 rounded-2xl relative max-sm:mr-2 aspect-289/232 lg:aspect-210/226">
                <Image
                  fill
                  src="/images/reel4.png"
                  alt="Samsung Presents"
                  className="w-full h-full object-cover rounded-xl "
                />
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-4 lg:gap-5">
              <div className="relative aspect-427/240 lg:aspect-427/240">
                <Image
                  fill
                  src="/images/reel2.png"
                  alt="YouTube Music"
                  className="w-full h-full object-cover rounded-xl "
                />
              </div>
              <div className="relative aspect-427/370 lg:aspect-427/370">
                <Image
                  fill
                  src="/images/reel5.png"
                  alt="Galaxy A"
                  className="w-full h-full object-cover rounded-xl "
                />
              </div>
            </div>

            <div className="lg:col-span-4">
              <div
                style={{ boxShadow: '8px 8px 0 0 #FFC803' }}
                className=" rounded-2xl relative aspect-360/640 lg:aspect-360/660 border-gray-900 border-2">
                <Image
                  fill
                  src="/images/reel3.png"
                  alt="YouTube Shorts"
                  className="w-full h-full object-cover rounded-xl "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelSection;
