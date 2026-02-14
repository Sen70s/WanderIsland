import { Outlet, useNavigate } from 'react-router-dom';
import user_avatar from '@/images/avatar/user.webp';
import { LucideMessageCircleMore } from 'lucide-react';
import { LucideUser } from 'lucide-react';
import { LucideTelescope } from 'lucide-react';
import { LucideSettings } from 'lucide-react';
import { LucideBrain } from 'lucide-react';
import { LucideWholeWord } from 'lucide-react';

const SideBarItems = ({ icon }) => {
  return (
    <div className='bg-transparent hover:bg-(--system-color-selected)/45 size-11 min-h-11 rounded-lg
     text-black/70 flex items-center justify-center transition-colors duration-300 cursor-pointer'>
      {icon}
    </div>
  );
}
const MainLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };


  return (
    <div className="h-screen w-screen bg-(--system-color-background) flex flex-col items-center p-1 pt-0">
      {/* 顶部状态栏占位符 */}
      <div className='h-(--system-height-bar-action) w-full bg-(--system-color-bar-action-bg) sticky top-0 left-0 right-0 z-20 flex
       items-center justify-between'>
        <div className='flex space-x-2 items-center pl-1'>
          {/* <img src={logo_white} alt="Logo" className='size-6 rounded-md ' /> */}
          <a className='text-2xl font-bold text-black font-logo'>Wander Island</a>
        </div>

        <div className='flex space-x-1 items-center'>
          <a className='text-lg font-medium text-black'>Nathan</a>
          <img src={user_avatar} alt="user avatar" className='size-7 rounded-full' />
        </div>
      </div>

      <div className='h-full w-full bg-(--system-white) rounded-md flex overflow-hidden'>

        {/* 左侧功能导航栏 */}
        <div className='h-full w-(--system-width-bar-side) border-r border-gray-100 flex flex-col items-center py-2 space-y-2 float-left justify-between'>
          <SideBarItems icon={<LucideMessageCircleMore className="size-6" />} />
          <SideBarItems icon={<LucideUser className="size-6" />} />
          <SideBarItems icon={<LucideTelescope className="size-6" />} />
          <SideBarItems icon={<LucideBrain className="size-6" />} />

          <div className='h-full'></div>

          <div className='justify-self-end flex flex-col space-y-2'>
            <SideBarItems icon={<LucideWholeWord className="size-6" />} />
            <SideBarItems icon={<LucideSettings className="size-6" />} />
          </div>
        </div>

        <Outlet />

      </div>

    </div>

  );

};

export default MainLayout;