import React, { useContext } from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { Visiblity } from '../../context/contextToggle';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';


const SearchNav = () => {



  const { visible, setvisible } = useContext(Visiblity)
  


 
  
    
  
  function handleCartToggal() {
      setvisible(prev => !prev)
      console.log("Clicked");
      
  }

  function handleVisibility () {
    setvisible(prev => !prev)
    
  }



  return (

    <>
    {/* cart section */}
    <div className="w-full lg:flex hidden justify-end">
      {/* Backdrop */}
      <div
        onClick={handleVisibility}
        className={`w-full h-full absolute z-40 bg-black/70 ${visible ? 'block' : 'hidden'}`}
      ></div>

      {/* Cart Sidebar */}
      <div
        className={`bg-[#f5f7fd] lg:w-1/4 border-l shadow-2xl h-full absolute z-50 transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ right: 0 }}
      >
        <div className="w-full h-[60px] bg-white flex items-center px-4 justify-between">
          <h1 className="text-[15px] tracking-wide font-bold">My Cart</h1>
          <RxCross2
            onClick={handleVisibility}
            className="text-lg mr-1 font-bold cursor-pointer"
          />
        </div>

        {/* Empty Cart Content */}
        <div className="w-full flex items-center justify-center">
          <div className="w-full h-auto rounded-md bg-white m-3 p-5 flex flex-col items-center justify-center gap-4">
            <img
              className="w-[43%]"
              src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png"
              alt="Empty Cart"
            />
            <div className="w-full flex flex-col items-center gap-1 justify-center">
              <h1 className="text-lg font-bold tracking-wide">
                You don't have any items in your cart
              </h1>
              <p className="text-sm tracking-wide text-[#999999] font-[400]">
                Your favourite items are just a click away
              </p>
            </div>
            <button className="w-[40%] text-[13px] text-white bg-[#0c831f] px-[0.8rem] py-[0.5rem] mt-1 mb-8 rounded-lg">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
   
{/* address toggle */}
      

      {/* main nav */}
    
    <div className=' w-screen lg:h-[86px]  lg:fixed h-auto  top-[0px] z-30 bg-white lg:border-b flex  flex-col items-center lg:justify-between lg:m-0  gap-3 lg:px-[1.70rem] '>
      <div className='lg:w-full w-full h-full  gap-[1.90rem]  flex items-center justify-between'>

          <div className='lg:w-[10%]       w-full  h-full flex items-   '>
          <Link to="/">
              <div className='w-full  h-full overflow-hidden lg:flex hidden items-center justify-start mr-7 '>
                  <svg style={{alignItems:"start"}} width="auto" height="30" viewBox="0 0 114 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3342 7.186C16.2619 7.186 17.9832 7.66644 19.4978 8.62732C21.0262 9.57447 22.2242 10.9197 23.0917 12.663C23.9316 14.3377 24.3516 16.3075 24.3516 18.5724C24.3516 20.7687 23.9316 22.7316 23.0917 24.4612C22.2517 26.1908 21.0675 27.5429 19.5391 28.5175C17.9969 29.5058 16.2619 30 14.3342 30C12.9297 30 11.6078 29.7117 10.3685 29.1352C9.12927 28.5587 8.06901 27.7488 7.18775 26.7056V29.4852H0V0H7.18775V10.4598C8.06901 9.41661 9.12927 8.61359 10.3685 8.05079C11.6078 7.47426 12.9297 7.186 14.3342 7.186ZM12.1861 24.0494C13.2051 24.0494 14.1139 23.8161 14.9125 23.3493C15.7112 22.8826 16.3377 22.2306 16.7921 21.3933C17.2465 20.5697 17.4737 19.6294 17.4737 18.5724C17.4737 17.5429 17.2465 16.6095 16.7921 15.7721C16.3377 14.9348 15.7112 14.2828 14.9125 13.8161C14.1139 13.3493 13.2051 13.116 12.1861 13.116C11.2223 13.116 10.3617 13.3493 9.60432 13.8161C8.84699 14.269 8.2549 14.9073 7.82804 15.731C7.40118 16.5683 7.18775 17.5154 7.18775 18.5724C7.18775 19.6294 7.40118 20.5765 7.82804 21.4139C8.2549 22.2375 8.84699 22.8826 9.60432 23.3493C10.3617 23.8161 11.2223 24.0494 12.1861 24.0494Z" fill="#F8CB46"></path><path d="M25.3356 29.4852V0H32.5233V29.4852H25.3356Z" fill="#F8CB46"></path><path d="M34.5607 29.4852V7.68016H41.7071V29.4852H34.5607Z" fill="#F8CB46"></path><path d="M57.2319 7.186C58.7603 7.186 60.1372 7.5429 61.3627 8.25669C62.5882 8.95676 63.5521 9.94509 64.2544 11.2217C64.9291 12.512 65.2664 13.9739 65.2664 15.6074V29.4852H58.4092V17.2135C58.4092 16.4173 58.2508 15.7104 57.9341 15.0927C57.6312 14.4612 57.1974 13.9739 56.6329 13.6307C56.0821 13.2876 55.4349 13.116 54.6914 13.116C53.9891 13.116 53.3419 13.2876 52.7498 13.6307C52.1577 13.9602 51.6965 14.4132 51.366 14.9897C51.0218 15.5388 50.8496 16.1839 50.8496 16.9252L50.8083 29.4852H43.6619V7.68016H50.8083V10.1716C51.483 9.23816 52.3849 8.51064 53.5141 7.98902C54.6432 7.45367 55.8824 7.186 57.2319 7.186Z" fill="#F8CB46"></path><path d="M81.0597 17.2135L89.1769 29.4852H81.0597L76.3091 21.7639L74.1198 24.2965V29.4852H66.932V0H74.1198V16.2869L81.0184 7.68016H89.1356L81.0597 17.2135Z" fill="#F8CB46"></path><path d="M34.5569 0.00232667H41.7267V5.59207H34.5569V0.00232667Z" fill="#F8CB46"></path><path d="M90.3176 29.4198V7.61479H97.464V29.4198H90.3176Z" fill="#54B226"></path><path d="M112.575 23.2634L114 27.855C113.353 28.4727 112.534 28.9737 111.542 29.3581C110.564 29.7424 109.607 29.9346 108.671 29.9346C107.322 29.9346 106.117 29.6395 105.057 29.0492C103.996 28.4452 103.17 27.6079 102.578 26.5372C101.986 25.494 101.69 24.2929 101.69 22.9339V13.3183H98.819V7.61479H101.69V0.00241089H108.547V7.61479H113.071V13.3183H108.547V21.6161C108.547 22.3162 108.733 22.8859 109.105 23.3251C109.477 23.7644 109.952 23.984 110.53 23.984C110.943 23.984 111.329 23.9223 111.687 23.7987C112.045 23.6752 112.341 23.4967 112.575 23.2634Z" fill="#54B226"></path><path d="M90.2609 0.00241089H97.4307V5.59215H90.2609V0.00241089Z" fill="#54B226"></path></svg>
              </div>
              </Link>
            <div className='w-[1px] h-full lg:flex hidden bg-[#f2f2f2]  '></div>
            
              
          </div>

      
          
         
                  
                  <div className='w-[80%] h-full  flex   items-center justify-start'>
                      <div className='w-[99%] border border-[#ddd] h-[50%] items-center rounded-lg flex'>
                      <CiSearch  className='w-[4%] text-2xl '/>
                          <input placeholder="Search for atta dal and more" type="text"  className='w-[96%] border-none text-[#ddd] outline-none text-sm bg-transparent ' />
                          </div>
                  </div>
     
      


        <div className='lg:w-[8.1%]   h-full  items-center flex   justify-end'>
          
          

          <div className='w-full   h-full  items-center lg:flex  hidden justify-end'>
          
              
              <button onClick={handleCartToggal} className=' w-full   h-[52px] flex pr-2 gap-1 items-center  rounded-[8px] mr-1 font-bold justify-around text-[14.8px] p-1 text-nowrap text-white bg-[#0c831f]'>
              <HiOutlineShoppingCart className='w-[30%] ml-1  hover:animate-waving-hand text-[25px]' />My Cart</button>
            
              </div>

      </div>

      </div>

      <a className='w-full cursor-text lg:hidden flex ' href="/s/">
          <div className='lg:w-[697.2px] w-full h-full  flex  items-center justify-center'>
              <div className='w-full h-[48px] border flex flex-row border-gray-200 rounded-xl bg-gray-50'>
                  <div className='w-[20px] h-[20px] mx-3 flex justify-center items-center text-[20px] text-[#1f1f1f] font-[CustomFont] m-auto'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search" viewBox="0 0 24 24">
  <circle cx="11" cy="11" r="8"></circle>
  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
</svg>

                  </div>

                 

              </div>
              </div>
      </a>
      
      </div>
      

      </>
  )
}

export default SearchNav

