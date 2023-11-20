// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.PNG';
import './Navbar.css'; // Import the custom CSS file


const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="logo-container">
        <Link to="/">
        <img
            src={logo} // Use the imported image
            alt="Writealy Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <span className="logo-text" style={{ color: '#303179' }}>Writealy</span>
        </Link>
      </div>

      <div className="navbar-links">
        <ul>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/use-cases">Use Cases</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/customers">Customers</Link></li>
          <li><Link to="/resources">Resources</Link></li>
        </ul>
        <Link to="/signin" className="sign-in-button">Sign In</Link>
      </div>
    </nav>
  );
}

export default Navbar;
