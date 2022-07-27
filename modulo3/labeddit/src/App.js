import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './constants/theme';
import Router from './router/Router';
import PostsProvider from './provider/PostsProvider';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <PostsProvider>
        <Router />
      </PostsProvider>
    </ThemeProvider>
  );
};

export default App;
