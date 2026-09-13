import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  FolderKanban, 
  User, 
  Cpu, 
  Briefcase, 
  Award, 
  Mail, 
  Sun, 
  Moon 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { path: '/', label: 'HOME', icon: Home },
  { path: '/about', label: 'ABOUT', icon: User },
  { path: '/skills', label: 'SKILLS', icon: Cpu },
  { path: '/projects', label: 'PROJECT', icon: FolderKanban },
  { path: '/experience', label: 'EXPERIENCE', icon: Briefcase },
  { path: '/certifications', label: 'CERT', fullLabel: 'CERTIFICATIONS', icon: Award },
  { path: '/contact', label: 'CONTACT', icon: Mail },
];

export const FloatingNav = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <div className="fixed left-1/2 -translate-x-1/2 z-40 max-w-[95vw] sm:max-w-none bottom-4 sm:bottom-6">
      <nav 
        aria-label="Main Navigation"
        className="bg-cabernet dark:bg-darkForest backdrop-blur-md border border-cream-100/20 dark:border-cream-100/20 shadow-2xl rounded-full px-3 py-2 sm:px-4 sm:py-2.5 flex items-center gap-1 sm:gap-2 transition-all duration-300"
      >
        <div className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto no-scrollbar max-w-[70vw] sm:max-w-none">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive: linkActive }) => {
                  const active = linkActive || (item.path !== '/' && location.pathname.startsWith(item.path));
                  return `relative px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full text-xs font-pixel-line tracking-wider uppercase transition-colors duration-200 flex items-center gap-1.5 whitespace-nowrap ${
                      active 
                        ? 'text-cream-100 dark:text-ganache font-extrabold' 
                        : 'text-white/75 hover:text-white font-medium'
                    }`;
                }}
                data-cursor="hover"
                data-cursor-label={item.fullLabel || item.label}
              >
                {({ isActive: linkActive }) => {
                  const active = linkActive || (item.path !== '/' && location.pathname.startsWith(item.path));
                  return (
                    <>
                      {active && (
                        <motion.div
                          layoutId="activePill"
                          className="absolute inset-0 bg-flame/30 dark:bg-breeze/40 border border-flame/70 dark:border-breeze/70 rounded-full"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10 text-white" />
                      <span className="hidden md:inline relative z-10">{item.label}</span>
                    </>
                  );
                }}
              </NavLink>
            );
          })}
        </div>

        <div className="h-4 w-px bg-cream-100/20 dark:bg-cream-100/25 mx-1 sm:mx-1.5 shrink-0" />

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          className="p-2 rounded-full text-cream-100 hover:bg-cream-100/10 dark:hover:bg-cream-100/15 transition-colors duration-200 shrink-0"
          data-cursor="hover"
          data-cursor-label={theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
        >
          {theme === 'light' ? (
            <Moon className="w-4 h-4 text-cream-100" />
          ) : (
            <Sun className="w-4 h-4 text-mustard" />
          )}
        </button>
      </nav>
    </div>
  );
};
