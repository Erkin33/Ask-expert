import Image from "next/image";
import BannerJSX from "@/assets/components/main";
import Banners from "@/assets/components/favourite";
export default function Home() {
  return (
    <div className="flex flex-col">
      <BannerJSX/>
      <Banners/>
    </div>
  );
}
