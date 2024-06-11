import BackIcon from 'assets/icons/back-icon.svg?react';
import battery from 'assets/images/battery.png';
import health from 'assets/images/health.png';

export const Character = () => {
  return (
    <div className=' h-screen bg-black pt-6 '>
      <div className='mx-8'>
        <BackIcon />

        <div className='w-100 h-[600px] rounded-3xl bg-[#141414] border border-[#313131] mt-10 flex flex-col align-middle px-4 py-3'>
          <div className='flex flex-row justify-between '>
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
          <div className='px-2 h-[247px]  mt-2 border border-[#313131]'></div>
          <div className='grid grid-col-3 gap-3 align-middle h-auto'>
            {/* <div className='h-25 w-20' style={{ backgroundImage: `url(${health})` }}></div> */}
            <div className='h-20 w-20' style={{ backgroundImage: `url(${health})` }}></div>
            <div className='h-20 w-20' style={{ backgroundImage: `url(${battery})` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
