import React from 'react';
import { Typography } from '@mui/material';

const Home: React.FC = () => {
  console.log('entrou na home');

  return (
    <Typography variant="h1" color="text.primary">
      Bem-vindo à sua Home!
    </Typography>
  );
};

export default Home;
