import coin from 'assets/icons/coin.png';
import defaultProfile from 'assets/icons/defaultProfile.png';
import startFight from 'assets/icons/fight-start.png';
import PlusIcon from 'assets/icons/plus-icon.svg?react';
import SemiColonIcon from 'assets/icons/semicolon-icon.svg?react';
import cameraIcon from 'assets/icons/solar_wallet-bold.png';
import Clock from 'assets/icons/tabler_clock.svg?react';
import mlCoin from 'assets/images/mlCoin.png';

export function MainMenu() {
  return (
    <div className=' h-screen bg-black pt-6'>
      <div className='mx-8  d-flex flex-col '>
        <div className='flex justify-between'>
          <div className='flex flex-row '>
            <img src={defaultProfile} className='rounded-md h-10 w-10' alt='profile-img' />
            <h6 className='ms-5 my-auto text-white font-rubik text-sm'>Chris Max</h6>
          </div>
          <div
            className='bg-[#A0FF06] h-[44px] w-[49px] flex-shrink-0 rounded-2xl shadow-2xl border border-green-400 bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${cameraIcon})`, backgroundSize: '24px' }}
          />
        </div>
        <div className='grid grid-cols-2 gap-3 mt-7'>
          <div className='bg-[#141414] h-[88px] flex-shrink-0 rounded-2xl border border-[#373737] flex-col ps-5'>
            <div className='flex justify-end mt-2 mr-2 cursor-pointer '>
              <PlusIcon />
            </div>
            <div className=' font-rubik text-[#A9A9B3]'>BALANCE</div>
            <div className='flex font-rubik text-[#A9A9B3]'>
              <img src={coin} className='w-[30px] h-[30px] -ms-1' alt='coin-img' />
              <div className='text-[#A0FF06] uppercase leading-7 font-semibold'>123,342,23</div>
            </div>
          </div>
          <div className='bg-[#141414] h-[88px] flex-shrink-0 rounded-2xl border border-[#373737] flex-col ps-5'>
            <div className='flex justify-end mt-2 mr-2 cursor-pointer '>
              <SemiColonIcon />
            </div>
            <div className=' font-rubik text-[#A9A9B3]'>DAILY INCOME</div>
            <div className='flex font-rubik text-[#A9A9B3]'>
              <div className='text-[#A0FF06] uppercase leading-7 font-semibold'>108,000</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col  mt-4 w-[100%] h-[230px] bg-[#141414] rounded-2xl border border-[#373737] p-5 '>
          <div className='w-[25%] flex justify-start items-center rounded-xl bg-[#191919] border border-[#373737] p-1 ps-2 font-thin '>
            <Clock height={18} width={18} />
            <span className='my-auto ms-1 text-[#FFF] text-center font-extralight text-xs'>12:23:45</span>
          </div>
          <div className='flex flex-row justify-between mt-2'>
            <div>
              <h1 className='text-[#FFF] font-rubik text-2xl font-semibold uppercase'>TOTAL TIME</h1>
              <h1 className='-mt-1 text-[#FFF] font-rubik text-2xl font-semibold uppercase'>
                SPEND <span className='text-[#A0FF06]'>REWARD</span>
              </h1>
            </div>
            <img className='-mt-10 h-[150px] w-[150px]' src={mlCoin} alt='profile-img' />
          </div>
          <div className='text-[#A6A7B0] text-[14px] -mt-10'>
            Spend more time on the Battle Screen and wait for counter to stop Ticking.
          </div>
          <button
            className='h-[54px] w-[100%]  mt-2 bg-[#A0FF06] rounded-2xl text-black  py-[16px] text-sm'
            type='button'
          >
            CLAIM
          </button>
        </div>
        <div
          className='mt-4 w-[100%] h-[151px] bg-cover bg-center bg-no-repeat  rounded-2xl flex   flex-col justify-center items-center border-t border-b border-[#373737]'
          style={{ backgroundImage: `url(${startFight})` }}
        >
          <span className='font-rubik text-center font-light   text-[#FFB801] text-[16px]'>Start</span>
          <span className='text-[#FFF] text-center font-rubik  text-[47px]'>FIGHT</span>
          <button
            className='text-[#FFF] text-center font-rubik text-xs font-medium uppercase rounded-md border border-[#FFF] px-[23px] py-[5px]'
            type='button'
          >
            PLAY
          </button>
        </div>
      </div>
    </div>
  );
}
