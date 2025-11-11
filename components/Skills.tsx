'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/lib/resumeData';

const skillDetails: Record<string, string> = {
  'Python': 'Core language for backend development and automation. Used extensively in FastAPI applications, data processing pipelines, and ML model development. 5+ years of professional experience.',
  'TypeScript': 'Primary language for type-safe frontend development. Expert in React/Next.js applications with complex state management. Ensures code reliability and maintainability.',
  'React': 'Advanced proficiency in building interactive UIs, custom hooks, performance optimization, and state management with Redux/Zustand. Built multiple production applications.',
  'FastAPI': 'Modern Python framework for building high-performance APIs. Implemented 39+ async endpoints handling 1000+ daily operations with sub-100ms response times.',
  'SQL': '9+ years writing complex queries for data validation, cross-system integrity checks, and analytics. Expert in query optimization and database design.',
  'Docker': 'Containerization for consistent development and deployment environments. Experience with multi-stage builds, compose files, and orchestration.',
  'GCP': 'Cloud platform expertise including Cloud Run, Cloud Functions, Firestore, and IAM. Deployed and managed production applications.',
  'Vercel': 'Platform of choice for Next.js deployments. Expert in edge functions, environment management, and performance optimization.',
  'spaCy NLP': 'Natural language processing for text classification and entity extraction. Built AI-powered email classification achieving 95% accuracy.',
  'pytest': 'Comprehensive testing framework experience. Write unit, integration, and end-to-end tests ensuring code quality and reliability.',
  'Agile/Scrum': '9+ years in Agile environments. Experienced in sprint planning, retrospectives, and cross-functional collaboration at Fortune 50 scale.',
  'Default': 'Professional experience applying this skill in production environments, contributing to successful project outcomes and business value.'
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const categories = Object.keys(resumeData.skills);
  const currentSkills = resumeData.skills[selectedCategory as keyof typeof resumeData.skills];

  return (
    <section id="skills" className="mb-24">
      <h3 className="text-3xl font-bold text-center mb-2">Technical Skills Explorer</h3>
      <p className="text-lg text-center text-gray-600 mb-12">
        Filter by category to explore my technical proficiencies.
      </p>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedCategory === category
                ? 'bg-teal-500 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-wrap justify-center gap-3 mb-8"
      >
        {currentSkills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: index * 0.02 }}
            onClick={() => setSelectedSkill(skill)}
            className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 px-4 py-2 rounded-lg text-sm cursor-pointer hover:from-teal-100 hover:to-teal-50 hover:shadow-md transition-all border border-gray-200"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>

      {/* Selected Skill Detail */}
      {selectedSkill && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-gradient-to-r from-teal-50 to-orange-50 p-6 rounded-xl border border-teal-200"
        >
          <h4 className="font-semibold text-lg mb-2 text-teal-700">
            {selectedSkill}
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            {skillDetails[selectedSkill] || skillDetails['Default']}
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default Skills;