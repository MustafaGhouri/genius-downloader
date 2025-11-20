import Image from "next/image";

const ReelSection = () => {
  return (
<div className="min-h-screen bg-[url('/images/reel-section.png')] max-sm:bg-[url('/images/reel-section-mob.png')] max-sm:bg-bottom bg-no-repeat bg-contain bg-[#FD5A17] relative overflow-hidden">

      <div className="container mx-auto px-4 py-11 lg:py-16 relative z-10">
        <div className="flex flex-col items-center gap-3 mb-8 lg:mb-12">
          <h1 className="text-black text-center font-adieu text-4xl sm:text-6xl lg:text-[58px] font-normal">
            Any Platform, Any Quality.
          </h1>
          <p className="text-black text-center font-questrial text-base sm:text-lg lg:text-[18px] font-light">
            YouTube, Instagram, TikTok... Get the highest resolution media instantly.
          </p>
        </div>

        {/* Media Grid */}
        <div className="relative hisdden mb-12 lg:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 max-w-7xl mx-auto">
            {/* Left Column - Small images */}
            <div className="lg:col-span-3 grid grid-cols-1 gap-4 lg:gap-5">
              <div className="relative aspect-289/380 lg:aspect-289/380">
                <img
                  src="/images/Reel.png"
                  alt="Samsung Presents"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="relative aspect-289/232 lg:aspect-289/232">
                <img
                  src="/images/reel4.png"
                  alt="Samsung Presents"
                  className="w-full h-full object-cover rounded-xl "
                />
              </div>
            </div>

            {/* Middle Column - Medium images */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4 lg:gap-5">
              <div className="relative aspect-427/240 lg:aspect-427/240">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ce785a1dc3cd2a1663ef24b93eb7a377b56ca100?width=854"
                  alt="YouTube Music"
                  className="w-full h-full object-cover rounded-xl "
                />
              </div>
              <div className="relative aspect-427/370 lg:aspect-427/370">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/75cac0d8e58a985e7c7aa327cf874ae442fe15b3?width=854"
                  alt="Galaxy A"
                  className="w-full h-full object-cover rounded-xl "
                />
              </div>
            </div>

            {/* Right Column - Tall image */}
            <div className="lg:col-span-4">
              <div className="relative aspect-360/640 lg:aspect-360/640">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e5b7da04065d5744774cff7cac9c444cbaf512a0?width=720"
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
