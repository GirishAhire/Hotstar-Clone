import React, { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Sidebar from './component/Sidebar';
import MySpace from './pages/MySpace';
import Home from './pages/Home';

function AppRouterLogic() {
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    const storedUser = localStorage.getItem('userData');

    if (location.pathname === '/') {
      if (storedUser) {
        navigate('/');
      } else {
        navigate('/my-space');
      }
    }
  }, [navigate, location.pathname]);

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-space" element={<MySpace />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRouterLogic />
      <ToastContainer position="top-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
    </Router>
  );
}

export default App;