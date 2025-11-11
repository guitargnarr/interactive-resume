'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '@/lib/resumeData';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Timeline = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="journey" className="mb-24">
      <h3 className="text-3xl font-bold text-center mb-2">Interactive Career Journey</h3>
      <p className="text-lg text-center text-gray-600 mb-12">
        An overview of my professional evolution. Click each title to expand.
      </p>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line - hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-200 to-orange-200 rounded-full"></div>

        <div className="space-y-8 md:space-y-16">
          {resumeData.journey.map((item, index) => {
            const isLeft = item.side === 'left';
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Mobile: Stack vertically, Desktop: Alternate sides */}
                <div className={`flex items-center ${isLeft && 'md:flex-row-reverse'} w-full flex-col md:flex-row`}>
                  <div className="hidden md:block md:w-1/2"></div>
                  <div className="w-full md:w-1/2 px-4 md:px-8">
                    <div
                      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 cursor-pointer hover:shadow-xl transition-shadow"
                      onClick={() => toggleExpand(index)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-semibold text-lg text-gray-800">
                            {item.role}
                          </p>
                          <p className="text-md text-orange-500">{item.company}</p>
                          <p className="text-sm text-gray-500 mb-2">{item.period}</p>
                        </div>
                        <div className="ml-2 mt-1">
                          {isExpanded ? (
                            <FaChevronUp className="text-gray-400" />
                          ) : (
                            <FaChevronDown className="text-gray-400" />
                          )}
                        </div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                              {item.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="text-sm">
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Timeline dot - positioned differently on mobile */}
                <div className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-6 h-6 bg-teal-500 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;