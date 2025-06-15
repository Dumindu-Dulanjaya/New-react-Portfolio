import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: ' Just launched my Movie Search & Trailer Finder App with React!',
      description: 'A React-based movie search application that allows users to search for movies by title, view posters, and get release years using the OMDb API.',
      image: 'https://i.postimg.cc/V6SPt4Q9/jakub-zerdzicki-Rn-H1m7-DPt-AU-unsplash.jpg',
      liveLink: 'https://lnkd.in/eaNhB7-4',
      githubLink: 'https://github.com/Dumindu-Dulanjaya/movie-search-app.git',
      techStack:  ['React', 'JavaScript', 'CSS','Tailwind CSS']
    },
    {
      title: 'Library Management System',
      description: 'Developed a full-stack Library Management System to automate book tracking, member management, and borrowing processes. The system provides librarians with an intuitive interface to manage inventory while giving users a seamless experience to explore available books.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      githubLink: 'https://github.com/Dumindu-Dulanjaya/Library-Management-System.git',
      techStack: ['python' ]
    },
    {
      title: 'Weather Forecast App',
      description: 'A responsive weather application with location-based forecasts, interactive maps, weather alerts, and beautiful animated weather icons.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveLink: 'https://lnkd.in/e6JV3QjD',
      githubLink: 'https://github.com/Dumindu-Dulanjaya/Weather-App.git',
      techStack: ['React', 'OpenWeather API', 'Mapbox', 'CSS3', 'PWA']
    },
    {
      title: 'Java Calculator App ',
      description: 'Built a Java Swing calculator using MVC architecture for clean, scalable code!',
      image: 'https://i.postimg.cc/52QWRnkX/404-Hlbfm6-J7-VR8-unsplash.jpg',
      linkedLink: 'https://www.linkedin.com/posts/dumindu-dulanjaya-486745305_java-mvc-oop-activity-7321850110861066240-kdUR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3izGYBdTx9JhO1f0jqfjHkw5TyeeTuPYk',
      githubLink: 'https://github.com/Dumindu-Dulanjaya/Calculator.git',
      techStack: ['Java','Swing','MVC','OOP']
    },
    {
      title: 'Web Confrence Management System',
      description: 'A Web Conference Management System is an online platform designed to manage and streamline the planning, organization, and execution of virtual or in-person conferences.',
      image: 'https://i.postimg.cc/253rrC6S/charlesdeluvio-Lks7vei-e-Ag-unsplash.jpg',
      liveLink: 'https://web-conference-management-system-gray.vercel.app/',
      githubLink: 'https://github.com/Dumindu-Dulanjaya/Web-Conference-Management-System.git',
      techStack: ['Html', 'Css', 'Java Script', 'My sql']
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations, dark mode toggle, blog integration, and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveLink: 'https://new-react-portfolio-rho.vercel.app/',
      githubLink: 'https://github.com/Dumindu-Dulanjaya/New-react-Portfolio',
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
                const cvUrl = "https://github.com/Dumindu-Dulanjaya/test/blob/main/cv-2.pdf?raw=true";
                const link = document.createElement('a');
                link.href = cvUrl;
                link.download = 'Dumindu_Dulanjaya_CV.pdf';
                link.click();
                document.body.appendChild(link);
                document.body.removeChild(link);
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