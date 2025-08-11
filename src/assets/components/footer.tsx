export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden pt-6 lg:pt-12">
      {/* Фон как background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/Main/footer.jpg')] bg-cover bg-center"
      />
      {/* Тёмный оверлей */}
      <div aria-hidden="true" className="absolute inset-0 bg-[#181818]/92" />
      {/* Градиент сверху для плавного перехода */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#181818] to-transparent"
      />

      {/* Контент */}
      <div className="relative z-10">
        <div
          className="
            mx-auto w-full px-4 py-10
            sm:py-12
            md:py-14
            lg:max-w-[1199px] lg:py-0 lg:h-[489px]
            xl:max-w-[1230px]
          "
        >
          <div
            className="
              flex flex-col gap-10
              lg:h-[237px] lg:flex-row lg:items-start lg:justify-between lg:gap-[171px]
              lg:mt-[126px]
            "
          >
            {/* Лого + соцсети */}
            <div
              className="
                flex flex-col items-center gap-6
                lg:w-[352.3px] lg:h-[237px] lg:items-start lg:gap-[31px]
                lg:border-r lg:border-white/20 lg:pr-10
              "
            >
              <img src="/Main/Logo.svg" alt="AskExperts" className="h-[31px] w-auto" />

              <div className="flex items-center gap-5">
                <a href="#" aria-label="Facebook" className="rounded hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/30">
                  <img src="/Icons/Facebook.svg" className="h-5 w-5" alt="" />
                </a>
                <a href="#" aria-label="Instagram" className="rounded hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/30">
                  <img src="/Icons/Instagram.svg" className="h-5 w-5" alt="" />
                </a>
                <a href="#" aria-label="X (formerly Twitter)" className="rounded hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/30">
                  <img src="/Icons/Twitter.svg" className="h-5 w-5" alt="X" />
                </a>
                <a href="#" aria-label="LinkedIn" className="rounded hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/30">
                  <img src="/Icons/Linked-In.svg" className="h-5 w-5" alt="" />
                </a>
              </div>
            </div>

            {/* Колонки */}
            <div
              className="
                grid w-full gap-10
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-3 lg:w-[676.08px] lg:h-[191.1px] lg:items-center lg:gap-[99px]
              "
            >
              {/* Product */}
              <div className="flex flex-col items-start gap-4">
                <div>
                  <h2 className="text-white text-[20px] font-[500] sm:text-[18px]">Product</h2>
                  <div className="mt-2 h-[3.1px] w-[32px] rounded-[20px] bg-[#FFCC4A]" />
                </div>
                <ul className="space-y-2 text-white/90">
                  {["Service", "FAQ", "Single Service", "Get Quote", "Prices"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-[16px] sm:text-[14px] transition-colors hover:text-[#FFCC4A]">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="flex flex-col items-start gap-4">
                <div>
                  <h2 className="text-white text-[20px] font-[500] sm:text-[18px]">Company</h2>
                  <div className="mt-2 h-[3.1px] w-[32px] rounded-[20px] bg-[#FFCC4A]" />
                </div>
                <ul className="space-y-2 text-white/90">
                  {["About", "News", "Contacts", "Testimonials", "Our team", "Our approach"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-[16px] sm:text-[14px] transition-colors hover:text-[#FFCC4A]">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Address */}
              <div className="flex flex-col items-start gap-4">
                <div>
                  <h2 className="text-white text-[20px] font-[500] sm:text-[18px]">Address</h2>
                  <div className="mt-2 h-[3.1px] w-[32px] rounded-[20px] bg-[#FFCC4A]" />
                </div>

                <p className="text-white/90 text-[16px] leading-[148%] sm:text-[14px]">
                  1700 W Blancke St, kiyev port south USA, America
                </p>

                {/* Кнопка */}
                <a
                  href="#"
                  className="
                    group relative mt-2 hidden md:inline-flex
                    max-w-full items-center justify-center
                    rounded-[42px] bg-white px-6 py-3
                    text-[18px] font-[600] leading-[160%] text-[#181818]
                    overflow-hidden transition-colors hover:text-white
                    focus:outline-none focus:ring-2 focus:ring-white/30
                  "
                >
                  <span className="relative z-10">Book an Appointment</span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-500 group-hover:w-1/2" />
                  <span className="absolute right-0 top-0 h-full w-0 bg-black transition-all duration-500 group-hover:w-1/2" />
                </a>
              </div>
            </div>
          </div>

          {/* Нижняя полоса */}
          <div className="mt-10 border-t border-white/20 py-4 text-center">
            <p className="text-[14px] sm:text-[15px] text-white/80">
              ©2025 Consultalk. All rights reserved | Terms of Service | Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
