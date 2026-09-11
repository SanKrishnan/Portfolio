import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setStatus('submitting');
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, 800);
    }
  };

  return (
    <div className="space-y-16">
      {/* Title Header */}
      <section className="space-y-4">
        <p className="text-xs font-pixel-line uppercase tracking-widest text-flame font-bold">
          [ GET IN TOUCH ]
        </p>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-pixel-square font-extrabold text-cabernet dark:text-cream-100 uppercase tracking-tighter leading-none">
          LET'S BUILD SOMETHING.
        </h1>
        <p className="text-base sm:text-xl font-pixel-line font-normal text-cabernet dark:text-cream-100 max-w-xl">
          Have an opportunity? Want to collaborate on software, AI/ML models, or data analytics projects? Let's talk.
        </p>
      </section>

      {/* Grid: Social Channels & Contact Form */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-cabernet/20 dark:border-cream-100/20 pt-12">
        {/* Direct Channels */}
        <div className="md:col-span-5 space-y-8">
          <div>
            <h3 className="text-xs font-pixel-square uppercase tracking-widest text-cabernet/90 dark:text-cream-100 font-bold mb-4">
              DIRECT CHANNELS
            </h3>
            <div className="space-y-4 font-pixel-line text-sm uppercase tracking-wider">
              <div>
                <span className="text-[10px] text-flame font-bold block">EMAIL</span>
                <a href={`mailto:${"skmk0503@gmail.com"}`} className="text-cabernet dark:text-cream-100 hover:text-flame transition-colors font-bold text-base sm:text-lg">
                  {personalInfo.socials.email}
                </a>
              </div>
              <div>
                <span className="text-[10px] text-flame font-bold block">LINKEDIN</span>
                <a href={"https://www.linkedin.com/in/sanjana-krishnan-6010b0280"} target="_blank" rel="noopener noreferrer" className="text-cabernet dark:text-cream-100 hover:text-flame transition-colors font-bold">
                  linkedin.com/in/sanjana-krishnan →
                </a>
              </div>
              <div>
                <span className="text-[10px] text-flame font-bold block">GITHUB</span>
                <a href={"https://github.com/SanKrishnan"} target="_blank" rel="noopener noreferrer" className="text-cabernet dark:text-cream-100 hover:text-flame transition-colors font-bold">
                  github.com/SanKrishnan →
                </a>
              </div>
            </div>
          </div>

          <div 
            className="relative overflow-hidden p-6 bg-almond-50 dark:bg-nearblack-50 border border-cabernet/20 dark:border-cream-100/20 rounded-2xl"
            style={{
              boxShadow: `0 10px 30px -5px rgba(185, 167, 232, 0.2)`
            }}
          >
            {/* Subtle Lavender Glow (Preserved) */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 80% 20%, rgba(185, 167, 232, 0.22), transparent 70%)`
              }}
            />
            <div className="relative z-10">
              <span className="text-xs font-pixel-line tracking-widest uppercase text-flame font-bold block mb-1">
                LOCATION
              </span>
              <p className="text-sm font-pixel-line font-bold text-cabernet dark:text-cream-100">
                India · Available for Remote & On-site Roles
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7">
          {status === 'success' ? (
            <div className="p-8 border border-flame rounded-2xl bg-flame/10 text-cabernet dark:text-cream-100 space-y-4 text-center">
              <CheckCircle2 className="w-12 h-12 text-flame mx-auto" />
              <h3 className="text-2xl font-pixel-square font-bold uppercase">MESSAGE SENT SUCCESSFULLY!</h3>
              <p className="text-sm font-pixel-line font-medium text-cabernet dark:text-cream-100">
                Thank you for reaching out. Sanjana will get back to you shortly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="px-6 py-2.5 bg-cabernet text-cream-100 dark:bg-cream-100 dark:text-nearblack rounded-full font-pixel-line text-xs font-bold uppercase tracking-wider hover:bg-flame transition-colors"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-pixel-line uppercase tracking-widest text-cabernet dark:text-cream-100 font-bold mb-2">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3.5 rounded-xl border bg-almond-50 dark:bg-nearblack-50 text-cabernet dark:text-cream-100 placeholder:text-cabernet/50 dark:placeholder:text-cream-100/50 text-sm font-medium focus:outline-none focus:border-flame transition-colors ${
                    errors.name ? 'border-red-500' : 'border-cabernet/25 dark:border-cream-100/30'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-600 font-bold mt-1 font-pixel-line">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-pixel-line uppercase tracking-widest text-cabernet dark:text-cream-100 font-bold mb-2">
                  YOUR EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email address"
                  className={`w-full px-4 py-3.5 rounded-xl border bg-almond-50 dark:bg-nearblack-50 text-cabernet dark:text-cream-100 placeholder:text-cabernet/50 dark:placeholder:text-cream-100/50 text-sm font-medium focus:outline-none focus:border-flame transition-colors ${
                    errors.email ? 'border-red-500' : 'border-cabernet/25 dark:border-cream-100/30'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-600 font-bold mt-1 font-pixel-line">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-pixel-line uppercase tracking-widest text-cabernet dark:text-cream-100 font-bold mb-2">
                  YOUR MESSAGE *
                </label>
                <textarea
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  className={`w-full px-4 py-3.5 rounded-xl border bg-almond-50 dark:bg-nearblack-50 text-cabernet dark:text-cream-100 placeholder:text-cabernet/50 dark:placeholder:text-cream-100/50 text-sm font-medium focus:outline-none focus:border-flame transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-cabernet/25 dark:border-cream-100/30'
                  }`}
                />
                {errors.message && <p className="text-xs text-red-600 font-bold mt-1 font-pixel-line">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto px-8 py-4 bg-cabernet text-cream-100 dark:bg-cream-100 dark:text-nearblack rounded-full font-pixel-line text-xs font-bold uppercase tracking-wider hover:bg-flame hover:text-white dark:hover:bg-flame dark:hover:text-white transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
                data-cursor="hover"
                data-cursor-label="SEND"
              >
                <span>{status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE →'}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
