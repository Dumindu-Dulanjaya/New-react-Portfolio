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
      className="bg-[#121212]/50 border border-neutral-900 rounded-2xl overflow-hidden hover:border-neutral-800 transition-all duration-300 shadow-lg"
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
          className="w-full h-48 object-cover transition-transform duration-350 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 to-transparent opacity-60" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-neutral-400 mb-4 line-clamp-3 font-light text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-0.5 bg-neutral-900 border border-neutral-850 text-neutral-400 text-[10px] font-mono rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-3">
          {liveLink && (
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-black font-bold text-sm rounded-xl hover:bg-yellow-600 transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink size={14} />
              <span>Live Demo</span>
            </motion.a>
          )}

          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 border border-neutral-850 text-neutral-400 font-medium text-sm rounded-xl hover:bg-neutral-900 hover:text-white transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={14} />
            <span>Code</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;