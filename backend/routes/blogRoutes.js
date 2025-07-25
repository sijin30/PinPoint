import express from 'express';
import { addBlog, deleteBlogById, getAllBlogs, getBlogById, togglePublish,addComment,getBlogComments } from "../controllers/blogController.js"
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

blogRouter.get('/test', (req, res) => {
  res.send('✅ Test route working');
});

blogRouter.post("/add",auth,upload.single('image'),addBlog);
blogRouter.get('/all',getAllBlogs);
blogRouter.get('/:blogId',getBlogById);
blogRouter.post('/delete',auth,deleteBlogById);
blogRouter.post('/toggle-publish',auth,togglePublish);
blogRouter.post('/add-comment',auth,addComment);
blogRouter.post('/comments',auth,getBlogComments);

export  default blogRouter;