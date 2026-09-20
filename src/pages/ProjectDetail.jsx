import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Github, CheckCircle2, TrendingUp, Globe } from 'lucide-react';
import { projects } from '../data/portfolioData';

export const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-3xl font-pixel-square font-bold text-cabernet dark:text-cream-100">Project Not Found</h2>
        <Link to="/projects" className="text-sm font-pixel-line text-flame hover:underline font-bold">
          ← Back to Projects Gallery
        </Link>
      </div>
    );
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const liveUrl = project.website || project.liveDemo;

  return (
    <article className="space-y-16 max-w-5xl mx-auto">
      {/* Top Back Link */}
      <div className="flex items-center justify-between border-b border-cabernet/15 dark:border-cream-100/15 pb-6">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 text-xs font-pixel-line uppercase tracking-widest text-cabernet dark:text-cream-100 hover:text-flame transition-colors font-bold"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-flame" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>

        <span className="text-xs font-pixel-line uppercase tracking-widest text-flame font-bold">
          {project.category}
        </span>
      </div>

      {/* Hero Header */}
      <header className="space-y-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-pixel-square font-extrabold text-cabernet dark:text-cream-100 uppercase tracking-tight leading-none">
          {project.name}
        </h1>
        <p className="text-lg sm:text-2xl font-pixel-line font-semibold dark:font-normal text-flame">
          {project.tagline}
        </p>
      </header>

      {/* Hero Accent Banner with soft lavender glow */}
      <div 
        className="relative overflow-hidden rounded-3xl p-8 sm:p-12 border border-cabernet/20 dark:border-cream-100/20 bg-cabernet dark:bg-darkForest text-cream-100 shadow-2xl"
        style={{
          boxShadow: `0 20px 50px -10px rgba(185, 167, 232, 0.22)`
        }}
      >
        <div 
          className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ backgroundColor: "rgba(185, 167, 232, 0.25)" }}
        />

        <div className="relative z-10 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-pixel-line tracking-widest uppercase text-cream-100/80 font-semibold">
              [ CASE STUDY OVERVIEW ]
            </span>
            <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: project.accentColor || '#E25822' }} />
          </div>

          <p className="text-lg sm:text-2xl font-pixel-line font-light leading-relaxed max-w-3xl text-cream-100">
            {project.shortDescription}
          </p>

          <div className="pt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-cream-100/15 border border-cream-100/30 rounded-full text-xs font-pixel-line tracking-wider uppercase text-cream-100 font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Quantitative Impact / Results Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="space-y-4 border-t border-cabernet/15 dark:border-cream-100/15 pt-12">
          <h3 className="text-xs font-pixel-square uppercase tracking-widest text-flame font-bold flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <span>MEASURABLE PERFORMANCE & QUANTITATIVE RESULTS</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.metrics.map((metric, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl border border-flame/40 bg-flame/10 text-cabernet dark:text-cream-100 space-y-1"
              >
                <span className="text-xs font-pixel-line uppercase tracking-widest text-flame font-bold block">
                  METRIC 0{idx + 1}
                </span>
                <p className="text-sm font-pixel-line font-bold">
                  {metric}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Problem & Approach Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-cabernet/15 dark:border-cream-100/15 pt-12">
        <div className="space-y-4">
          <h3 className="text-s font-pixel-line uppercase tracking-widest text-flame font-bold">
            THE PROBLEM
          </h3>
          <h2 className="text-2xl font-pixel-square font-bold text-cabernet dark:text-cream-100">
            What this project was designed to solve
          </h2>
          <p className="text-base font-pixel-line font-semibold dark:font-normal leading-relaxed text-cabernet/90 dark:text-cream-100">
            {project.problem}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-s font-pixel-line uppercase tracking-widest text-flame font-bold">
            THE APPROACH & IDEA
          </h3>
          <h2 className="text-2xl font-pixel-square font-bold text-cabernet dark:text-cream-100">
            Engineering & Technical Solution
          </h2>
          <p className="text-base font-pixel-line font-semibold leading-relaxed text-cabernet/92 dark:text-cream-100">
            {project.approach}
          </p>
        </div>
      </section>

      {/* Major Features Breakdown */}
      <section className="space-y-6 border-t border-cabernet/15 dark:border-cream-100/15 pt-12">
        <div>
          <h3 className="text-s font-pixel-line uppercase tracking-widest text-flame font-bold mb-1">
            WHAT'S INSIDE
          </h3>
          <h2 className="text-3xl font-pixel-square font-bold text-cabernet dark:text-cream-100">
            Key Application Features
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.features.map((feature, idx) => (
            <div
              key={idx}
              className="p-5 border border-cabernet/15 dark:border-cream-100/15 rounded-2xl bg-almond-50 dark:bg-cream-100/5 flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 shrink-0 text-flame mt-0.5" />
              <span className="text-sm font-pixel-line font-semibold text-cabernet dark:text-cream-100">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works / Workflow */}
      <section className="space-y-6 border-t border-cabernet/15 dark:border-cream-100/15 pt-12">
        <div>
          <h3 className="text-s font-pixel-line uppercase tracking-widest text-flame font-bold mb-1">
            HOW IT WORKS
          </h3>
          <h2 className="text-3xl font-pixel-square font-bold text-cabernet dark:text-cream-100">
            Execution Flow
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {project.workflow.map((step, idx) => (
            <div
              key={idx}
              className="p-5 border border-cabernet/15 dark:border-cream-100/15 rounded-2xl bg-almond-50 dark:bg-nearblack-50 space-y-2"
            >
              <span className="text-xs font-pixel-line uppercase tracking-widest text-flame font-bold">
                STEP 0{idx + 1}
              </span>
              <p className="text-xs font-pixel-line font-semibold text-cabernet dark:text-cream-100 font-medium">
                {step.replace(/^\d+\.\s*/, '')}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Project Demo Video */}
      {project.demoVideo && (
        <section className="space-y-6 border-t border-cabernet/15 dark:border-cream-100/15 pt-12">
          <div>
            <h3 className="text-xs font-pixel-line uppercase tracking-widest text-flame font-bold mb-1">
              PROJECT DEMO
            </h3>

            <h2 className="text-3xl font-pixel-square font-bold text-cabernet dark:text-cream-100">
              See It In Action
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-cabernet/20 dark:border-cream-100/20 shadow-2xl bg-nearblack">
            <video
              className="w-full h-auto"
              controls
              playsInline
              preload="metadata"
            >
              <source src={project.demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      )}
      {/* Media / Interface Container */}
      <section className="space-y-6 border-t border-cabernet/15 dark:border-cream-100/15 pt-12">
        <div>
          <h3 className="text-s font-pixel-line uppercase tracking-widest text-flame font-bold mb-1">
            PROJECT MEDIA & INTERFACE
          </h3>
          <h2 className="text-3xl font-pixel-square font-bold text-cabernet dark:text-cream-100">
            Visual Architecture
          </h2>
        </div>

        {project.image ? (
          <div className="overflow-hidden rounded-3xl border border-cabernet/20 dark:border-cream-100/20 shadow-2xl">
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-auto max-h-[550px] object-cover opacity-100"
            />
          </div>
        ) : (
          <div className="border border-dashed border-cabernet/30 dark:border-cream-100/30 rounded-3xl p-12 text-center bg-almond-50 dark:bg-nearblack-50 space-y-4">
            <div className="inline-block p-4 rounded-full bg-flame/15 text-flame mb-2">
              <span className="text-2xl font-pixel-square font-bold">SK</span>
            </div>
            <h4 className="text-lg font-pixel-square font-bold text-cabernet dark:text-cream-100">
              Art-Directed Technical Case Study Visual
            </h4>
            <p className="text-xs font-pixel-line font-semibold text-cabernet/90 dark:text-cream-100/90 font-medium max-w-lg mx-auto">
              Interactive application mockups and high-resolution video demonstrations are integrated cleanly during live deployment testing.
            </p>
          </div>
        )}
      </section>

      {/* Technical Learnings */}
      <section className="space-y-4 border-t border-cabernet/15 dark:border-cream-100/15 pt-12">
        <h3 className="text-s font-pixel-square uppercase tracking-widest text-flame font-bold">
          TECHNICAL LESSONS & TAKEAWAYS
        </h3>
        <p className="text-base font-pixel-line  font-semibold font-normal leading-relaxed text-cabernet/90 dark:text-cream-100 bg-almond-50 dark:bg-cream-100/5 p-6 rounded-2xl border border-cabernet/15 dark:border-cream-100/15">
          "{project.learnings}"
        </p>
      </section>

      {/* External Repository & Live Demo Links */}
      <section className="flex flex-wrap items-center gap-4 pt-6">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-cabernet text-cream-100 dark:bg-cream-100 dark:text-nearblack rounded-full font-pixel-line text-xs font-bold uppercase tracking-wider hover:bg-flame hover:text-white dark:hover:bg-flame dark:hover:text-white transition-colors"
            data-cursor="hover"
            data-cursor-label="OPEN GITHUB"
          >
            <Github className="w-4 h-4" />
            <span>GITHUB REPOSITORY →</span>
          </a>
        )}

        {liveUrl && (
          <a
            href={liveUrl.startsWith('http') ? liveUrl : `https://${liveUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-cabernet/30 dark:border-cream-100/30 text-cabernet dark:text-cream-100 rounded-full font-pixel-line text-xs font-bold uppercase tracking-wider hover:border-flame hover:text-flame transition-colors font-bold"
            data-cursor="hover"
            data-cursor-label="LIVE DEMO"
          >
            <Globe className="w-4 h-4 text-flame" />
            <span>LIVE DEMO / WEBSITE →</span>
          </a>
        )}
      </section>

      {/* Bottom Navigation */}
      <footer className="border-t border-cabernet/15 dark:border-cream-100/15 pt-12 flex items-center justify-between">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 text-xs font-pixel-line uppercase tracking-widest text-cabernet dark:text-cream-100 hover:text-flame transition-colors font-bold"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-flame" />
          <span>BACK TO PROJECTS</span>
        </Link>

        <Link
          to={`/projects/${nextProject.slug}`}
          className="group inline-flex items-center gap-2 text-xs font-pixel-line uppercase tracking-widest font-bold text-cabernet dark:text-cream-100 hover:text-flame transition-colors text-right"
          data-cursor="hover"
          data-cursor-label="NEXT"
        >
          <span>NEXT: {nextProject.name}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-flame" />
        </Link>
      </footer>
    </article>
  );
};
