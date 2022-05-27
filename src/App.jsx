import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import AppBar from './components/AppBar';

function App() {
  return (
    <Router>
      <div>
        <AppBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
