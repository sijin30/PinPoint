import React, { useState, useEffect } from 'react';
import BlogTableItem from '../../components/admin/BLogTableItem'; // ✅ Make sure this path is correct
import { useAppContext } from '../../context/AppContext';

function ListBlog() {
  const { axios, toast } = useAppContext();
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get('/api/blog/all');
      if (data.success) {
        setBlogs(data.data);
      } else {
        toast.error(data.message || 'Failed to fetch blogs.');
      }
    } catch (error) {
      toast.error(error.message || 'Something went wrong while fetching blogs.');
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
      <h1 className='text-xl font-semibold mb-4'>All Blogs</h1>
      <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-gray-600 text-left uppercase'>
            <tr>
              <th className='px-2 py-4 xl:px-6'>#</th>
              <th className='px-2 py-4'>Blog Title</th>
              <th className='px-2 py-4 max-sm:hidden'>Date</th>
              <th className='px-2 py-4 max-sm:hidden'>Status</th>
              <th className='px-2 py-4'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <BlogTableItem
                key={blog._id}
                blog={blog}
                index={index + 1}
                fetchBlogs={fetchBlogs} // ✅ So status/delete refreshes list
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListBlog;
