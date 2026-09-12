import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/portfolioData';

export const Certifications = () => {
  return (
    <div className="space-y-16">
      {/* Title */}
      <section className="border-b border-cabernet/15 dark:border-cream-100/15 pb-8">
        <p className="text-xs font-pixel-line uppercase tracking-widest text-flame font-semibold mb-2">
          [ CREDENTIALS ARCHIVE ]
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-pixel-square font-extrabold text-cabernet dark:text-cream-100 uppercase tracking-tight">
          CERTIFICATIONS
        </h1>
        <p className="text-sm font-pixel-line font-semibold dark:font-normal text-cabernet/90 dark:text-cream-100/90 mt-3 max-w-xl">
          Verified academic and professional credentials in Data Science, AI/ML, Cloud Architecture, Cyber Security, and Software Engineering.
        </p>
      </section>

      {/* Editorial Archive List */}
      <section className="divide-y divide-cabernet/15 dark:divide-cream-100/15">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            className="group py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:pl-4 transition-all duration-300 cursor-default"
            data-cursor="hover"
            data-cursor-label={cert.category}
          >
            <div className="space-y-1">
              <span className="text-[10px] font-pixel-line uppercase tracking-widest text-flame font-bold">
                {cert.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-pixel-square font-bold text-cabernet dark:text-cream-100 group-hover:text-flame transition-colors uppercase">
                {cert.name}
              </h2>
            </div>

            <div className="flex items-center gap-4 text-xs font-pixel-line tracking-widest uppercase text-cabernet/90 dark:text-cream-100/90 font-bold shrink-0">
              <span className="group-hover:text-cabernet dark:group-hover:text-cream-100 transition-colors">
                ISSUED BY: {cert.issuer}
              </span>
                {cert.verificationUrl && (
                  <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer" className="text-flame opacity-0 group-hover:opacity-100 transition-opacity font-bold hover:underline"
                    data-cursor="hover" data-cursor-label="VERIFY">
                    VERIFY ↗
                  </a>
                )}
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
