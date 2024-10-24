// src/App.js
import React from 'react';
import Header from './components/Header';
import ThemeProviderWrapper from './theme/ThemeProviderWrapper';
import CustomDatePicker from './components/CustomDatePicker';
import PlaygroundSpeedDial  from './components/SpeedDial';

function App() {
  return (
    <ThemeProviderWrapper>
      {({ toggleTheme, isDarkMode }) => (
        <>
          <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <div style={{ padding: 20 }}>
            <h1>Welcome to the App!</h1>
            <p>Toggle the theme using the button in the header.</p>
            <CustomDatePicker />
            <PlaygroundSpeedDial />

          </div>
        </>
      )}
    </ThemeProviderWrapper>
  );
}

export default App;
