import jwt from 'jsonwebtoken'
import Blog from '../models/Blog.js';
import Comment from '../models/Comment.js';




export const adminLogin = async (req,res)=>{
    try{
        const { email , password } =req.body;
         // Debugging logs (remove in production)
        console.log("Request Email:", email);
        console.log("ENV Email:", process.env.ADMIN_EMAIL);


        if(email!==process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
            return res.json({success : false, message : "Invalid Credential"})
        }
            const token =jwt.sign({email}, process.env.JWT_SECRET)
            res.status(200).json({success: true,token})

            
    }catch(error){
                    res.json({success: false,message :error.message})
    }
}

export const getAllBlogsAdmin = async (req,res)=>{
    try{
        const blogs = await Blog.find({}).sort({createdAt: -1 });
        res.status({success:true,blogs})

    }catch(error){
        res.json({success: false, message: error.message})

    }
}

export const getComments= async (req,res)=>{
    try{
        const commments= await Comment.find({}).populate("blog").sort({createdAt: -1})
        res.status({success:true,commments})

    }catch(error){
 res.json({success: false, message: error.message})
    }

}

export const getDashboard = async (req, res) => {
    try{
        const recentBlogs = await Blog.find({}).sort({createdAt: -1}).limit(5);
        const blogs = await Blog.countDocuments();
        const comments= await Comment.countDocuments();
        const drafts=await Blog.countDocuments({isPublished:false})

        const dashboardData ={
            blogs,comments,recentBlogs,drafts
        }
        res.status({success:true,dashboardData})

    }catch(error){
 res.json({success: false, message: error.message})
    }
}

export const deleteCommentById = async(req,res)=>{
    try{
        const {id} =req.params;
        await Comment.findByIdAndDelete(id);
        res.json({success:true,message:"Comment deleted successfully"})

    }catch(error){
        res.json({success: false, message: error.message})
    }
}

export const approveCommentById = async (req,res)=>{
     try{
         const {id} =req.params;
         await Comment.findByIdAndUpdate(id,{isApproved:true});
         res.json({success:true,message:"Comment approved successfully"})

     }catch(error){
         res.json({success: false, message: error.message})
     }
}

