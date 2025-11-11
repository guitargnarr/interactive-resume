'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/lib/resumeData';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Projects = () => {
  return (
    <section id="projects" className="mb-24">
      <h3 className="text-3xl font-bold text-center mb-2">Project Showcase</h3>
      <p className="text-lg text-center text-gray-600 mb-12">
        A selection of recent work demonstrating key capabilities.
      </p>

      <div className="space-y-12 max-w-6xl mx-auto">
        {resumeData.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h4 className="text-2xl font-bold mb-2 text-gray-800">
                  {project.title}
                </h4>
                <p className="text-md font-medium text-orange-500 mb-4">
                  {project.stack}
                </p>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="order-1 lg:order-2">
                {project.chartData ? (
                  <div className="h-64 sm:h-72 md:h-64">
                    <Bar
                      data={{
                        labels: project.chartData.labels,
                        datasets: [
                          {
                            label: project.chartData.title,
                            data: project.chartData.data,
                            backgroundColor: [
                              'rgba(224, 122, 95, 0.6)',
                              'rgba(129, 178, 154, 0.6)'
                            ],
                            borderColor: [
                              'rgba(224, 122, 95, 1)',
                              'rgba(129, 178, 154, 1)'
                            ],
                            borderWidth: 2,
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            display: false,
                          },
                          title: {
                            display: true,
                            text: project.chartData.title,
                            font: {
                              size: 16,
                            },
                          },
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                          },
                        },
                      }}
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-64 bg-gradient-to-br from-teal-50 to-orange-50 rounded-lg p-8">
                    <p className="text-gray-600 text-center">
                      This project highlights architectural design and user experience principles.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;