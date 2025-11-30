import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function HomePage({ children }) { // Accept children
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`app ${theme}`}>
      {children} {/* Render children (e.g., Navbar) */}
      <h1>Welcome to the {theme} theme!</h1>
      <p>Click the button in the navbar to toggle the theme.</p>
    </main>
  );
}

export default HomePage;
