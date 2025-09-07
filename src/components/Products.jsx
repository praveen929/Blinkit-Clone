import React from 'react';
import DairyItems from './DairyItems';
import ProdCategory from './ProdCategory';
import TopSeller from './TopSeller';
import RollingPaper from './RollingPaper';
import Sancks from './Snacks';





const Products = () => {
  return (
    <div className="w-full h-full flex flex-col lg:mt-[6rem] items-center overflow-hidden justify-center">
      <div className="w-full max-w-[1280px] h-auto lg:p-0 p-3">
        <img  
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg" 
          alt="" 
          className="lg:w-full w-[996px] lg:h-auto h-[986px]   object-cover lg:block hidden"
        />

        <img className='w-full h-auto object-cover lg:hidden block ' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2160/layout-engine/2024-02/android_feed_mweb-1.png" alt="" />
      </div>
      
      <div className="w-full max-w-[1280px] h-[227px] mx-[16px] lg:flex hidden items-center justify-center">
        <div className="w-[97%] h-full flex items-center gap-5 justify-between overflow-x-scroll scrollbar-hide">
          <img className="w-[335.4px] rounded-xl h-[195px] object-cover" src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2022-06/morning-banner.jpg" alt="" />
          <img className="w-[335.4px] rounded-xl h-[195px] object-cover" src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="" />
          <img className="w-[335.4px] rounded-xl h-[195px] object-cover" src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg" alt="" />
          <img className="w-[335.4px] rounded-xl h-[195px] object-cover" src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg" alt="" />
        </div>
      </div>

      <TopSeller/>
      <ProdCategory/>
      <DairyItems />
      <RollingPaper/>
      <Sancks/>

    </div>
  );
}

export default Products;
