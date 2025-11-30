import React from 'react';
import { NavLink } from 'react-router-dom'; // 1. Import NavLink
import './Navbar.css'; // 2. Import our CSS

function Navbar() {
  // 3. This function gets called by NavLink and receives an { isActive } object
  const getNavLinkClass = ({ isActive }) => {
    return isActive? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="navbar">
      {/* 4. Use NavLink and pass the function to className */}
      <NavLink 
        to="/" 
        className={getNavLinkClass}
        end // 5. 'end' prop ensures this only matches exactly "/"
      >
        Home
      </NavLink>

      <NavLink to="/about" className={getNavLinkClass}>About</NavLink>
      <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>
      <NavLink to="/posts" className={getNavLinkClass}>Posts</NavLink>
    </nav>
  );
}

export default Navbar;

