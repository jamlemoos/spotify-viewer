import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

const Login = lazy(() => import('login/LoginScreen'));
const Home = lazy(() => import('./pages/Home'));
const Callback = lazy(() => import('./pages/Callback'));

const App = () => {
  const isAuthenticated = !!localStorage.getItem('spotifyToken');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <Navigate to="/home" /> : <Login />}
            />
            <Route path="/home" element={<Home />} />
            <Route path="/callback" element={<Callback />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
