export const getSpotifyAuthUrl = (): string => {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_REDIRECT_URI;

  const scopes = ['user-read-private', 'user-read-email'].join(' ');

  const params = new URLSearchParams({
    client_id: clientId || '',
    response_type: 'code',
    redirect_uri: redirectUri || '',
    scope: scopes,
  });

  return `https://accounts.spotify.com/authorize?${params.toString()}`;
};

export const exchangeCodeForToken = async (code: string): Promise<string> => {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID!;
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET!;
  const redirectUri = import.meta.env.VITE_REDIRECT_URI!;

  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: redirectUri,
    client_id: clientId,
    client_secret: clientSecret,
  });

  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  });

  if (!response.ok) {
    throw new Error('Failed to exchange code for token');
  }

  const data = await response.json();
  return data.access_token;
};
