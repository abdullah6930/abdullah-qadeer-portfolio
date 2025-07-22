import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiDatabase, FiCloud, FiSmartphone, FiPlay, FiEye } from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "Game Development",
      icon: FiPlay,
      skills: [
        { name: "Unity 3D", level: 95 },
        { name: "C#", level: 90 },
        { name: "Game Design", level: 85 },
        { name: "Multiplayer Game Development", level: 85 },
        { name: "Game Publishing", level: 85 },
      ]
    },
    {
      title: "VR/AR Development",
      icon: FiEye,
      skills: [
        { name: "Oculus SDK", level: 90 },
        { name: "ARCore/ARKit", level: 85 },
        { name: "Unity XR", level: 88 },
      ]
    },
    {
      title: "Backend Development",
      icon: FiDatabase,
      skills: [
        { name: ".NET Core", level: 88 },
        { name: "RESTful APIs", level: 90 },
        { name: "PostgreSQL Server", level: 50 },
        { name: "Entity Framework", level: 55 },
        { name: "Photon Quantum", level: 80 },
        { name: "Firebase Services", level: 80 },
      ]
    },
    {
      title: "Mobile Development",
      icon: FiSmartphone,
      skills: [
        { name: "Android", level: 85 },
        { name: "iOS", level: 40 },
      ]
    },
    {
      title: "Additional Experiences",
      icon: FiSmartphone,
      skills: [
        { name: "ChatGPT API", level: 85 },
        { name: "CI/CD", level: 85 },
        { name: "Azure", level: 55 },
        { name: "Stripe", level: 80 },
        { name: "Alpha Vantage API", level: 80 },
        { name: "React js", level: 50 },
        { name: "Git", level: 80 },
        { name: "GitHub", level: 80 },
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

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="skill-category"
                variants={itemVariants}
              >
                <div className="category-header">
                  <div className="category-icon">
                    <category.icon />
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 0.2 * i }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 