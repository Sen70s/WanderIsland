const HomeContent = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">欢迎来到 WanderIsland</h2>
        <p className="text-gray-600 mb-6">
          这里是你探索世界的起点，发现更多精彩内容。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="font-semibold text-indigo-800 mb-2">热门推荐</h3>
            <p className="text-indigo-600 text-sm">发现最受欢迎的内容</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">最新动态</h3>
            <p className="text-green-600 text-sm">查看最新发布的内容</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">今日精选</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-200 rounded-lg w-16 h-16 flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">精选内容 #{item}</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    这里是一些精彩的描述内容...
                  </p>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <span>2小时前</span>
                    <span className="mx-2">•</span>
                    <span>1.2k 浏览</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;