import React, { useState } from 'react';
import CustomButton, { ButtonVariant } from '../components/Button/button';
import { Box, Typography } from '@mui/material';
import { getSpotifyAuthUrl } from '../services/spotifyAuth';

const LoginScreen: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => {
    try {
      const authUrl = getSpotifyAuthUrl();
      console.log('authUrl: ', authUrl);
      window.location.assign(authUrl);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('Failed to authenticate with Spotify.');
      }
      console.error('Login error:', e);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="background.default"
      color="text.primary"
    >
      <img
        src="/spotifylogo.webp"
        alt="Spotify Logo"
        loading="lazy"
        style={{ marginBottom: 24, width: 208 }}
      />
      <Typography variant="body2" align="center" style={{ marginBottom: 16 }}>
        Entre com sua conta Spotify clicando no botão abaixo
      </Typography>
      <CustomButton
        variantType={ButtonVariant.PRIMARY}
        size="medium"
        onClick={handleLogin}
      >
        Entrar
      </CustomButton>
      {error && (
        <Typography variant="body2" color="error" style={{ marginTop: 16 }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default LoginScreen;
