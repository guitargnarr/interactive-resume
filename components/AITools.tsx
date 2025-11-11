'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaSpinner } from 'react-icons/fa';

const AITools = () => {
  const [role, setRole] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validateInput = (input: string): boolean => {
    if (!input.trim()) {
      setError('Please enter a job role or title');
      return false;
    }
    if (input.length < 3) {
      setError('Role must be at least 3 characters');
      return false;
    }
    if (input.length > 100) {
      setError('Role must be less than 100 characters');
      return false;
    }
    // Basic XSS prevention
    if (/<[^>]*>/.test(input)) {
      setError('Invalid characters detected');
      return false;
    }
    setError('');
    return true;
  };

  const generateAnalysis = async () => {
    if (!validateInput(role)) {
      return;
    }

    setLoading(true);
    setAnalysis('');
    setError('');

    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 2000));

    const mockAnalysis = `
• **Technical Leadership Match**: Your proven track record of architecting full-stack platforms and reducing operational overhead by 69% directly aligns with the ${role} role's need for technical innovation and process optimization.

• **Cross-functional Expertise**: With 9 years bridging business analysis and engineering at a Fortune 50 company, you bring unique value in translating complex requirements into actionable technical roadmaps.

• **Modern Tech Stack Proficiency**: Your hands-on experience with Python/FastAPI, React/TypeScript, and cloud deployment (GCP/Vercel) positions you to immediately contribute to modern development initiatives.
    `;

    setAnalysis(mockAnalysis);
    setLoading(false);
  };

  return (
    <section id="ai-tools" className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
      >
        <div className="text-center mb-8">
          <FaRobot className="text-5xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Role Match Assistant</h3>
          <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
            🎭 Demo Mode - Simulated Analysis
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Test my profile against a real-world need. Enter any job title or role
            and I'll generate a personalized 3-point pitch based on my skills and experience.
          </p>
        </div>

        <div className="max-w-xl mx-auto space-y-4">
          <label htmlFor="role-input" className="sr-only">Enter a job role or title</label>
          <input
            type="text"
            id="role-input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g., Senior Product Manager, Technical Lead, QA Automation Director"
            maxLength={100}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            aria-describedby="role-helper-text"
          />
          <p id="role-helper-text" className="sr-only">Enter a job title to receive a personalized analysis of how my skills match the role requirements</p>

          {error && (
            <p className="text-red-600 text-sm mt-1" role="alert">{error}</p>
          )}

          <button
            onClick={generateAnalysis}
            disabled={loading}
            className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4 rounded-lg font-bold hover:from-teal-600 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Analyzing Fit...
              </>
            ) : (
              <>
                <FaRobot className="mr-2" />
                Generate 3-Point Fit Analysis
              </>
            )}
          </button>
        </div>

        {analysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
          >
            <div className="bg-gradient-to-r from-teal-50 to-orange-50 p-6 rounded-xl border border-teal-200">
              <div className="prose prose-sm max-w-none text-gray-700">
                <div dangerouslySetInnerHTML={{
                  __html: analysis.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/•/g, '<br/>•')
                    .trim()
                }} />
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default AITools;