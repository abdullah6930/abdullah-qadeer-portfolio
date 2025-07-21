import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiPlay, FiEye, FiCpu, FiAward, FiUsers } from 'react-icons/fi';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const specialties = [
    {
      icon: FiPlay,
      title: "Game Development",
      description: "Expert in Unity 3D with 5+ years of experience creating immersive gaming experiences and interactive applications."
    },
    {
      icon: FiEye,
      title: "VR/AR Development", 
      description: "Specialized in virtual and augmented reality solutions using Unity XR, Oculus SDK, and cutting-edge immersive technologies."
    },
    {
      icon: FiCode,
      title: ".NET Core Development",
      description: "Proficient in building robust backend systems, APIs, and enterprise applications using .NET Core and C#."
    },
    {
      icon: FiCpu,
      title: "AI Integration",
      description: "Experienced in integrating AI and machine learning solutions into applications to enhance user experiences."
    }
  ];

  const achievements = [
    {
      icon: FiAward,
      title: "5+ Years Experience",
      description: "Proven track record in software development"
    },
    {
      icon: FiUsers,
      title: "20+ Projects",
      description: "Successfully delivered diverse technical solutions"
    },
    {
      icon: FiCode,
      title: "Multiple Technologies",
      description: "Expertise across various platforms and frameworks"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Constantly exploring new technologies and pushing creative boundaries"
    },
    {
      title: "Quality",
      description: "Committed to delivering clean, efficient, and maintainable code"
    },
    {
      title: "Collaboration", 
      description: "Thriving in team environments and mentoring fellow developers"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate about creating innovative digital experiences through cutting-edge technology
            </p>
          </motion.div>

          <div className="about-content">
            <motion.div className="about-text" variants={itemVariants}>
              <div className="about-intro">
                <p>
                  I'm Abdullah Qadeer, a dedicated software engineer with a passion for creating 
                  immersive digital experiences. With over 5 years of experience in the industry, 
                  I specialize in Unity game development, VR/AR technologies, .NET Core backend 
                  development, and AI integration.
                </p>
                <p>
                  My journey in software development began with a fascination for interactive 
                  media and has evolved into expertise across multiple cutting-edge technologies. 
                  I believe in the power of technology to transform ideas into reality and create 
                  meaningful user experiences.
                </p>
              </div>

              <motion.div className="about-achievements" variants={itemVariants}>
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    className="achievement"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <achievement.icon className="achievement-icon" />
                    <div className="achievement-content">
                      <h4 className="achievement-title">{achievement.title}</h4>
                      <p className="achievement-desc">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="specialties-grid" variants={itemVariants}>
              {specialties.map((specialty, index) => (
                <motion.div
                  key={specialty.title}
                  className="specialty-card"
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="specialty-icon">
                    <specialty.icon />
                  </div>
                  <h3 className="specialty-title">{specialty.title}</h3>
                  <p className="specialty-description">{specialty.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div className="about-values" variants={itemVariants}>
            <h3 className="values-title">Core Values</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="value-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 