// LatestWatched.jsx
import AnimeCard from './AnimeCard';

const LatestWatched = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-[#FFDD95] font-bold text-[22px] mb-4">Latest Watched</h2>
      <div className="grid grid-cols-6 gap-4 text-baitext">
        <AnimeCard imgSrc="https://via.placeholder.com/160x225" title="Anime 1" />
        <AnimeCard imgSrc="https://via.placeholder.com/160x225" title="Anime 2" />
        <AnimeCard imgSrc="https://via.placeholder.com/160x225" title="Anime 3" />
        <AnimeCard imgSrc="https://via.placeholder.com/160x225" title="Anime 4" />
        <AnimeCard imgSrc="https://via.placeholder.com/160x225" title="Anime 5" />
        <AnimeCard imgSrc="https://via.placeholder.com/160x225" title="Anime 6" />
        <AnimeCard imgSrc="https://via.placeholder.com/160x225" title="Anime 7" />
        <AnimeCard imgSrc="https://via.placeholder.com/160x225" title="Anime 8" />
        <AnimeCard imgSrc="https://via.placeholder.com/160x225" title="Anime 9" />
        <AnimeCard imgSrc="https://via.placeholder.com/160x225" title="Anime 10" />
        <AnimeCard imgSrc="https://via.placeholder.com/160x225" title="Anime 11" />
        <AnimeCard imgSrc="https://via.placeholder.com/160x225" title="Anime 12" />
      </div>
    </div>
  );
};

export default LatestWatched;
