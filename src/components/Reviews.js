import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaStar, FaQuoteLeft, FaExternalLinkAlt } from 'react-icons/fa';
import './Reviews.css';

const Reviews = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const reviews = [
    {
      id: 1,
      name: "Jimterdina",
      location: "United States",
      rating: 5,
      text: "I intend to use this resource again. I consider the work request I made to be of high difficulty. The work was delivered on time and to spec.",
      service: "Unity Game Development"
    },
    {
      id: 2,
      name: "Angelosmith187",
      location: "United States",
      rating: 5,
      text: "Abdullah was very patient and worked effortlessly on my project. I will continue to work with him in the future.",
      service: "Game Development"
    },
    {
      id: 3,
      name: "Mumiix58",
      location: "Austria",
      rating: 5,
      text: "I had the pleasure of working with Abdullah Qadeer on a Unity and Photon project, and I can confidently say he is one of the best professionals I've collaborated with. He quickly identified and resolved the issues we were facing, demonstrating deep technical expertise and a strong understanding of both Unity and Photon networking.",
      service: "Unity & Photon Development"
    },
    {
      id: 4,
      name: "Ghotos",
      location: "United Kingdom",
      rating: 5,
      text: "Went to the extra effort to help me fix my game and even changed the lighting. Was great with communication and I did not think it would work that well. Would definitely come to Abdullah in the future with help.",
      service: "Game Development & Optimization"
    },
    {
      id: 5,
      name: "Gamesbysaqib",
      location: "Pakistan",
      rating: 5,
      text: "Abdullah Qadeer is such a talented and professional person I ever worked with. Highly recommended regarding his expertise in Unity development and game programming.",
      service: "Unity Development"
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`star ${index < rating ? 'filled' : 'empty'}`}
      />
    ));
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="reviews-content"
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2>Client Reviews</h2>
            <p>What clients say about my work on Fiverr</p>
            <div className="fiverr-badge">
              <span className="rating-display">
                <span className="rating-number">5.0</span>
                <div className="stars">
                  {renderStars(5)}
                </div>
                <span className="review-count">9 reviews</span>
              </span>
              <a 
                href="https://www.fiverr.com/abdullah6930" 
                target="_blank" 
                rel="noopener noreferrer"
                className="fiverr-link"
              >
                View on Fiverr <FaExternalLinkAlt />
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="reviews-grid">
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                variants={itemVariants}
                className="review-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="review-header">
                  <div className="reviewer-info">
                    <h4>{review.name}</h4>
                    <span className="location">{review.location}</span>
                  </div>
                  <div className="stars">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                <div className="review-content">
                  <FaQuoteLeft className="quote-icon" />
                  <p>{review.text}</p>
                </div>
                
                <div className="review-service">
                  <span className="service-tag">{review.service}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
