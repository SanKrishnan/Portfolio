import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

export const Projects = () => {
  return (
    <div className="space-y-16">
      {/* Title */}
      <section className="border-b border-cabernet/15 dark:border-cream-100/15 pb-8">
        <p className="text-xs font-pixel-line uppercase tracking-widest text-flame font-bold mb-2">
          [ PORTFOLIO SHOWCASE ]
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-pixel-square font-extrabold text-cabernet dark:text-cream-100 uppercase tracking-tight">PROJECTS</h1>
        <p className="text-sm font-pixel-line font-normal text-cabernet/80 dark:text-cream-100/80 mt-3 max-w-xl">
          Practical software applications, AI/ML models, parameter visualizers, and interactive digital systems.
        </p>
      </section>

      {/* Editorial Asymmetric Project Gallery */}
      <section className="space-y-24">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-cabernet/15 dark:border-cream-100/15 pb-20 ${
                isEven ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Text & Content Block */}
              <div className={`space-y-6 ${isEven ? 'md:col-span-6 md:pr-4' : 'md:col-span-6 md:order-2 md:pl-4'}`}>
                <div>
                  <span 
                    className="text-[11px] font-pixel-line uppercase tracking-widest px-3 py-1 rounded-full font-bold inline-block mb-3 bg-flame/15 text-flame"
                  >
                    {project.category}
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-pixel-square font-bold text-cabernet dark:text-cream-100 uppercase tracking-tight leading-tight">
                    {project.name}
                  </h2>
                  <p className="text-xs font-pixel-line uppercase tracking-wider text-flame font-bold mt-1">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-base font-pixel-line font-normal text-cabernet/90 dark:text-cream-100 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-pixel-line tracking-wider uppercase border border-cabernet/20 dark:border-cream-100/20 rounded-full text-cabernet dark:text-cream-100 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Link */}
                <div className="pt-2">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group inline-flex items-center gap-2 text-xs font-pixel-line uppercase tracking-widest font-extrabold text-cabernet dark:text-cream-100 hover:text-flame dark:hover:text-flame transition-colors"
                    data-cursor="hover"
                    data-cursor-label="EXPLORE"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-flame" />
                  </Link>
                </div>
              </div>

              {/* Visual Card Artwork Block */}
              <div className={`${isEven ? 'md:col-span-6' : 'md:col-span-6 md:order-1'}`}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="group relative block overflow-hidden rounded-2xl border border-cabernet/20 dark:border-cream-100/20 bg-almond-50 dark:bg-cream-100/5 aspect-4/3 sm:aspect-16/10 p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
                  data-cursor="hover"
                  data-cursor-label="VIEW CASE STUDY"
                >
                  {/* Background Accent Lighting (Soft lavender radial glow preserved) */}
                  <div 
                    className="absolute inset-0 opacity-20 dark:opacity-25 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, rgba(185, 167, 232, 0.22), transparent 70%)`
                    }}
                  />

                  {/* Artwork Container */}
                  {project.image ? (
                    <div className="relative z-10 h-full w-full overflow-hidden rounded-xl border border-cabernet/15 dark:border-cream-100/15 group-hover:scale-[1.02] transition-transform duration-500">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover opacity-100"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-nearblack/80 via-nearblack/30 to-transparent p-4 flex items-end justify-between">
                        <div>
                          <span className="text-[10px] font-pixel-line tracking-widest text-cream-100 uppercase font-bold block">
                            CASE STUDY METADATA
                          </span>
                          <h3 className="text-lg font-pixel-square font-bold text-cream-100 uppercase">
                            {project.name}
                          </h3>
                        </div>
                        <div className="text-[10px] font-pixel-line uppercase tracking-widest text-flame font-bold flex items-center gap-1">
                          <span>INSPECT DETAILS</span>
                          <span>→</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative z-10 h-full flex flex-col justify-between border border-cabernet/15 dark:border-cream-100/15 rounded-xl p-6 bg-almond-50 dark:bg-nearblack-50 group-hover:scale-[1.02] transition-transform duration-500">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-pixel-line tracking-widest text-cabernet dark:text-cream-100 uppercase font-bold">
                          CASE STUDY METADATA
                        </span>
                        <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: project.accentColor || "#B9A7E8" }} />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-pixel-square font-bold text-cabernet dark:text-cream-100 uppercase">
                          {project.name}
                        </h3>
                        <p className="text-xs font-pixel-line text-cabernet/90 dark:text-cream-100/90 font-medium line-clamp-2">
                          {project.problem}
                        </p>
                      </div>

                      <div className="text-[10px] font-pixel-line uppercase tracking-widest text-flame font-bold flex items-center gap-1">
                        <span>INSPECT DETAILS</span>
                        <span>→</span>
                      </div>
                    </div>
                  )}
                </Link>
              </div>
            </motion.article>
          );
        })}
      </section>
    </div>
  );
};
