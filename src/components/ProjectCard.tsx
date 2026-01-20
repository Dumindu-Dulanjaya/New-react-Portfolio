import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  liveLink,
  githubLink,
  techStack
}) => {
  return (
    <motion.div
      className="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow transition-colors duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-3">
          <motion.a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </motion.a>

          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} />
            <span>Code</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;