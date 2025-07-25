import fs from 'fs';
import imageKit from '../configs/imageKit.js';
import Blog from '../models/Blog.js';
import Comment from '../models/Comment.js';

// 🟢 Add a Blog
export const addBlog = async (req, res) => {
  try {
    let blogData;
    try {
      blogData = JSON.parse(req.body.blog);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Invalid blog JSON data",
      });
    }

    const { title, subTitle, description, category, isPublished } = blogData;
    const imageFile = req.file;

    if (!title || !description || !category || !imageFile) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

    const response = await imageKit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    const optimizedImageUrl = imageKit.url({
      path: response.filePath,
      transformation: [
        { quality: 'auto' },
        { format: 'webp' },
        { width: '1280' },
      ],
    });

    const image = optimizedImageUrl;

    await Blog.create({ title, subTitle, description, category, image, isPublished });

    res.status(201).json({
      success: true,
      message: "Blog added successfully",
    });

  } catch (error) {
    console.error("💥 Blog Add Error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// 🟢 Get All Published Blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true });
    res.status(200).json({
      success: true,
      data: blogs
    });
  } catch (error) {
    console.error("💥 Get All Blogs Error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// 🟢 Get Single Blog by ID
export const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found"
      });
    }

    res.status(200).json({ success: true, blog });

  } catch (error) {
    console.error("💥 Get Blog By ID Error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// 🟢 Delete Blog by ID
export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.body;
    await Blog.findByIdAndDelete(id);
    //Delete all comments assosiated with blog

    await Comment.deleteMany({blog: id})
    res.status(200).json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    console.error("💥 Delete Blog Error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// 🟢 Toggle Publish Status
export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }

    blog.isPublished = !blog.isPublished;
    await blog.save();

    res.status(200).json({ success: true, message: 'Blog status updated' });

  } catch (error) {
    console.error("💥 Toggle Publish Error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export const addComment =async (req,res)=>{
    try{
          const {blog,name,content}=req.body
          await Comment.create({blog,name,content})
          res.json({ success:true,message:"Comment added successfully" })

    }catch(error){
        console.error("💥 Add Comment Error:", error);
        res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
}

export const getBlogComments=async (req,res)=>{
    try{
          const {blogId}=req.body
          const comments =await Comment.find({blog: blogId, isApproved:true}).sort({createdAt: -1})
            res.json({ success:true,comments })


    }catch(error){
        console.error("💥 Get Comments Error:", error);
        res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }

}