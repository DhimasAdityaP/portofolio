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
              Aplikasi yang membantu agen perjalanan mengelola jadwal, pemesanan, dan pelanggan untuk perjalanan Umrah.
            </p>
            <a href="#" className="btn">
              Lihat Detail
            </a>
          </div>
          <div className="project-card">
            <h3>Cake Shop Sales Website</h3>
            <p>
              Sistem penjualan online untuk toko kue dengan fitur lengkap mulai dari manajemen produk hingga pemrosesan pembayaran.
            </p>
            <a href="#" className="btn">
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
