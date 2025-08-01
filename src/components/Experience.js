import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin, FiLinkedin, FiGlobe } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      company: "Arthur Technologies GmbH",
      position: "XR & Backend Developer",
      period: "04/2022 - Present",
      location: "Rawalpindi, Pakistan",
      description: "",
      technologies: ["Unity 3D", "C#", "VR/AR", "Photon", ".NET", "WebGL", "GenAI", "Git"],
      linkedinUrl: "https://www.linkedin.com/company/arthur-technologies/",
      featured: true
    },
    {
      company: "Boxes Labs",
      position: "Founder & Software Developer",
      period: "2019 - Present",
      location: "Rawalpindi, Pakistan",
      description: "Self employed software developer, working on various Indie games & Apps.",
      technologies: ["Unity 3D", "C#", "VR/AR", "Photon", ".NET", "WebGL", "GenAI", "Git"],
      website: "https://play.google.com/store/apps/dev?id=8857946449268136423",
      featured: true
    },
    {
      company: "The Knights Pvt Ltd",
      position: "Unity Game Developer",
      period: "07/2021 - 04/2022",
      location: "Rawalpindi, Pakistan",
      description: "Developed interactive applications and games using Unity. Worked on Monetization, Analytics and Gameplay development.",
      technologies: ["Unity", "C#", "Photon", "Firebase Services", "Git"],
      linkedinUrl: "https://www.linkedin.com/company/theknights/"
    },
    {
      company: "Plasma IT Solutions Pvt Ltd",
      position: "Unity Game Developer",
      period: "10/2020 - 06/2021",
      location: "Islamabad, Pakistan",
      description: "Worked on all aspects of game development, including gameplay, UI, and Optimization.",
      technologies: ["Unity", "C#", "Firebase Services"],
      linkedinUrl: "https://www.linkedin.com/company/plasma-it-solutions/"
    },
    {
      company: "StackBuffers Pvt Ltd",
      position: "Game Developer Intern",
      period: "10/2019 - 01/2020",
      location: "Islamabad, Pakistan",
      description: "Started my career in game development, Developed complete multiplayer games using Unity, Photon and Firebase Services.",
      technologies: ["Unity", "C#", "Firebase Services", "Photon"],
      linkedinUrl: "https://www.linkedin.com/company/stackbufferstechnologies/"
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
                
                <div className={`timeline-content ${exp.featured ? 'featured' : ''}`}>
                  <div className="experience-header">
                    <div className="header-left">
                      <h3 className="position">{exp.position}</h3>
                      <h4 className="company">{exp.company}</h4>
                    </div>
                    <div className="header-right">
                      {exp.linkedinUrl && (
                        <a 
                          href={exp.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="linkedin-btn"
                          title={`${exp.company} on LinkedIn`}
                        >
                          <FiLinkedin />
                        </a>
                      )}
                      {exp.website && (
                        <a 
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="linkedin-btn"
                          title={`Visit ${exp.company} website`}
                        >
                          <FiGlobe />
                        </a>
                      )}
                    </div>
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