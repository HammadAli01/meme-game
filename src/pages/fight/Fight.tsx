import { Progress } from 'antd';

export const Fight = () => {
  return (
    <div className=' h-screen bg-black pt-6 '>
      <div className='flex flex-col '>
        <div className='h-[70px] bg-[#141414] rounded-t-2xl border border-[#313131] flex flex-row justify-between px-3 py-4 w-[410px] '>
          <div className='flex flex-row'>
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
          </div>
        </div>
      </div>
    </div>
  );
};
