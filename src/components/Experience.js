import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      company: "Tech Solutions Inc",
      position: "Senior Software Engineer",
      period: "2021 - Present",
      location: "Rawalpindi, Pakistan",
      description: "Leading Unity game development projects and VR/AR solutions. Mentoring junior developers and architecting scalable systems.",
      technologies: ["Unity 3D", "C#", "VR/AR", ".NET Core", "SQL Server"]
    },
    {
      company: "Digital Innovations Ltd",
      position: "Software Engineer",
      period: "2019 - 2021",
      location: "Lahore, Pakistan",
      description: "Developed interactive applications and games using Unity. Integrated AI/ML features and optimized performance.",
      technologies: ["Unity", "C#", "Python", "TensorFlow", "PostgreSQL"]
    },
    {
      company: "Creative Studios",
      position: "Junior Developer",
      period: "2018 - 2019",
      location: "Islamabad, Pakistan",
      description: "Started career in game development, focusing on mobile games and interactive media projects.",
      technologies: ["Unity", "C#", "Mobile Development", "Git"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">
              My professional journey in software development and game creation
            </p>
          </motion.div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                variants={itemVariants}
              >
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                  {index < experiences.length - 1 && <div className="marker-line"></div>}
                </div>
                
                <div className="timeline-content">
                  <div className="experience-header">
                    <h3 className="position">{exp.position}</h3>
                    <h4 className="company">{exp.company}</h4>
                  </div>
                  
                  <div className="experience-meta">
                    <div className="meta-item">
                      <FiCalendar />
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-item">
                      <FiMapPin />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="experience-description">{exp.description}</p>
                  
                  <div className="tech-tags">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
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

export default Experience; 