// src/components/Contact.js
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Kontak Saya</h2>
        <form
          action="mailto:dhimas.aditya@example.com"
          method="post"
          encType="text/plain"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Nama Anda" required />
          <input type="email" name="email" placeholder="Email Anda" required />
          <textarea name="message" rows="5" placeholder="Pesan Anda" required></textarea>
          <button type="submit" className="btn">
            Kirim
          </button>
        </form>
        <div className="social-links">
          <a href="https://linkedin.com/in/dhimasadityapratama" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/dhimasaditya" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          {/* Tambahkan tautan sosial lainnya jika diperlukan */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
