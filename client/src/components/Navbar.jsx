import React from 'react';
import { assets } from '../assets/assets.js';
import { useAppContext } from '../context/AppContext.jsx';


function Navbar() {



    const {navigate,token} = useAppContext();
  return (

    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 bg-white'>
        <img onClick={()=>navigate('/')} src={assets.logo} alt="Logo" className=' h-10 py-1.5   sm:w-44 cursor-pointer' />
        <button className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-blue-700 text-white  px-6 py-3'>
          {token ? 'Dashboard':'Login'}<img onClick={()=>navigate('/admin')} src={assets.arrow} alt="arrow" className='w-3'/>
        </button>
    </div>
  )
}

export default Navbar