import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Dashboard from './pages/admin/Dashboard';
import ListBlog from './pages/admin/ListBlog';
import Layout from './pages/admin/Layout'; // ✅ You forgot this
import AddBlog from './pages/admin/AddBlog'; // ✅ Correct import
import Comments from './pages/admin/Comments'; // ✅ Correct import
import Login from './components/admin/login';
import 'quill/dist/quill.snow.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        
        <Route path='/admin' element={ true ? <Layout />: <Login/>}>
          <Route index element={<Dashboard />} />
          <Route path='addblog' element={<AddBlog />} />
          <Route path='comments' element={<Comments />} />
          <Route path='listBlog' element={<ListBlog/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
