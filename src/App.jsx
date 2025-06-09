import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import ImageComponent from './component/ImageComponent';
import MySpace from './pages/MySpace';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<ImageComponent />} />
        <Route path="/my-space" element={<MySpace />} />
      </Routes>
    </Router>
  );
}

export default App;
