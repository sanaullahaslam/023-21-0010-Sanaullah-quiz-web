// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: 'rgba(255, 238, 252, 1)',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoTextStyle = {
    marginLeft: '10px',
    fontSize: '1.2em',
    color: 'white',
    textDecoration: 'none',
  };

  const navbarLinksStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    margin: '0',
    padding: '0',
  };

  const liStyle = {
    marginRight: '20px',
  };

  const linkStyle = {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black',
  };

  const signInButtonStyle = {
    backgroundColor: 'rgba(255, 238, 252, 1)',
    color: 'black',
    padding: '8px 16px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoContainerStyle}>
        <Link to="/" style={logoTextStyle}>
          <img
            src="path_to_your_logo_image.png"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <span style={logoTextStyle}>Writealy</span>
        </Link>
      </div>

      <div style={navbarLinksStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}><Link to="/product" style={linkStyle}>Product</Link></li>
          <li style={liStyle}><Link to="/use-cases" style={linkStyle}>Use Cases</Link></li>
          <li style={liStyle}><Link to="/pricing" style={linkStyle}>Pricing</Link></li>
          <li style={liStyle}><Link to="/customers" style={linkStyle}>Customers</Link></li>
          <li style={liStyle}><Link to="/resources" style={linkStyle}>Resources</Link></li>
        </ul>
        <Link to="/signin" style={signInButtonStyle}>Sign In</Link>
      </div>
    </nav>
  );
}

export default Navbar;
