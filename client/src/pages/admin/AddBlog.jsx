import React, { useEffect, useState, useRef } from 'react';
import { assets, blogCategories } from '../../assets/assets';
import Quill from 'quill';
import { useAppContext } from '../../context/AppContext';

function AddBlog() {
   
  const {axios,toast}=useAppContext();
  const [isAdding,setIsAdding]=useState(false)



  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [category, setCategory] = useState('Startup');
  const [isPublished, setIsPublished] = useState(false);

  const generateContent = async () => {
    if (quillRef.current) {
      quillRef.current.setText("Generated content by AI...");
    }
  };

  const onSubmitHandler = async (e) => {
  e.preventDefault();
  setIsAdding(true);

  try {
    const description = quillRef.current.root.innerHTML.trim();
    if (!description || description === '<p><br></p>') {
      toast.error("Blog content can't be empty.");
      return;
    }

    const blog = {
      title,
      subTitle,
      description,
      category,
      isPublished,
    };

    const formData = new FormData();
    formData.append('blog', JSON.stringify(blog));
    formData.append('image', image);

    const { data } = await axios.post('/api/blog/add', formData);

    if (data.success) {
      toast.success(data.message);
      setImage(null);
      setTitle('');
      setSubTitle('');
      setCategory('Startup');
      quillRef.current.root.innerHTML = '';
      setIsPublished(false);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message || "Something went wrong.");
  } finally {
    setIsAdding(false);
  }

  console.log({ image, title, subTitle, category, isPublished });
};


  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow' });
    }
  }, []);

  return (
    <form onSubmit={onSubmitHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full'>
      <div className='bg-white max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>
        <p className='mb-2'>Upload thumbnail</p>
        <label htmlFor='image'>
          <img
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            alt='Upload'
            className='mt-2 h-16 object-cover rounded cursor-pointer border'
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type='file'
            id='image'
            hidden
            required
          />
        </label>

        <p className='mt-4'>Blog Title</p>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          placeholder='Enter blog title'
          className='p-2 border rounded w-full max-w-lg mt-2 border-gray-300 outline-none'
          required
        />

        <p className='mt-4 mb-2'>Sub Title</p>
        <input
          value={subTitle}
          onChange={(e) => setSubTitle(e.target.value)}
          placeholder='Enter sub title'
          className='p-2 border rounded w-full max-w-lg mt-2 border-gray-300 outline-none'
          required
        />

        <p className='mt-4'>Blog Description</p>
        <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative'>
          <div ref={editorRef}></div>
          <button
            type='button'
            onClick={generateContent}
            className='absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer'
          >
            Generate with AI
          </button>
        </div>

        <p className='mt-4'>Blog category</p>
         <select onChange={e=> setCategory(e.target.value)} name='category' className='mt-2 px-3 py-2 border text-gray-500
         border-gray-300 outline-none rounded' >

          <option value=''></option>
          {blogCategories.map((item,index)=>{
            return <option key={index} value={item}>{item}</option>
          })}

         </select>
       <div>
                <p>Publish Now</p>
                <input type="checkbox" checked={isPublished} className='scale-125 cursor-pointer'
                onChange ={e=>setIsPublished(e.target.checked)}
              
              />
       </div>

       <button  disabled={isAdding} type='submit' className='mt-8 w-40 h-10 bg-blue-700 text-white rounded cursor-pointer text-sm'>
        
        {isAdding?'Adding...':'Add Blog'}
       </button>
      </div>
    </form>
  );
}

export default AddBlog;
