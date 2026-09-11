import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Autumn Editorial primary palette
        almond: {
          DEFAULT: '#F4F0E6', // Primary light-mode background (Almond Oil)
          50: '#FAF7F0',
          100: '#F4F0E6',
          200: '#EAE3D2',
          300: '#DFD5BF',
        },
        cabernet: {
          DEFAULT: '#4A1E2D', // Primary dark / headings (Pantone Cabernet 19-1722 TCX)
          light: '#5D2739',
          dark: '#381421',
        },
        flame: {
          DEFAULT: '#E25822', // Primary accent (Pantone Flame Orange 15-1167 TCX)
          light: '#EB6D3B',
          dark: '#C64513',
        },
        ganache: {
          DEFAULT: '#3E2723', // Day/light-mode floating navigation background
          50: '#4E342E',
        },

        // Preserved colors for dark mode & accents
        forest: '#244B32',
        darkForest: '#183624', // Dark-mode floating navigation background
        breeze: { DEFAULT: '#BEE4D0' }, // Nantucket Breeze for dark navigation background
        cream: {
          DEFAULT: '#F5EFE1',
          50: '#FAF6ED',
          100: '#F5EFE1',
          200: '#EBE1CB',
          300: '#E0D2B4',
        },
        mustard: '#F2B51D',
        burnt: '#C96E32',
        nearblack: {
          DEFAULT: '#111111',
          50: '#1A1A1A',
        },
        lavender: {
          DEFAULT: '#B9A7E8',
          light: '#CFC3F0',
          dark: '#9A84D6',
        },
        sea: {
          DEFAULT: '#65B7A5',
          light: '#86C9BB',
          dark: '#4D9989',
        },
      },
      fontFamily: {
        'bitcount': ["'Cabin Sketch'", "sans-serif"],
        'pixel-circle': ["'Cabin Sketch'", "sans-serif"],
        'pixel-square': ["'Cabin Sketch'", "sans-serif"],
        'pixel-line': ["'Cabin Sketch'", "sans-serif"],
        display: ["'Cabin Sketch'", "sans-serif"],
        sans: ["'Cabin Sketch'", "sans-serif"],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.font-pixel-circle': { fontFamily: 'var(--font-geist-pixel-circle)' },
        '.font-pixel-square': { fontFamily: 'var(--font-geist-pixel-square)' },
        '.font-pixel-line': { fontFamily: 'var(--font-geist-pixel-line)' },
      });
    })
  ],
};
