import React, { useState } from 'react'
import SearchNav from './SearchNav';
import { Visiblity } from '../../context/contextToggle';



const Search = () => {
  const [visible, setvisible] = useState(false);

  return (
    <Visiblity.Provider value={{visible ,setvisible}}>

    <div className={visible ? "max-h-screen overflow-hidden":""}>
      <div className='overflow-x-hidden relative  bg-white' >
          <SearchNav />
          <div className='w-full h-screen bg-white'></div>
        
        
      </div>
      
  </div>
  </Visiblity.Provider>
  )
}

export default Search;