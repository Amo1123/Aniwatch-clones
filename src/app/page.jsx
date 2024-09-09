// page.jsx

import { Intro } from "./components/intro";
import TrendingGrid from "./components/TrendingGrid";

export default function Home() {
  return (
    <div className="w-[1500px]">
      <Intro />
      <div>
          <h1 className="text-[#FFDD95] w-[101px] h-[29px] font-semibold text-[22px] leading-[29px]">Trending</h1>
      </div>
      <TrendingGrid />
    </div>
  );
}
