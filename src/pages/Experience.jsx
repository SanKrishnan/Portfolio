import React from 'react';
import { experience } from '../data/portfolioData';

export const Experience = () => {
  return (
    <div className="space-y-16">
      {/* Title */}
      <section className="border-b border-cabernet/15 dark:border-cream-100/15 pb-8">
        <p className="text-xs font-pixel-line uppercase tracking-widest text-flame font-semibold mb-2">
          [ INDUSTRY INTERNSHIP ]
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-pixel-square font-extrabold text-cabernet dark:text-cream-100 uppercase tracking-tight">
          EXPERIENCE
        </h1>
        <p className="text-sm font-pixel-line font-semibold dark:font-normal text-cabernet/90 dark:text-cream-100/90 mt-3 max-w-xl">
          Professional experience spanning software engineering and AI/ML through internships at MPOnline Limited and Edunet Foundation, supported by AICTE and IBM SkillsBuild.
        </p>
      </section>

      {/* Timeline List */}
      <section className="relative border-l-2 border-cabernet/25 dark:border-cream-100/25 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-16">
        {experience.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <span className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-4 h-4 rounded-full border-2 border-flame bg-almond dark:bg-nearblack group-hover:bg-flame transition-colors" />

            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-pixel-line uppercase tracking-widest px-3 py-1 bg-flame/15 text-flame font-bold rounded-full">
                  {exp.type}
                </span>
                <span className="text-xs font-pixel-line uppercase tracking-widest text-cabernet/90 dark:text-cream-100/90 font-bold">
                  {exp.period}
                </span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-pixel-square font-bold text-cabernet dark:text-cream-100 uppercase tracking-tight">
                  {exp.role}
                </h2>
                <h3 className="text-sm font-pixel-square text-flame mt-1 font-semibold">
                  {exp.company}
                </h3>
              </div>

              <ul className="space-y-3 text-sm font-pixel-line font-semibold dark:font-normal text-cabernet dark:text-cream-100 list-disc list-inside leading-relaxed">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx}>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {Array.isArray(exp.skills) && exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-[10px] font-pixel-line tracking-wider uppercase border border-cabernet/25 dark:border-cream-100/25 rounded-full text-cabernet/90 dark:text-cream-100/90 font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
