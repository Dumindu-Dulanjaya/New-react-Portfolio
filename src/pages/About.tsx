import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Palette,
  GitBranch,
  Server,
  Zap
} from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React', icon: <Code className="w-8 h-8" />, level: 95 },
    { name: 'TypeScript', icon: <Code className="w-8 h-8" />, level: 90 },
    { name: 'Node.js', icon: <Server className="w-8 h-8" />, level: 88 },
    { name: 'Python', icon: <Zap className="w-8 h-8" />, level: 85 },
    { name: 'MongoDB', icon: <Database className="w-8 h-8" />, level: 82 },
    { name: 'UI/UX Design', icon: <Palette className="w-8 h-8" />, level: 88 },
    { name: 'Mobile Dev', icon: <Smartphone className="w-8 h-8" />, level: 30 },
    { name: 'Git', icon: <GitBranch className="w-8 h-8" />, level: 92 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-blue-600">Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate Full Stack Developer with a Love for creating dynamic, user-friendly web applications. With expertise in both frontend and backend technologies, I strive to build seamless digital experiences that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                My journey in tech started with a fascination for how things work behind the scenes, and it has evolved into a passion for creat

              </p>
              <p>
                I’m a passionate and dedicated undergraduate student currently pursuing my studies at the Institute of Technology, University of Moratuwa (ITUM).I have a growing interest in areas such as web development, software engineering, and emerging technologies.
              </p>
              <p>
                As I continue my academic journey, I actively seek opportunities to expand my skills through hands-on projects, collaborations, and continuous learning. I enjoy contributing to open-source projects, learning from tech communities, and staying updated with the latest advancements in the tech world.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative z-10">
              <img
                src="https://i.postimg.cc/253rrC6S/charlesdeluvio-Lks7vei-e-Ag-unsplash.jpg"
                alt="Working at desk"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-blue-200 rounded-xl -z-10"></div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
            variants={itemVariants}
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mx-auto mb-4 text-blue-600 dark:text-blue-400">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Experience */}
        <motion.div
          className="mt-20 grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Diploma in Information Technology
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Institute Of Technology University Of Moratuwa</p>
                <p className="text-gray-600 dark:text-gray-400">2023 - Present</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Undergraduated , focusing on software engineering and web technologies.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Learning Full Stack Developing
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium"></p>
                <p className="text-gray-600 dark:text-gray-400">2023 - Present</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2"></p>
              </div>
              <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Frontend Developer
                </h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium"></p>
                <p className="text-gray-600 dark:text-gray-400">2023 - Present</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Developed responsive web applications using React and modern JavaScript.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;