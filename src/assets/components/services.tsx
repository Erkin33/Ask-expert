"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function OurServices() {
  const Title = [
    {
      Imgae: "/Services/Diagram-first.svg",
      Head: "Audit & Evaluation",
      Comment:
        "Work with Alex Moore to uncover hidden growth opportunities through in-depth audit and strategic evaluation.",
    },
    {
      Imgae: "/Services/Financial-second.svg",
      Head: "Financial Projections",
      Comment:
        "Let Alex Moore guide your team with precise forecasting techniques to plan ahead with confidence.",
    },
    {
      Imgae: "/Services/Funds-third.svg",
      Head: "Funds and Investments",
      Comment:
        "Discover smart funding solutions and profitable investment strategies under Alex Moore’s mentorship.",
    },
    {
      Imgae: "/Services/Finance-fourth.svg",
      Head: "Finance & Restructuring",
      Comment:
        "Get expert restructuring advice from Alex Moore to optimize your financial architecture and performance.",
    },
    {
      Imgae: "/Services/Taxes-fivth.svg",
      Head: "Taxes & Efficiency",
      Comment:
        "Improve tax efficiency and compliance with the support of Alex Moore’s extensive financial expertise.",
    },
    {
      Imgae: "/Services/Investment-sixth.svg",
      Head: "Investment Banking",
      Comment:
        "Partner with Alex Moore to explore secure banking opportunities and strategic capital solutions.",
    },
  ];

  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDir = () => {
      const current = window.scrollY;
      setScrollDir(current > lastScrollY ? "down" : "up");
      lastScrollY = current;
    };
    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  return (
    <div className="w-full max-w-[1920px] mx-auto bg-[#F5F5F5] py-[100px] px-[5%]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[38px] items-center">
        {/* Заголовок */}
        <div className="w-full max-w-[782px] text-center flex flex-col gap-[8px] items-center">
          <p className="rounded-[20px] bg-[#4EAF4E] px-[16px] py-[4px] text-[16px] font-[400] leading-[148%] tracking-[14.5%] text-white uppercase">
            Services
          </p>
          <h2 className="text-[36px] lg:text-[45px] font-[700] leading-[116%] text-[#181818]">
            Get Control Over Your Business I take your finance to next level
          </h2>
        </div>

        {/* Карточки */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {Title.map((item, index) => (
            <Card key={index} item={item} scrollDir={scrollDir} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ item, scrollDir }: { item: any; scrollDir: "up" | "down" }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        y: scrollDir === "down" ? 50 : -50,
        transition: { duration: 0.6, ease: "easeIn" },
      });
    }
  }, [inView, scrollDir]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      className="group w-full h-auto min-h-[320px] rounded-[20px] bg-[#EBEBEB] py-[40px] px-[30px] flex flex-col gap-[14px] items-start transition-all duration-300 ease-in-out hover:bg-[#181818] hover:shadow-2xl"
    >
      <img
        src={item.Imgae}
        alt={item.Head}
        className="transition-transform duration-300 group-hover:scale-105"
      />
      <h3 className="text-[22px] lg:text-[25px] font-[600] text-[#181818] group-hover:text-white transition-colors duration-300">
        {item.Head}
      </h3>
      <p className="text-[15px] lg:text-[16px] font-[400] leading-[148%] text-[#595566] group-hover:text-white transition-colors duration-300">
        {item.Comment}
      </p>
    </motion.div>
  );
}
