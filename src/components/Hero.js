// src/components/Hero.js
import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <h2>Hai, Saya Dhimas Aditya Pratama</h2>
        <p>Full-Stack Developer</p>
        <Link to="projects" smooth={true} duration={500} className="btn">
          Lihat Proyek
        </Link>
      </div>
    </section>
  );
};

export default Hero;
