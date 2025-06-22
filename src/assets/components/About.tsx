"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "./about.css";

export default function AboutTeam() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
  if (inView) {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    animateNumber(400, setCount1);
    animateNumber(100, setCount2);
    animateNumber(50, setCount3);
  } else {
    controls.start({ opacity: 0, y: 50 });
    setCount1(0);
    setCount2(0);
    setCount3(0);
  }
}, [inView]);


  function animateNumber(
    target: number,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < target) {
        setter(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setter(target);
      }
    };

    animate();
  }

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      className="w-[1200.02px] max-w-full h-auto gap-[65px] flex justify-between items-center mt-[127px] mb-[174px] mx-auto max-[1150px]:flex-col max-[1150px]:gap-[40px] max-[699px]:gap-[30px]"
    >
      {/* Left */}
      <div className="w-[420.02px] max-w-full h-auto gap-[55px] flex flex-col items-center justify-between max-[699px]:px-4">
        <div className="w-full gap-[18px] flex flex-col items-start justify-between">
          <div className="w-full gap-[22px] flex flex-col items-start justify-between">
            <p className="w-[120px] text-[16px] bg-[#FFCC4A] text-[#181818] font-[400] leading-[148%] tracking-[14.5%] h-[24px] rounded-[20px] gap-[10px] flex items-center justify-center max-[699px]:text-[14px] max-[699px]:w-[100px]">
              ABOUT US
            </p>
            <h2 className="text-[40px] text-[#181818] font-[700] leading-[116%] tracking-[0%] flex items-center justify-center max-[1150px]:text-[28px] max-[699px]:text-[22px] max-[699px]:text-left max-[699px]:leading-[130%]">
              About our Consuting Agency Team
            </h2>
          </div>
          <div className="w-full gap-[11px] flex flex-col items-start justify-between">
            <p className="text-[18px] text-[#181818] font-[700] leading-[148%] tracking-[0%] max-[699px]:text-[16px]">
              We create experiences and build products that make business grow
            </p>
            <p className="text-[16px] text-[#595566] font-[400] leading-[148%] tracking-[0%] max-[699px]:text-[14px]">
              Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.
            </p>
          </div>
        </div>

        <div className="w-[380px] h-[130.15px] max-[420px]:w-[99%] flex items-center justify-between border-y-[1px] border-[#D8D8D8] mr-auto">
          <div className="w-[380.21px] h-[94.02px] max-[420px]:w-[100%] my-auto flex justify-between items-center">
            <div className="w-[170.21px] h-[94.02px] max-[420px]:w-[100%] rounded-[15px] bg-[#F6F6F6] flex justify-center items-center">
              <div className="w-[125px] h-[62px] my-auto mx-auto flex flex-col justify-between items-center">
                <div className="w-full flex justify-start items-center">
                  <img src="./Icons/Star.svg" alt="" />
                  <h2 className="ml-[10px] font-[700] text-[30px] leading-[116%] tracking-[0%] text-[#181818]">
                    {count1}+
                  </h2>
                </div>
                <p className="font-[400] w-full text-[15px] leading-[148%] tracking-[0%] text-[#181818]">
                  Business Services
                </p>
              </div>
            </div>

            <div className="w-[90.28px] border-[1px] rotate-[90deg] border-[#D8D8D8]"></div>

            <div className="w-[170.21px] h-[94.02px] max-[420px]:w-[100%] rounded-[15px] bg-[#F6F6F6] flex justify-center items-center">
              <div className="w-[125px] h-[62px] my-auto mx-auto flex flex-col justify-between items-center">
                <div className="w-full flex justify-start items-center">
                  <img src="./Icons/Smile.svg" alt="" />
                  <h2 className="ml-[10px] font-[700] text-[30px] leading-[116%] tracking-[0%] text-[#181818]">
                    {count2}+
                  </h2>
                </div>
                <p className="font-[400] w-full text-[15px] leading-[148%] tracking-[0%] text-[#181818]">
                  Happy Customer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="relative w-[714.82px] max-w-full h-[464.17px] flex flex-col max-[1150px]:h-[400px] max-[1150px]:order-[-1] max-[768px]:h-[340px] max-[699px]:h-[300px] max-[699px]:w-full px-4">
        <div className="absolute top-0 right-0 w-[634.18px] h-[395.97px] max-w-full max-[1150px]:w-[90%] max-[1150px]:h-[320px] max-[699px]:w-full max-[699px]:h-[260px] z-30 rounded-[16px] overflow-hidden shadow-md">
          <img src="/Main/Image.svg" alt="Main photo" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 w-[327.8px] h-[327.8px] z-10 max-[1150px]:w-[180px] max-[1150px]:h-[180px] max-[699px]:w-[120px] max-[699px]:h-[120px]">
          <img src="/Main/BackgroundPattern.svg" alt="Pattern" className="w-full h-full object-contain" />
        </div>

        {/* Круг + цифра */}
        <div className="absolute bottom-[40px] left-[40px] w-[241.17px] h-[136.75px] z-[100] bg-white rounded-[16px] shadow-lg flex items-center justify-start gap-4 px-4 max-[1150px]:w-[180px] max-[1150px]:h-[100px] max-[699px]:w-[150px] max-[699px]:h-[90px] max-[699px]:gap-2">
          <div className="relative w-[60px] h-[60px] max-[699px]:w-[50px] max-[699px]:h-[50px]">
            <svg className="rotate-[-90deg] w-full h-full" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" stroke="#E5E7EB" strokeWidth="3" fill="none" />
              <motion.circle
                cx="18"
                cy="18"
                r="16"
                stroke="#4CAF50"
                strokeWidth="3"
                fill="none"
                strokeDasharray="100"
                strokeDashoffset="100"
                animate={{ strokeDashoffset: 25 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-bold text-[16px] text-[#181818] max-[699px]:text-[14px]">
              {count3}+
            </div>
          </div>
          <div className="text-sm font-medium text-[#181818] leading-tight max-[699px]:text-[12px]">
            Market<br />Experiences
          </div>
        </div>
      </div>
    </motion.div>
  );
}
