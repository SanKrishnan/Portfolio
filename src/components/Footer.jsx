import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="border-t border-cabernet/25 dark:border-cream-100/20 py-8 px-6 sm:px-12 mt-20 max-w-7xl mx-auto font-pixel-line">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col">
          <h2 className="text-xl sm:text-2xl font-pixel-square font-bold tracking-tight text-cabernet dark:text-cream-100">
            {personalInfo.name}
          </h2>
          <p className="text-xs font-pixel-line text-cabernet dark:text-cream-100/90 font-semibold mt-0.5">
            {personalInfo.subtitle}
          </p>
        </div>
        <div className="flex gap-4 text-xs font-pixel-line tracking-wider uppercase font-bold">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cabernet dark:text-cream-100 hover:text-flame dark:hover:text-flame transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cabernet dark:text-cream-100 hover:text-flame dark:hover:text-flame transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.socials.email}`}
            className="text-cabernet dark:text-cream-100 hover:text-flame dark:hover:text-flame transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
