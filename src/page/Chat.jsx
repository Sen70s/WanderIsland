import { LucidePlus } from "lucide-react";
import { LucideArrowLeft } from "lucide-react";

const ChatScreen = () => {
    return (
        <div className="h-screen w-screen overflow-auto 
        bg-[url(./images/bg_chat.png)]
        bg-no-repeat bg-cover bg-scroll"
        >
            {/* 顶部导航栏 */}
            <nav className="z-10 sticky flex items-center justify-between top-0 text-center bg-linear-to-b from-white to-transparent py-4 px-2 space-x-2">

                <button className="liquid-glass-full liquid-glass-btn w-10 h-full rounded-full">
                    <span className="text-2xl font-bold text-black transition-all duration-300">
                        <LucideArrowLeft className='size-6 mx-auto' strokeWidth={2} />
                    </span>
                </button>

                <button className="flex liquid-glass-full liquid-glass-btn h-11 rounded-full p-0 space-x-1"
                    style={{ padding: "0px 8px" }}>
                    <img src="https://p26-passport.byteacctimg.com/img/user-avatar/78a7017b7166fccc58ec23f717d9a96d~50x50.awebp"
                        alt="placeholder" className="size-8 rounded-full" />
                    <span className="text-xl font-bold text-black transition-all duration-300">
                        WanderIsland
                    </span>
                </button>
            </nav>

            {/* 内容区域 */}
            <main className="flex-1 overflow-y-scroll">
                <div className="px-4 space-y-3">
                    {[...Array(20).keys()].map((item) => (
                        <>
                            <div className="justify-self-start max-w-[80%]
                            liquid-glass-full liquid-glass-card text-gray-900 rounded-bl-none px-4 py-3 shadow-sm"
                            style={{borderEndStartRadius: "25px"}}
                            >
                                <p className="text-lg">你好！这是对方发送的消息内容</p>
                            </div>

                            <div className="justify-self-end max-w-[80%] 
                            liquid-glass-full liquid-glass-card text-white rounded-bl-none px-4 py-3 shadow-sm"
                            style={{
                                borderEndEndRadius: "25px",
                                backgroundColor:"rgba(0, 111, 213, 0.5)"
                            }}
                            >
                                <p className="text-lg">你好！这是对方发送的消息内容，可以显示较长的文本。</p>
                            </div>
                        </>
                    ))}
                </div>
            </main>

            {/* 底部导航栏 */}
            <div className="z-10 sticky flex items-center justify-between bottom-0 text-center bg-linear-to-t from-white to-transparent py-4 px-2 space-x-2">
                <button className="liquid-glass-full liquid-glass-btn w-10 h-full rounded-full">
                    <span className="text-2xl font-bold text-white transition-all duration-300">
                        <LucidePlus className='size-6 mx-auto' strokeWidth={2} />
                    </span>
                </button>

                <input type="text" className="liquid-glass-full liquid-glass-card w-full h-10 rounded-full px-4 py-2" placeholder="请输入..." />  

            </div>

        </div>
    );
};

export default ChatScreen;