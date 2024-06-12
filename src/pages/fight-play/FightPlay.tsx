import { Progress } from 'antd';

import bearFightImage from 'assets/icons/bear-fight-image.png';
import defaultProfile from 'assets/icons/defaultProfile.png';
import flash from 'assets/images/simple-flash.png';

export const FightPlay = () => {
  return (
    <div className=' h-screen bg-black pt-6 '>
      <div className='flex flex-col '>
        <div className='h-[70px] bg-[#141414] rounded-2xl border border-[#313131] flex px-5 py-3 w-[410px] mx-auto justify-between'>
          {/* First column */}
          <div className='flex flex-col justify-center w-[160px] -mt-2'>
            <div className='flex items-center py-1'>
              <span className='text-[#FFF] text-xs'>546.3</span>
              <img className='-mt-1 h-6 w-6 ml-2' src={flash} alt='flash' />
              <span className='text-[#FFF] text-xs font-thin ml-auto'>95%</span>
            </div>
            <div className='-mt-3'>
              <Progress size={{ height: 6 }} percent={30} strokeColor='#BC00FF' showInfo={false} trailColor='#2D2D2C' />
            </div>
          </div>

          {/* Second column */}
          <div className='flex flex-col justify-center w-[160px] -mt-2'>
            <div className='flex items-center py-1'>
              <span className='text-[#FFF] text-xs font-thin'>95%</span>
              <div className='flex items-center ml-auto'>
                <img className='-mt-1 h-6 w-6' src={flash} alt='flash' />
                <span className='text-[#FFF] text-xs ml-2'>546.3</span>
              </div>
            </div>
            <div className='-mt-3'>
              <Progress
                size={{ height: 6 }}
                style={{ direction: 'rtl' }}
                className='progress-rtl'
                percent={30}
                strokeColor='#BC00FF'
                showInfo={false}
                trailColor='#2D2D2C'
              />
            </div>
          </div>
        </div>
        <div
          className='-mt-6 ms-[44%] flex items-center justify-center rounded-full bg-[#141414] text-white w-15 h-15 border-2 border-[#313131]'
          style={{
            outline: '3px solid black',
          }}
        >
          01:12
        </div>
        <div className='relative h-[385px] mt-20 w-full'>
          <div
            className='absolute inset-0 bg-cover bg-center rounded-xl me-12'
            style={{ backgroundImage: `url(${bearFightImage})` }}
          ></div>
        </div>

        <div
          className='mt-10 -mb-6 ms-[44%] flex items-center justify-center rounded-full bg-[#141414] text-[#FFB801] text-[27px] w-15 h-15 border-2 border-[#313131]'
          style={{
            outline: '3px solid black',
            zIndex: 3,
          }}
        >
          VS
        </div>
        <div
          className='h-[70px] bg-[#141414] rounded-2xl border border-[#313131] flex flex-row px-5 py-3 w-[410px] mx-auto justify-between'
          style={{ zIndex: 1 }}
        >
          <div className='flex flex-row justify-between w-[100px]'>
            <img src={defaultProfile} className='rounded-md h-[37px] w-[37px] my-auto' alt='profile' />
            <span className='text-[#A6A7B0] my-auto self-end text-xs'>@asdas</span>
          </div>
          <div className='flex flex-row justify-between w-[100px]'>
            <span className='text-[#A6A7B0] my-auto self-end text-xs'>@asdas</span>
            <img src={defaultProfile} className='rounded-md h-[37px] w-[37px] my-auto' alt='profile' />
          </div>
        </div>
      </div>
    </div>
  );
};
