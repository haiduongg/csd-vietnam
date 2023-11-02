import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { HiChevronDown } from 'react-icons/hi';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

Navbar.propTypes = {
  menuList: PropTypes.array.isRequired,
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
function Navbar({ menuList, darkMode, setDarkMode }) {
  return (
    <div className='flex justify-between items-center'>
      {/* Menu  */}
      <ul className='flex justify-start items-center'>
        {menuList?.map((item) => (
          <li key={item.id} className='group relative'>
            <div className='py-3.5 px-3 mx-2 cursor-pointer group-hover:text-primary'>
              <span className='uppercase font-bold text-sm'>{item.label}</span>
              <HiChevronDown
                className='inline-block group-hover:rotate-180 duration-300'
                size={20}
              />
            </div>
            <ul className='sub-menu absolute hidden group-hover:block bg-white dark:bg-dark top-full left-2 shadow-[0px_10px_40px_rgba(0,0,0,0.05)] py-4 px-5 rounded-xl border-[1px] border-solid border-gray-100 dark:border-hover-dark'>
              {item.children?.map((child) => (
                <li key={child.id}>
                  <Link
                    to={child.href}
                    className='flex items-center rounded-md py-3 pl-4 pr-6 duration-300 hover:bg-hover-light dark:hover:bg-hover-dark mb-2'
                  >
                    <div className='mr-4 inline-block'>
                      <child.icon size={18} />
                    </div>
                    <span className='whitespace-nowrap text-sm'>
                      {child.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {/* Action */}
      <div className='flex items-center justify-center gap-7'>
        <div className='mr-3 h-7 w-px bg-gray-300 dark:bg-dark-stroke 2xl:block 3xl:mx-7'></div>
        <motion.div
          onClick={() => {
            setDarkMode(!darkMode);
            localStorage.setItem('dark-theme', JSON.stringify(!darkMode));
          }}
          className='cursor-pointer opacity-60 hover:opacity-90 duration-300'
          whileTap={{ scale: 0.95 }}
        >
          {darkMode ? <RiSunFill size={24} /> : <RiMoonFill size={24} />}
        </motion.div>
        <Button
          type='primary'
          className='bg-primary uppercase'
          href='https://facebook.com/CSD.Vie'
          target='_blank'
        >
          Contact
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
