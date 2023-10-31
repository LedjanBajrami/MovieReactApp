import './Navbar.css'
import React, { useState } from "react";

import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNav = () => setIsOpen(!isOpen);
  
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <h1 className='text-white'>My Movie App</h1>
          <button className="navbar-toggle" onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul className={isOpen ? "nav-links nav-active" : "nav-links"}>
          <li>
            <Link to="/" onClick={toggleNav}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleNav}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleNav}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/movies" onClick={toggleNav}>
              Movies
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  export default Navbar;