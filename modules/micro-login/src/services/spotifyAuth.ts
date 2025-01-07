export const getSpotifyAuthUrl = (): string => {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_REDIRECT_URI;

  console.log('VITE_SPOTIFY_CLIENT_ID:', clientId);
  console.log('VITE_REDIRECT_URI:', redirectUri);

  const scopes = ['user-read-private', 'user-read-email'].join(' ');

  const params = new URLSearchParams({
    client_id: clientId || '',
    response_type: 'code',
    redirect_uri: redirectUri || '',
    scope: scopes,
  });

  return `https://accounts.spotify.com/authorize?${params.toString()}`;
};
