import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navStyle = {
    padding: '15px 30px',
    borderBottom: '1px solid rgb(78, 78, 78)', // Softer border color
    display: 'flex',
    justifyContent: 'center', // Center links horizontally
  };

  const ulStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    gap: '25px', // Increased gap
    alignItems: 'center', // Vertically align items
  };

  // Removed linkStyle object

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li>
          {/* Apply CSS class for styling and hover effects */}
          <Link to="/" className="nav-link">Product</Link>
        </li>
        <li>
          {/* Apply CSS class for styling and hover effects */}
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
