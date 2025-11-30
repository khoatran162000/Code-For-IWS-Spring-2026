import React, {
  createContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
// 1. Create Context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  // 2. Memoize the toggle function
  // We wrap toggleTheme in useCallback.
  // This ensures the function's reference identity is stable
  // and it won't be recreated on every render.
  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light'? 'dark' : 'light'));
  },); // The dependency array is empty because setTheme is stable.

  // 3. Memoize the value object
  // We wrap the value object in useMemo.
  // This ensures the value object's reference only changes
  // when 'theme' or 'toggleTheme' (its dependencies) change.
  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
  );
  // 4. Provide the memoized value
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
// 5. Exports
export { ThemeContext, ThemeProvider };

