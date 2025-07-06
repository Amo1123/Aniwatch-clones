
export const TrendingCard = (props) => {
  const { ranking, title, image } = props;

  return (
    <div>
    <article className="flex">
      <div className="flex flex-col items-center self-end justify-center flex-shrink-0 w-10">
        <span className="rotate-text text-ellipsis overflow-hidden whitespace-nowrap">{title}</span>
        <span className="text-[#FFDD95] font-semibold text-xl">
          {ranking < 10 && "0"}
          {ranking}
        </span>
      </div>
      <div className="relative aspect-[166/237] flex-shrink-0 w-[calc(100%-40px)]">
      <img className="absolute top-0 left-0 object-cover w-full h-full" src={image} alt={title} width={166} height={237} />
      </div>
    </article>
    </div>
    
  );
};