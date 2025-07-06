export const Intro = () => {
    return (
        <section>
        <div className="relative flex w-[1500px]">
            {/* Big Anime Image */}
            <div className="absolute right-0 top-0 z-0 w-[1100px] h-[575px]">
                <img src="/intro-anime.png" alt="" className="w-full h-full object-fill" />
            </div>
            {/* Text Content */}
            <div className="text-baitext w-[800px] pl-[50px] relative z-10 " >
                <div className="mt-[160px]">
                    <p className="text-logInBtn mb-[25px]">#5 Spotlight</p>
                    <h1 className="text-[48px] font-bold mb-[35px]">Pseudo Harem</h1>
                    <div className="flex gap-[10px] mb-[30px]">
                        <div className="flex gap-[5px]">
                            <img src="/tvBtn.png" alt="" className="w-[12px] h-[13px] mt-[6px]" />
                            <p>TV</p>
                        </div>
                        <div className="flex gap-[5px]">
                            <img src="/duration.png" alt="" className="w-[12px] h-[13px] mt-[6px]" />
                            <p>24m</p>
                        </div>
                        <div className="flex gap-[5px]">
                            <img src="/calendar.png" alt="" className="w-[12px] h-[13px] mt-[6px]" />
                            <p>Jul 5, 2024</p>
                        </div>
                        <div>
                            <button className="w-[27px] h-[21px] text-[12px] bg-logInBtn text-bodybg rounded-[6px]">HD</button>
                        </div>
                        <div>
                            <img src="/episodes.png" alt="" className="w-[62px] h-[21px] mt-[3px]" />
                        </div>
                    </div>
                    <p className="font-[300] text-[15.2px] mt-[30px]">
                        Eiji Kitahama, a second year high school student, just wants to be popular. To help him realize this
                        dream, Rin Nanakura, his junior in the drama club, uses her acting skills to create a harem of loving
                        girls for him. Though the various "girls" all show fondness toward Eiji, the affection of the actress
                    </p>
                    <div className="flex mt-[35px] h-[42px] gap-[15px]">
                        <button className="bg-logInBtn rounded-[20px] w-[150px] text-bodybg">Watch Now</button>
                        <button className="rounded-[20px] bg-[#56565B] w-[95px]">Detail</button>
                    </div>
                </div>
            </div>
            
        </div>
        {/* The Advertisement */}
        <div className="relative mt-[100px] flex justify-center mb-8">
            <img src="https://via.placeholder.com/728x90" alt="" />
        </div>
        </section>
        
    );
};
