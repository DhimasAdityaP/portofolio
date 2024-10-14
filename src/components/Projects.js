// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Proyek</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Umrah Travel Management System</h3>
            <p>
            The Umrah Travel Management System application also helps manage costs and room types chosen by customers, in addition to schedules, bookings, and customer details for Umrah trips.
            </p>
            <a href="https://umroh-travel.vercel.app" className="btn">
              Lihat Detail
            </a>
          </div>
          <div className="project-card">
            <h3>Cake Shop Sales Website</h3>
            <p>
            The online sales system for a cake shop includes comprehensive features such as product management, payment processing, checkout functionality, and the ability to view cake categories.
            </p>
            <a href="https://ta-paw-118.vercel.app" className="btn">
              Lihat Detail
            </a>
          </div>
          <div className="project-card">
            <h3>ERP System</h3>
            <p>
            A system with two roles: sales and admin. Sales can add, edit, and delete sample data (sample source, title, type, weight, unit, purpose, and image upload). Admin has the same functionalities but can also export the data as XLS or CSV.
            </p>
            <a href="https://erp-system-rust.vercel.app" className="btn">
              Lihat Detail
            </a>
          </div>
          {/* Tambahkan proyek lainnya sesuai kebutuhan */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
