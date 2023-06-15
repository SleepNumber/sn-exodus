/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    // the default also included __tests__ which we don't want.
    include: ['**/?(*.){test,spec}.?(c|m)[jt]s?(x)'],
    globals: true,
    // environment: 'happy-dom',
    environment: 'jsdom',
    setupFiles: ['./test/setup-test-env.js'],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
});
