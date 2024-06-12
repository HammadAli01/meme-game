import { Progress } from 'antd';

import BackIcon from 'assets/icons/back-icon.svg?react';
import defaultProfile from 'assets/icons/defaultProfile.png';
import StartFight from 'assets/icons/start-fight-button.svg?react';
import mainFightBackground from 'assets/images/main-fight-background.png';
import battery from 'assets/images/simple-battery.png';
import flash from 'assets/images/simple-flash.png';
import health from 'assets/images/simple-health.png';

export const StartingFight = () => {
  return (
    <div className=' h-screen bg-black pt-6 '>
      <div className='mx-8'>
        <BackIcon />
      </div>
      <div className='py-3 flex flex-col items-center'>
        <div className='h-[70px] bg-[#141414] rounded-t-2xl border border-[#313131] flex flex-row justify-between px-3 py-4 w-[410px] '>
          <div className='flex flex-row'>
            <img src={defaultProfile} className='rounded-md h-[37px] w-[37px]'></img>
            <div className=' justify-centerflex flex-col'>
              <div className='flex flex-row justify-between w-[102px] align-middle py-2 ps-2'>
                <span className='text-[#A6A7B0] text-xs '>@asdas</span>
                <span className='text-[#FFF] text-xs - '>100%</span>
              </div>
              <div className='ps-2 -mt-3'>
                <Progress
                  size={{ height: 6 }}
                  percent={30}
                  strokeColor='#BC00FF'
                  showInfo={false}
                  trailColor='#2D2D2C'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-row'>
            <div className=' justify-centerflex flex-col me-2'>
              <div className='flex flex-row justify-between w-[102px] align-middle py-2 '>
                <span className='text-[#FFF] text-xs ps-2 '>100%</span>
                <span className='text-[#A6A7B0] text-xs '>@asdas</span>
              </div>
              <div className='ps-2 -mt-3'>
                <Progress
                  size={{ height: 6 }}
                  percent={30}
                  strokeColor='#f9610f'
                  showInfo={false}
                  style={{
                    direction: 'rtl',
                  }}
                  className='progress-rtl'
                  trailColor='#2D2D2C'
                />
              </div>
            </div>
            <img src={defaultProfile} className='rounded-md h-[37px] w-[37px] '></img>
          </div>
        </div>
        {/* <div className='flex-grow border-t border-gray-300'></div>
        <div className='mx-4'>vs</div>
        <div className='flex-grow border-t border-gray-300'></div> */}
        <div className=' bg-[#141414]  pb-5 rounded-b-3xl border border-[#313131]  h-[450px] w-[410px]'>
          <div className='-mt-5 mx-auto flex items-center justify-center rounded-full bg-[#141414] text-white w-12 h-12 pb-1'>
            VS
          </div>
          <div
            className='mt-13 mx-auto w-[344px] h-[210px] rounded-2xl mt-5 border border-[#313131] '
            style={{ backgroundImage: `url(${mainFightBackground})` }}
          >
            <div className='mx-auto mt-3 text-[10px] text-black w-[120px] h-[20px] px-5 ps-6 py-1 bg-[#FFE49F] rounded-md'>
              Starting In :02
            </div>
          </div>
          <div className='grid grid-cols-3 mt-8 mx-auto w-[344px]'>
            <div className='col-span-1 flex flex-col items-end font-rubik w-[150px]'>
              <span className='text-xs text-[#A6A7B0] mt-2'>Energy</span>
              <Progress
                size={{ height: 5 }}
                percent={60}
                strokeColor='#A0FF06'
                showInfo={false}
                style={{
                  direction: 'rtl',
                }}
                className='progress-rtl -mt-1'
                trailColor='#2D2D2C'
              />

              <span className='text-xs text-[#A6A7B0] mt-2'>Recharge Speed</span>
              <Progress
                size={{ height: 5 }}
                percent={50}
                strokeColor='#A0FF06'
                showInfo={false}
                style={{
                  direction: 'rtl',
                }}
                className='progress-rtl -mt-1'
                trailColor='#2D2D2C'
              />

              <span className='text-xs text-[#A6A7B0] mt-2'>Power</span>
              <Progress
                size={{ height: 5 }}
                percent={40}
                strokeColor='#A0FF06'
                showInfo={false}
                style={{
                  direction: 'rtl',
                }}
                className='progress-rtl -mt-1'
                trailColor='#2D2D2C'
              />
            </div>
            <div className=' ms-1 me-1 '>
              <img className='h-13 mx-auto' src={flash}></img>
              <img className=' mx-auto' src={battery}></img>
              <img className=' mt-3 mx-auto' src={health}></img>
            </div>
            <div className=' flex flex-col -ms-[30%]  font-rubik w-[150px]'>
              <span className='text-xs text-[#A6A7B0] mt-2'>Energy</span>
              <Progress
                className='-mt-1'
                size={{ height: 5 }}
                percent={60}
                strokeColor='#A0FF06'
                showInfo={false}
                trailColor='#2D2D2C'
              />

              <span className='text-xs text-[#A6A7B0] mt-2'>Recharge Speed</span>
              <Progress
                className='-mt-1'
                size={{ height: 5 }}
                percent={50}
                strokeColor='#A0FF06'
                showInfo={false}
                trailColor='#2D2D2C'
              />

              <span className='text-xs text-[#A6A7B0] mt-2'>Power</span>
              <Progress
                className='-mt-1'
                size={{ height: 5 }}
                percent={40}
                strokeColor='#A0FF06'
                showInfo={false}
                trailColor='#2D2D2C'
              />
            </div>
          </div>
        </div>
        <div className='mx-auto mt-2'>
          <StartFight />
        </div>
      </div>
    </div>
  );
};
