"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

export default function BannerJSX() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView]);

  return (
    <div className="relative w-full h-[922.73px] max-[1000px]:h-[589px] overflow-hidden">
      {/* Анимированное фоновое изображение с приоритетной загрузкой */}
      <Image
        src="/Main/Banner.svg"
        alt="Banner background"
        layout="fill"
        objectFit="cover"
        priority
        placeholder="blur"
        blurDataURL="/Main/Banner-blur.svg"
      />

      {/* Контентный блок поверх фона */}
      <div
        className="absolute inset-0 flex items-center justify-around
                   max-[1920px]:justify-center max-[1920px]:gap-[40px] max-[1920px]:px-4 max-[1920px]:flex-wrap
                   max-[1000px]:flex-col max-[1000px]:gap-[40px] max-[1000px]:py-[40px] max-[1000px]:px-[20px] "
      >
        {/* Левый блок с анимацией */}
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ opacity: 0, y: 50 }}
          className="w-[551.15px] h-[395px] rounded-[29px] gap-[10px] bg-[#FFFFFFD9] backdrop-blur-[11px] p-6 shadow-md 
                     flex flex-col justify-center items-center 
                     max-[600px]:w-[90%]  max-[600px]:p-4"
        >
          <div className="w-[435px] h-[285px] gap-[18px] flex flex-col mx-auto my-auto 
                          max-[600px]:w-full ">
            <div className="w-[435px] h-[206px] gap-[19px] flex flex-col items-center text-center 
                            max-[600px]:w-full max-[600px]:h-auto">
              <h2 className="w-[435px] h-[116px] font-bold text-[45px] text-[#181818] leading-[110%] tracking-[0%]
                             max-[600px]:w-full max-[600px]:text-[39px] max-[600px]:leading-[120%] max-[460px]:text-[32px] max-[350px]:text-[30px]">
                Your small business growth advisors
              </h2>
              <p className="w-[431px] h-[71px] font-[400] text-[16px] leading-[148%] text-[#595566] tracking-[0%]
                            max-[600px]:w-full max-[600px]:text-[14px] max-[600px]:leading-[150%]">
                Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.
              </p>
            </div>

            <div className="w-[381.54px] h-[61px] gap-[13px] flex justify-center flex-wrap
                            max-[600px]:w-full max-[600px]:gap-[10px] 
                            max-[431px]:flex-col max-[430px]:items-center max-[430px]:h-auto max-[430px]:gap-[12px]">
              <a href="#" className="w-[167px] flex items-center h-[61px] justify-center rounded-[42px] gap-[10px] bg-[#181818] text-[#FFFFFF]
                                    max-[600px]:w-[140px] max-[600px]:h-[50px] max-[600px]:text-[14px]
                                    max-[430px]:w-full">
                Our Services
              </a>
              <div className="w-[201.54px] flex items-center justify-center h-[59.54px] border-[1px] rounded-[42px] gap-[11px] bg-[#FFFFFF] border-[#EBEBEB]
                              max-[600px]:w-[170px] max-[600px]:h-[50px] max-[600px]:gap-[8px]
                              max-[430px]:w-full">
                <div className="w-[43.54px] h-[43.54px] bg-[#4EAF4E] rounded-full flex items-center justify-center
                                max-[600px]:w-[36px] max-[600px]:h-[36px]">
                  <img src="/Icons/Booking.svg" alt="Book icon" />
                </div>
                <a href="#" className="font-[600] text-[18px] leading-[160%] tracking-[0%] text-[#353535]
                                      max-[600px]:text-[14px]">
                  Book a Meeting
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Правый блок-заглушка */}
        <div className="w-[551.15px] h-[395px] max-[768px]:hidden" />
      </div>
    </div>
  );
}
