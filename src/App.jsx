import { useState, useEffect, useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { ChakraProvider } from '@chakra-ui/react';
import {
  HomePage,
  Vision,
  OurJourney,
  Service,
  Category,
  BlogPage,
  Carrers,
  ErrorPage,
  BlogDetail,
  CreatePost,
} from './pages';
import ThemeContext from './context/ThemeContext';

function App() {
  const get = JSON.parse(localStorage.getItem('dark-theme'));
  const [darkMode, setDarkMode] = useState(get || false);

  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ChakraProvider>
        <div className='page dark:bg-black-900 dark:text-black-none duration-75'>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='vision' element={<Vision />} />
            <Route path='our-journey' element={<OurJourney />} />
            <Route path='service/:href' element={<Service />} />
            <Route path='category/:href' element={<Category />} />
            <Route path='blog' element={<BlogPage />} />
            <Route path='blog/:href' element={<BlogDetail />} />
            <Route path='carrers' element={<Carrers />} />
            <Route path='create' element={<CreatePost />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </ChakraProvider>
    </ThemeContext.Provider>
  );
}
export default App;
