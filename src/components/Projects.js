import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiPlay } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "Gemini AI Trader",
      description: "Developed a complete AI Trading Strategy SaaS using ChatGPT, ASP.NET, React js, PostgreSQL, Alpha Vantage API, and Stripe.",
      technologies: ["React js", ".NET Core", "PostgreSQL", "Azure"],
      github: "https://github.com/abdullah6930/vr-adventure",
      demo: "https://vr-adventure-demo.com",
      featured: true
    },
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
                    <a 
                      href={project.github} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub />
                      Code
                    </a>
                    <a 
                      href={project.demo} 
                      className="project-link primary"
                      target="_blank"
                      rel="noopener noreferrer"
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
    </section>
  );
};

export default Projects; 