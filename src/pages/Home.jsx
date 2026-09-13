import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo, projects } from '../data/portfolioData';
import { Link } from 'react-router-dom';

export const Home = () => {
  // First project is Savoury & Sweet Co.
  const featuredProject = projects[0];

  return (
    <div className="space-y-20 pt-4 sm:pt-8">
      {/* 
        HERO COMPOSITION
        LEFT: SANJANA KRISHNAN (typography)
        RIGHT: NATURAL INTEGRATED PORTRAIT
      */}
      <section className="min-h-[52vh] sm:min-h-[60vh] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-cabernet/15 dark:border-cream-100/15 pb-12 sm:pb-16 bg-cabernet dark:bg-darkForest rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl">
        {/* LEFT COLUMN: Editorial Typography Name */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-1 sm:space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-pixel-circle font-bold tracking-tight leading-[0.9] text-cream dark:text-cream uppercase">
              SANJANA
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-pixel-circle font-bold tracking-tight leading-[0.9] text-cream dark:text-cream uppercase">
              KRISHNAN
            </h1>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Natural Full-Color Integrated Portrait */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute inset-0 bg-flame opacity-20 rounded-3xl"></div>
          <div className="relative overflow-hidden rounded-3xl border border-cream-100/20 shadow-2xl max-w-md mx-auto lg:max-w-none bg-cabernet-dark/40 dark:bg-darkForest/40">
            <img 
              src="/assets/profile.jpg" 
              alt={personalInfo.name} 
              className="w-full h-[340px] sm:h-[420px] object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500"><rect width="400" height="500" fill="%234A1E2D"/><text x="50%" y="50%" fill="%23FAF7F0" font-size="24" font-family="sans-serif" text-anchor="middle">SANJANA KRISHNAN</text></svg>';
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* EDITORIAL STATEMENT */}
      <section className="max-w-4xl py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="text-xs font-pixel-line uppercase tracking-widest text-flame font-bold">
            [ EDITORIAL STATEMENT ]
          </span>
          <p className="text-xl sm:text-3xl md:text-4xl font-pixel-line font-semibold dark:font-normal leading-relaxed text-cabernet dark:text-cream-100">
            "{personalInfo.shortBio}"
          </p>
        </motion.div>
      </section>

      {/* FEATURED WORK SECTION: Savoury & Sweet Co. First */}
      <section className="border-t border-cabernet/15 dark:border-cream-100/15 pt-16 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-pixel-line uppercase tracking-widest text-flame font-bold">
              FEATURED PROJECT
            </span>
            <h2 className="text-3xl sm:text-5xl font-pixel-square font-extrabold text-cabernet dark:text-cream-100 uppercase tracking-tight mt-1">
              SAVOURY & SWEET CO.
            </h2>
          </div>

          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-xs font-pixel-line uppercase tracking-widest font-bold text-cabernet dark:text-cream-100 hover:text-flame transition-colors"
          >
            <span>VIEW ALL PROJECTS ({projects.length})</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-flame" />
          </Link>
        </div>

        {/* Featured Project Showcase Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden rounded-3xl border border-cabernet/15 dark:border-cream-100/15 bg-almond-50 dark:bg-cream-100/5 p-8 sm:p-12 shadow-xl hover:border-flame/50 transition-all duration-500"
        >
          {/* Subtle Lavender Glow (Preserved) */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 80% 20%, rgba(185, 167, 232, 0.22), transparent 70%)`
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-pixel-line uppercase tracking-widest px-3 py-1 bg-flame/15 text-flame font-bold rounded-full inline-block">
                {featuredProject.category}
              </span>
              <h3 className="text-2xl sm:text-4xl font-pixel-square font-bold text-cabernet dark:text-cream-100 uppercase">
                {featuredProject.name}
              </h3>
              <p className="text-base sm:text-lg font-pixel-line font-semibold dark:font-normal text-cabernet dark:text-cream-100 leading-relaxed">
                {featuredProject.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2">
                {featuredProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-pixel-line tracking-wider uppercase border border-cabernet/25 dark:border-cream-100/25 rounded-full text-cabernet dark:text-cream-100 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to={`/projects/${featuredProject.slug}`}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-cabernet text-cream-100 dark:bg-cream-100 dark:text-nearblack rounded-full font-pixel-line text-xs font-bold uppercase tracking-wider hover:bg-flame hover:text-white dark:hover:bg-flame dark:hover:text-white transition-colors shadow-md"
                  data-cursor="hover"
                  data-cursor-label="CASE STUDY"
                >
                  <span>INSPECT CASE STUDY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 border border-cabernet/15 dark:border-cream-100/15 rounded-2xl bg-almond dark:bg-nearblack-50 space-y-4">
                <span className="text-[10px] font-pixel-line uppercase tracking-widest text-flame font-bold block">
                  KEY PERFORMANCE METRIC
                </span>
                <p className="text-xl font-pixel-square font-bold text-cabernet dark:text-cream-100">
                  ~75% Reduction in LLM Hallucinations across 15+ Test Scenarios
                </p>
                <p className="text-xs font-pixel-line font-semibold text-cabernet/90 dark:text-cream-100/90 font-medium">
                  Sub-second natural language and voice order processing powered by FastAPI and Groq (Llama 3.2).
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 
        FEATURED INTERNSHIP SECTION
      */}
      <section className="border-t border-cabernet/15 dark:border-cream-100/15 pt-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-pixel-line uppercase tracking-widest text-flame font-bold">
              FEATURED EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-pixel-square font-extrabold text-cabernet dark:text-cream-100 uppercase tracking-tight mt-1">
              INTERNSHIPS
            </h2>
          </div>

          <Link
            to="/experience"
            className="group inline-flex items-center gap-2 text-[11px] font-pixel-line uppercase tracking-widest font-bold text-cabernet dark:text-cream-100 hover:text-flame transition-colors"
          >
            <span>VIEW ALL EXPERIENCE (2)</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-flame" />
          </Link>
        </div>

        {/* FEATURED INTERNSHIP CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden rounded-3xl border border-cabernet/15 dark:border-cream-100/15 bg-almond-50 dark:bg-cream-100/5 p-6 sm:p-9 shadow-xl hover:border-flame/50 transition-all duration-500"
        >
          {/* Subtle Lavender Glow (Preserved) */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 80% 20%, rgba(185, 167, 232, 0.22), transparent 70%)`
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* INTERNSHIP INFORMATION */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-[11px] font-pixel-line uppercase tracking-widest px-3 py-1 bg-flame/15 text-flame font-bold rounded-full inline-block">
                AI / MACHINE LEARNING
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-pixel-square font-bold text-cabernet dark:text-cream-100 uppercase">
                EDUNET FOUNDATION
              </h3>

              <p className="text-sm sm:text-base font-pixel-line text-cabernet/90 dark:text-cream-100/90 font-medium">
                IBM SkillsBuild India · AICTE Internship
              </p>

              <p className="text-base sm:text-lg font-pixel-line font-semibold dark:font-normal text-cabernet dark:text-cream-100 leading-relaxed">
                Worked on an AI-powered lecture assistant involving speech-to-text,
                NLP-based summarization, question generation, and automated PDF
                generation using Python, Whisper, Hugging Face Transformers, and Streamlit.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  'Python',
                  'Whisper',
                  'Hugging Face',
                  'NLP',
                  'Streamlit',
                  'Transformers'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-[11px] font-pixel-line tracking-wider uppercase border border-cabernet/25 dark:border-cream-100/25 rounded-full text-cabernet dark:text-cream-100 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-1">
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-3 px-5 py-2.5 bg-cabernet text-cream-100 dark:bg-cream-100 dark:text-nearblack rounded-full font-pixel-line text-[11px] font-bold uppercase tracking-wider hover:bg-flame hover:text-white dark:hover:bg-flame dark:hover:text-white transition-colors shadow-md"
                  data-cursor="hover"
                  data-cursor-label="EXPERIENCE"
                >
                  <span>VIEW INTERNSHIP DETAILS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* INTERNSHIP METRIC / SUMMARY */}
            <div className="lg:col-span-5">
              <div className="p-6 border border-cabernet/15 dark:border-cream-100/15 rounded-2xl bg-almond dark:bg-nearblack-50 space-y-4">
                <span className="text-[10px] font-pixel-line uppercase tracking-widest text-flame font-bold block">
                  INTERNSHIP FOCUS
                </span>

                <p className="text-lg sm:text-xl font-pixel-square font-bold text-cabernet dark:text-cream-100 leading-tight">
                  AI-Powered Lecture Assistant
                </p>

                <p className="text-xs sm:text-sm text-cabernet/90 dark:text-cream-100/90 font-semibold leading-relaxed">
                  Speech transcription, text summarization, question generation,
                  and automated study-material creation using NLP and
                  transformer-based models.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};