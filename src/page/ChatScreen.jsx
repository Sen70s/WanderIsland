import { LucidePlus } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";

import user_avatar from '@/images/avatar/user.webp';

const ChatScreen = () => {
    const nav = useNavigate();

    return (
        <>
            {/* 左侧第二列表导航栏 */}
            <div className='h-full w-(--system-width-bar-second) border-r border-gray-100 flex flex-col items-centerspace-y-4 float-left'>
                {/* Search Bar */}
                <div className=' w-full border-b border-gray-100 flex items-center justify-center px-4 p-3 space-x-2'>
                    <input
                        type="text"
                        placeholder='Search...'
                        className='w-11/12 h-8 text-(--system-color-selected)/120 rounded-md 
                bg-(--system-color-selected)/40 px-2 text-sm focus:outline-none'
                        style={{ color: "black" }}
                    />

                    <div className='bg-(--system-color-selected)/40 size-8 min-h-8 rounded-lg text-black/70 flex 
              items-center justify-center transition-colors duration-300 cursor-pointer'>
                        <LucidePlus className='size-5 text-(--system-color-selected)/120' />
                    </div>
                </div>

                {/* chat list */}
                <div className="overflow-y-scroll overscroll-none"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {[...Array(30).keys()].map((item) => (
                        <div
                            className='w-full py-3 px-4 flex items-center space-x-3 hover:bg-(--system-color-selected)/45 cursor-pointer 
                                transition-colors duration-300'
                            onClick={() => (nav(`/Chat/private/${item}`))}
                        >
                            <img src={'https://bbs-static.miyoushe.com/static/2025/08/14/d39295b2c9b4eaee6de405dba348e33e_4331088608288025208.jpg?x-oss-process=image/resize,s_400,l_16000/auto-orient,0/interlace,1/quality,q_70/format,webp'} alt="user avatar" className='size-7 rounded-full' />
                            <div className='flex-1'>
                                <div className='text-sm font-medium text-gray-900'>丹恒 {item + 1}</div>
                                <div className='text-xs text-gray-500'>Last message preview...</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* 主要内容区域 */}
            <div className='h-full w-(--system-width-main-content) float-right flex-1 overflow-hidden rounded-md bg-(--system-white)'>
                <Outlet />
            </div>
        </>
    );
}

export default ChatScreen;