import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext'; // 1. Import our provider
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 2. Wrap the entire App [30, 35] */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

