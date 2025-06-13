'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const techData = {
  'Web Dev': [
    { name: 'React', size: 240 },
    { name: 'Next.js', size: 300 },
    { name: 'Tailwind CSS', size: 190 },
    { name: 'Node.js', size: 260 },
    { name: 'Express', size: 170 },
    { name: 'TypeScript', size: 210 },
    { name: 'HTML', size: 130 },
    { name: 'CSS', size: 110 },
  ],
  'UI/UX': [
    { name: 'Figma', size: 290 },
    { name: 'Adobe XD', size: 180 },
    { name: 'Sketch', size: 200 },
    { name: 'Framer', size: 170 },
    { name: 'InVision', size: 140 },
    { name: 'Zeplin', size: 120 },
  ],
  Database: [
    { name: 'MySQL', size: 300 },
    { name: 'MongoDB', size: 260 },
    { name: 'PostgreSQL', size: 240 },
    { name: 'Redis', size: 180 },
    { name: 'Elasticsearch', size: 140 },
    { name: 'Cassandra', size: 160 },
  ],
  Cloud: [
    { name: 'AWS', size: 280 },
    { name: 'Firebase', size: 200 },
    { name: 'Vercel', size: 220 },
    { name: 'Azure', size: 210 },
    { name: 'Netlify', size: 180 },
    { name: 'Heroku', size: 150 },
  ],
};

export default function TechBubbleSection() {
  const [selected, setSelected] = useState('Web Dev');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-white to-gray-100 py-20 px-4 overflow-hidden">
      <h2 className="text-4xl font-bold mb-10">Technologies We Work With</h2>

      {/* Category Switch Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.keys(techData).map((category) => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              selected === category
                ? 'bg-black text-white'
                : 'bg-gray-200 text-black hover:bg-black hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Bubble Grid */}
      <div
        ref={ref}
        className="relative w-full max-w-[1600px] flex flex-wrap justify-center gap-8 min-h-[80vh]"
      >
        {inView &&
          techData[selected].map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.4, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 + i * 0.1 }}
              className="flex items-center justify-center rounded-full text-black font-semibold bg-green-400 shadow-lg"
              style={{
                width: `${tech.size}px`,
                height: `${tech.size}px`,
              }}
            >
              {tech.name}
            </motion.div>
          ))}
      </div>
    </section>
  );
}
