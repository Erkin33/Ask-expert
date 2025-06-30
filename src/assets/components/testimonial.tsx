'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Members() {
  const Members = [
    {
      Img: '/Members/KS.svg',
      Name: 'Kathleen Smith',
      Text: 'The platform is intuitive, and the responses are not only fast, but clear, practical, and genuinely helpful.',
    },
    {
      Img: '/Members/JM.svg',
      Name: 'John Martin',
      Text: "AskExpert gave me clear guidance in minutes. It's like having an expert in your pocket.",
    },
    {
      Img: '/Members/ND.svg',
      Name: 'Natalia Duke',
      Text: 'I’ve saved hours of research thanks to this app. It’s my go-to for fast solutions.',
    },
  ]

  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const { ref: inViewRef, inView } = useInView({ triggerOnce: false })

  const combinedRef = (node: any) => {
    ref.current = node
    inViewRef(node)
  }

  const next = () => setCurrent((prev) => (prev + 1) % Members.length)
  const prev = () => setCurrent((prev) => (prev - 1 + Members.length) % Members.length)

  return (
    <motion.div
      ref={combinedRef}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
      className="max-w-[654px] max-[769px]:mt-[50px] max-[769px]:mb-[50px] w-full px-4 lg:px-0 h-auto lg:h-[475px] gap-[33px] flex flex-col justify-between items-center mx-auto mt-[100px] lg:mt-[147px] mb-[100px] lg:mb-[173px]"
    >
      <div className="w-full gap-[23px] flex flex-col justify-between items-center">
        <p className="w-[205px] h-[24px] rounded-[20px] bg-[#4EAF4E] px-[16px] flex items-center justify-center gap-[10px] font-[400] text-[16px] leading-[148%] tracking-[100.5%] text-[#FFFFFF] text-center uppercase">
          Client Feedback
        </p>

        <AnimatePresence mode="wait">
          <motion.h2
            key={Members[current].Text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full font-[700] text-[#CECECE] text-[24px] lg:text-[40px] leading-[116%] text-center"
          >
            "
            {Members[current].Text.split(' ').map((word, i) => {
              if (['clear,', 'practical,', 'genuinely'].includes(word) || word === 'fast,') {
                return (
                  <span key={i} className="text-[#181818]">
                    {word + ' '}
                  </span>
                )
              }
              return word + ' '
            })}
            "
          </motion.h2>
        </AnimatePresence>
      </div>

      <div className="w-full gap-[20px] lg:gap-[97px] flex justify-between items-center mt-[33px]">
        <button onClick={prev} className="w-[90px] lg:w-[125px] h-[60px] bg-[#F3F3F3] rounded-[42px] flex justify-around items-center px-2">
          <div className="w-[30px] lg:w-[43.54px] h-[30px] lg:h-[43.54px]">
            <img src="/Icons/Left.svg" alt="left" />
          </div>
          <p className="font-[600] text-[16px] text-[#353535]">Prev</p>
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={Members[current].Name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="w-[170px] lg:w-[210px] h-auto flex flex-col justify-between items-center"
          >
            <img
              src={Members[current].Img}
              alt=""
              className="w-[170px] lg:w-[210px] h-[170px] lg:h-[211px] object-cover rounded-full"
            />
            <div className="w-full text-center mt-[15px] flex flex-col items-center">
              <p className="font-[600] text-[18px] lg:text-[20px] text-[#181818]">{Members[current].Name}</p>
              <p className="font-[600] text-[14px] lg:text-[16px] text-[#4EAF4E]">Web Designer</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button onClick={next} className="w-[90px] lg:w-[125px] h-[60px] bg-[#F3F3F3] rounded-[42px] flex justify-around items-center px-2">
          <p className="font-[600] text-[16px] text-[#353535]">Next</p>
          <div className="w-[30px] lg:w-[43.54px] h-[30px] lg:h-[43.54px]">
            <img src="/Icons/Right.svg" alt="right" />
          </div>
        </button>
      </div>
    </motion.div>
  )
}
