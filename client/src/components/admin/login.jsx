import React, { useState } from 'react';

function Login() {

    const [email,setemail] =useState('')
    const [password,setpassword]=useState('')
     
    const HandleSubmit= async (e)=>{
        e.preventDefault()
    }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-80">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form  onSubmit={HandleSubmit}  className="flex flex-col space-y-4">
          <input 
            onChange={e=>setemail(e.target.value)} value={email}
            type="email" 
            placeholder="Email" 
            className="p-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <input
            onChange={e=>setpassword(e.target.value)} value={password} 
            type="password" 
            placeholder="Password" 
            className="p-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <button 
            type="submit" 
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
