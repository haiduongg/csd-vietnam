import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import HomePage from './pages/Home';
import Vision from './pages/Vision';
import NewsPage from './pages/News';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';
import OurJourney from './pages/OurJourney';
import ThemeContext from './context/ThemeContext';
import ProjectDetail from './pages/ProjectDetail';
import FloatingButton from './components/FloatingButton';
import ServicePageDetail from './pages/ServicePageDetail';

function App() {
  const get = JSON.parse(localStorage.getItem('dark-theme'));
  const [darkMode, setDarkMode] = useState(get || false);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className='page dark:bg-dark dark:text-white'>
        <Header />
        <FloatingButton />
        <main className='py-[72px]'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us/vision' element={<Vision />} />
            <Route path='/about-us/our-journey' element={<OurJourney />} />
            <Route path='/services/:href' element={<ServicePageDetail />} />
            <Route path='/projects/:projectid' element={<ProjectDetail />} />
            <Route path='/news-&-media' element={<NewsPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
