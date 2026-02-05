import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/home', label: '首页', icon: '🏠', activeIcon: '🏠' }, // house icons
    { path: '/discover', label: '发现', icon: '􀊫', activeIcon: '􀊭' }, // magnifying glass icons
    { path: '/messages', label: '消息', icon: '􀌤', activeIcon: '􀌦' }, // message icons
    { path: '/profile', label: '我的', icon: '􀉩', activeIcon: '􀉪' }  // person icons
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10">
      {/* iOS风格的毛玻璃背景 */}
      <div className="absolute inset-0 m-2 bg-white/80 backdrop-blur-xl border-t rounded-full border-gray-200/50"></div>
      
      {/* 主要导航容器 */}
      <div className="relative flex justify-around items-center h-18 p-2 w-full">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex rounded-full items-center justify-center h-full w-16 transition-all duration-300 ease-out ${
                isActive 
                  ? 'bg-indigo-50 scale-105' 
                  : 'hover:bg-gray-100/50 active:scale-95'
              }`}
            >
              
              {/* 标签文字 */}
              <span className={`text-xs font-medium transition-all duration-300 ${
                isActive 
                  ? 'text-indigo-600 font-semibold' 
                  : 'text-gray-500 group-hover:text-gray-700'
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
      
      {/* iOS风格的安全区域填充 */}
      <div className="h-2 bg-transparent"></div>
    </nav>
  );
};

export default BottomNav;