import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';

const MainLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24"> {/* 增加底部padding以适应iOS风格导航栏 */}
      {/* 顶部导航栏 */}
      <nav className="bg-white/90 backdrop-blur-xl shadow-sm sticky top-0 z-10 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                WanderIsland
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                退出
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 内容区域 */}
      <main className="pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          {children}
        </div>
      </main>

      {/* 底部导航栏 */}
      <BottomNav />
    </div>
  );
};

export default MainLayout;