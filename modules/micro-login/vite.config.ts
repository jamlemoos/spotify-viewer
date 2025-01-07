import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  console.log('Env vars during build:', env);

  return {
    plugins: [
      react(),
      federation({
        name: 'login',
        filename: 'remoteEntry.js',
        exposes: {
          './LoginScreen': './src/pages/Login.tsx',
        },
        shared: ['react', 'react-dom', '@mui/material'],
      }),
    ],
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: true,
      cssCodeSplit: false,
    },
    resolve: {
      alias: {
        '@assets': '/src/assets',
      },
    },
    define: {
      'process.env': {
        VITE_SPOTIFY_CLIENT_ID: JSON.stringify(env.VITE_SPOTIFY_CLIENT_ID),
        VITE_REDIRECT_URI: JSON.stringify(env.VITE_REDIRECT_URI),
      },
    },
  };
});
