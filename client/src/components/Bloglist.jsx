import React, { useState } from 'react';
import { blog_data, blogCategories } from '../assets/assets';
import { motion } from "framer-motion";

import Blogcard from './Blogcard';

function Bloglist() {
  const [menu, setMenu] = useState('All');

  return (
    <div>
      {/* Category Buttons */}
      <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
        {blogCategories.map((item) => (
          <div key={item} className='relative'>
            <button
              onClick={() => setMenu(item)}
              className={`cursor-pointer text-gray-400 transition duration-200 ${menu === item ? 'text-white px-3 pt-0.5' : ''}`}
            >
              {item}
              {menu === item && (
                <motion.div
                  layoutId="activeCategory"
                  className='absolute left-0 right-0 top-0 h-7 z-[-1] bg-blue-700 rounded-full'
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          </div>
        ))}
      </div>

      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-8 sm:mx-16 xl:mx-24'>
        {blog_data
          .filter(blog => menu === 'All' || blog.category === menu)
          .map((blog) => (
            <Blogcard key={blog._id} Blog={blog} />
          ))}
      </div>
    </div>
  )
}

export default Bloglist;
