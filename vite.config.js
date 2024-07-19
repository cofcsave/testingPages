import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/testingPages/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
