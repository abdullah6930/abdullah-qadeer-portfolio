import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { 
  FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiExternalLink,
  FiSend, FiUser, FiMessageSquare, FiCheck, FiX
} from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');
  const [errors, setErrors] = useState({});

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'abdullahqadeerdev@gmail.com',
      href: 'mailto:abdullahqadeerdev@gmail.com'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+92 311 5799710',
      href: 'tel:+923001234567'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Rawalpindi, Pakistan',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com/abdullah6930'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/abdullahqadeerdev'
    },
    {
      icon: FiExternalLink,
      label: 'Portfolio',
      href: 'https://abdullah-portfolio.com'
    }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('sending');
    
    // EmailJS configuration - replace with your actual IDs
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'your_template_id';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key';
    
    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Abdullah Qadeer',
          reply_to: formData.email
        },
        publicKey
      );
      
      console.log('Email sent successfully:', result.text);
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus('error');
    }
    
    setTimeout(() => setFormStatus(''), 5000);
  };

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
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to collaborate? Let's discuss your next project and bring your ideas to life.
            </p>
          </motion.div>

          <div className="contact-content">
            <motion.div className="contact-form-container" variants={itemVariants}>
              <div className="form-header">
                <h3>Send me a message</h3>
                <p>I'll get back to you as soon as possible</p>
              </div>

              {formStatus === 'success' && (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FiCheck />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {formStatus === 'error' && (
                <motion.div 
                  className="error-message"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FiX />
                  <span>Failed to send message. Please try again.</span>
                </motion.div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FiUser />
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={errors.name ? 'error' : ''}
                      placeholder="Your full name"
                    />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">
                      <FiMail />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    <FiMessageSquare />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={errors.subject ? 'error' : ''}
                    placeholder="Project discussion, collaboration, etc."
                  />
                  {errors.subject && <span className="field-error">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <FiMessageSquare />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                <motion.button
                  type="submit"
                  className={`submit-btn ${formStatus === 'sending' ? 'loading' : ''}`}
                  disabled={formStatus === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            <motion.div className="contact-info" variants={itemVariants}>
              <div className="contact-methods">
                <h3>Contact Information</h3>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="contact-method"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <div className="contact-icon">
                      <info.icon />
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">{info.label}</span>
                      <span className="contact-value">{info.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="response-time">
                <h4>Response Time</h4>
                <p>I typically respond within 24 hours during business days.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 