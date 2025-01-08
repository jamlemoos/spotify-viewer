import React from 'react';
import { useNavigate } from 'react-router-dom';

const Callback: React.FC = () => {
  const navigate = useNavigate();

  console.log('entrou no callback');

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      localStorage.setItem('spotifyCode', code);
      navigate('/home');
    } else {
      navigate('/');
    }
  }, [navigate]);

  return <div>Redirecionando...</div>;
};

export default Callback;
