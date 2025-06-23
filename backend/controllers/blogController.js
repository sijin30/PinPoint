import fs from 'fs'
import { imageKit } from "../config/imageKi.js";
import { format } from 'path';
import Blog from '../models/Blog.js'

export const addBlog = async (req,res) =>{
    try{
           const {title,subTitle,description,category,isPublished}=JSON.parse(
            req.body.blog
           );
           const imageFile=req.file;
           //check if all fields are present
           if(!title||!description||!category||!imageFile){
            return res.json({success:false,message:"Missing required fields"})
           }
    const fileBuffer =fs.readFileSync(imageFile.path)


    const response = await  imageKit.upload({
        file: fileBuffer,
        fileName:imageFile.originalname,
        folder:"/blogs"
    }) 
     
    //optimization through imagekit url transformation
     //day10
    const optimizedImageUrl = imagekit.url({
        path:response.filePath,
        transformation: [
            {quality:'auto'},//AUTO COMPRESSION 
            {format:'webp'},//convert to modern format
            {width:'1280'}//width resizing
        ]
    }

    ) ;

    const image=optimizedImageUrl;
    await Blog.create({title, subTitle,description,category, image,isPublished})
    res.json({success:true,message:"Blog added successfully"})

    }catch(error){
        res.json({success:false,message:error.message})

    }
}