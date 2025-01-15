import React, { createContext } from 'react';

// Define the interface for the context value
interface SwitchTheme {
  theme: string,
  toggleTheme: () => void;
}

// Create the context with default values
export const ThemeContext = createContext<SwitchTheme>({
  theme: 'light',
  toggleTheme: () => {},
});