import React from 'react';
import { NavLink } from 'react-router-dom'; // Correct import
import { assets } from '../../assets/assets'; // Assuming correct path

function Sidebar() { // Only define, do NOT import Sidebar here
  return (
    <div>
      <NavLink 
        end 
        to='/admin' 
        className={({ isActive }) => (
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer 
          ${isActive ? "bg-blue-700/10 border-r-4 border-blue-700" : ""}`
        )}
      >
        <img src={assets.home_icon} alt='' className='min-w-4 w-5' />
        <p className='hidden md:inline-block'>Dashboard</p>
      </NavLink>
      <NavLink 
       
        to='/admin/addblog' 
        className={({ isActive }) => (
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer 
          ${isActive ? "bg-blue-700/10 border-r-4 border-blue-700" : ""}`
        )}
      >
        <img src={assets.add_icon} alt='' className='min-w-4 w-5' />
        <p className='hidden md:inline-block'>Add Blog</p>
      </NavLink>
      <NavLink 
       
        to='/admin/listblog' 
        className={({ isActive }) => (
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer 
          ${isActive ? "bg-blue-700/10 border-r-4 border-blue-700" : ""}`
        )}
      >
        <img src={assets.list_icon} alt='' className='min-w-4 w-5' />
        <p className='hidden md:inline-block'>Blog Lists</p>
      </NavLink>
      
      <NavLink 
       
        to='/admin/comments' 
        className={({ isActive }) => (
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer 
          ${isActive ? "bg-blue-700/10 border-r-4 border-blue-700" : ""}`
        )}
      >
        <img src={assets.comment_icon} alt='' className='min-w-4 w-5' />
        <p className='hidden md:inline-block'>Comments</p>
      </NavLink>
      
    </div>
  );
}

export default Sidebar;
