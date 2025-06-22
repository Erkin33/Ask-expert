import Image from "next/image";
import BannerJSX from "@/assets/components/main";
import Banners from "@/assets/components/favourite";
import AboutTeam from "@/assets/components/About";
import OurServices from "@/assets/components/services";
import Processes from "@/assets/components/process";
export default function Home() {
  return (
    <div className="flex flex-col">
      <BannerJSX/>
      <Banners/>
      <AboutTeam/>
      <OurServices/>
      <Processes/>
    </div>
  );
}
