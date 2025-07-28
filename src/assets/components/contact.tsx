export default function ContactUs() {
  return (
    <div id="contact"
      className="
        w-[1200px] h-[534px] gap-[91px] flex justify-between items-center mx-auto mt-[150px] mb-[100px]
        max-[1440px]:w-[95%] max-[1440px]:gap-[40px]
        max-[768px]:flex-col max-[768px]:h-auto
      "
    >
      {/* LEFT */}
      <div
        className="
          w-[420.67px] h-[503.71px] flex flex-col justify-between items-start
          max-[1440px]:w-[40%] max-[1440px]:h-auto
          max-[768px]:w-full max-[768px]:items-center
        "
      >
        {/* top */}
        <div
          className="
            w-[407px] h-[169px] gap-[6px] flex flex-col justify-between items-start
            max-[1440px]:w-full max-[1440px]:h-auto
            max-[768px]:items-center
          "
        >
          <p
            className="
              w-[127px] h-[26px] flex justify-center items-center px-[15px] py-[1px]
              rounded-[20px] bg-[#FFCC4A]
              text-[16px] font-[400] leading-[148%] tracking-[14.5%] uppercase text-[#181818]
            "
          >
            Proccess
          </p>
          <div className="w-full h-[137px] gap-[13px] flex flex-col justify-between max-[1440px]:h-auto">
            <h2
              className="
                text-[40px] font-[700] leading-[116%] tracking-[0%] text-[#181818]
                max-[768px]:text-[32px] max-[768px]:text-center
              "
            >
              Contact Us. It’s Easy.
            </h2>
            <p
              className="
                text-[16px] font-[400] leading-[148%] tracking-[0%] text-[#595566]
                max-[768px]:text-center
              "
            >
              Leverage agile frameworks to provide a robust synopsis for high level overviews.
              Iterative approaches to corporate strategy foster collaborative.
            </p>
          </div>
        </div>

        {/* bottom */}
        <div
          className="
            w-[330.87px] h-[296px] gap-[56px] flex flex-col items-start justify-between
            max-[1440px]:w-full max-[1440px]:gap-[30px] max-[1440px]:h-auto
            max-[768px]:items-center
          "
        >
          <div className="flex gap-[16px] items-center max-[768px]:justify-center">
            <img src="/Contact-us/call.svg" alt="" className="w-[52.33px] h-[52.33px]" />
            <div className="flex flex-col justify-between items-start max-[768px]:items-center">
              <p className="text-[16px] font-[400] leading-[148%] text-[#595566]">Call Today</p>
              <h2 className="text-[18px] font-[600] leading-[116%] text-[#181818]">+1 800 100 900</h2>
            </div>
          </div>

          <div className="flex gap-[16px] items-center max-[768px]:justify-center">
            <img src="/Contact-us/time.svg" alt="" className="w-[52.33px] h-[52.33px]" />
            <div className="flex flex-col justify-between items-start max-[768px]:items-center">
              <p className="text-[16px] font-[400] leading-[148%] text-[#595566]">Call Today</p>
              <h2 className="text-[18px] font-[600] leading-[116%] text-[#181818]">9AM - 5PM</h2>
            </div>
          </div>

          <div className="flex gap-[16px] items-center max-[768px]:justify-center">
            <img src="/Contact-us/location.svg" alt="" className="w-[52.33px] h-[52.33px]" />
            <div className="flex flex-col justify-between items-start max-[768px]:items-center">
              <p className="text-[16px] font-[400] leading-[148%] text-[#595566]">Call Today</p>
              <h2 className="text-[18px] font-[600] leading-[116%] text-[#181818] text-center">
                195 Devonshire St Boston
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div
        className="
          w-[688.37px] h-[534px] gap-[28px] flex flex-col items-start justify-between
          max-[1440px]:w-[55%] max-[1440px]:h-auto
          max-[768px]:w-full
        "
      >
        {/* 1st row */}
        <div
          className="
            w-[666px] h-[100px] gap-[24px] flex justify-between
            max-[1440px]:w-full max-[1440px]:gap-[20px]
            max-[400px]:flex-col max-[400px]:h-auto
          "
        >
          <div className="w-[318px] h-full gap-[8px] flex flex-col justify-between max-[1440px]:flex-1 max-[400px]:w-full">
            <label className="font-[400] text-[16px] leading-[148%] text-[#181818]">Full Name</label>
            <input
              type="text"
              className="w-full h-[68px] rounded-[54px] px-[33px] py-[22px] border border-[#C1C1C1]"
              placeholder="john david"
            />
          </div>
          <div className="w-[318px] h-full gap-[8px] flex flex-col justify-between max-[1440px]:flex-1 max-[400px]:w-full">
            <label className="font-[400] text-[16px] leading-[148%] text-[#181818]">Email</label>
            <input
              type="email"
              className="w-full h-[68px] rounded-[54px] px-[33px] py-[22px] border border-[#C1C1C1]"
              placeholder="consult@mail.com"
            />
          </div>
        </div>

        {/* 2nd row */}
        <div
          className="
            w-[666px] h-[100px] gap-[24px] flex justify-between
            max-[1440px]:w-full max-[1440px]:gap-[20px]
            max-[400px]:flex-col max-[400px]:h-auto
          "
        >
          <div className="w-[318px] h-full gap-[8px] flex flex-col justify-between max-[1440px]:flex-1 max-[400px]:w-full">
            <label className="font-[400] text-[16px] leading-[148%] text-[#181818]">Phone</label>
            <input
              type="tel"
              className="w-full h-[68px] rounded-[54px] px-[33px] py-[22px] border border-[#C1C1C1]"
              placeholder="+008 654 231"
            />
          </div>
          <div className="w-[318px] h-full gap-[8px] flex flex-col justify-between max-[1440px]:flex-1 max-[400px]:w-full">
            <label className="font-[400] text-[16px] leading-[148%] text-[#181818]">
              Company(optional)
            </label>
            <input
              type="text"
              className="w-full h-[68px] rounded-[54px] px-[33px] py-[22px] border border-[#C1C1C1]"
              placeholder="yourcompany.com"
            />
          </div>
        </div>

        {/* Message */}
        <div
          className="
            w-[666px] h-[189px] gap-[10px] flex flex-col justify-between
            max-[1440px]:w-full max-[768px]:h-auto
          "
        >
          <label className="font-[400] text-[16px] leading-[148%] text-[#181818]">Message</label>
          <textarea
            className="w-full h-[157px] resize-none rounded-[22px] border border-[#C1C1C1] px-[33px] py-[22px] text-[#A9A9A9]"
            defaultValue="Briefly tell us about your project and your current goals. How can we help you?"
          ></textarea>
        </div>

        <a
          href="#"
          className="
            w-[168px] h-[61px] rounded-[42px] bg-[#181818] text-[#FFFFFF] font-[600] text-[18px] leading-[160%]
            flex justify-center items-center
            max-[768px]:mx-auto
          "
        >
          Send Message
        </a>
      </div>
    </div>
  );
}
