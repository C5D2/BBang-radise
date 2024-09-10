import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from '@prerenderer/rollup-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: ['/', '/class', '/recipe'],
      renderer: '@prerenderer/renderer-puppeteer',
    }),
  ],
  build: {
    target: 'es2015',
    outDir: 'dist',
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@zustand', replacement: '/src/zustand' },
      { find: '@routes', replacement: '/src/routes' },
    ],
  },
});
