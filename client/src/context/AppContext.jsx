import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL?.trim();

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [blog, setBlog] = useState([]);
  const [input, setInput] = useState("");

  const fetchBlogs = async () => {
    try {
      console.log("🔐 Current Token:", token);
      console.log("📡 Axios Header:", axios.defaults.headers.common['Authorization']);

      const { data } = await axios.get('/api/blog/all');
      data.success ? setBlog(data.data) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message || "Failed to fetch blogs");
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      setToken(storedToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
    }

    // ✅ Always fetch after token is set
    fetchBlogs();
  }, []);

  const value = {
    axios,
    navigate,
    token,
    blog,
    setBlog,
    input,
    setInput,
    setToken,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
