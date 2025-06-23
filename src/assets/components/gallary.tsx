'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ArtGallery() {
  const Gallary = [
    {
      Img: "/Gallery/PhotoFirst.svg",
      Title: "Taxes & Efficiency",
      comment: "Business",
    },
    {
      Img: "/Gallery/PhotoSecond.svg",
      Title: "Focused Teamwork",
      comment: "Productivity",
    },
    {
      Img: "/Gallery/PhotoThird.svg",
      Title: "Creative Collaboration",
      comment: "UI Design",
    },
    {
      Img: "/Gallery/PhotoFourth.svg",
      Title: "Startup Planning",
      comment: "Development",
    },
    {
      Img: "/Gallery/PhotoFivth.svg",
      Title: "Brainstorm Group",
      comment: "Ideas",
    },
    {
      Img: "/Gallery/PhotoSixth.svg",
      Title: "Marketing Strategy",
      comment: "Sales Funnel",
    },
  ];

  return (
    <div className="w-full mt-[152px] max-[850px]:mt-[800px] mb-[54px] flex flex-col justify-end items-center relative">
      <div className="w-full h-[645.79px] bg-[#181818] absolute left-0 top-0 z-0">
        <img src="/Gallery/Background.svg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="w-[1200.26px] max-w-[95%] flex flex-col mt-auto mx-auto justify-between items-center z-10 relative">
        <div className="mt-[202px] w-full min-h-[136px] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[30px]">
          <div className="w-full lg:w-[731.26px] gap-[8px] flex flex-col justify-between items-start">
            <p className="w-fit h-[24px] max-[850px]:mx-auto rounded-[20px] px-[15px] bg-[#4EAF4E] flex justify-center items-center font-[400] text-[16px] leading-[148%] tracking-[14.5%] uppercase text-[#FFFFFF]">
              Proccess
            </p>
            <h2 className="text-[32px] sm:text-[36px] max-[850px]:text-center md:text-[40px] font-[700] text-white leading-[116%]">
              Our client, global analytical techno company, wanted to build market.
            </h2>
          </div>
          <a href="#" className="w-[168px] max-[850px]:mx-auto h-[61px] rounded-[42px] py-[16px] bg-[#FFCC4A] flex justify-center items-center font-[600] text-[18px] leading-[160%] text-[#181818]">
            More Gallery
          </a>
        </div>

        <div className="mt-[45px] w-full bg-[#FAFAFA] rounded-[30px] p-[25px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
          {Gallary.map((Stack, index) => {
            const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-[20px] overflow-hidden group w-full h-[300px] sm:h-[320px] md:h-[344px] cursor-pointer"
                onClick={(e) => {
                  const target = e.currentTarget.querySelector('.overlay');
                  if (target) {
                    target.classList.toggle('opacity-0');
                    target.classList.toggle('opacity-100');
                  }
                }}
              >
                <img
                  src={Stack.Img}
                  alt={Stack.Title}
                  className="w-full h-full object-cover transition duration-300 group-hover:brightness-75"
                />
                <div className="overlay absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition duration-300 bg-black/30">
                  <div
                    className="absolute top-[15px] right-[15px] w-[64.12px] h-[61.43px] rounded-full text-[#181818] font-bold text-xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #FFE9B1 0%, #DDA003 100%)",
                    }}
                  >
                    <p className="font-[400] text-[32px] md:text-[45px] leading-[116%] tracking-[0%] text-[#181818]">
                      +
                    </p>
                  </div>
                  <p className="text-white text-[20px] sm:text-[22px] md:text-[25px] font-[600] leading-[116%] tracking-[0%]">
                    {Stack.Title}
                  </p>
                  <p className="text-[#FFCC4A] text-[14px] sm:text-[15px] md:text-[16px] font-[400] tracking-[0%] leading-[148%]">
                    {Stack.comment}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
