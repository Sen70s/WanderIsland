const ProfileContent = () => {
  const userInfo = {
    name: '旅行爱好者',
    avatar: '🌟',
    joinDate: '2024年1月',
    posts: 42,
    followers: 128,
    following: 67
  };

  const menuItems = [
    { icon: '📝', label: '我的发布', path: '/profile/posts' },
    { icon: '❤️', label: '收藏夹', path: '/profile/favorites' },
    { icon: '⚙️', label: '设置', path: '/profile/settings' },
    { icon: '❓', label: '帮助与反馈', path: '/profile/help' }
  ];

  return (
    <div className="space-y-6">
      {/* 用户信息卡片 */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="text-4xl bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
            {userInfo.avatar}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{userInfo.name}</h2>
            <p className="text-gray-600">加入时间: {userInfo.joinDate}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">{userInfo.posts}</div>
            <div className="text-sm text-gray-600">发布</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">{userInfo.followers}</div>
            <div className="text-sm text-gray-600">粉丝</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">{userInfo.following}</div>
            <div className="text-sm text-gray-600">关注</div>
          </div>
        </div>
      </div>

      {/* 功能菜单 */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">个人中心</h3>
        <div className="space-y-2">
          {menuItems.map((item) => (
            <div
              key={item.path}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium text-gray-900">{item.label}</span>
              <span className="ml-auto text-gray-400">›</span>
            </div>
          ))}
        </div>
      </div>

      {/* 最近活动 */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">最近活动</h3>
        <div className="space-y-3">
          {[
            '发布了新的旅行日记',
            '收藏了美食攻略',
            '关注了摄影师小李',
            '点赞了风景照片'
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 text-sm text-gray-600">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <span>{activity}</span>
              <span className="text-gray-400 ml-auto">
                {index === 0 ? '刚刚' : `${index * 2}小时前`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;