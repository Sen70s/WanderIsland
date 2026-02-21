import { Outlet, useNavigate, useParams } from 'react-router-dom';
import user_avatar from '@/images/avatar/user.webp';
import { LucideMessageCircleMore } from 'lucide-react';
import { LucideUser } from 'lucide-react';
import { LucideTelescope } from 'lucide-react';
import { LucideSettings } from 'lucide-react';
import { LucideBrain } from 'lucide-react';
import { LucideWholeWord } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const SideBarItems = ({ icon, state, onClick }) => {
  return (
    <div className={`size-11 min-h-11 rounded-lg hover:bg-(--system-color-selected)/45
      flex items-center justify-center transition-colors duration-300 cursor-pointer
      ${state === 'normal'
        ? ' text-black/50'
        : state === 'selected'
          ? 'text-(--system-color-selected-icon) bg-(--system-color-selected-icon)/10'
          : 'hover:bg-transparent text-(--system-color-disabled) cursor-not-allowed'
      } `}
      onClick={state !== 'disabled' ? onClick : undefined}
    >
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

  const [showUserFloatBox, setShowUserFloatBox] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  return (
    <div className="h-screen w-screen bg-(--system-color-background) flex flex-col items-center p-1 pt-0">
      {/* 顶部状态栏占位符 */}
      <div className='h-(--system-height-bar-action) w-full bg-(--system-color-bar-action-bg) sticky top-0 left-0 right-0 z-20 flex
       items-center justify-between'>

        <div className='flex space-x-2 items-center pl-1'>
          {/* <img src={logo_white} alt="Logo" className='size-6 rounded-md ' /> */}
          <a className='text-2xl font-bold text-black font-logo'>Wander Island</a>
        </div>

        {
          showAlert && (
            <div className='bg-red-100 border border-red-400 text-red-700 px-2 py-0.5 rounded-full'>
              {alertMessage}
            </div>
          )
        }

        <div className='flex space-x-1 items-center' onClick={() => setShowUserFloatBox(!showUserFloatBox)}>
          <a className='text-lg font-medium text-black'>Nathan</a>
          <img src={user_avatar} alt="user avatar" className='size-7 rounded-full' />
        </div>

        {
          // 点击空白处也可以关闭浮动框
          showUserFloatBox && (
            <div className='absolute top-12 right-4 flex flex-col text-black bg-white border border-gray-200 rounded-md shadow-lg p-2 z-30'>
              <div className='flex'>
                <img src={user_avatar} alt="user avatar" className='size-8 rounded-full' />
                <div className='flex flex-col'>
                  <a>Nathan</a>
                  <a>ID: 123456</a>
                </div>
              </div>
              <button onClick={handleLogout} className='block w-full text-left px-2 py-1 hover:bg-gray-100 rounded'>Profile</button>
              <button onClick={handleLogout} className='block w-full text-left px-2 py-1 hover:bg-gray-100 rounded text-red-400'>Logout</button>
            </div>
          )
        }

      </div>

      <div className='h-full w-full bg-(--system-white) rounded-md flex overflow-hidden'>

        {/* 左侧功能导航栏 */}
        <div className='h-full w-(--system-width-bar-side) border-r border-gray-100 flex flex-col items-center py-2 space-y-2 float-left justify-between'>
          <SideBarItems state='selected' icon={<LucideMessageCircleMore className="size-6" />} />

          <SideBarItems
            state='normal'
            icon={<LucideUser className="size-6" />}
            onClick={() => {
              setAlertMessage('通讯录暂未启用');
              setShowAlert(true);
              setTimeout(() => setShowAlert(false), 3000);
            }}
          />

          <SideBarItems
            state='normal'
            icon={<LucideTelescope className="size-6" />}
            onClick={() => {
              setAlertMessage('AI朋友圈暂未启用');
              setShowAlert(true);
              setTimeout(() => setShowAlert(false), 3000);
            }}
          />

          <SideBarItems
            state='normal'
            icon={<LucideBrain className="size-6" />}
            onClick={() => {
              setAlertMessage('AI记忆功能暂未启用');
              setShowAlert(true);
              setTimeout(() => setShowAlert(false), 3000);
            }}
          />

          <div className='h-full'></div>

          <div className='justify-self-end flex flex-col space-y-2'>
            <SideBarItems
              state='normal'
              icon={<LucideWholeWord className="size-6" />}
              onClick={() => {
                setAlertMessage('您暂时还不用查看自己的Token消耗');
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 3000);
              }}
            />
            
            <SideBarItems state='normal' icon={<LucideSettings className="size-6" />} />
          </div>
        </div>

        <Outlet />

      </div>

    </div>

  );

};

export default MainLayout;