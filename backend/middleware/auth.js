import jwt from "jsonwebtoken";

const auth =(re,res,next)=>{
    const token =req.headers.authorization;
    try{
        jwt.verify(token,process.env.JWT_SECRET)
    }catch(error){
                    res.json({success : false,message:"Invalid token"})
    }
}

export   default auth;