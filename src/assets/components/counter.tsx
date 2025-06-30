'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Counter() {
  const Counts = [
    { Numb: 1128, Info: 'Successful Work' },
    { Numb: 908, Info: 'Team member' },
    { Numb: 258, Info: 'Happy Customers' },
    { Numb: 564, Info: 'Creative Idea' },
  ];

  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartCount(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full max-w-[895px] px-[15px] flex flex-wrap justify-center gap-y-[40px] gap-x-[40px] mx-auto mb-[147px]"
    >
      {Counts.map((count, index) => {
        const [ref, inView] = useInView({ triggerOnce: true });
        const [value, setValue] = useState(0);

        useEffect(() => {
          if (inView && startCount) {
            let start = 0;
            const end = count.Numb;
            const duration = 1000;
            const stepTime = Math.abs(Math.floor(duration / end));
            const counter = setInterval(() => {
              start += 1;
              setValue(start);
              if (start >= end) clearInterval(counter);
            }, stepTime);
          }
        }, [inView, startCount]);

        return (
          <motion.div
            ref={ref}
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="w-[158px] h-[91px] flex flex-col justify-between items-center"
          >
            <h2 className="font-[700] text-[40px] sm:text-[48px] md:text-[50px] leading-[116%] tracking-[0%] text-center">
              {value}+
            </h2>
            <p className="w-full h-[21px] text-[#181818] font-[500] text-center text-[14px] sm:text-[16px] leading-[116%] tracking-[0%]">
              {count.Info}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
