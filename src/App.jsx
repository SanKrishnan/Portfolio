import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { FloatingNav } from './components/FloatingNav';
import { PageTransition } from './components/PageTransition';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Skills } from './pages/Skills';
import { Experience } from './pages/Experience';
import { Certifications } from './pages/Certifications';
import { Contact } from './pages/Contact';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Detect hard refresh using Navigation Timing API (Level 2 or legacy)
    let navType;
    if (performance && typeof performance.getEntriesByType === 'function') {
      const entries = performance.getEntriesByType('navigation');
      if (entries && entries.length > 0) {
        navType = entries[0].type; // 'navigate', 'reload', etc.
      }
    }
    if (!navType && performance && performance.navigation) {
      // Legacy Navigation Timing API
      const type = performance.navigation.type;
      if (type === performance.navigation.TYPE_RELOAD) {
        navType = 'reload';
      }
    }
    const isReload = navType === 'reload';
    if (isReload && window.location.pathname !== '/') {
      // Replace current entry so back button stays on home after redirect
      navigate('/', { replace: true });
    }
  }, [navigate]);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <CustomCursor />
        <div className="relative min-h-screen flex flex-col justify-between bg-almond dark:bg-nearblack text-cabernet dark:text-cream-100 transition-colors duration-300 pb-24 font-pixel-line">
          <main className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
              <Route path="/projects/:slug" element={<PageTransition><ProjectDetail /></PageTransition>} />
              <Route path="/projects/conversational-ai" element={<Navigate to="/projects/savoury-sweet-co" replace />} />
              <Route path="/projects/sorting-visualizer" element={<Navigate to="/projects" replace />} />
              <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
              <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
              <Route path="/certifications" element={<PageTransition><Certifications /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="*" element={<PageTransition><Home /></PageTransition>} />
            </Routes>
          </main>
          <Footer />
        </div>
        <FloatingNav />
      </Router>
    </ThemeProvider>
  );
};

export default App;

