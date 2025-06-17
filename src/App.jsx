import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './component/Sidebar';
import MySpace from './pages/MySpace';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-space" element={<MySpace />} />
      </Routes>
    </Router>
  );
}

export default App;
