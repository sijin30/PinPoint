import jwt from 'jsonwebtoken'


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