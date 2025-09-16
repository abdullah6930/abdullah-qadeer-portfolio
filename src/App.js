import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { trackPageView } from './firebase';

function App() {
  useEffect(() => {
    trackPageView();
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Reviews />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 