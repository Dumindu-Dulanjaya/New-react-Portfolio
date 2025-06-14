import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, inventory management, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveLink: 'https://example-ecommerce.com',
      githubLink: 'https://github.com/johndoe/ecommerce-platform',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Tailwind CSS']
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and detailed analytics.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveLink: 'https://example-taskapp.com',
      githubLink: 'https://github.com/johndoe/task-manager',
      techStack: ['React', 'TypeScript', 'Firebase', 'Material-UI', 'Chart.js']
    },
    {
      title: 'Weather Forecast App',
      description: 'A responsive weather application with location-based forecasts, interactive maps, weather alerts, and beautiful animated weather icons.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveLink: 'https://example-weather.com',
      githubLink: 'https://github.com/johndoe/weather-app',
      techStack: ['React', 'OpenWeather API', 'Mapbox', 'CSS3', 'PWA']
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media analytics dashboard with data visualization, scheduled posting, engagement tracking, and multi-platform integration.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveLink: 'https://example-dashboard.com',
      githubLink: 'https://github.com/johndoe/social-dashboard',
      techStack: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL']
    },
    {
      title: 'Online Learning Platform',
      description: 'A modern e-learning platform with video streaming, progress tracking, interactive quizzes, certificate generation, and instructor tools.',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveLink: 'https://example-learning.com',
      githubLink: 'https://github.com/johndoe/learning-platform',
      techStack: ['React', 'Next.js', 'Prisma', 'AWS S3', 'Stripe', 'Socket.io']
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations, dark mode toggle, blog integration, and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveLink: 'https://johndoeportfolio.com',
      githubLink: 'https://github.com/johndoe/portfolio',
      techStack: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite', 'Netlify']
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

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Here are some of the projects I've worked on. Each one represents a unique 
            challenge and learning experience that has contributed to my growth as a developer.
          </p>
          
          <motion.button
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // In a real app, this would download the actual CV
              const link = document.createElement('a');
              link.href = '/path-to-your-cv.pdf';
              link.download = 'John_Doe_CV.pdf';
              link.click();
            }}
          >
            <Download size={20} />
            <span>Download CV</span>
          </motion.button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              techStack={project.techStack}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20 p-8 bg-white rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's create something amazing together!
          </p>
          <motion.a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;