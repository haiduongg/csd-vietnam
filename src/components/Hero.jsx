import { useContext } from 'react';
import { Button } from 'flowbite-react';
import { motion } from 'framer-motion';
import HeroSlideShow from './HeroSlideShow';
import P061 from '../assets/images/Hero/FIVERR.P082-000-FA-000_White.png';
import P066 from '../assets/images/Hero/FIVERR.P066-000-FA-000_White.png';
import P082 from '../assets/images/Hero/FIVERR.P082-000-FA-000_White.png';
import P128 from '../assets/images/Hero/FIVERR.P128-000-FA-001_White.png';
import P135 from '../assets/images/Hero/FIVERR.P135-000-FA-001_White.png';
import HM from '../assets/images/Hero/HM_White.png';
import darkP061 from '../assets/images/Hero/FIVERR.P061-001-FA-001_Dark.png';
import darkP066 from '../assets/images/Hero/FIVERR.P066-000-FA-000_Dark.png';
import darkP082 from '../assets/images/Hero/FIVERR.P082-000-FA-000_Dark.png';
import darkP128 from '../assets/images/Hero/FIVERR.P128-000-FA-001_Dark.png';
import darkP135 from '../assets/images/Hero/FIVERR.P135-000-FA-001_Dark.png';
import darkHM from '../assets/images/Hero/HM_Dark.png';
import ThemeContext from '../context/ThemeContext';

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
    <div className='flex items-start justify-between'>
      <div className='w-full text-center lg:text-left flex flex-col items-center justify-center lg:items-start lg:justify-between'>
        <motion.h2
          className='font-semibold'
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -200, opacity: 0 }}
          transition={{ type: 'spring', delay: 0.05 }}
        >
          Welcome here
        </motion.h2>
        <motion.h1
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -200, opacity: 0 }}
          transition={{ type: 'spring' }}
          className='font-bold mt-2 text-primary-900 dark:text-primary-700'
        >
          We are CSD Vietnam
        </motion.h1>
        <div className='w-[200px] sm:w-[400px] select-none block lg:hidden mx-auto'>
          <HeroSlideShow dataImg={darkMode ? darkImages : images} />
        </div>
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -200, opacity: 0 }}
          transition={{ type: 'spring', delay: 0.05 }}
        >
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
          <motion.div
            whileTap={{ scale: 0.95 }}
            className='w-32 mx-auto lg:mx-0'
          >
            <motion.div whileHover={{ scale: 0.97 }} whileTap={{ scale: 0.95 }}>
              <Button
                size='lg'
                href='https://facebook.com/CSD.Vie'
                target='_blank'
                className='bg-primary-900 dark:bg-primary-700 hover:opacity-75 uppercase focus:ring-0 text-xl rounded-xl'
              >
                Contact
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className='w-[500px] select-none hidden lg:block'>
        <HeroSlideShow dataImg={darkMode ? darkImages : images} />
      </div>
    </div>
  );
};

export default Hero;
