// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">My Portofolio</h1>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="hero" smooth={true} duration={500} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
              Tentang
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>
              Keterampilan
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} onClick={toggleMenu}>
              Pengalaman
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
              Proyek
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
              Kontak
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
