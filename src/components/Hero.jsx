import HeroSlideShow from './HeroSlideShow';
import P061 from '../assets/images/hero/FIVERR.P061-001-FA-001_White.png';
import P066 from '../assets/images/hero/FIVERR.P066-000-FA-000_White.png';
import P082 from '../assets/images/hero/FIVERR.P082-000-FA-000_White.png';
import P128 from '../assets/images/hero/FIVERR.P128-000-FA-001_White.png';
import P135 from '../assets/images/hero/FIVERR.P135-000-FA-001_White.png';
import HM from '../assets/images/hero/HM_White.png';
import darkP061 from '../assets/images/hero/FIVERR.P061-001-FA-001_Dark.png';
import darkP066 from '../assets/images/hero/FIVERR.P066-000-FA-000_Dark.png';
import darkP082 from '../assets/images/hero/FIVERR.P082-000-FA-000_Dark.png';
import darkP128 from '../assets/images/hero/FIVERR.P128-000-FA-001_Dark.png';
import darkP135 from '../assets/images/hero/FIVERR.P135-000-FA-001_Dark.png';
import darkHM from '../assets/images/hero/HM_Dark.png';
import ThemeContext from '../context/ThemeContext';

import { useContext } from 'react';

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);
  const images = [
    { id: 1, src: P061 },
    { id: 2, src: P066 },
    { id: 3, src: P082 },
    { id: 4, src: P128 },
    { id: 5, src: P135 },
    { id: 6, src: HM },
  ];
  const darkImages = [
    { id: 1, src: darkP061 },
    { id: 2, src: darkP066 },
    { id: 3, src: darkP082 },
    { id: 4, src: darkP128 },
    { id: 5, src: darkP135 },
    { id: 6, src: darkHM },
  ];
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-between'>
      <div className='text-center lg:text-left'>
        <h2 className='font-semibold'>Welcome here</h2>
        <h1 className='font-bold mt-2 text-primary'>We are CSD Vietnam</h1>
        <div className='w-[300px] select-none block lg:hidden mx-auto'>
          <HeroSlideShow dataImg={darkMode ? darkImages : images} />
        </div>
        <ul className='m-0 mx-10 list-disc'>
          <li className='my-4'>
            <h4>Professional CAD Services</h4>
          </li>
          <li className='my-4'>
            <h4>Unique and creative</h4>
          </li>
          <li className='my-4'>
            <h4>Reaching the world</h4>
          </li>
        </ul>
        <div className='mt-6 flex justify-center lg:justify-start'>
          <a href='https://www.facebook.com/CSD.Vie' target='_'>
            <button className='bg-primary inline-flex items-center justify-center rounded-xl text-[20px] py-4 px-10 text-center text-base font-semibold text-white hover:bg-opacity-90 uppercase'>
              Contact
            </button>
          </a>
        </div>
      </div>
      <div className='w-[500px] select-none hidden lg:block'>
        <HeroSlideShow dataImg={darkMode ? darkImages : images} />
      </div>
    </div>
  );
};

export default Hero;
