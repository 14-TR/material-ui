// src/App.js
import React from 'react';
import Header from './components/Header';
import ThemeProviderWrapper from './theme/ThemeProviderWrapper';

function App() {
  return (
    <ThemeProviderWrapper>
      {({ toggleTheme, isDarkMode }) => (
        <>
          <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <div style={{ padding: 20 }}>
            <h1>Welcome to the App!</h1>
            <p>Toggle the theme using the button in the header.</p>
          </div>
        </>
      )}
    </ThemeProviderWrapper>
  );
}

export default App;
