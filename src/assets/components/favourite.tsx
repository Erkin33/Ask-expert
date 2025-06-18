"use client"

export default function Banners() {
  return (
    <div className="relative w-full overflow-hidden bg-white py-6 px-4 sm:px-8 border-y border-gray-200">
      <div className="banners-track flex w-max gap-12 sm:gap-24 whitespace-nowrap hover:[animation-play-state:paused]">
        {Array.from({ length: 2 }).map((_, i) => (
          <div className="flex gap-12 sm:gap-24 items-center" key={i}>
            <img src="/Banners/Studio.svg" alt="Studio" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Nortno.svg" alt="Nortno" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Points.svg" alt="Points" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/OutOfThe.svg" alt="OutOfThe" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Brand.svg" alt="Brand" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Fortune.svg" alt="Fortune" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Studio.svg" alt="Studio" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Nortno.svg" alt="Nortno" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Points.svg" alt="Points" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/OutOfThe.svg" alt="OutOfThe" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Brand.svg" alt="Brand" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Fortune.svg" alt="Fortune" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Studio.svg" alt="Studio" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Nortno.svg" alt="Nortno" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Points.svg" alt="Points" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/OutOfThe.svg" alt="OutOfThe" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Brand.svg" alt="Brand" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Fortune.svg" alt="Fortune" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Studio.svg" alt="Studio" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Nortno.svg" alt="Nortno" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Points.svg" alt="Points" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/OutOfThe.svg" alt="OutOfThe" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Brand.svg" alt="Brand" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Fortune.svg" alt="Fortune" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Studio.svg" alt="Studio" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Nortno.svg" alt="Nortno" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Points.svg" alt="Points" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/OutOfThe.svg" alt="OutOfThe" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Brand.svg" alt="Brand" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
            <img src="/Banners/Fortune.svg" alt="Fortune" className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition" />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .banners-track {
          animation: slide 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
