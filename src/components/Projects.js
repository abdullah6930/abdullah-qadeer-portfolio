import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiPlay, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "Gemini AI Trader",
      description: "Intelligent Stock and Crypto Analysis Platform - A modern web application designed to help retail traders make smarter investment decisions using AI-driven insights and real-time market data.",
      fullDescription: "Gemini AI Trader is a comprehensive trading platform built with ASP.NET Core, React.js, and PostgreSQL, deployed on Microsoft Azure. The platform combines financial technology with artificial intelligence to deliver a seamless trading assistant experience. Key features include: Dashboard with market overview, performance metrics, and news; Portfolio Management for stocks, crypto, ETFs with real-time P&L tracking; AI Chat powered by ChatGPT for market analysis and price comparisons using Alpha Vantage data; Market Analysis with trending stocks and sector performance; Pre-Market & After Hours insights with candlestick charts and technical analysis; Watchlist functionality; Latest market news with filtering; Account management with subscription tiers (Basic, Professional, Premium) offering different levels of access to advanced features, larger watchlists, and enhanced AI capabilities.",
      technologies: ["React.js", "ASP.NET Core", "PostgreSQL", "Azure", "ChatGPT API", "Alpha Vantage API", "Stripe"],
      demo: "https://www.geminitraderai.com/",
      featured: true,
      images: [
        "/images/projects/gemini-ai-trader/Landing page new user.png",
        "/images/projects/gemini-ai-trader/Dashboard page.png",
        "/images/projects/gemini-ai-trader/AI Chat.png",
        "/images/projects/gemini-ai-trader/StockDetails_Candlestick.png",
        "/images/projects/gemini-ai-trader/Pre Market Analysis.png",
        "/images/projects/gemini-ai-trader/Market News.png",
        "/images/projects/gemini-ai-trader/AI Chat Mobile View.png",
        "/images/projects/gemini-ai-trader/Stocks Mobile View.png"
      ],
      videos: [
        // Add YouTube video IDs here when available
      ]
    },
    // Add more projects here
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern design and seamless user experience.",
      fullDescription: "A complete e-commerce platform built with React and Node.js, featuring product catalog, shopping cart, payment integration, order management, and admin dashboard. Includes advanced features like recommendation engine, inventory management, and real-time notifications.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/example/ecommerce",
      demo: "https://ecommerce-demo.com",
      featured: false,
      images: [
        "https://via.placeholder.com/800x400/E91E63/white?text=Product+Catalog",
        "https://via.placeholder.com/800x400/9C27B0/white?text=Shopping+Cart",
        "https://via.placeholder.com/800x400/3F51B5/white?text=Admin+Dashboard"
      ],
      videos: [
        "dQw4w9WgXcQ"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { 
        duration: 0.2 
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const openLightbox = (images, index) => {
    setLightboxImage(images);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (lightboxImage && currentImageIndex < lightboxImage.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (lightboxImage && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxImage) {
        switch (e.key) {
          case 'Escape':
            closeLightbox();
            break;
          case 'ArrowRight':
            nextImage();
            break;
          case 'ArrowLeft':
            prevImage();
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, currentImageIndex]);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              A showcase of my recent work in game development, VR/AR, and AI integration
            </p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openModal(project)}
                style={{ cursor: 'pointer' }}
              >
                {project.featured && (
                  <div className="featured-badge">
                    <FiPlay />
                    Featured
                  </div>
                )}
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-actions">
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub />
                        Code
                      </a>
                    )}
                    <a 
                      href={project.demo} 
                      className="project-link primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <button className="modal-close" onClick={closeModal}>
                  <FiX />
                </button>
              </div>
              
              <div className="modal-body">
                <div className="modal-description">
                  <h3>Project Overview</h3>
                  <p>{selectedProject.fullDescription}</p>
                </div>

                <div className="modal-tech">
                  <h3>Technologies Used</h3>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="modal-images">
                    <h3>Screenshots</h3>
                    <div className="images-grid">
                      {selectedProject.images.map((image, i) => (
                        <img 
                          key={i} 
                          src={image} 
                          alt={`${selectedProject.title} screenshot ${i + 1}`}
                          onClick={() => openLightbox(selectedProject.images, i)}
                          style={{ cursor: 'pointer' }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.videos && selectedProject.videos.length > 0 && (
                  <div className="modal-videos">
                    <h3>Demo Videos</h3>
                    <div className="videos-grid">
                      {selectedProject.videos.map((videoId, i) => (
                        <div key={i} className="video-container">
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={`${selectedProject.title} video ${i + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="modal-actions">
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      className="modal-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub />
                      View Code
                    </a>
                  )}
                  <a 
                    href={selectedProject.demo} 
                    className="modal-link primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox}>
                <FiX />
              </button>
              
              <div className="lightbox-image-container">
                <img 
                  src={lightboxImage[currentImageIndex]} 
                  alt={`Screenshot ${currentImageIndex + 1}`}
                />
              </div>

              {lightboxImage.length > 1 && (
                <>
                  <button 
                    className="lightbox-nav lightbox-prev" 
                    onClick={prevImage}
                    disabled={currentImageIndex === 0}
                  >
                    <FiChevronLeft />
                  </button>
                  <button 
                    className="lightbox-nav lightbox-next" 
                    onClick={nextImage}
                    disabled={currentImageIndex === lightboxImage.length - 1}
                  >
                    <FiChevronRight />
                  </button>
                </>
              )}

              <div className="lightbox-counter">
                {currentImageIndex + 1} / {lightboxImage.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects; 