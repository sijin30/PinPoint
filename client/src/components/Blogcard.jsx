import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blogcard = ({ Blog }) => {
  const { title, description, category, image, _id } = Blog;
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/blog/${_id}`)} 
      className='w-full p-4 cursor-pointer hover:scale-105 transition-transform duration-300'
    >
      <img src={image} alt={title} className='aspect-video rounded-md' />
      <span className='ml-5 mt-4 px-3 py-1 inline-block bg-blue-700/20 rounded-full text-blue-700 text-xs'>
        {category}
      </span>
      <div className='p-5'>
        <h5 className='mb-2 font-medium text-gray-900'>{title}</h5>
        <p className='mb-3 text-xs text-gray-600' dangerouslySetInnerHTML={{'__html':description.slice(0,80)}}></p>
      </div>
    </div>
  );
};

export default Blogcard;
