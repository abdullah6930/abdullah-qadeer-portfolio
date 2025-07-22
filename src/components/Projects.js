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
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Enterprise Systems', 'Indie Games', 'Open Source'];

  const projects = [
    {
      title: "Gemini AI Trader",
      description: "Intelligent Stock and Crypto Analysis Platform - A modern web application designed to help retail traders make smarter investment decisions using AI-driven insights and real-time market data.",
      fullDescription: "Gemini AI Trader is a comprehensive trading platform built with ASP.NET Core, React.js, and PostgreSQL, deployed on Microsoft Azure. The platform combines financial technology with artificial intelligence to deliver a seamless trading assistant experience. Key features include: Dashboard with market overview, performance metrics, and news; Portfolio Management for stocks, crypto, ETFs with real-time P&L tracking; AI Chat powered by ChatGPT for market analysis and price comparisons using Alpha Vantage data; Market Analysis with trending stocks and sector performance; Pre-Market & After Hours insights with candlestick charts and technical analysis; Watchlist functionality; Latest market news with filtering; Account management with subscription tiers (Basic, Professional, Premium) offering different levels of access to advanced features, larger watchlists, and enhanced AI capabilities.",
      technologies: ["React.js", "ASP.NET Core", "PostgreSQL", "Azure", "ChatGPT API", "Alpha Vantage API", "Stripe"],
      demo: "https://www.geminitraderai.com/",
      category: "Enterprise Systems",
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
      ]
    },
    {
      title: "Subway Traffic Racer (Previously Toon Racer 3D)",
      description: "A fast-paced 3D subway traffic racing game where you play as a car thief, weaving through busy subway streets to evade the police and dodge oncoming vehicles. Outsmart your pursuers and navigate challenging obstacles to reach your destination and complete your daring escape.",
      fullDescription: "Subway Traffic Racer is a fast-paced 3D subway traffic racing game where you play as a car thief, weaving through busy subway streets to evade the police and dodge oncoming vehicles. Outsmart your pursuers and navigate challenging obstacles to reach your destination and complete your daring escape.",
      technologies: ["Unity", "Firebase"],
      demo: "https://play.google.com/store/apps/details?id=com.BoxesLabs.ToonRacer",
      category: "Indie Games",
      featured: false,
      images: [
      ],
      videos: [
        "AfTfzVBIujk"
      ]
    },
    {
      title: "Relieve",
      description: "A 2D puzzle game where your goal is to help the ball reach the next gate by avoiding different obstacles.",
      fullDescription: "Relieve is a 2D puzzle game where your goal is to help the ball reach the next gate by avoiding different obstacles. With 64 unique levels, you'll need to think strategically to solve each puzzle. The game features a minimalist design with smooth gameplay and a calming atmosphere, making it perfect for casual play.\n Each and every level design is hand drawn on paper first. The levels are positioned with difficulty in mind. The game is designed to be played on mobile devices.",
      technologies: ["Unity", "Firebase"],
      demo: "https://play.google.com/store/apps/details?id=com.BoxesLabs.Relieve",
      category: "Indie Games",
      featured: false,
      images: [
      ],
      videos: [
        "wnoIDet9-wg"
      ]
    },
    {
      title: "Just Catch Boxes",
      description: "A 2D Hyper casual game where you catch boxes to score points.",
      fullDescription: "Just Catch Boxes is a 2D Hyper casual game where you catch boxes to score points. Each character has different stats like speed and box carrying capacity. The game runs endlessly and the scores are saved in the global leaderboard.",
      technologies: ["Unity", "Firebase"],
      demo: "https://play.google.com/store/apps/details?id=com.BoxesLabs.JustCatchBoxes",
      category: "Indie Games",
      featured: false,
      images: [
      ],
      videos: [
        "tGabkt444So"
      ]
    },
    {
      title: "ChatGPT Wrapper for Unity",
      description: "A simple wrapper around the ChatGPT API to make it easier to use in Unity.",
      fullDescription: "This is a simple wrapper around the ChatGPT API to make it easier to use in Unity. It allows you to easily integrate ChatGPT into your Unity projects. It uses the OpenAI API to generate text responses to your prompts. It also allows you to easily add a chat interface to your Unity projects.",
      technologies: ["Unity", "ChatGPT API"],
      github: "https://github.com/abdullah6930/ChatGPTWrapper_Unity",
      category: "Open Source",
      featured: false,
      images: [
      ],
      videos: [
        "Pt9sJFzE8qA"
      ]
    },
    {
      title: "Mesh Generator for Unity",
      description: "A tool to generate meshes in Unity in Play Mode.",
      fullDescription: "Currently user's in unity can change mesh vertices only in edit mode that too with the help of some packages. This project is designed to help users change vertex positions in play mode through Game Window. User's can change vertex positions on x,y and z axis just like they move gameeobjects in editor. The idea behind changing mesh vertices in play mode is to make it easier to be integrated into any project that wants to allow users to interact with 3D objects.",
      technologies: ["Unity"],
      github: "https://github.com/abdullah6930/MeshGeneration",
      category: "Open Source",
      featured: false,
      images: [
      ],
      videos: [
        "PzhMkh2wJgA"
      ]
    },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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

          <motion.div className="project-categories" variants={itemVariants}>
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
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
                    {project.demo && (
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
                    )}
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
                  {selectedProject.demo && (
                    <a 
                      href={selectedProject.demo} 
                      className="modal-link primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>
                  )}
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