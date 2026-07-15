import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Download, Eye, Github, Mail, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import WelcomeLoader from '../components/WelcomeLoader';
import portfolioimage from '../assets/portfolioimage.png';
import { MinimalistHeroRight } from '../components/ui/minimalist-hero-right';
import { ServicesCarousel } from '../components/ui/services-carousel';
import { ProjectsExhibit } from '../components/ui/projects-exhibit';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredService, setHoveredService] = useState<number | null>(null);



  const scrollToNext = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: 'Frontend Development',
      description: 'Crafting responsive, high-fidelity user interfaces. Specialized in semantic layouts, component architectures, and responsive flow using React, TypeScript, and Tailwind CSS.',
      tech: 'React • TypeScript • Tailwind • Next.js'
    },
    {
      title: 'Backend Development',
      description: 'Engineering robust and scalable API services and databases. Proficient in structure design, authorization, data caching, and server flows using Nest.js, Node, and PHP.',
      tech: 'Nest.js • Node • Express • MySQL • PHP'
    },
    {
      title: 'UI/UX Design',
      description: 'Designing elegant user journeys with attention to modern layouts, accessibility, typography hierarchy, and wireframing for digital application interfaces.',
      tech: 'Figma • User Flows • Wireframing • Prototyping'
    }
  ];

  const featuredProjects = [
    {
      number: '01',
      title: 'Movie Search & Trailer Finder',
      description: 'A responsive React application querying movie metadata, featuring real-time title search, sorting by rating/year, and trailer media embeds using modern API endpoints.',
      tags: ['React', 'JavaScript', 'OMDb API', 'Tailwind CSS'],
      image: 'https://i.postimg.cc/V6SPt4Q9/jakub-zerdzicki-Rn-H1m7-DPt-AU-unsplash.jpg',
      github: 'https://github.com/Dumindu-Dulanjaya/movie-search-app.git'
    },
    {
      number: '02',
      title: 'Library Management System',
      description: 'A comprehensive management system developed to automate books logging, member checkouts, and historical logs tracking. Built with structured system flow for administrators.',
      tags: ['Python', 'SQL', 'MVC Architecture', 'Tkinter'],
      image: 'https://i.postimg.cc/dVFh6fNZ/henrique-ferreira-AP5-7-Zqtf6-Y-unsplash-1.jpg',
      github: 'https://github.com/Dumindu-Dulanjaya/Library-Management-System.git'
    },
    {
      number: '03',
      title: 'Weather Forecast App',
      description: 'A location-aware meteorological application providing detailed weather projections, weather charts, and smooth layouts based on local geolocation metrics.',
      tags: ['React', 'OpenWeather API', 'Mapbox', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Dumindu-Dulanjaya/Weather-App.git'
    }
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <WelcomeLoader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="min-h-screen relative overflow-hidden bg-[#0B0B0B] text-white selection:bg-indigo-500 selection:text-white transition-colors duration-300">
        
        {/* Subtle CSS Dot Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />

        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Hero Section Container */}
        {!isLoading && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
          >
            <div 
              className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12"
            >
              
              {/* Left Side: Content */}
              <div className="lg:col-span-6 text-left flex flex-col justify-center order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-yellow-500 mb-6 tracking-wider uppercase">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                    SOFTWARE ENGINEERING INTERN // FULL-STACK DEVELOPER
                  </span>

                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-[1.05] text-white">
                    SOFTWARE
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                      ENGINEER.
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg text-neutral-400 mb-8 max-w-xl leading-relaxed font-light">
                    A motivated Software Engineer specializing in building enterprise software solutions, scalable web architectures, and interactive digital platforms using <span className="text-white font-medium">React.js</span>, <span className="text-white font-medium">NestJS</span>, and <span className="text-white font-medium">Spring Boot</span>.
                  </p>

                  <div className="flex flex-wrap gap-4 items-center">
                    <Link to="/projects">
                      <motion.button
                        className="relative group overflow-hidden bg-white text-black px-8 py-4 rounded-xl font-bold text-base hover:bg-neutral-100 transition-all duration-300 flex items-center space-x-2 shadow-[0_4px_20px_rgba(255,255,255,0.05)]"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Eye size={18} />
                        <span>View Projects</span>
                      </motion.button>
                    </Link>

                    <motion.button
                      className="border border-neutral-800 bg-neutral-950/40 backdrop-blur-sm text-neutral-300 hover:text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-neutral-900/60 hover:border-neutral-700 transition-all duration-300 flex items-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = "/Dumindu Dulanjaya_CV_Software_Engineer.pdf";
                        link.download = 'Dumindu_Dulanjaya_CV.pdf';
                        link.click();
                      }}
                    >
                      <Download size={18} />
                      <span>Download CV</span>
                    </motion.button>
                  </div>

                  <div className="flex items-center gap-4 mt-8 pt-8 border-t border-neutral-900">
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-600">Connect:</span>
                    <a href="https://github.com/Dumindu-Dulanjaya" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="mailto:dulanjaya420@gmail.com" className="text-neutral-500 hover:text-white transition-colors">
                      <Mail size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/dumindu-dulanjaya-486745305/" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right Side: Large Borderless Minimalist Image (Custom Parallax Component) */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end order-1 lg:order-2 overflow-visible">
                <MinimalistHeroRight 
                  imageSrc={portfolioimage} 
                  imageAlt="Dumindu Dulanjaya" 
                />
              </div>

            </div>

            {/* Scroll Down Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.button
                onClick={scrollToNext}
                className="p-2.5 rounded-full border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors duration-200 shadow-md animate-bounce"
              >
                <ArrowDown className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Services Redesign Section */}
      {!isLoading && (
        <section 
          id="services-section"
          className="relative z-10 py-20 bg-[#0B0B0B] border-t border-neutral-900 text-white transition-colors duration-300"
        >
          <ServicesCarousel />
        </section>
      )}

      {/* Projects Showcase Section */}
      {!isLoading && (
        <ProjectsExhibit />
      )}
    </>
  );
};

export default Home;