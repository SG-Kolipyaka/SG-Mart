import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../css/navbar.css";  
import { FaUserAlt, FaShoppingCart, FaBars, FaTimes, FaSearch } from 'react-icons/fa'; 

import sgMartLogo from '/koli-cap.jfif';  // Update the path accordingly

const Links = [
  { path: "/mens", title: "Mens" },
  { path: "/womens", title: "Womens" },
  { path: "/kids", title: "Kids" },
  { path: "/jewellery", title: "Jewellery" },
  { path: "/frames", title: "Frames" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={sgMartLogo} alt="SG Mart Logo" className="logo-image" />
        {/* Conditionally render the title based on the mobile menu state */}
        {!isMobileMenuOpen && <h1 className="logo-title">SG Mart</h1>}
      </div>
      <div className="hamburger" onClick={handleHamburgerClick}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="menu-links">
          {Links.map((el) => (
            <NavLink
              className="nav-link"
              activeClassName="active"
              key={el.path}
              to={el.path}
              exact
            >
              {el.title}
            </NavLink>
          ))}
        </div>
        <div className="search-container">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <FaSearch className="search-icon" />
          </div>
        </div>
      </div>
      <div className="icons">
        <FaUserAlt className="icon" />
        <FaShoppingCart className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
