import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiArrowDown } from 'react-icons/fi';
import './Hero.css';
import { trackCvDownload } from '../firebase';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Software Engineer',
    'Unity Developer',
    'VR/AR Developer',
    'Game Developer',
    '.NET Core Developer',
    'Multiplayer Game Developer'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const shouldDelete = isDeleting;
    
    const timeout = setTimeout(() => {
      if (!shouldDelete && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (shouldDelete && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(prev => 
          shouldDelete 
            ? prev.slice(0, -1)
            : currentRole.slice(0, prev.length + 1)
        );
      }
    }, shouldDelete ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, roles]);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-grid"></div>
        <div className="hero-dots"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-text">
            <motion.div className="hero-greeting" variants={itemVariants}>
              <span className="greeting-text">Hello, I'm</span>
            </motion.div>
            
            <motion.h1 className="hero-name" variants={itemVariants}>
              <span className="name-first">Abdullah</span>
              <span className="name-last">Qadeer</span>
            </motion.h1>
            
            <motion.div className="hero-role" variants={itemVariants}>
              <span className="role-text">I'm a </span>
              <span className="role-dynamic">
                {displayText}
                <span className="cursor">|</span>
              </span>
            </motion.div>
            
            <motion.p className="hero-description" variants={itemVariants}>
              Passionate software engineer with 5+ years of experience in Unity game development, 
              VR/AR technologies, Multiplayer Game Development, .NET Core, and AI integration. I create immersive digital experiences 
              that push the boundaries of technologies.
            </motion.p>
            
            <motion.div className="hero-stats" variants={itemVariants}>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </motion.div>
            
            <motion.div className="hero-actions" variants={itemVariants}>
              <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToContact(); }}>
                <FiMail />
                Get In Touch
              </a>
              <a href="/Abdullah Qadeer - Unity Game Developer.pdf" className="btn btn-secondary" download onClick={() => trackCvDownload()}>
                <FiDownload />
                Download CV
              </a>
            </motion.div>
          </div>
          
          <motion.div className="hero-visual" variants={itemVariants}>
            <motion.div 
              className="visual-container"
              variants={floatVariants}
              animate="float"
            >
              <div className="tech-orbit">
                <div className="tech-icon tech-unity">Unity</div>
                <div className="tech-icon tech-csharp">.NET</div>
                <div className="tech-icon tech-vr">VR</div>
                <div className="tech-icon tech-ai">AI</div>
              </div>
              <div className="central-avatar">
                <div className="avatar-ring"></div>
                <div className="avatar-core">
                  <img 
                    src="/images/profile/profile-picture.jpg" 
                    alt="Abdullah Qadeer - Software Engineer"
                    className="profile-picture"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="avatar-fallback">
                    <span className="avatar-text">AQ</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <FiArrowDown />
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero; 