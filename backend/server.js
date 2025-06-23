// Importing required modules:

import express from 'express'; // 📦 Express framework for building server and API routes
import 'dotenv/config';        // 📦 Loads environment variables from .env file into process.env
import cors from 'cors';       // 📦 Middleware to handle Cross-Origin Resource Sharing (CORS)
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js'
import blogRouter from './routes/blogRouted.js';

// Initialize express app:

const app = express(); // ⚙️ Creates an instance of an Express application to handle requests/responses

await connectDB();
// Applying Middlewares:

app.use(cors()); 
// ✅ Enables CORS for all routes
// 🔍 Allows frontend apps (even from other domains/ports) to access this backend server

app.use(express.json()); 
// ✅ Built-in middleware to parse incoming JSON data
// 🔍 Converts incoming JSON request bodies into JS objects (accessible via req.body in routes)

// Example explanation for res.json()
// res.json() — Sends JSON responses from server to client in proper format
// res.json({message: 'Hello'}) => Client gets {"message": "Hello"} with content-type header set to application/json

// Setting server port:
//Routes
app.get('/',(req,res)=>res.send('api is working'))
app.use('/api/admin', adminRouter)
app.use('/api/blog', blogRouter)

const PORT = process.env.PORT || 3000; 
// ✅ Defines the port the server will run on
// 🔍 First tries environment variable PORT (from .env); if undefined, defaults to 3000

// Start server:

app.listen(PORT,()=>{
    console.log('server is running on port'+PORT)
})

export default app;