import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      console.log('Sending email with:', {
        serviceId: "service_bnyctlp",
        templateId: "template_5bpyejn",
        publicKey: "Aw6O7bJspa9MAGC5T",
        formData
      });

      const response = await emailjs.send(
        "service_bnyctlp",
        "template_5bpyejn",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "Aw6O7bJspa9MAGC5T"
      );

      console.log('EmailJS Success:', response);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Failed:', error);
      let msg = 'Sorry, there was an error sending your message. Please try again.';
      if (typeof error === 'object' && error !== null && 'text' in error) {
        msg = `Error: ${(error as any).text}`;
      } else if (error instanceof Error) {
        msg = `Error: ${error.message}`;
      }
      setErrorMessage(msg);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div>
        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3.5 border border-neutral-900 rounded-xl focus:ring-1 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 bg-[#0F0F0F] text-white placeholder-neutral-600 font-light text-sm"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3.5 border border-neutral-900 rounded-xl focus:ring-1 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 bg-[#0F0F0F] text-white placeholder-neutral-600 font-light text-sm"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3.5 border border-neutral-900 rounded-xl focus:ring-1 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 bg-[#0F0F0F] text-white placeholder-neutral-600 font-light text-sm"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3.5 border border-neutral-900 rounded-xl focus:ring-1 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 resize-none bg-[#0F0F0F] text-white placeholder-neutral-600 font-light text-sm"
          placeholder="Tell me about your project or just say hello..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={isLoading}
        className="w-full bg-yellow-500 text-black py-4 px-6 rounded-xl font-bold hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isLoading ? (
          <>
            <Loader className="animate-spin text-black" size={18} />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send size={18} className="text-black" />
            <span>Send Message</span>
          </>
        )}
      </motion.button>

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-yellow-500/5 border border-yellow-500/10 rounded-xl text-yellow-500 text-sm text-center"
        >
          Thank you! Your message has been sent successfully.
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-500/5 border border-red-500/10 rounded-xl text-red-400 text-sm text-center"
        >
          {errorMessage || 'Sorry, there was an error sending your message. Please try again.'}
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;