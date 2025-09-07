import React, { useState } from 'react'
import { Visiblity } from '../context/contextToggle';
import Nav from './Nav';
import TopBanner from './TopBanner';
import Products from './Products';
import Footer from './Footer';


const MainHome = () => {
  const [visible, setvisible] = useState(false);

  return (
    <Visiblity.Provider value={{visible ,setvisible}}>

    <div className={visible ? "max-h-screen overflow-hidden ":""}>
      <div className='overflow-x-hidden relative  bg-white' >
        <TopBanner/>
        <Nav/>
          <Products />
          <Footer/>
        
      </div>
      
  </div>
  </Visiblity.Provider>
  )
}

export default MainHome