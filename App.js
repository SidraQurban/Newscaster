import React from 'react';
import AppNavigation from './app/navigation/AppNavigation';
import { ThemeProvider } from './app/ThemeProvider';
import {SavedProvider} from "./app/context/SavedProvider";

const App = () => {
  return (
    <ThemeProvider>
      <SavedProvider>
      <AppNavigation />
      </SavedProvider>    
    </ThemeProvider>
  );
};

export default App;
