export default function Blog() {
  const blogs = [
    {
      banner: "/Gallery/Kosulting.svg",
      title: "Consulting Fees Study 2019 (And How To Raise Your Rates)",
      info: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
      img: "/Members/JM.svg",
      Name: "James Miller",
      Date: "June 12, 2025"
    },
    {
      banner: "/Gallery/Hacking.svg",
      title: "Top 10 Mistakes New Consultants Make (And How to Avoid Them)",
      info: "New consultants often underestimate the importance of clear contracts and overpromise results. Learn how to avoid these common pitfalls and build long-term client trust.",
      img: "/Members/KS.svg",
      Name: "Sara Brooks",
      Date: "June 12, 2025"
    }
  ]

  return (
    <div className="w-full max-w-[1920px] mx-auto bg-[#F5F5F5] h-auto gap-[10px] flex items-center justify-center py-10 px-4">
      <div className="w-[1201px] max-[1199px]:w-full h-auto flex items-start flex-col justify-center">
        {/* Content */}
        <div className="w-full min-h-[126px] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[30px]">
          <div className="w-full lg:w-[507.89px] gap-[6px] flex flex-col justify-between items-start max-[768px]:items-center max-[768px]:text-center">
            <p className="w-fit h-[24px] rounded-[20px] px-[15px] bg-[#4EAF4E] flex justify-center items-center font-[400] text-[16px] leading-[148%] tracking-[14.5%] uppercase text-[#FFFFFF]">
              BLOG
            </p>
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-[700] text-[#181818] leading-[116%]">
              Take a look at our latest articles & resources
            </h2>
          </div>
          <a href="#" className="w-[168px] max-[768px]:w-full max-[768px]:mx-auto h-[61px] rounded-[42px] py-[16px] bg-[#FFCC4A] flex justify-center items-center font-[600] text-[18px] leading-[160%] text-[#181818]">
            More News
          </a>
        </div>

        {/* BLOGS */}
        <div className="w-full h-auto flex max-[1199px]:flex-col max-[1199px]:items-center justify-between items-center gap-[36px] mt-[46px]">
          {blogs.map((bloging, index) => (
            <div key={index} className="w-[583px] max-[1199px]:w-full h-full gap-[28px] flex flex-col justify-between items-start">
              <img src={bloging.banner} alt="" className="w-full h-[320.04px] rounded-[20px] object-cover max-[768px]:h-[200px]" />
              <div className="w-full h-auto flex flex-col justify-between items-start gap-[10px]">
                {/* Text */}
                <div className="w-full gap-[12px] flex flex-col items-start justify-between max-[768px]:items-center max-[768px]:text-center">
                  <h2 className="text-[23px] leading-[116%] tracking-[0%] text-[#181818] font-[600]">
                    {bloging.title}
                  </h2>
                  <p className="text-[16px] leading-[148%] tracking-[0%] text-[#595566] font-[400]">
                    {bloging.info}
                  </p>
                </div>
                {/* Info */}
                <div className="w-full h-auto gap-[1px] flex flex-col border-y-[1px] border-[#C1C1C1] pt-[16px] pb-[8px]">
                  <div className="w-full gap-[85px] flex items-center justify-between flex-wrap max-[768px]:flex-col max-[768px]:gap-[20px]">
                    <div className="flex items-center gap-[22px] max-[768px]:flex-col max-[768px]:gap-[8px] max-[768px]:text-center">
                      <div className="flex items-center gap-2 max-[768px]:flex-col">
                        <img src={bloging.img} alt="" className="w-[59.63px] h-[59.63px] rounded-full" />
                        <p className="text-[16px] text-[#595566] font-[400]">
                          {bloging.Name}
                        </p>
                      </div>
                      <p className="text-[14px] text-[#595566] font-[400] border-l pl-4 border-[#595566] max-[768px]:border-none max-[768px]:pl-0">
                        {bloging.Date}
                      </p>
                    </div>
                   <a
  href="#"
  className="relative z-0 w-[167px] h-[61px] max-[768px]:w-full rounded-[42px] border border-[#181818] text-[#181818] font-[500] text-[18px] leading-[160%] flex items-center justify-center overflow-hidden group"
>
  <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">
    Read More
  </span>

  {/* Левая волна */}
  <span className="absolute left-0 top-0 h-full w-1/2 bg-[#181818] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0 rounded-l-[42px]" />

  {/* Правая волна */}
  <span className="absolute right-0 top-0 h-full w-1/2 bg-[#181818] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0 rounded-r-[42px]" />
</a>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
