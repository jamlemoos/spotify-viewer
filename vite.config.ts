import { defineConfig as testConfig } from 'vitest/config';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import { compression } from 'vite-plugin-compression2';

const config = defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      threshold: 10240,
    }),
    federation({
      name: 'host',
      remotes: {
        login: 'http://localhost:3001/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom', '@mui/material'],
    }),
  ],
  build: {
    target: 'esnext',
    cssCodeSplit: false,
    minify: 'terser',
  },
  define: {
    'process.env': {
      VITE_SPOTIFY_CLIENT_ID: JSON.stringify(
        process.env.VITE_SPOTIFY_CLIENT_ID,
      ),
      VITE_REDIRECT_URI: JSON.stringify(process.env.VITE_REDIRECT_URI),
    },
  },
});

const tstConfig = testConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});

export default {
  ...config,
  ...tstConfig,
};
