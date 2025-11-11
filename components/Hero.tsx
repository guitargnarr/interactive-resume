'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { resumeData } from '@/lib/resumeData';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-24 pt-16"
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
        {resumeData.name}
      </h1>
      <h2 className="text-2xl md:text-3xl font-medium text-orange-500 mb-6">
        {resumeData.title}
      </h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
        {resumeData.summary}
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href={resumeData.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View LinkedIn Profile"
          className="text-gray-700 hover:text-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg p-1"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href={resumeData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View GitHub Profile"
          className="text-gray-700 hover:text-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg p-1"
        >
          <FaGithub size={32} />
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;