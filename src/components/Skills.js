// src/components/Skills.js
import React from 'react';
import { FaReact, FaNodeJs, FaJavaScript,FaDatabase } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Keterampilan</h2>
        <div className="skills-grid">
          <div className="skill">
            <FaReact className="skill-icon" />
            <h3>React.js</h3>
          </div>
          <div className="skill">
            <FaNodeJs className="skill-icon" />
            <h3>Node.js</h3>
          </div>
          <div className="skill">
            <FaDatabase className="skill-icon" />
            <h3>Supabase</h3>
          </div>
          <div className="skill">
            <FaDatabase className="skill-icon" />
            <h3>MongoDB</h3>
          </div>
          {/* Tambahkan keterampilan lainnya sesuai kebutuhan */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
