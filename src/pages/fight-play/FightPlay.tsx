import { Progress } from 'antd';

import flash from 'assets/images/simple-flash.png';

export const FightPlay = () => {
  return (
    <div className=' h-screen bg-black pt-6 '>
      <div className='flex flex-col '>
        <div className='h-[70px] bg-[#141414] rounded-2xl border border-[#313131] flex flex-row  px-5 py-4 w-[410px] mx-auto justify-between'>
          <div className='justify-center flex flex-col w-[170px]'>
            <div className='flex flex-row py-2 ps-2'>
              <div className='flex flex-row  w-[160px]'>
                <span className='text-[#FFF] text-xs '>546.3</span>
                <img className='-mt-1 h-6 w-6' src={flash}></img>
              </div>
              <span className='text-[#FFF] text-xs font-thin'>95%</span>
            </div>
            <div className='ps-2 -mt-3'>
              <Progress size={{ height: 6 }} percent={30} strokeColor='#BC00FF' showInfo={false} trailColor='#2D2D2C' />
            </div>
          </div>
          <div className='justify-center flex flex-col w-[170px]'>
            <div className='flex flex-row py-2 ps-2'>
              <div className='flex flex-row  w-[160px]'>
                <span className='text-[#FFF] text-xs '>546.3</span>
                <img className='-mt-1 h-6 w-6' src={flash}></img>
              </div>
              <span className='text-[#FFF] text-xs font-thin'>95%</span>
            </div>
            <div className='ps-2 -mt-3'>
              <Progress
                size={{ height: 6 }}
                style={{
                  direction: 'rtl',
                }}
                className='progress-rtl'
                percent={30}
                strokeColor='#BC00FF'
                showInfo={false}
                trailColor='#2D2D2C'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
