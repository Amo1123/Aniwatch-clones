const AnimeCard = ({ imgSrc, title }) => {
    return (
      <div className="flex flex-col items-start">
        <img src={imgSrc} alt={title} className="w-[160px] h-[225px] mb-2" />
        <span className="text-center">{title}</span>
      </div>
    );
  };
  
  export default AnimeCard;
  