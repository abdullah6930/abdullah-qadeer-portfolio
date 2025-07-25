import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink, FiBriefcase, FiHeart, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigationLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/abdullah6930', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/abdullahqadeerdev', label: 'LinkedIn' },
    { icon: FiBriefcase, href: 'https://www.fiverr.com/users/abdullah6930', label: 'Fiverr' }
  ];

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-grid"></div>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="brand-logo">
                <span className="logo-text">Abdullah</span>
                <span className="logo-accent">Qadeer</span>
              </div>
            </div>

            <div className="footer-nav">
              <h4>Navigation</h4>
              <ul className="nav-list">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="nav-link"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Get In Touch</h4>
              <div className="contact-info">
                <a href="mailto:abdullahqadeerdev@gmail.com" className="contact-item">
                  <FiMail />
                  <span>abdullahqadeerdev@gmail.com</span>
                </a>
              </div>
              <div className="availability">
                <div className="status-indicator"></div>
                <span>Available for new projects and roles.</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              <p>
                © {currentYear} Abdullah Qadeer. Built with{' '}
                <FiHeart className="heart-icon" />{' '}
                using React.js
              </p>
            </div>
          </div>
        </div>
      </div>

      <motion.button
        className="back-to-top"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <FiArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer; 