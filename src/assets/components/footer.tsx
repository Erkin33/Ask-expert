export default function Footer() {
  return (
    <div className="relative w-full h-[489px] max-[800px]:h-[789px] max-[515px]:h-[900px]">
      {/* Фон */}
      <img
        src="/Main/footer.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Цвет + блюр */}
      <div className="w-full h-full flex flex-col justify-around inset-0 bg-[#181818]/90 backdrop-blur-[43px]">
        <div className="w-[1199px] max-[515px]:h-[500px] max-[515px]:gap-[10px] h-[237px] max-[800px]:h-[537px] max-[1000px]:gap-[30px] gap-[171px] mx-auto my-auto flex justify-between max-[515px]:justify-around max-[1230px]:w-[1000px] max-[1000px]:w-[768px] max-[800px]:w-full max-[800px]:flex-col">
          {/* Логотип и соцсети */}
          <div className="w-[352.3px]  max-[800px]:w-full max-[800px]:border-r-[0px]  max-[515px]:justify-center max-[515px]:h-[100px] max-[515px]:items-center max-[515px]:gap-[0px] h-[237px] flex justify-start items-start gap-[171px] border-r border-[#707070]">
            <div className="w-[181px] h-[85px] max-[515px]:gap-[0px] max-[515px]:justify-around gap-[31px] max-[800px]:mx-auto max-[515px]:mb-[0px] max-[515px]:h-full max-[800px]:mb-[40px] flex flex-col items-start justify-between">
              <img src="/Main/Logo.svg" alt="" className="w-full h-[31px]" />
              <div className="w-[157px] h-[23px] flex justify-between items-center">
                <a href="#"><img src="/Icons/Facebook.svg" alt="" /></a>
                <a href="#"><img src="/Icons/Instagram.svg" alt="" /></a>
                <a href="#"><img src="/Icons/Twitter.svg" alt="" /></a>
                <a href="#"><img src="/Icons/Linked-In.svg" alt="" /></a>
              </div>
            </div>
          </div>

          {/* Контентные колонки */}
          <div className="w-[676.08px] h-[191.1px] max-[800px]:w-full max-[800px]:justify-around max-[800px]:h-[300px] flex gap-[99px] max-[1000px]:gap-[30px] max-[1230px]:gap-[70px] justify-between items-center max-[515px]:flex-wrap">
            {/* Первая колонка */}
            <div className="w-[121px] max-[515px]:h-[150px] h-full flex flex-col items-center gap-[10px]">
              <div className="w-full h-[37.1px] flex justify-between items-start flex-col">
                <h2 className="font-[500] text-[20px] max-[515px]:text-[16px] leading-[116%] tracking-[0%] text-[#FFFFFF]">
                  Product
                </h2>
                <div className="w-[32px] h-[3.1px] rounded-[20px] bg-[#FFCC4A]"></div>
              </div>
              <ul className="w-[141px] h-[120px] flex flex-col justify-around marker:text-white items-start list-disc pl-[25px]">
                <li>
                  <a
                    href="#"
                    className="font-[400] text-[16px] max-[515px]:text-[12px] leading-[148%] tracking-[0%] text-[#FFFFFF] transition-colors duration-300 hover:text-[#FFCC4A]"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-[400] text-[16px] max-[515px]:text-[12px] leading-[148%] tracking-[0%] text-[#FFFFFF] transition-colors duration-300 hover:text-[#FFCC4A]"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-[400] text-[16px] max-[515px]:text-[12px] leading-[148%] tracking-[0%] text-[#FFFFFF] transition-colors duration-300 hover:text-[#FFCC4A]"
                  >
                    Single Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-[400] text-[16px] max-[515px]:text-[12px] leading-[148%] tracking-[0%] text-[#FFFFFF] transition-colors duration-300 hover:text-[#FFCC4A]"
                  >
                    Get Quote
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-[400] text-[16px] max-[515px]:text-[12px] leading-[148%] tracking-[0%] text-[#FFFFFF] transition-colors duration-300 hover:text-[#FFCC4A]"
                  >
                    Prices
                  </a>
                </li>
              </ul>
            </div>

            {/* Вторая колонка */}
            <div className="w-[121px] max-[515px]:h-[150px] h-full flex flex-col items-center gap-[10px]">
              <div className="w-full h-[37.1px] flex justify-between items-start flex-col">
                <h2 className="font-[500] text-[20px] max-[515px]:text-[16px] leading-[116%] tracking-[0%] text-[#FFFFFF]">
                  Company
                </h2>
                <div className="w-[32px] h-[3.1px] rounded-[20px] bg-[#FFCC4A]"></div>
              </div>
              <ul className="w-[141px] h-[120px] flex flex-col justify-around items-start list-disc marker:text-white pl-[25px]">
                <li>
                  <a
                    href="#"
                    className="font-[400] text-[16px] max-[515px]:text-[12px] leading-[148%] tracking-[0%] text-[#FFFFFF] transition-colors duration-300 hover:text-[#FFCC4A]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-[400] text-[16px] max-[515px]:text-[12px] leading-[148%] tracking-[0%] text-[#FFFFFF] transition-colors duration-300 hover:text-[#FFCC4A]"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-[400] text-[16px] max-[515px]:text-[12px] leading-[148%] tracking-[0%] text-[#FFFFFF] transition-colors duration-300 hover:text-[#FFCC4A]"
                  >
                    Contacts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-[400] text-[16px] max-[515px]:text-[12px] leading-[148%] tracking-[0%] text-[#FFFFFF] transition-colors duration-300 hover:text-[#FFCC4A]"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-[400] text-[16px] max-[515px]:text-[12px] leading-[148%] tracking-[0%] text-[#FFFFFF] transition-colors duration-300 hover:text-[#FFCC4A]"
                  >
                    Our team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-[400] text-[16px] max-[515px]:text-[12px] leading-[148%] tracking-[0%] text-[#FFFFFF] transition-colors duration-300 hover:text-[#FFCC4A]"
                  >
                    Our approach
                  </a>
                </li>
              </ul>
            </div>

            {/* Третья колонка */}
            <div className="w-[232px] max-[515px]:h-[150px]  max-[515px]:w-[100px] h-full flex flex-col items-center gap-[16px]">
              <div className="w-full h-[37.1px] flex justify-between items-start flex-col">
                <h2 className="font-[500] text-[20px] max-[515px]:text-[16px] leading-[116%] tracking-[0%] text-[#FFFFFF]">
                  Address
                </h2>
                <div className="w-[32px] h-[3.1px] rounded-[20px] bg-[#FFCC4A]"></div>
              </div>
              <p className="font-[400] text-[16px] tracking-[0%] max-[515px]:text-[12px] leading-[148%] text-[#FFFFFF]">
                1700 W Blancke St, kiyev port south USA, America
              </p>

              {/* Кнопка с анимацией */}
              <a
                href="#"
                className="
                  relative overflow-hidden
                  font-[600] text-[18px] leading-[160%] tracking-[0%]
                  text-[#181818] w-[214px] h-[59px]
                  rounded-[42px] bg-[#FFFFFF]
                  flex justify-center items-center mr-auto
                  transition-colors duration-300 group max-[515px]:hidden
                "
              >
                <span className="relative z-10 max-[515px]:text-[12px] transition-colors duration-300 group-hover:text-white">
                  Book an Appoinment
                </span>
                {/* левая полоса */}
                <span className="absolute top-0 left-0 h-full w-0 bg-black transition-all duration-500 group-hover:w-1/2" />
                {/* правая полоса */}
                <span className="absolute top-0 right-0 h-full w-0 bg-black transition-all duration-500 group-hover:w-1/2" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-[1200px] max-[1000px]:w-[768px] max-[800px]:w-full max-[1230px]:w-[1000px] mx-auto mb-[26px] h-[44px] border-t-[1px] border-[#707070] flex justify-center items-center">
            <p className="font-[400] max-[515px]:text-[14px] max-[515px]:text-center text-[16px] leading-[148%] tracking-[0%] text-[#FFFFFF]">
                ©2022 Consultalk. All rights reserved | Terms of Service | Privacy Policy
            </p>
        </div>
      </div>
    </div>
  );
}
