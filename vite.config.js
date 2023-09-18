import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/food-order-app/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@cart': path.resolve(__dirname, './src/components/Cart'),
      '@layout': path.resolve(__dirname, './src/components/Layout'),
      '@meals': path.resolve(__dirname, './src/components/Meals'),
      '@ui': path.resolve(__dirname, './src/components/UI'),
      '@store': path.resolve(__dirname, './src/store'),
    },
  },
});
