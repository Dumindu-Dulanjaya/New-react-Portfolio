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
      href: '',
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
            Get In <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Connect</h2>
            
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
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full text-blue-600">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-900 hover:text-blue-600 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-900">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg text-gray-600 transition-colors duration-200 ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
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
              className="mt-8 p-6 bg-blue-50 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to reach out via WhatsApp or LinkedIn.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            <ContactForm />
          </motion.div>
        </div>

        {/* Map or Additional CTA */}
        <motion.div
          className="mt-20 text-center p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can bring your ideas to life. I'm excited to hear about 
            your project and explore how we can work together to create something amazing.
          </p>
          <motion.button
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Call
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;