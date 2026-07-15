import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import anawuma from '../assets/anawuma.png';
import sanota from '../assets/sanota.png';
import vms from '../assets/vms.png';
import knoweb from '../assets/knoweb.png';

const Projects = () => {
  const projects = [
    {
      title: "Anawuma",
      description: "Developed a full-stack restaurant and hotel management system with QR-based customer ordering and real-time kitchen order tracking. Built secure admin dashboards for billing, inventory management, reservations, and sales reporting. Integrated Socket.IO for real-time order updates.",
      image: anawuma,
      liveLink: "http://152.42.179.36/",
      githubLink: "https://github.com/Knoweb/Anawuma-Resturant-App-.git",
      techStack: ["React.js", "Next.js", "NestJS", "MySQL", "Socket.IO"]
    },
    {
      title: "Sanota",
      description: "Developed a responsive industrial automation platform with a modern React frontend and Spring Boot backend. Designed and implemented RESTful APIs with secure authentication and MySQL database integration. Integrated interactive maps and dynamic project showcases to enhance user engagement.",
      image: sanota,
      liveLink: "http://188.166.182.111",
      githubLink: "https://github.com/Knoweb/sanota-site.git",
      techStack: ["React.js", "Spring Boot", "MySQL", "Vite", "Framer Motion", "Leaflet API"]
    },
    {
      title: "VMS Super Mart",
      description: "Developing a full-stack supermarket management system featuring inventory, billing, logistics, and customer storefront modules. Built an administrative dashboard for product, inventory, and order management with real-time monitoring and Socket.IO-based live rider tracking.",
      image: vms,
      liveLink: "https://vms-super-mart.vercel.app/",
      githubLink: "https://github.com/Dumindu-Dulanjaya/vms-super-mart.git",
      techStack: ["React.js", "Next.js", "TypeScript", "MySQL", "Socket.IO", "Tailwind CSS"]
    },
    {
      title: "Knoweb Official Website",
      description: "Designed and developed the official corporate website for Knoweb Solutions using Next.js and React. Improved website performance, responsiveness, and SEO through server-side rendering and modern frontend practices. Deployed and maintained the production cloud platform.",
      image: knoweb,
      liveLink: "http://167.71.217.97",
      githubLink: "https://github.com/Knoweb/Knoweb-site.git",
      techStack: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Git"]
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
    <div className="pt-16 min-h-screen bg-[#0B0B0B] text-white transition-colors duration-300 relative">
      {/* Subtle CSS Dot Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-yellow-500 font-semibold block mb-2">WORKS</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">PROJECTS.</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            Here are some of the projects I've worked on. Each one represents a unique
            challenge and learning experience that has contributed to my growth as a developer.
          </p>

          <motion.button
            className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-600 transition-colors duration-200 flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const link = document.createElement('a');
              link.href = "/Dumindu Dulanjaya_CV___Full_Stack_Developer.pdf";
              link.download = 'Dumindu_Dulanjaya_CV.pdf';
              link.click();
            }}
          >
            <Download size={18} />
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
          className="text-center mt-20 p-10 bg-[#121212]/50 border border-neutral-900 rounded-2xl shadow-lg transition-colors duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 uppercase tracking-tight">
            Interested in working together?
          </h2>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto font-light leading-relaxed text-sm sm:text-base">
            I'm always open to discussing new opportunities and interesting projects.
            Let's create something amazing together!
          </p>
          <motion.a
            href="/contact"
            className="inline-block bg-yellow-500 text-black px-8 py-3.5 rounded-xl font-bold hover:bg-yellow-600 transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;