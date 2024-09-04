export const Header = () => {
    return (
        <div>
            <header className="bg-header w-[2000px] h-[70px] flex justify-between pl-4">
                <div>
                <button>
                    <img src="/menuIcon.png" className="w-6 h-7" alt="logo" />
                </button>
                <button>
                    <img src="/logo.png" className="w-[121px] h-[40px] mt-4"/>
                </button>
                <input type="text" placeholder="Search Anime" className="w-[340px] h-[40px] pl-2"/>
                </div>


                <div className="flex w-[32px] h-[32px] mt-4">
                    <img src="/discord.png" alt="" />
                    <img src="/telegram.png" alt="" />
                    <img src="/reddit.png" alt="" />
                    <img src="/twitter.png" alt="" />
                </div>

            </header>
        </div>
    );
}