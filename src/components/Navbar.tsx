import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Ensure this path is correct
import logo from "../Images/V-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <Link to="/" className="navbar-logo">
          <img className="logo-image"src={logo}></img>
        </Link>
        <Link to="/resume" className="resume-btn">Resume</Link>
      </div>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery" className="nav-link">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link to="/video-gallery" className="nav-link">Video Gallery</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
