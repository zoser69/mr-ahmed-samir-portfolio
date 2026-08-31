import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command }) => ({
  // In dev (command === 'serve'), use root '/' for localhost:5173
  // In production build, use '/mr-ahmed-samir-portfolio/' for GitHub Pages
  base: command === 'serve' ? '/' : '/mr-ahmed-samir-portfolio/',
  plugins: [
    tailwindcss(),
  ],
}));
