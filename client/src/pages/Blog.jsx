import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blog_data, comments_data } from '../assets/assets';
import Navbar from '../components/Navbar';
import { assets } from '../assets/assets';
import Moment from 'moment';  
import Footer from  '../components/Footer';
import Loader from '../components/Loader';

function Blog() {
  const { id } = useParams();
  const [data, setData] = useState(null); 
  const [comments, setComments] = useState([]); 
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const fetchData = () => {
    const item = blog_data.find(item => item._id === id); 
    setData(item);
  };

  const fetchComments = () => {
    setComments(comments_data);
  };

  const addComment = (e) => {
    e.preventDefault();
    const newComment = {
      name: name,
      content: content,
      createdAt: new Date()
    };
    setComments([...comments, newComment]);
    setName('');
    setContent('');
  };

  useEffect(() => {
    fetchData();  
    fetchComments(); 
  }, [id]);

  return data ? (
    <div className='relative'>
      <img src={assets.gradientBackground} alt='' className='absolute -z-1' />
      <Navbar />

      <div className='text-center mt-20 text-gray-600'>
        <p className='text-blue-700 py-4 font-medium'>
          Published on {Moment(data.createdAt).format('MMMM Do YYYY')}
        </p>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800'>{data.title}</h1>
        <h1 className='my-5 max-w-lg truncate mx-auto' dangerouslySetInnerHTML={{ __html: data.subTitle }}></h1>
        <p className='inline-block py-1 px-4 rounded-full mb-6 border border-blue-700/35 bg-blue-700/5 font-medium text-blue-700'>Sijin Kp</p>
      </div>

      <div className='mx-5 max-w-3xl md:mx-auto my-10 mt-6'>
        <img src={data.image} alt='' className='rounded-3xl mb-5' />
      </div>

      <div className='rich-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{ __html: data.description }}></div>

      {/* Comments Section */}
      <div className='mt-14 mb-10 max-w-3xl mx-auto'>
        <p className='mb-4 font-semibold'>Comments ({comments.length})</p>
        <div className='flex flex-col gap-4'>
          {comments.map((item, index) => (
            <div key={index} className='relative bg-primary/5 border border-primary/5 max-w-xl p-4 rounded text-gray-600'>
              <div className='flex items-center gap-2 mb-2'> 
                <img src={assets.user_icon} alt='' className='w-8 h-8 rounded-full mr-2' />
                <p className='font-medium'>{item.name}</p>
              </div>
              <p className='text-sm max-w-md ml-8'>{item.content}</p>
              <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>
                {Moment(item.createdAt).fromNow()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Comment */}
      <div className='max-w-3xl mx-auto'>
        <p className='font-semibold mb-4'>Add your comment</p>
        <form onSubmit={addComment} className='flex flex-col items-start gap-4 max-w-lg'>
          <input 
            onChange={(e) => setName(e.target.value)} 
            value={name} 
            type="text" 
            placeholder='Name' 
            required 
            className='w-full p-2 border border-gray-300 rounded outline-none' 
          />
          <textarea 
            onChange={(e) => setContent(e.target.value)} 
            value={content} 
            placeholder='Comment' 
            className='w-full p-2 border border-gray-300 rounded outline-none h-48' 
            required
          />
          <button 
            type='submit' 
            className='bg-blue-700 text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer'
          >
            Submit
          </button>
        </form>
      </div>

      {/* Social Media Share */}
      <div className='my-24 max-w-3xl mx-auto'>
        <p className='my-4 font-semibold'>Share this article on social media</p>
        <div className='flex gap-4'>
          <img src={assets.facebook_icon} width={50} alt='' />
          <img src={assets.twitter_icon} width={50} alt='' />
          <img src={assets.googleplus_icon} width={50} alt='' />
        </div>
      </div>

      <Footer />
    </div>
  ) : (
    <div>
      <Loader/>
    </div>
  );
}

export default Blog;
