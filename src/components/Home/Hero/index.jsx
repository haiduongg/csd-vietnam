import { useContext } from 'react';
import { Button } from 'flowbite-react';
import { motion } from 'framer-motion';
import HeroSlideImage from './HeroSlideImage';
import P061 from '/assets/img/hero/FIVERR.P061-001-FA-001_White.webp';
import P066 from '/assets/img/hero/FIVERR.P066-000-FA-000_White.webp';
import P082 from '/assets/img/hero/FIVERR.P082-000-FA-000_White.webp';
import P128 from '/assets/img/hero/FIVERR.P128-000-FA-001_White.webp';
import P135 from '/assets/img/hero/FIVERR.P135-000-FA-001_White.webp';
import HM from '/assets/img/hero/HM_White.webp';
import darkP061 from '/assets/img/hero/FIVERR.P061-001-FA-001_Dark.webp';
import darkP066 from '/assets/img/hero/FIVERR.P066-000-FA-000_Dark.webp';
import darkP082 from '/assets/img/hero/FIVERR.P082-000-FA-000_Dark.webp';
import darkP128 from '/assets/img/hero/FIVERR.P128-000-FA-001_Dark.webp';
import darkP135 from '/assets/img/hero/FIVERR.P135-000-FA-001_Dark.webp';
import darkHM from '/assets/img/hero/HM_Dark.webp';
import ThemeContext from '../../../context/ThemeContext';

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
  const list = [
    'Professional CAD Services',
    'Unique and creative',
    'Reaching the world',
  ];

  return (
    <div className='container flex items-start justify-between'>
      <div className='w-full text-center lg:text-left flex flex-col items-center justify-center lg:items-start lg:justify-between'>
        <motion.h2
          className='font-bold text-3xl sm:text-4xl md:text-5xl mb-0 md:mb-5'
          animate={{ x: 0, opacity: 0.8 }}
          initial={{ x: -200, opacity: 0 }}
          transition={{ type: 'spring', delay: 0.05 }}
        >
          Welcome here
        </motion.h2>
        <motion.h1
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -200, opacity: 0 }}
          transition={{ type: 'spring' }}
          className='font-extrabold mt-2 text-primary-900 dark:text-primary-700 text-4xl sm:text-5xl md:text-6xl xl:text-7xl mb-6'
        >
          <span className='bg-gradient-to-b from-primary-800 to-primary-900 dark:from-primary-600 dark:via-primary-700 dark:to-primary-800 inline-block text-transparent bg-clip-text'>
            ư
          </span>
        </motion.h1>
        <div className='w-full select-none block lg:hidden mx-auto my-3'>
          <HeroSlideImage dataImg={darkMode ? darkImages : images} />
        </div>
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -200, opacity: 0 }}
          transition={{ type: 'spring', delay: 0.05 }}
        >
          <ul className='m-0 lg:ml-20 list-none lg:list-disc'>
            {list.map((item, index) => (
              <li key={index} className='my-3'>
                <h4 className='text-base sm:text-lg md:text-2xl font-semibold opacity-80'>
                  <span>{item}</span>
                </h4>
              </li>
            ))}
          </ul>
          <motion.div
            whileTap={{ scale: 0.95 }}
            className='mt-10 w-48 mx-auto lg:mx-0'
          >
            <motion.div whileHover={{ scale: 0.97 }} whileTap={{ scale: 0.95 }}>
              <Button
                size='lg'
                href='https://facebook.com/CSD.Vie'
                target='_blank'
                className='bg-gradient-to-r hover:bg-gradient-to-l from-primary-800 to-primary-900 uppercase focus:ring-0 text-xl rounded-xl'
              >
                Contact
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className='w-[500px] select-none hidden lg:block'>
        <HeroSlideImage dataImg={darkMode ? darkImages : images} />
      </div>
    </div>
  );
};

export default Hero;
