import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  return (
    <div className="space-y-16">
      {/* Title */}
      <section>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-pixel-square font-extrabold text-cabernet dark:text-cream-100 uppercase tracking-tight">
          ABOUT ME
        </h1>
      </section>

      {/* Editorial Profile & Bio Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Profile Visual (Natural Full-Color Portrait) */}
        <div className="md:col-span-5 relative group">
          <div className="relative overflow-hidden rounded-3xl border border-cabernet/15 dark:border-cream-100/15 shadow-xl bg-almond-50 dark:bg-cream-100/5">
            <img 
              src="/assets/profile.jpg" 
              alt={"Sanjana Krishnan"} 
              className="w-full h-[400px] sm:h-[480px] object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500"><rect width="400" height="500" fill="%234A1E2D"/><text x="50%" y="50%" fill="%23FAF7F0" font-size="24" font-family="sans-serif" text-anchor="middle">SANJANA KRISHNAN</text></svg>';
              }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] font-pixel-line uppercase tracking-wider text-cabernet dark:text-cream-100/90 font-bold">
            <span>SANJANA KRISHNAN</span>
            <span>DEVELOPER & ANALYST</span>
          </div>
        </div>

        {/* Detailed Narrative */}
        <div className="md:col-span-7 space-y-8">
          <div className="space-y-5 text-base sm:text-lg font-pixel-line font-semibold dark:font-normal leading-relaxed text-cabernet dark:text-cream-100">
            {personalInfo.aboutDetailed.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Education Box */}
          <div className="p-6 bg-almond-50 dark:bg-cream-100/5 border border-cabernet/20 dark:border-cream-100/20 rounded-2xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-pixel-line tracking-widest uppercase text-flame font-bold">
                ACADEMICS
              </span>
              <span className="text-xs font-pixel-line tracking-widest uppercase text-cabernet/90 dark:text-cream-100/90 font-bold">
                {personalInfo.period}
              </span>
            </div>
            <h3 className="text-xl font-pixel-square font-bold text-cabernet dark:text-cream-100">
              Vellore Institute Of Technology, Bhopal
            </h3>
            <p className="text-sm font-pixel-line text-cabernet/95 dark:text-cream-100/90 font-semibold">
              B.Tech in Computer Science & Engineering
            </p>
            <p className="text-xs font-pixel-line text-cabernet dark:text-cream-100 font-semibold">
              CGPA: {personalInfo.cgpa}
            </p>
          </div>

          {/* Core Areas */}
          <div>
            <h4 className="text-xs font-pixel-square uppercase tracking-widest text-cabernet/90 dark:text-cream-100/90 mb-4 font-bold">
              PRIMARY TECHNICAL COMPETENCIES
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {personalInfo.interests.map((interest, idx) => (
                <div 
                  key={idx}
                  className="p-4 border border-cabernet/15 dark:border-cream-100/15 rounded-xl bg-almond-50 dark:bg-nearblack-50 flex items-center justify-between text-xs font-pixel-line tracking-wider uppercase font-semibold text-cabernet dark:text-cream-100"
                >
                  <span>{interest}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-flame" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
