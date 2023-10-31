import { createContext, useState } from 'react';

const get = JSON.parse(localStorage.getItem('dark-theme'));

export const DarkModeContext = createContext();
export const DarkModeProvider = (children) => {
  const [darkMode, setDarkMode] = useState(get || false);

  <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
    {children}
  </DarkModeContext.Provider>;
};
