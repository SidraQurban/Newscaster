import React from 'react';
import AppNavigation from './app/navigation/AppNavigation';
import { ThemeProvider } from './app/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigation />
    </ThemeProvider>
  );
};

export default App;
