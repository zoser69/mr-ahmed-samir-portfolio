import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/mr-ahmed-samir-portfolio/',
  plugins: [
    tailwindcss(),
  ],
});
