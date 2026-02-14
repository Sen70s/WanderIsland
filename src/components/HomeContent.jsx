import { LucideChevronRight } from "lucide-react";
import { Outlet, useNavigate } from 'react-router-dom';

const HomeContent = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      {[...Array(100).keys()].map((item) => (
            <div className="flex justify-between items-center px-5 py-4 space-x-3 border-b border-gray-200"
            key={item}
             onClick={()=>navigate(`/chat/${item}`)}>
              <img src="https://p26-passport.byteacctimg.com/img/user-avatar/78a7017b7166fccc58ec23f717d9a96d~50x50.awebp"
                alt="placeholder" className="size-14 rounded-2xl" />
              <div className="flex-1 flex flex-col space-y-1">
                <div className="flex w-full justify-between items-center">
                  <h3 className="text-lg font-black text-black">用户名{item}</h3>
                  <h3 className="text-md font-semibold text-gray-400">上午 10:51 </h3>
                </div>
                <p className="text-black/30 text-md font-semibold">记得照顾好自己</p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default HomeContent;