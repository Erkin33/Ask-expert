"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cabin } from "next/font/google";
import { useState } from "react";

const cabin = Cabin({
  weight: "400",
  subsets: ["latin"],
});

const navLinks = [
  { name: "Home", href: "/", alt: "Home", w: 64.89 },
  { name: "Pages", href: "/pages", alt: "Pages", w: 62.89 },
  { name: "Services", href: "/services", alt: "Services", w: 81.89 },
  { name: "Work", href: "/work", alt: "Work", w: 59.89 },
  { name: "Contact", href: "/contact", alt: "Contact", w: 78.89 },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      {/* notification block */}
      <div className="w-full h-[58px] bg-[#181818] flex justify-around items-center
                      max-[1500px]:justify-between max-[1500px]:px-4">
        <div className="flex gap-2 items-center text-white text-[14px]">
          <img src="/Icons/time.svg" alt="" className="w-[13px] h-[13px]" />
          <p>Monday - Friday 8AM - 9PM</p>
        </div>
        <div className="hidden max-[768px]:hidden lg:flex gap-2 items-center text-white text-[14px]">
          <img src="/Icons/place.svg" alt="" className="w-[11.78px] h-[15.32px]" />
          <p>725 Park Ave, New York</p>
        </div>
        <div className="hidden max-[768px]:hidden lg:flex gap-3 items-center">
          <img src="/Icons/Instagram.svg" alt="" className="w-[17.98px]" />
          <img src="/Icons/Facebook.svg" alt="" className="w-[20.72px]" />
          <img src="/Icons/Twitter.svg" alt="" className="w-[19.88px]" />
          <img src="/Icons/Linked-In.svg" alt="" className="w-[18.05px]" />
        </div>
      </div>

      {/* main header */}
      <div className="w-full h-[139.54px] bg-[#1B1B1BE8] flex items-center justify-around px-4
                      max-[1500px]:justify-between max-[1500px]:px-6 max-[768px]:py-4 relative">
        
        {/* logo */}
        <div className="flex items-center gap-3">
          <img src="/Icons/Logo.svg" alt="" className="w-[29.74px] h-[28.91px]" />
          <Link
            href="/"
            className={`font-[600] text-[30px] text-[#ffffff] ${cabin.className}`}
          >
            AskExperts
          </Link>
        </div>

        {/* burger menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-[4px] z-50"
        >
          <div className="w-6 h-[2px] bg-white" />
          <div className="w-6 h-[2px] bg-white" />
          <div className="w-6 h-[2px] bg-white" />
        </button>

        {/* desktop nav */}
        <div className="w-[561.31px] h-[28px] lg:flex justify-between items-center hidden">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <div
                style={{ width: `${link.w}px` }}
                key={index}
                className="flex items-center justify-between"
              >
                <div
                  key={link.alt}
                  className={`w-[8.66px] h-[8.66px] rounded-full border-[0.98px] border-[#515151] ${
                    isActive ? "bg-[#4EAF4E]" : ""
                  }`}
                ></div>
                <Link
                  href={link.href}
                  className={isActive ? "text-[#5AB612]" : "text-[#FFFFFF]"}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </div>

        {/* call block */}
        <div className="w-[244.54px] h-[59.54px] rounded-[42px] bg-white flex items-center justify-around px-4 max-[768px]:hidden">
          <div className="flex items-center gap-3">
            <div className="w-[43.54px] h-[43.54px] bg-[#FFC32B] rounded-full flex justify-center items-center">
              <img src="/Icons/Tel.svg" alt="" className="w-[16.76px] h-[16.76px]" />
            </div>
            <p className="font-[600] text-[18px] text-[#353535]">
              + (888) 452 1505
            </p>
          </div>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <div className="absolute top-[100%] left-0 w-full bg-[#1B1B1B] text-white flex flex-col items-center gap-4 py-6 lg:hidden z-40">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg ${isActive ? "text-[#5AB612]" : "text-white"}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
