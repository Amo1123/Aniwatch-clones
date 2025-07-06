export const Header = () => {
    return (
        <div>
            <header className="bg-header w-[1500px] h-[70px] flex justify-between items-center pl-4">
                <div className="flex items-center space-x-4">
                    <button>
                        <img src="/menuIcon.png" className="w-6 h-7" alt="menu icon" />
                    </button>
                    <button>
                        <img src="/logo.png" className="w-[121px] h-[40px]" alt="logo" />
                    </button>
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Search Anime" 
                            className="w-[340px] h-[40px] pl-2 pr-10 mb-2 mt-[7px]"
                        />
                        <img 
                            src="/search-icon.png" 
                            alt="search icon" 
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-[20px] h-[20px]"
                        />
                    </div>
                <div className="flex space-x-2 w-[140px] h-[32px]">
                    <button><img src="/discord.png" alt="discord" /></button>
                    <button><img src="/telegram.png" alt="telegram" /></button>
                    <button><img src="/reddit.png" alt="reddit" /></button>
                    <button><img src="/twitter.png" alt="twitter" /></button>
                </div>

                </div>

                
                <div>
                    <button className="w-[70px] h-[40px] bg-logInBtn rounded-[3px] mr-[15px]">Log In</button>
                </div>
            </header>
        </div>
    );
}
