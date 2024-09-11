export const AnimeList = () => {
    return (
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-4 mt-10 text-baitext text-[15px]">
        {/* Top Airing */}
        <div>
          <h2 className="text-[#FFDD95] font-bold text-[22px] mb-3">Top Airing</h2>
          <div className="divide-y divide-[#3b3b3b] ">
            <div className="flex items-center py-5">
              <img src="https://via.placeholder.com/60x76" alt="Anime 1" className="mr-3" />
              <div>
                <span>One Piece</span>
                <img src="./epAndTV.png" alt="" className="w-[234px] h-[24px]" />
              </div>
            </div>
            <div className="flex items-center py-5">
              <img src="https://via.placeholder.com/60x76" alt="Anime 2" className="mr-3" />
              <div>
                <span>My Hero Academia Season 7</span>
                <img src="./epAndTV.png" alt="" className="w-[234px] h-[24px]" />
              </div>
            </div>
            <div className="flex items-center py-5">
              <img src="https://via.placeholder.com/60x76" alt="Anime 3" className="mr-3" />
              <div>
                <span>That Time I Got Reincarnated as a Slime Season 3</span>
                <img src="./epAndTV.png" alt="" className="w-[234px] h-[24px]" />
              </div>
            </div>
            <div className="flex items-center py-5">
              <img src="https://via.placeholder.com/60x76" alt="Anime 4" className="mr-3" />
              <div>
                <span>Case Closed</span>
                <img src="./epAndTV.png" alt="" className="w-[234px] h-[24px]" />
              </div>
            </div>
            <div className="flex items-center py-5">
              <img src="https://via.placeholder.com/60x76" alt="Anime 5" className="mr-3" />
              <div>
                <span>Alya Sometimes Hides Her Feelings in Russian</span>
                <img src="./epAndTV.png" alt="" className="w-[234px] h-[24px]" />
              </div>
            </div>
            <div>
                <button className="text-[16px] py-4">View More...</button>
            </div>
          </div>
        </div>
  
        {/* Most Popular */}
        <div>
          <h2 className="text-[#FFDD95] font-bold text-[22px] mb-3">Most Popular</h2>
          <div className="divide-y divide-[#3b3b3b] ">
            <div className="flex items-center py-5">
              <img src="https://via.placeholder.com/60x76" alt="Anime 1" className="mr-3" />
              <div>
                <span>One Piece</span>
                <img src="./epAndTV.png" alt="" className="w-[234px] h-[24px]" />
              </div>
            </div>
            <div className="flex items-center py-5">
              <img src="https://via.placeholder.com/60x76" alt="Anime 2" className="mr-3" />
              <div>
                <span>Naruto: Shippuden</span>
                <img src="./epAndTV.png" alt="" className="w-[234px] h-[24px]" />
              </div>
            </div>
            <div className="flex items-center py-5">
              <img src="https://via.placeholder.com/60x76" alt="Anime 3" className="mr-3" />
              <div>
                <span>Jujutsu Kaisen 2nd Season</span>
                <img src="./epAndTV.png" alt="" className="w-[234px] h-[24px]" />
              </div>
            </div>
            <div className="flex items-center py-5">
              <img src="https://via.placeholder.com/60x76" alt="Anime 4" className="mr-3" />
              <div>
                <span>Bleach</span>
                <img src="./epAndTV.png" alt="" className="w-[234px] h-[24px]" />
              </div>
            </div>
            <div className="flex items-center py-5">
              <img src="https://via.placeholder.com/60x76" alt="Anime 5" className="mr-3" />
              <div>
                <span>Black Clover</span>
                <img src="./epAndTV.png" alt="" className="w-[234px] h-[24px]" />
              </div>
            </div>
            <div>
                <button className="text-[16px] py-4">View More...</button>
            </div>
          </div>
        </div>
  
        {/* Most Favorite */}
        <div>
          <h2 className="text-[#FFDD95] font-bold text-[22px] mb-3">Most Favorite</h2>
          <div className="divide-y divide-[#3b3b3b] ">
            <div className="flex items-center py-5">
              <img src="https://via.placeholder.com/60x76" alt="Anime 1" className="mr-3" />
              <div>
                <span>One Piece</span>
                <img src="./epAndTV.png" alt="" className="w-[234px] h-[24px]" />
              </div>
            </div>
            <div className="flex items-center py-5">
              <img src="https://via.placeholder.com/60x76" alt="Anime 2" className="mr-3" />
              <div>
                <span>Chainsaw Man</span>
                <img src="./epAndTV.png" alt="" className="w-[234px] h-[24px]" />
              </div>
            </div>
            <div className="flex items-center py-5">
              <img src="https://via.placeholder.com/60x76" alt="Anime 3" className="mr-3" />
              <div>
                <span>Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc</span>
                <img src="./epAndTV.png" alt="" className="w-[234px] h-[24px]" />
              </div>
            </div>
            <div className="flex items-center py-5">
              <img src="https://via.placeholder.com/60x76" alt="Anime 4" className="mr-3" />
              <div>
                <span>Jujutsu Kaisen</span>
                <img src="./epAndTV.png" alt="" className="w-[234px] h-[24px]" />
              </div>
            </div>
            <div className="flex items-center py-5">
              <img src="https://via.placeholder.com/60x76" alt="Anime 5" className="mr-3" />
              <div>
                <span>Attack on Titan</span>
                <img src="./epAndTV.png" alt="" className="w-[234px] h-[24px]" />
              </div>
            </div>
            <div>
                <button className="text-[16px] py-4">View More...</button>
            </div>
          </div>
        </div>
  
        {/* Latest Completed */}
        <div>
          <h2 className="text-[#FFDD95] font-bold text-[22px] mb-3">Latest Completed</h2>
          <div className="divide-y divide-[#3b3b3b] ">
            <div className="flex items-center py-5">
              <img src="https://via.placeholder.com/60x76" alt="Anime 1" className="mr-3" />
              <div>
                <span>The White Whale of Mu</span>
                <img src="./epAndTV.png" alt="" className="w-[234px] h-[24px]" />
              </div>
            </div>
            <div className="flex items-center py-5">
              <img src="https://via.placeholder.com/60x76" alt="Anime 2" className="mr-3" />
              <div>
                <span>Level 1 Demon Lord and One Room Hero</span>
                <img src="./epAndTV.png" alt="" className="w-[234px] h-[24px]" />
              </div>
            </div>
            <div className="flex items-center py-5">
              <img src="https://via.placeholder.com/60x76" alt="Anime 3" className="mr-3" />
              <div>
                <span>Helck</span>
                <img src="./epAndTV.png" alt="" className="w-[234px] h-[24px]" />
              </div>
            </div>
            <div className="flex items-center py-5">
              <img src="https://via.placeholder.com/60x76" alt="Anime 4" className="mr-3" />
              <div>
                <span>The Devil is a Part-Timer!!</span>
                <img src="./epAndTV.png" alt="" className="w-[234px] h-[24px]" />
              </div>
            </div>
            <div className="flex items-center py-5">
              <img src="https://via.placeholder.com/60x76" alt="Anime 5" className="mr-3" />
              <div>
                <span>Ragna Crimson</span>
                <img src="./epAndTV.png" alt="" className="w-[234px] h-[24px]" />
              </div>
            </div>
            <div>
                <button className="text-[16px] py-4">View More...</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  