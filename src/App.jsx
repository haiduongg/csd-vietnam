import { createContext, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import HomePage from './pages/Home';
import Vision from './pages/Vision';
import ProjectDetail from './pages/ProjectDetail';
import NewsPage from './pages/News';
import ErrorPage from './pages/ErrorPage';
import OurJourney from './pages/OurJourney';

export const DarkModeContext = createContext();
function App() {
  const get = JSON.parse(localStorage.getItem('dark-theme'));
  const [darkMode, setDarkMode] = useState(get || false);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className='page dark:bg-dark dark:text-white'>
        <Header />
        <FloatingButton />
        <main className='container py-[80px]'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us/Vision' element={<Vision />} />
            <Route path='/about-us/our-journey' element={<OurJourney />} />
            <Route path='/projects/:projectid' element={<ProjectDetail />} />
            <Route path='/news-&-media' element={<NewsPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </DarkModeContext.Provider>
  );
}
export default App;
