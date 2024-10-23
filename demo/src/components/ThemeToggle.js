// src/components/ThemeToggle.js
import React from 'react';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ThemeToggle;
