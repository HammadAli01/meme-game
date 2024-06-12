import BackIcon from 'assets/icons/back-icon.svg?react';
import MergeIcon from 'assets/icons/merge-icon.svg?react';
import StartIcon from 'assets/icons/start-icon.svg?react';
import UpgradeIcon from 'assets/icons/upgrade-icon.svg?react';
import battery from 'assets/images/battery.png';
import flash from 'assets/images/flash.png';
import health from 'assets/images/health.png';

export function Character() {
  return (
    <div className=' h-screen bg-black pt-6 '>
      <div className='mx-8'>
        <BackIcon />

        <div className='w-100 h-[600px] rounded-3xl bg-[#141414] border border-[#313131] mt-10 flex flex-col align-middle px-4 py-3'>
          <div className='flex flex-row justify-between mt-2'>
            <span className='text-[#FFF] font-rubik text-[28px] font-medium my-auto ms-2'>PEPE ROOKIE</span>
            <div className='h-[44px] text-[#FFB801] flex justify-center align-middle border border-[#313131]  bg-[#202020] rounded-2xl px-4 py-2'>
              <div>
                <span className=' block text-[10px]'>BUY NEW</span>
                <span className=' block text-[10px]'>CHARACTER</span>
              </div>
              <span className='text-[#FFB801] my-auto ms-3 '>&gt;&gt;</span>
              {/* <img className='h-10 w-10' src={doubleFrontArrow}></img> */}
            </div>
          </div>
          <div className='text-[10px] text-black w-[90px] h-[20px] px-5 ps-6 py-1 bg-[#FFE49F] rounded-md'>
            LEVEL 02
          </div>
          <div className='px-2 h-[247px]  mt-2 border border-[#313131]' />
          <div className='flex flex-col items-center align-middle'>
            <div className='flex flex-row gap-3  h-auto mt-6'>
              <div className='-mt-1 flex flex-col'>
                <div className='h-20 w-20' style={{ backgroundImage: `url(${flash})` }} />
                <span className='ps-5 text-[10px] mx-auto'>10%</span>
              </div>
              <div className=' flex flex-col'>
                <div className='h-20 w-20' style={{ backgroundImage: `url(${health})` }} />
                <span className='ps-5 text-[10px] mx-auto'>10%</span>
              </div>
              <div className=' flex flex-col'>
                <div className='h-20 w-20' style={{ backgroundImage: `url(${battery})` }} />
                <span className='ps-5 text-[10px] mx-auto'>10%</span>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-1 font-rubik mx-auto mt-5 -mb-1'>
            <MergeIcon
              className='cursor-pointer'
              // onClick={() => {
              //   console.log('merge clicked');
              // }}
            />
            <UpgradeIcon className='cursor-pointer' />
          </div>
          <div className='-mb-14 pb-3'>
            <StartIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
