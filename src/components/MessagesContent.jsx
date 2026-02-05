const MessagesContent = () => {
  const conversations = [
    {
      id: 1,
      name: '旅行达人小王',
      avatar: '👨‍✈️',
      lastMessage: '你分享的那个地方真的很棒！',
      time: '2分钟前',
      unread: 3
    },
    {
      id: 2,
      name: '摄影师小李',
      avatar: '📷',
      lastMessage: '下次一起出去拍照吧',
      time: '1小时前',
      unread: 0
    },
    {
      id: 3,
      name: '美食博主小张',
      avatar: '👩‍🍳',
      lastMessage: '那家餐厅确实不错，推荐！',
      time: '3小时前',
      unread: 1
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'like',
      content: '用户点赞了你的分享',
      time: '5分钟前'
    },
    {
      id: 2,
      type: 'comment',
      content: '用户评论了你的动态',
      time: '15分钟前'
    },
    {
      id: 3,
      type: 'follow',
      content: '新用户关注了你',
      time: '1小时前'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">消息中心</h2>
        
        {/* 通知标签页 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">系统通知</h3>
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg"
              >
                <div className="text-blue-500 text-xl">
                  {notification.type === 'like' && '👍'}
                  {notification.type === 'comment' && '💬'}
                  {notification.type === 'follow' && '👥'}
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">{notification.content}</p>
                  <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 私信列表 */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">私信对话</h3>
          <div className="space-y-3">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="text-2xl">{conversation.avatar}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900 truncate">
                      {conversation.name}
                    </h4>
                    <span className="text-xs text-gray-500 whitespace-nowrap">
                      {conversation.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate mt-1">
                    {conversation.lastMessage}
                  </p>
                </div>
                {conversation.unread > 0 && (
                  <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {conversation.unread}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesContent;