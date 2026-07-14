import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageSquare,
  Facebook
} from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'dulanjaya420@gmail.com',
      href: 'mailto:dulanjaya420@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+94769899274',
      href: 'tel:+94769899274'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Diyagama,homagama,sri lanka',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com/Dumindu-Dulanjaya',
      color: 'hover:text-gray-900'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dumindu-dulanjaya-486745305/',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      label: 'Facebook',
      href: 'https://www.facebook.com/share/1GXmqjRvdi/?mibextid=wwXIfr',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      href: 'https://www.instagram.com/dumindu_dulanjaya?igsh=bDFtdWI1cG11azMz&utm_source=qr',
      color: 'hover:text-pink-600'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      label: 'WhatsApp',
      href: '',
      color: 'hover:text-green-600'
    }
  ];

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
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-yellow-500 font-semibold block mb-2">GET IN TOUCH</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase">
            CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">ME.</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            I'm always interested in hearing about new opportunities and interesting projects.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-2xl font-extrabold text-white mb-8 tracking-tight uppercase">Let's Connect</h2>

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/5 border border-yellow-500/10 rounded-full text-yellow-500">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-neutral-200 hover:text-yellow-400 transition-colors duration-200 font-light text-base"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-neutral-200 font-light text-base">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Follow Me</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-[#121212] border border-neutral-900 rounded-xl text-neutral-400 hover:text-yellow-500 hover:border-neutral-800 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              className="mt-10 p-6 bg-[#121212]/30 border border-neutral-900 rounded-2xl transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Quick Response</h3>
              <p className="text-neutral-400 font-light leading-relaxed text-sm">
                I typically respond to emails within 24 hours. For urgent matters,
                feel free to reach out via WhatsApp or LinkedIn.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-[#121212]/50 border border-neutral-900 rounded-2xl shadow-lg p-8 transition-colors duration-300"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Send a Message</h2>
            <ContactForm />
          </motion.div>
        </div>

        {/* Map or Additional CTA */}
        <motion.div
          className="mt-20 text-center p-10 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 border border-neutral-900 rounded-2xl text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 uppercase tracking-tight">Ready to Start Your Project?</h2>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto font-light leading-relaxed text-sm sm:text-base">
            Let's discuss how we can bring your ideas to life. I'm excited to hear about
            your project and explore how we can work together to create something amazing.
          </p>
          <motion.button
            className="bg-yellow-500 text-black px-8 py-3.5 rounded-xl font-bold hover:bg-yellow-600 transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule a Call
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;