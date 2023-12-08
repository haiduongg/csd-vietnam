import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Turn as Hamburger } from 'hamburger-react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';
import LogoCsd from '/assets/img/logo.webp';
import LogoCsdWhite from '/assets/img/logo-white.webp';
import navigationList from '../../data/navigations';
import ThemeContext from '../../context/ThemeContext';

export default function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className='header fixed w-full z-50 bg-white dark:bg-black-900 border-b-[1px] border-solid border-gray-200 lg:border-none'>
      <div className='container relative py-2 lg:flex lg:items-center lg:justify-start'>
        <div className='flex items-center justify-between'>
          <div className='block lg:hidden cursor-pointer'>
            <Hamburger toggled={openMenu} toggle={setOpenMenu} size={25} />
          </div>
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            whileTap={{ scale: 0.95 }}
            className='w-[90px] sm:w-[120px]'
          >
            <a href='/'>
              <img
                src={darkMode ? LogoCsdWhite : LogoCsd}
                alt='logo'
                width={120}
                height={52}
              />
            </a>
          </motion.div>
          <div className='block lg:hidden'>
            <motion.div
              onClick={() => {
                setDarkMode(!darkMode);
                localStorage.setItem('dark-theme', JSON.stringify(!darkMode));
              }}
              className='cursor-pointer opacity-60 hover:opacity-90 duration-300  w-12 h-12 flex items-center justify-center'
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <RiSunFill size={24} /> : <RiMoonFill size={24} />}
            </motion.div>
          </div>
        </div>
        <nav className='navbar w-full'>
          {/* For large screen  */}
          <div className='hidden lg:block ml-10'>
            <Navbar
              menuList={navigationList}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          </div>
          {/* For small screen */}
          <div className='absolute w-full top-full left-0 NavbarMobile block lg:hidden'>
            {openMenu ? (
              <NavbarMobile
                menuList={navigationList}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              />
            ) : null}
          </div>
        </nav>
      </div>
    </header>
  );
}
