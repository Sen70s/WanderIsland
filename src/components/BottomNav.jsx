import { LucideMessageCircleHeart,LucideCircleUser, LucideGoal, LucideSearch  } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/home', label: '聊天',icon: <LucideMessageCircleHeart className="size-7 mx-auto" strokeWidth={2} /> }, // house icons
    { path: '/discover', label: '发现',icon: <LucideGoal className="size-7 mx-auto" strokeWidth={2} /> }, // magnifying glass icons
    { path: '/profile', label: '我的',icon: <LucideCircleUser className="size-7 mx-auto" strokeWidth={2} /> }  // person icons
  ];

  return (
    <nav className="fixed flex overflow-clip bottom-0 left-0 right-0 z-10 items-center space-x-6 px-8 pb-2 bg-transparent">

      {/* navbar */}
      <div className="relative flex w-full flex-2 p-2 liquid-glass-card liquid-glass-full 
      justify-between items-center inset-0 bg-white/90 backdrop-blur-3xl border-t rounded-full border-gray-200/50">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex rounded-full items-center justify-center w-22 h-13 transition-all duration-300 ease-out 
                ${isActive
                  ? 'bg-gray-400/10 scale-105'
                  : 'hover:bg-gray-100/50 active:scale-95'
                }`}
            >

              {/* 标签文字 */}
              <span className={`text-xs text-center font-bold transition-all duration-300 ease-out 
                 ${isActive
                  ? 'text-(--system-blue)'
                  : 'text-gray-500 group-hover:text-gray-700'
                }`}>
                {item.icon}
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* 液态按钮 */}
      <button className="liquid-glass-full liquid-glass-btn size-16 rounded-full">
        <span className="text-2xl font-bold text-black transition-all duration-300">
          <LucideSearch className='size-7 mx-auto' strokeWidth={2} />
        </span>
      </button>


    </nav>
  );
};

export default BottomNav;