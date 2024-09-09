
import { TrendingCard } from "./TrendingCard";

const TrendingGrid = () => {
  return (
    <div className="flex">

        <div className="container my-4">
        
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-6">
        <div>
          <TrendingCard title="One piece" ranking={1} image="https://via.placeholder.com/100x200" />
        </div>
        <div>
          <TrendingCard title="My Hero Academia" ranking={2} image="https://via.placeholder.com/100x200" />
        </div>
        <div>
          <TrendingCard title="Alya Sometimes Hides" ranking={3} image="https://via.placeholder.com/100x200" />
        </div>
        <div>
          <TrendingCard title="A Nobody's Way Up" ranking={4} image="https://via.placeholder.com/100x200" />
        </div>
        <div>
          <TrendingCard title="My Star: Season 2" ranking={5} image="https://via.placeholder.com/100x200" />
        </div>
        <div>
          <TrendingCard title="Fairy Tail. 100 Years" ranking={6} image="https://via.placeholder.com/100x200" />
        </div>
      </div>
    </div>
    <div className="ml-3 block mt-4">
       <button className="btns w-[40px] h-[116px] bg-gray rounded-[15px]">R</button>
       <button className="btns w-[40px] h-[116px] mt-3 bg-gray rounded-[15px]">L</button>
    </div>
    
    </div>
    
  );
};

export default TrendingGrid;
