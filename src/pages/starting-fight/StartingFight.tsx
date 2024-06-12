import { Progress } from 'antd';

import BackIcon from 'assets/icons/back-icon.svg?react';
import defaultProfile from 'assets/icons/defaultProfile.png';

export const StartingFight = () => {
  return (
    <div className=' h-screen bg-black pt-6 '>
      <div className='mx-8'>
        <BackIcon />
      </div>
      <div className='py-3 flex flex-col items-center'>
        <div className='h-[70px] bg-[#141414] border border-[#313131] flex flex-row justify-between px-5'>
          <div className='flex flex-row'>
            <img src={defaultProfile} className='rounded-md h-10 w-10'></img>
            <div className='my-auto flex flex-col'>
              <div className='flex flex-row justify-between'>
                <span>@asdas</span>
                <span>100%</span>
              </div>
              <Progress percent={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
