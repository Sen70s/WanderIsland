const DiscoverContent = () => {
  const categories = [
    { name: '旅行攻略', icon: '✈️', color: 'bg-blue-100 text-blue-800' },
    { name: '美食推荐', icon: '🍽️', color: 'bg-red-100 text-red-800' },
    { name: '摄影技巧', icon: '📸', color: 'bg-purple-100 text-purple-800' },
    { name: '文化体验', icon: '🏛️', color: 'bg-yellow-100 text-yellow-800' },
    { name: '户外运动', icon: '🚵', color: 'bg-green-100 text-green-800' },
    { name: '艺术创作', icon: '🎨', color: 'bg-pink-100 text-pink-800' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">发现精彩世界</h2>
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="搜索你感兴趣的内容..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <div className="absolute left-3 top-3.5 text-gray-400">🔍</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">探索分类</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`${category.color} p-4 rounded-lg cursor-pointer hover:opacity-90 transition-opacity`}
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <div className="font-medium">{category.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">热门话题</h3>
        <div className="space-y-3">
          {['秋日旅行推荐', '小众目的地探索', '旅行摄影技巧', '当地美食指南'].map(
            (topic, index) => (
              <div
                key={topic}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <span className="font-medium text-gray-900">#{topic}</span>
                <span className="text-sm text-gray-500">热度: {100 - index * 15}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscoverContent;