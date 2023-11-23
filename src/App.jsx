import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './pages/Home';
import Vision from './pages/Vision';
import NewsPage from './pages/News';
import ErrorPage from './pages/ErrorPage';
import OurJourney from './pages/OurJourney';
import ThemeContext from './context/ThemeContext';
import ProjectDetail from './pages/ProjectDetail';
import Category from "./pages/Category.jsx";
import ServicePageDetail from './pages/ServicePageDetail';
import Dashboard from './pages/Dashboard';

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
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <div className='page dark:bg-black-900 dark:text-black-none'>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='dashboard/*' element={<Dashboard/>}/>
            <Route path='vision' element={<Vision/>}/>
            <Route path='our-journey' element={<OurJourney/>}/>
            <Route path='services/:href' element={<ServicePageDetail/>}/>
            <Route path='category/:href' element={<Category/>}/>
            <Route path='projects/:projectid' element={<ProjectDetail/>}/>
            <Route path='blogs' element={<NewsPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>
        </div>
      </ThemeContext.Provider>
  );

}
export default App;
