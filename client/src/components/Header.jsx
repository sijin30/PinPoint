import React from 'react'
import { assets } from '../assets/assets.js';

function Header() {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className='text-center mt-10 mb-10'>
        <div className='inline-flex items-center justify-center gap-2 px-6 py-1 mb-4 border border-blue-700/40 bg-blue-700/10 rounded-full text-sm text-blue-700 font-light'>
          <p className='flex items-center gap-2'>
            New: AI feature Integrated
            <img src={assets.star_icon} className='w-2.5' alt="star" />
          </p>
        </div>

        <h1 className='text-3xl sm:text-6xl font-semibold text-gray-700 mb-4'>
          Your own <span className='text-blue-700'>Blogging</span><br /> platform
        </h1>

        <p className='text-gray-600 max-w-xl mx-auto'>
          At <span className='text-blue-700 font-semibold'>Pinpoint</span>, we believe in capturing every thought and idea with precision — just like pinpointing the right spot. Our platform empowers you to share your stories, insights, and knowledge effortlessly, making blogging not just easy but impactful.
        </p>

        <form className='flex items-center justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 rounded-lg mt-8 p-2 bg-white shadow-md transition duration-200 hover:shadow-lg overflow-hidden'>
  <input 
    type='text' 
    placeholder='Search for blogs...' required
    className="outline-none w-full pl-4"></input>
  <button 
    type='submit' 
    className='px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition duration-200'>
    Search
  </button>
</form>

      </div>

      <img 
        src={assets.gradientBackground} 
        alt="" 
        className='absolute -top-48 z-[-1] opacity-50' 
      />
    </div>
  )
}

export default Header;
