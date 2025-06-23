import React from 'react';
import Footer from './Footer';

function Newsletter() {
  return (
    <div className='bg-white text-center py-10 px-5'>
      <h1 className='text-2xl sm:text-3xl font-bold mb-4'>Never Miss a Blog!</h1>
      <p className='text-gray-600 mb-6'>Subscribe to get the latest blog, new tech, and exclusive news.</p>
      <form className='flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto'>
        <input
          type="email"
          placeholder="Enter your email id"
          className='flex-grow border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          required
        />
        <button
          type="submit"
          className='bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition duration-200'
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default Newsletter;
