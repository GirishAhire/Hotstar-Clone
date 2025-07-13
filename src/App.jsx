import React, { useEffect, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import Loader from './component/Loader';

import { ToastContainer } from 'react-toastify';
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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-space" element={<MySpace />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NoMatch/>} />
          <Route path="/Movies" element={<Movies/>} />
          <Route path="/TV" element={<TV/>} />
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
