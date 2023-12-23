import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import ThemeContext from './context/ThemeContext';
import HomePage from './pages/Home';
import Vision from './pages/Vision';
import BlogPage from './pages/Blog';
import Carrers from './pages/Carrers.jsx';
import ErrorPage from './pages/ErrorPage';
import OurJourney from './pages/OurJourney';
import Category from './pages/Category.jsx';
import Service from './pages/Service';

function App() {
  const get = JSON.parse(localStorage.getItem('dark-theme'));
  const [darkMode, setDarkMode] = useState(get || false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className='page dark:bg-black-900 dark:text-black-none duration-75'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='vision' element={<Vision />} />
          <Route path='our-journey' element={<OurJourney />} />
          <Route path='service/:href' element={<Service />} />
          <Route path='category/:href' element={<Category />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='carrers' element={<Carrers />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
