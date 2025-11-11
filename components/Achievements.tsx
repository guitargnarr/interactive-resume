'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { resumeData } from '@/lib/resumeData';
import { FaChartLine, FaBriefcase, FaShieldAlt } from 'react-icons/fa';

const Achievements = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [counters, setCounters] = useState(resumeData.achievements.map(() => 0));

  useEffect(() => {
    if (isInView) {
      const intervals: NodeJS.Timeout[] = [];

      resumeData.achievements.forEach((achievement, index) => {
        const target = achievement.value;

        // Skip animation for zero values
        if (target === 0) {
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = 0;
            return newCounters;
          });
          return;
        }

        const increment = target / 50;
        let current = 0;

        const interval = setInterval(() => {
          current = Math.min(current + increment, target);
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.round(current);
            return newCounters;
          });

          if (current >= target) {
            clearInterval(interval);
          }
        }, 30);

        intervals.push(interval);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [isInView]);

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'chart': return <FaChartLine className="text-4xl text-teal-500 mb-4" />;
      case 'briefcase': return <FaBriefcase className="text-4xl text-teal-500 mb-4" />;
      case 'shield': return <FaShieldAlt className="text-4xl text-teal-500 mb-4" />;
      default: return null;
    }
  };

  return (
    <section id="achievements" className="mb-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-3xl font-bold text-center mb-2">Key Career Achievements</h3>
        <p className="text-lg text-center text-gray-600 mb-12">
          Highlighting proven impact in efficiency, quality, and technical leadership.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {resumeData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center">
                {getIcon(achievement.icon)}
                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                  {counters[index]}
                </div>
                <p className="text-gray-500 mt-2 text-lg">
                  {achievement.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;