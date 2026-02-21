
const ChatBubbleOwn = ({ avatar, username, text, isShowName }) => {
    return (
        <div className="max-w-2/3  flex space-x-2 text-right justify-self-end items-center">
            <div className="flex-1 justify-self-end">
                {isShowName && <div className='text-sm font-medium text-black'>{username}</div>}
                <div className='text-sm text-gray-700 bg-(--system-blue)/65 rounded-xl py-2 px-3'>{text}</div>
            </div>
            <img src={avatar} alt="user avatar" className='size-8 rounded-full' />
        </div>
    );
}

const ChatBubbleOther = ({ avatar, username, text, isShowName }) => {
    return (
        <div className="max-w-2/3 flex space-x-2 items-center">
            <img src={avatar} alt="user avatar" className='size-8 rounded-full' />
            <div className="">
                {isShowName && <div className='text-sm font-medium text-gray-900'>{username}</div>}
                <div className='text-sm text-gray-700 bg-white rounded-xl py-2 px-3'>{text}</div>
            </div>
        </div >
    );
}

const ChatBubble = ({ avatar, username, text, type, isShowName }) => {
    return type === 'own'
    ? <ChatBubbleOwn avatar={avatar} username={username} text={text} isShowName={isShowName} />
    : <ChatBubbleOther avatar={avatar} username={username} text={text} isShowName={isShowName} />
}

export default ChatBubble;