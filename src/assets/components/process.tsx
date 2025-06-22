'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Processes() {
  const Diagrams = [
    {
      Img: '/Process/Time.svg',
      Header: 'Consistency',
      Comment:
        'Ensure stable and reliable performance ',
    },
    {
      Img: '/Process/Improvement.svg',
      Header: 'Improvement',
      Comment:
        'Continuously refine workflows ',
    },
    {
      Img: '/Process/World.svg',
      Header: 'Branching',
      Comment:
        'Expand into new markets and opportunities ',
    },
    {
      Img: '/Process/CompanyDM.svg',
      Header: 'Company Growth',
      Comment:
        'Foster innovation and align teams to drive measurable business ',
    },
  ]

  return (
    <div className="w-[1,198.62px] max-[850px]:flex-col max-[1030px]:px-[5%] max-[1220px]:w-full  h-[723.21px] max-[1030px]:gap-[50px] gap-[117px] flex justify-between items-center max-[850px]:my-[30px]  my-[150px] mx-auto">
      {/* Left */}
      <div className="w-[507.89px] max-[850px]:order-2 max-[850px]:mt-[30px]  max-[850px]:w-full max-[850px]:mx-auto max-[1140px]:w-[400px] h-[683.21px] gap-[40px] flex flex-col justify-between items-center mb-[auto]">
        <div className="w-[507.89px] max-[850px]:mx-auto max-[1030px]:w-full h-[323px] gap-[16px] flex flex-col items-start justify-between">
          <p className="w-[127px] max-[850px]:mx-auto h-[24px] rounded-[20px] px-[15px] gap-[10px] flex items-center justify-center bg-[#4EAF4E] font-[400] max-[1030px]:text-[14px] max-[1030px]:items-center flex justify-center text-[16px] leading-[148%] tracking-[14.5%] uppercase text-[#FFFFFF]">
            Proccess
          </p>
          <div className="w-[507.89px] max-[850px]:mx-auto max-[1030px]:w-full h-[192px] gap-[16px] flex flex-col items-start justify-between">
            <h2 className="w-[507.89px] max-[850px]:text-center max-[1030px]:text-[32px] max-[1030px]:w-full h-[104px] font-[700] text-[45px] leading-[116%] tracking-[0%] max-[850px]:flex max-[850px]:justify-center max-[850px]:items-center text-[#181818] max-[400px]:text-[30px]">
              There have some easy steps to join with us!
            </h2>
            <p className="w-[488px] max-[850px]:text-[18px] max-[1030px]:text-[14px] max-[850px]:text-center max-[1030px]:w-full h-[72px] font-[400] text-[16px] leading-[148%] tracking-[0%] text-[#595566]  max-[490px]:text-[14px]">
              Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
            </p>
          </div>
        </div>

        {[1, 2, 3].map((step, i) => {
          const titles = ['Setup Account', 'Consult with us', 'Payment & Boost']
          const texts = [
            'We understand the importance of approaching each work integrally.',
            'Increase social reach and productivity with our App Directory, a collection.',
            'We encourage every team member to be a whole person. We have a flexible.',
          ]
          const bgColors = ['bg-[#FFCC4A]', 'bg-[#4EAF4E]', 'bg-[#181818]']
          const textColors = ['text-[#181818]', 'text-[#FFFFFF]', 'text-[#FFFFFF]']

          return (
            <div key={i} className="w-[459.3px] max-[1030px]:w-full h-[113.21px] gap-[28px] flex items-start justify-start border-t-[1px] border-[#C1C1C1]">
              <div className="w-[399.94px] max-[850px]:mx-auto max-[850px]:w-[90%] max-[1030px]:w-full h-[85.21px] gap-[16px] flex items-center justify-between mt-[28px]">
                <div className={`w-[52.33px] h-[52.33px] mb-auto rounded-full ${bgColors[i]} flex items-center justify-center max-[500px]:w-[60px]`}>
                  <p className={`text-[26px] leading-[116%] tracking-[0%] font-[600] max-[400px]:text-[22px] ${textColors[i]}`}>
                    {step}
                  </p>
                </div>
                <div className="w-[331.61px] max-[1030px]:w-full h-[85.21px] flex flex-col items-center justify-between">
                  <h2 className="w-full h-[23px] text-[20px] leading-[116%] tracking-[0%] font-[600] max-[400px]:text-[18px]">
                    {titles[i]}
                  </h2>
                  <p className="w-full h-[52.21px] text-[16px] leading-[148%] tracking-[0%] font-[400] text-[#595566] max-[400px]:text-[13px]">
                    {texts[i]}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Right */}
      <div className="w-[573.72px] max-[850px]:w-full max-[850px]:order-1 max-[850px]:ml-auto  max-[1220px]:w-[700px] h-[723.21px] gap-[7px] flex flex-col justify-between items-start">
        <div className="w-[444px] max-[1220px]:w-full h-[84px] gap-[8px] flex flex-col justify-between items-start">
          <p className="w-[319px] max-[1030px]:text-[14px] max-[850px]:mx-auto max-[1030px]:items-center flex justify-center h-[24px] rounded-[20px] px-[17px] gap-[10px] bg-[#FFCC4A] text-[#181818] font-[400] text-[16px] leading-[148%] tracking-[14.5%] uppercase text-center">
            Growing with our clients
          </p>
          <h2 className="w-full max-[1030px]:text-[32px] max-[850px]:text-center max-[1030px]:w-full h-[52px] font-[700] text-[40px] leading-[116%] tracking-[0%] text-[#181818] max-[400px]:text-[30px]">
            30 Years of Experience
          </h2>
        </div>

        <div className="w-[562.18px] max-[1220px]:w-full h-[164px] p-[10px] gap-[10px] flex flex-col justify-between items-start">
          <p className="w-[542.18px] max-[1030px]:text-[14px] max-[850px]:text-center max-[1030px]:w-full max-[1220px]:w-full h-[144px] max-[850px]:text-[18px] text-[#595566] font-[400] text-[16px] leading-[148%] tracking-[0%] max-[550px]:text-[15px] max-[400px]:text-[13px]">
            Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override the digital divide with additional from DevOps.
            <br />
            <br />
            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
          </p>
        </div>

        <div className="w-full max-[850px]:mx-auto max-[850px]:mt-[50px]  max-w-[600px] max-[1220px]:w-full flex flex-wrap gap-x-[14px] gap-y-[16px] justify-between items-start">
          {Diagrams.map((DiadgramInfo, index) => {
            const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

            return (
              <motion.div
      key={index}
      className="bg-[#FAFAFA] max-[850px]:w-[290px] max-[670px]:w-[47%] max-[961px]:w-[220px] border-[1px] max-[1220px]:w-[250px] border-[#EAEAEA] w-[279.86px] h-[221.78px] rounded-[20px] px-[23px] py-[33px] gap-[10px] flex flex-col justify-between items-start max-[600px]:px-[5px] max-[600px]:py-[5px] max-[600px]:justify-around max-[600px]:gap-[1px]"
    >
      <img src={DiadgramInfo.Img} alt="" className="w-[52.78px] h-[52.78px] max-[850px]:mx-auto" />
      <div className="w-[233.86px] max-[1220px]:w-full h-[81px] gap-[10px] flex flex-col justify-between items-start">
        <h2 className="w-full max-[550px]:text-[14px] h-[23px] max-[850px]:text-center font-[600] text-[20px] leading-[116%] tracking-[0%] text-[#181818]">
          {DiadgramInfo.Header}
        </h2>
        <p className="w-full h-[48px] max-[550px]:text-[10px] max-[850px]:text-center  font-[400] text-[15px] max-[650px]:text-[12px] leading-[148%] tracking-[0%] text-[#595566]">
          {DiadgramInfo.Comment}
        </p>
      </div>
    </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
