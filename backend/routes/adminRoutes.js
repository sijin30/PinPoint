import {adminLogin,approveCommentById,deleteCommentById,getAllBlogsAdmin,getComments, getDashboard} from "../controllers/adminController.js"
import auth from "../middleware/auth.js";


import express from "express";

const adminRouter = express.Router();



adminRouter.post("/login", adminLogin)
adminRouter.get("/comments", getComments);
adminRouter.get("/blogs", getAllBlogsAdmin);
adminRouter.get("/dashboard",auth,getDashboard)
adminRouter.post("/delete-comment", auth,deleteCommentById);
adminRouter.post("/approve-comment",auth, approveCommentById)

export default adminRouter;