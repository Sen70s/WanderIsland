import { LucidePlus } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import ChatBubble from "./ChatBubble";
import { LucideScanFace } from "lucide-react";
import { LucideSmile } from "lucide-react";
import { LucideBellRing } from "lucide-react";
import { LucideGift } from "lucide-react";
import { LucideSend } from "lucide-react";

const InputToolBarItem = ({ icon }) => {
    return (
        <div className='bg-transparent hover:bg-(--system-color-selected)/45 size-8 min-h-8 rounded-lg
     text-black/70 flex items-center justify-center transition-colors duration-300 cursor-pointer'>
            {icon}
        </div>
    );
}

const PrivateChat = () => {

    const nav = useNavigate();
    const data = useParams();

    return (
        <>
            {/* title bar */}
            <div className=' w-full border-b border-gray-100 flex items-center justify-between px-4 p-3 space-x-2'>
                <a className="text-xl font-bolds text-black">
                    丹恒
                </a>

                <div className='bg-(--system-color-selected)/40 size-8 min-h-8 rounded-lg text-black/70 flex 
              items-center justify-center transition-colors duration-300 cursor-pointer'>
                    <LucidePlus className='size-5 text-(--system-color-selected)/120' />
                </div>
            </div>

            {/* chat content */}
            <div className="w-full h-[calc(100vh-100px)] text-black flex flex-col justify-between">
                {/* chat text */}
                <div className="w-full h-full px-6 pt-4 overflow-y-scroll">
                    {[...Array(20).keys()].map((item) => (
                        <>
                            <ChatBubble
                                avatar={'https://bbs-static.miyoushe.com/static/2025/08/14/d39295b2c9b4eaee6de405dba348e33e_4331088608288025208.jpg?x-oss-process=image/resize,s_400,l_16000/auto-orient,0/interlace,1/quality,q_70/format,webp'}
                                username="丹恒"
                                text="Hello, this is a private chat!测试一下"
                                type="other"
                                isShowName={false}
                            />
                            <ChatBubble
                                avatar={'https://bbs-static.miyoushe.com/static/2025/08/14/d39295b2c9b4eaee6de405dba348e33e_4331088608288025208.jpg?x-oss-process=image/resize,s_400,l_16000/auto-orient,0/interlace,1/quality,q_70/format,webp'}
                                username="Nathan"
                                text="text"
                                type="own"
                                isShowName={false}
                            />
                        </>
                    ))}
                </div>

                {/* input area */}
                <div className="w-full border-t flex flex-col border-gray-100 items-center justify-center px-4 p-3 space-x-2">
                    {/* input tool bar */}
                    <div className="flex space-x-2 w-full">
                        <InputToolBarItem icon={<LucideSmile className='size-5 text-(--system-color-selected)/120' />} />
                        <InputToolBarItem icon={<LucideBellRing className='size-5 text-(--system-color-selected)/120' />} />
                        <InputToolBarItem icon={<LucideGift className='size-5 text-(--system-color-selected)/120' />} />
                        <div className="flex-1"></div>
                        <div className='bg-(--system-blue)/70 h-8 space-x-1 rounded-xl text-white flex items-center justify-center px-2 cursor-pointer'>
                            <LucideSend className='size-5 text-white' />
                            <a>发送</a>
                        </div>
                    </div>

                    <div className="h-25 w-full pt-2">
                        <textarea
                            class="w-full h-full resize-none align-top focus:outline-none"
                            placeholder="聊点什么"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        ></textarea>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PrivateChat;