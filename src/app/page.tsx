import Image from "next/image";
import BannerJSX from "@/assets/components/main";
import Banners from "@/assets/components/favourite";
import AboutTeam from "@/assets/components/About";
import OurServices from "@/assets/components/services";
import Processes from "@/assets/components/process";
import ArtGallery from "@/assets/components/gallary";
import Counter from "@/assets/components/counter";
import Members from "@/assets/components/testimonial";
import CTA from "@/assets/components/CTA";
export default function Home() {
  return (
    <div className="flex flex-col">
      <BannerJSX/>
      <Banners/>
      <AboutTeam/>
      <OurServices/>
      <Processes/>
      <ArtGallery/>
      <Counter/>
      <Members/>
      <CTA/>
    </div>
  );
}
