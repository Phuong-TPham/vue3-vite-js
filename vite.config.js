import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteSvgIcons from 'vite-plugin-svg-icons';
import path from 'path';

process.env = { ...process.env, ...loadEnv('', process.cwd()) };

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
    https: false,
    proxy: {},
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
