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
    { name: 'Mobile Dev', icon: <Smartphone className="w-8 h-8" />, level: 80 },
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
            About <span className="text-blue-600">Me</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developer with 5+ years of experience creating digital solutions 
            that combine beautiful design with powerful functionality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                I started my journey in web development 5 years ago with a curiosity about 
                how websites work. What began as a hobby quickly became a passion as I 
                discovered the perfect blend of creativity and logical problem-solving 
                that programming offers.
              </p>
              <p>
                I hold a Bachelor's degree in Computer Science from Tech University, 
                where I built a strong foundation in software engineering principles. 
                Since then, I've worked with startups and established companies, 
                helping them bring their digital visions to life.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge through 
                tech blogs and community meetups. I believe in continuous learning 
                and staying updated with the ever-evolving tech landscape.
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
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
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
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            variants={itemVariants}
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 text-blue-600">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <motion.div
                    className="bg-blue-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="text-center text-gray-600 text-sm">{skill.level}%</p>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  Bachelor of Computer Science
                </h4>
                <p className="text-blue-600 font-medium">Tech University</p>
                <p className="text-gray-600">2016 - 2020</p>
                <p className="text-gray-600 mt-2">
                  Graduated with honors, focusing on software engineering and web technologies.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  Senior Full Stack Developer
                </h4>
                <p className="text-blue-600 font-medium">Tech Innovations Inc.</p>
                <p className="text-gray-600">2022 - Present</p>
                <p className="text-gray-600 mt-2">
                  Leading development of scalable web applications and mentoring junior developers.
                </p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  Frontend Developer
                </h4>
                <p className="text-gray-600 font-medium">Digital Solutions Ltd.</p>
                <p className="text-gray-600">2020 - 2022</p>
                <p className="text-gray-600 mt-2">
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