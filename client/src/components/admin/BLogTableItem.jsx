import React from 'react';
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { axios, toast } = useAppContext();
  const { title, createdAt, isPublished, _id } = blog;
  const BlogDate = new Date(createdAt);

  // 🗑️ Delete blog handler
  const handleDelete = async () => {
    try {
      const confirm = window.confirm('Are you sure you want to delete this blog?');
      if (!confirm) return;

      const { data } = await axios.delete(`/api/blog/delete/${_id}`);
      if (data.success) {
        toast.success(data.message);
        fetchBlogs(); // Refresh blog list
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message || 'Failed to delete blog');
    }
  };

  return (
    <tr className='border-y border-gray-300'>
      <th className='px-2 py-4'>{index}</th>
      <td className='px-2 py-4'>{title}</td>
      <td className='px-2 py-4 max-sm:hidden'>{BlogDate.toDateString()}</td>
      <td className='px-2 py-4 max-sm:hidden'>
        <p className={isPublished ? 'text-green-600' : 'text-orange-700'}>
          {isPublished ? 'Published' : 'Unpublished'}
        </p>
      </td>
      <td className='px-2 py-4 flex text-xs gap-3'>
        <button
          className='border px-2 py-0.5 mt-1 rounded cursor-pointer'
          onClick={() => toast('Publish/Unpublish feature coming soon!')}
        >
          {isPublished ? 'Unpublish' : 'Publish'}
        </button>
        <img
          src={assets.cross_icon}
          className='w-8 hover:scale-110 transition-all cursor-pointer'
          alt='Delete'
          onClick={handleDelete}
        />
      </td>
    </tr>
  );
};

export default BlogTableItem;
