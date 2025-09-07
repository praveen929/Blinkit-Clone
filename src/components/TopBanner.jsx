import React from 'react'

const TopBanner = () => {
  return (
      <div className='w-full h-[60px] flex items-center lg:hidden  justify-between px-3 py-10 bg-[#318616]'>
          
          <div className='w-auto h-[60px] flex flex-row items-center gap-3 justify-between'>
          
              <img className='w-[60px] h-[60px] rounded-[1.2rem]  object-cover  overflow-hidden' src="https://blinkit.com/8a3fd859084bd0f463dc.png" alt="" />

              <div className='w-auto h-full flex flex-col  items-start justify-center'>
                  <h1 className='text-[19px] font-bold  text-white'>Get the app</h1>
                  <p className='text-[13px] leading-4  font-bold text-white' >for better experience and <br />exclusive features</p>
              </div>
              
          </div>
          <div className='w-auto h-[60px] flex items-center justify-center'>
              
             <button className='text-[12px] leading-4 text-white px-[0.30rem] py-2 bg-[#1f1f1f] rounded-md'>Use App</button>
              
          </div>
          
    </div>
  )
}

export default TopBanner