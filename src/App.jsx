import React, { useEffect, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import Loader from './component/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Sidebar from './component/Sidebar';
import Footer from './component/Footer';
import NoMatch from './component/NoMatch';
import Movies from './pages/Movies';
import TV from './pages/TV';

const Home = lazy(() => import('./pages/Home'));
const MySpace = lazy(() => import('./pages/MySpace'));
const Search = lazy(() => import('./pages/Search'));

function AppRouterLogic() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('loggedIn') === 'true';

    if (location.pathname === '/' && !isLoggedIn) {
      navigate('/my-space');
    }

    const authStatus = sessionStorage.getItem('authStatus');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (authStatus && currentUser?.username) {
      if (authStatus === 'login') {
        toast.success('Login successful!');
        toast.success(`Welcome back, ${currentUser.username}! 🎉`);
      } else if (authStatus === 'signup') {
        toast.success('Signup successful!');
        toast.success(`Welcome, ${currentUser.username}! 🎊`);
      }

      sessionStorage.removeItem('authStatus');
    }
  }, [navigate, location.pathname]);

  return (
    <>
      <Sidebar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-space" element={<MySpace />} />
          <Route path="/search" element={<Search />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/TV" element={<TV />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRouterLogic />
      <ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
  );
}

export default App;
