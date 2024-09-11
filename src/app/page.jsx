
import { Intro } from "./components/intro";
import TrendingGrid from "./components/TrendingGrid";
import { AnimeList } from "./components/AnimeList";
import { Genres } from "./components/Genres";
import LatestWatched from "./components/LatestWatched";

export default function Home() {
  return (
    <div className="w-[1500px]">
      <Intro />
      <div>
          <h1 className="text-[#FFDD95] w-[101px] h-[29px] font-semibold text-[22px] leading-[29px]">Trending</h1>
      </div>
      <TrendingGrid />
      <AnimeList />

      {/** two containers */}
      <div className="flex justify-between">
        <div className="w-[1050px]">
          <LatestWatched />
        </div>
        <div className="w-[350px]">
          <Genres />
        </div>
      </div>

    </div>
  );
}
