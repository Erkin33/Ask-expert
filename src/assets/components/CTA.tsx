'use client'
import { useRef } from "react"
import { useInView, motion } from "framer-motion"

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#181818] rounded-[30px] mt-[174px] max-[769px]:mt-[50px] max-[769px]:mb-[50px] mb-[163px] mx-auto w-[1200.02px] h-[525.87px]
                 max-[1199px]:w-full max-[1199px]:h-auto max-[1199px]:px-4 max-[1199px]:py-10"
    >
      <div className="flex justify-between items-center h-full w-[1019.48px] mx-auto gap-[73px]
                      max-[1199px]:w-full max-[1000px]:flex-col max-[1000px]:gap-10">
        
        {/* Image FIRST on small screens */}
        <div className="w-[519.07px] h-[525.87px] order-1 max-[1000px]:w-full max-[1000px]:h-auto max-[1000px]:order-0">
          <img src="/CTA/Image-info.svg" alt="" className="w-full h-full object-contain" />
        </div>

        {/* Text */}
        <div className="w-[427.41px] h-[294.68px] flex flex-col justify-between items-start gap-[21px]
                        max-[1000px]:w-full max-[1000px]:items-center max-[1000px]:text-center">
          
          <div className="flex flex-col gap-[8px] w-full max-[1000px]:items-center">
            <p className="text-[#FFFFFF] bg-[#4EAF4E] uppercase text-[16px] rounded-[20px] px-[15px] py-[3px] font-[400] leading-[148%] tracking-[14.5%] w-[139px] h-[24px]">
              Book Now
            </p>
            <h2 className="text-[#FFFFFF] text-[45px] font-[700] leading-[115%] tracking-[0%] w-full h-[101.83px]
                           max-[1000px]:text-[32px] max-[1000px]:h-auto">
              Better Consult, <span className="text-[#727272]">Better</span> Results
            </h2>
          </div>

          <p className="text-[#FFFFFF] text-[16px] font-[400] leading-[148%] tracking-[0%] w-full h-[70.84px]
                        max-[1000px]:h-auto max-[1000px]:max-w-[500px]">
            Our software development agency has a growth up to 30% per each year. If you are result-oriented, not afraid to take initiative – drop us a note and join our team!
          </p>

          <div className="w-full h-[61px] max-[1000px]:h-auto max-[1000px]:mt-4 flex flex-col items-start max-[1000px]:items-center">
            <a href="#" className="w-[193.61px] h-full flex justify-center items-center rounded-[40px] py-[16px] px-[21px] gap-[10px] bg-[#FFCC4A] text-[#181818] text-[15px] font-[600] leading-[160%] tracking-[0%]">
              <img src="/Icons/Tel.svg" alt="" className="w-[21.61px] h-[21.61px]" /> +800 1234 654
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
