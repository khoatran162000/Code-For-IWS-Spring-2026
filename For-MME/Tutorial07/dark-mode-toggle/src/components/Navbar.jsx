import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // 1. Import the Context

function Navbar() {
  // 2. Use the useContext hook to subscribe to the context
  // We destructure the 'value' object to get what we need.[35, 36]
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <h2>ThemeContext Demo</h2>
      {/* 3. Call the function from context on click */}
      <button onClick={toggleTheme}>
        {/* Dynamically change the button text */}
        Switch to {theme === 'light'? 'Dark' : 'Light'} Mode
      </button>
    </nav>
  );
}

export default Navbar;
