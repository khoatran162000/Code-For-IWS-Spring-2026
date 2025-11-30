import React from 'react';
import Navbar from './components/NavBar';
import HomePage from './components/HomePage';

function App() {
  // App.js is now "dumb". It doesn't know or care about 'theme'.
  // It simply provides a structure.
  // HomePage renders the main content and Navbar is rendered *inside* it
  // for this demo to show the theme applied to the root.
  return (
    <HomePage>
      <Navbar />
    </HomePage>
  );
}

export default App;

