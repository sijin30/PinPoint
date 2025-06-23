import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'

function Layout() {

  const navigate=useNavigate()
  const logout=()=>{
            navigate('/')
  }
  return (
    <>
    <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border border-gray-200 '>
      <img src={assets.logo} alt='' className='mb-1.5 w-22 h-10 sm:w-40 cursor-pointer' onClick={()=>navigate('/')}/>
      <button onClick={logout} className='text-sm px-8 py-2 bg-blue-700 text-white rounded-full cursor-pointer'>Logout</button>
    </div>
    <div className='flex h-[calc(100vh-70px)]'>
      <Sidebar />
      <Outlet />

    </div>
    </>
  )
}

export default Layout
