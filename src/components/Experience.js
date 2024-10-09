// src/components/Experience.js
import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Pengalaman</h2>
        <div className="experience-item">
          <h3>Full-Stack Developer - [Nama Perusahaan]</h3>
          <span>Juni 2022 - Sekarang</span>
          <p>
            Mengembangkan aplikasi Umrah Travel Management System menggunakan React.js dan Node.js, menyediakan fitur manajemen perjalanan, pemesanan, dan pengelolaan data pelanggan.
          </p>
        </div>
        <div className="experience-item">
          <h3>Frontend Developer - [Nama Perusahaan]</h3>
          <span>Januari 2021 - Mei 2022</span>
          <p>
            Membangun aplikasi e-commerce Cake Shop dengan React.js dan Supabase untuk manajemen penjualan, stok, dan pesanan.
          </p>
        </div>
        {/* Tambahkan pengalaman lainnya sesuai kebutuhan */}
      </div>
    </section>
  );
};

export default Experience;
