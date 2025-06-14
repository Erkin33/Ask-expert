"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { Cabin } from 'next/font/google'
import { link } from "fs";
const cabin = Cabin({
   weight: '400',
  subsets: ['latin'],
})

const navLinks = [
    {
        name: 'Home', href: '/'
    },
    {
        name: 'Pages', href: '/pages'
    },
    {
        name: 'Services', href: '/services'
    },
    {
        name: 'Work', href: '/work'
    },
    {
        name: 'About us', href: '/about-us'
    },
    {
        name: 'Contact', href: '/contact'
    },
]

export default function Header(){
const pathname = usePathname();
    
    return(
        <div className="w-full flex flex-col items-center">
            {/* notification block */}
                <div className="w-full h-[58px] bg-[#181818] flex justify-around items-center ">
                    <div className="w-[196.31px] h-[22px] flex justify-between items-center ">
                        <img src="/Icons/time.svg" alt="" className="w-[13.312914848327637px] h-[13.312914848327637px]"/>
                        <p className="text-[#FFFFFF] text-[14px]">Monday - Friday8AM - 9PM</p>
                    </div>

                    <div className="w-[169.78px] h-[22px] flex justify-between items-center ">
                        <img src="/Icons/place.svg" alt="" className="w-[11.78px] h-[15.32px]"/>
                        <p className="text-[#FFFFFF] text-[14px]">725 Park Ave, New York</p>
                    </div>

                    <div className="w-[151.63px] h-[19.29px] flex justify-between items-center ">
                        <img src="/Icons/Instagram.svg" alt="" className="w-[17.98px] h-[17.3px]"/>
                        <img src="/Icons/Facebook.svg" alt="" className="w-[20.72px] h-[19.29px]"/>
                        <img src="/Icons/Twitter.svg" alt="" className="w-[19.88px] h-[15.9px]"/>
                        <img src="/Icons/Linked-In.svg" alt="" className="w-[18.05px] h-[18.05px]"/> 
                    </div>
                </div>
            {/* Menu */}
            <div className="fixed w-full h-[139.54px] bg-[#1B1B1BE8] top-[58px] justify-around flex items-center ">
                {/* LOGO */}
                <div className="w-[182.74px] h-[31px] flex justify-between items-center">
                    <img src="/Icons/Logo.svg" alt="" className="w-[29.74px] h-[28.91px]"/>
                    <Link href={'/'} className={`font-[600] text-[30px] text-[#ffffff] ${cabin.className}`}>AskExperts</Link>
                </div>
                {/* Navigation */}

                <div className="w-[561.31px] h-[28px] flex justify-between items-center">
                    {navLinks.map((link, index) => {
                        const isActive = pathname === link.href;
                        return(
                            <div key={index} className="">
                                <Link href={link.href} className={isActive ? "text-[#5AB612]" : "text-[#FFFFFF]"}>
                                    {link.name} 
                                </Link>
                            </div>
                            
                        )
                    })}
                </div>
            </div>
        </div>
    )
}