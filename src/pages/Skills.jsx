import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsCategories } from '../data/portfolioData';

export const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="space-y-10 pb-32">
      {/* Title */}
      <section className="border-b border-cabernet/15 dark:border-cream-100/15 pb-8">
        <p className="text-xs font-pixel-line uppercase tracking-widest text-flame font-bold mb-2">
          [ TECH LANDSCAPE ]
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-pixel-square font-extrabold text-cabernet dark:text-cream-100 uppercase tracking-tight">
          WHAT I WORK WITH
        </h1>
        <p className="text-sm font-pixel-line font-semibold dark:font-normal text-cabernet/80 dark:text-cream-100/80 mt-3 max-w-xl">
          Core languages, frameworks, AI libraries, data analytics tools, and cloud platforms. Hover over any technology to view details.
        </p>
      </section>

      {/* Skills Categories & Interactive Landscape (No numeric prefixes) */}
      <section className="space-y-10">
        {skillsCategories.map((category) => (
          <div key={category.title} className="space-y-6">
            <div className="flex items-center justify-between border-b border-cabernet/15 dark:border-cream-100/15 pb-3">
              <h2 className="text-xs font-pixel-square uppercase tracking-widest text-flame font-bold">
                {category.title}
              </h2>
              <span className="text-xs font-pixel-line text-cabernet/90 dark:text-cream-100/90 font-bold">
                {category.skills.length} TECHNOLOGIES
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {category.skills.map((skill) => {
                const isHovered = activeSkill?.name === skill.name;
                return (
                  <motion.div
                    key={skill.name}
                    onMouseEnter={() => setActiveSkill(skill)}
                    onMouseLeave={() => setActiveSkill(null)}
                    whileHover={{ scale: 1.03, y: -3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[120px] ${
                      isHovered
                        ? 'bg-cabernet text-cream-100 dark:bg-darkForest dark:text-cream-100 border-flame shadow-xl'
                        : 'bg-almond-50 dark:bg-cream-100/5 border-cabernet/15 dark:border-cream-100/15 text-cabernet dark:text-cream-100 hover:border-flame'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-pixel-square font-bold uppercase tracking-wide">
                        {skill.name}
                      </h3>
                      <span className={`w-2 h-2 rounded-full ${isHovered ? 'bg-flame' : 'bg-cabernet/40 dark:bg-cream-100/40'}`} />
                    </div>

                    <p className={`text-sm font-pixel-line mt-3 line-clamp-3 leading-relaxed transition-opacity ${
                      isHovered
                        ? 'text-cream-100/95 dark:text-cream-100/95 font-semibold'
                        : 'text-cabernet/95 dark:text-cream-100/90 font-semibold'
                    }`}>
                      {skill.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
