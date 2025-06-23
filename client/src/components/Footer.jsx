import React from 'react';
import { assets } from '../assets/assets';

function Footer() {
  return (
    <div className='bg-gray-50 py-10 px-5 sm:px-20 xl:px-32 text-gray-600'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
        {/* Brand + Description */}
        <div>
          <div className='flex items-center gap-2 mb-4'>
            <img src={assets.logo} alt='Pinpoint logo' className='w-20 h-20 justify-center' />
            
          </div>
          <p className='text-sm'>Capture your thoughts precisely. Share ideas, insights, and inspiration easily with Pinpoint blogging platform.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='font-semibold text-gray-900 mb-3'>Quick Links</h3>
          <ul className='space-y-2 text-sm'>
            <li><a href="#" className='hover:text-blue-700'>Home</a></li>
            <li><a href="#" className='hover:text-blue-700'>Explore Blogs</a></li>
            <li><a href="#" className='hover:text-blue-700'>About Us</a></li>
            <li><a href="#" className='hover:text-blue-700'>Contact</a></li>
          </ul>
        </div>

        {/* Need Help? */}
        <div>
          <h3 className='font-semibold text-gray-900 mb-3'>Need Help?</h3>
          <ul className='space-y-2 text-sm'>
            <li><a href="#" className='hover:text-blue-700'>Support</a></li>
            <li><a href="#" className='hover:text-blue-700'>Privacy Policy</a></li>
            <li><a href="#" className='hover:text-blue-700'>Terms of Service</a></li>
            <li><a href="#" className='hover:text-blue-700'>FAQs</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className='font-semibold text-gray-900 mb-3'>Follow Us</h3>
          <ul className='space-y-2 text-sm'>
            <li><a href="#" className='hover:text-blue-700'>Instagram</a></li>
            <li><a href="#" className='hover:text-blue-700'>Twitter</a></li>
            <li><a href="#" className='hover:text-blue-700'>Facebook</a></li>
            <li><a href="#" className='hover:text-blue-700'>YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className='mt-10 text-center text-xs text-gray-400'>
        &copy; {new Date().getFullYear()} Pinpoint - All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
