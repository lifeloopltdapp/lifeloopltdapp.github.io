import React from 'react';
// Import HashRouter instead of BrowserRouter
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import './App.css'; // Import basic styles

function App() {
  return (
    // Use Router (which is now HashRouter)
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Optional: Add a catch-all route for 404 Not Found */}
            {/* <Route path="*" element={<div>Page Not Found</div>} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
