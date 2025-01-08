import React from 'react';
import { Box, Typography } from '@mui/material';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box display="flex" minHeight="100vh" bgcolor="background.default">
      {/* Sidebar */}
      <Box
        component="aside"
        width="240px"
        bgcolor="#000000"
        color="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="16px"
      >
        <img
          src="/spotifylogo.png"
          alt="Spotify Logo"
          style={{ width: '120px', marginBottom: '32px' }}
        />
        <Box display="flex" flexDirection="column" width="100%">
          <Typography
            variant="body1"
            style={{ marginBottom: '16px', cursor: 'pointer' }}
          >
            Home
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: '16px', cursor: 'pointer' }}
          >
            Artistas
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: '16px', cursor: 'pointer' }}
          >
            Playlists
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: '16px', cursor: 'pointer' }}
          >
            Perfil
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box component="main" flexGrow={1} padding="24px">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
