
import React from 'react';
import { motion } from 'framer-motion';

const resumes = [
  {
    id: 'general',
    name: 'General Resume',
    category: 'General Profile',
    description:
      'A comprehensive overview of my education, technical skills, projects, experience, and achievements.',
    verificationUrl:
      'https://drive.google.com/file/d/1Ao94wH3rVivEV_-IOW4sCgyXctZHYAjo/view?usp=sharing',
  },
  {
    id: 'data-analyst',
    name: 'Data Analyst Resume',
    category: 'Data Analytics',
    description:
      'Focused on Python, SQL, data visualization, dashboards, and extracting actionable insights from data.',
    verificationUrl:
      'https://drive.google.com/file/d/12AHhp-hB-AHOpiDK8mJHrx_09obcHN_L/view?usp=sharing',
  },
  {
    id: 'business-analyst',
    name: 'Business Analyst Resume',
    category: 'Business Analytics',
    description:
      'Focused on analytical thinking, business insights, problem-solving, reporting, and data-driven decision-making.',
    verificationUrl:
      'https://drive.google.com/file/d/10xFHn1BS0Y6cvrXPXF366YEn-QfpJvmv/view?usp=sharing',
  },
  {
    id: 'sde',
    name: 'Software Development Engineer Resume',
    category: 'Software Engineering',
    description:
      'Focused on Java, data structures and algorithms, software development, backend technologies, and engineering projects.',
    verificationUrl:
      'https://drive.google.com/file/d/1o-7ddKUAu-DycOZHuRyZqoGXueZfZPoX/view?usp=sharing',
  },
  {
    id: 'aiml',
    name: 'AI / Machine Learning Resume',
    category: 'Artificial Intelligence',
    description:
      'Focused on Python, machine learning, AI-powered applications, and relevant technical projects.',
    verificationUrl:
      'https://drive.google.com/file/d/1sk8p2vDZ8Bvb7pHLfmJe4Eixy_ZJRnT6/view?usp=sharing',
  },
];

export const Resume = () => {
  return (
    <div className="space-y-16">
      {/* Title: follows the Certifications page */}
      <section className="border-b border-cabernet/15 dark:border-cream-100/15 pb-8">
        <p className="text-xs font-pixel-line uppercase tracking-widest text-flame font-semibold mb-2">
          [ RESUME ARCHIVE ]
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-pixel-square font-extrabold text-cabernet dark:text-cream-100 uppercase tracking-tight">
          RESUMES
        </h1>

        <p className="text-sm font-pixel-line font-semibold dark:font-normal text-cabernet/90 dark:text-cream-100/90 mt-3 max-w-xl">
          Role-specific profiles highlighting my skills, projects, and
          experience across software engineering, analytics, and AI/ML.
        </p>
      </section>

      {/* Editorial archive list: same pattern as Certifications */}
      <section className="divide-y divide-cabernet/15 dark:divide-cream-100/15">
        {resumes.map((resume, index) => (
          <motion.div
            key={resume.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            className="group py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:pl-4 transition-all duration-300"
            data-cursor="hover"
            data-cursor-label={resume.category}
          >
            <div className="space-y-2">
              <span className="text-[10px] font-pixel-line uppercase tracking-widest text-flame font-bold">
                {resume.category}
              </span>

              <h2 className="text-xl sm:text-2xl font-pixel-square font-bold text-cabernet dark:text-cream-100 group-hover:text-flame transition-colors uppercase">
                {resume.name}
              </h2>

              <p className="text-sm font-pixel-line font-semibold dark:font-normal text-cabernet/80 dark:text-cream-100/75 max-w-2xl leading-relaxed">
                {resume.description}
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-pixel-line tracking-widest uppercase text-cabernet/90 dark:text-cream-100/90 font-bold shrink-0">
              <a
                href={resume.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-flame hover:underline font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame rounded-sm"
                data-cursor="hover"
                data-cursor-label="VIEW"
                aria-label={`View ${resume.name}`}
              >
                VIEW RESUME ↗
              </a>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
