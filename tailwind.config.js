/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        umber: {
          950: '#060402', // Deepest Obsidian Umber Background
          900: '#0D0906', // Card Surface
          850: '#140E0A', // Card Elevated
          800: '#1E150F', // Card Surface Light
          700: '#2E1E15', // Borders & Dividers
          600: '#3D281C', // Strong Border
          500: '#4E2E1B', // Core Palette D Brown
          400: '#6E4227', // Lighter Brown
          300: '#8E5A38', // Muted Accent
          200: '#A67C5B', // Warm Brown Text / Accent
          100: '#CDB19B', // Light Neutral
          50:  '#FAF6F0', // Alabaster Text
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        arabic: ['"Alexandria"', '"Cairo"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
