import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineGlobal } from 'react-icons/ai';
import { PiCaretDown } from 'react-icons/pi';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import translationURL from '../../utils/translationURL';
import logo from '../../assets/images/logo.webp';
import logoWhite from '../../assets/images/logo-white.webp';
import usa from '../../assets/images/Flag/usa.webp';
import vietnam from '../../assets/images/Flag/vietnam.webp';
import ThemeContext from '../../context/ThemeContext';

const Language = () => {
  const [language, setLanguage] = useState('Vietnamese');
  const languages = [
    { name: 'Vietnamese', image: vietnam },
    { name: 'English', image: usa },
  ];

  return (
    <div className='group relative py-7'>
      <div className='flex gap-1 items-center cursor-pointer opacity-70 hover:opacity-90 duration-300'>
        <AiOutlineGlobal size={24} />
        <PiCaretDown
          size={15}
          className='group-hover:rotate-180 duration-300'
        />
      </div>
      <div className='absolute bg-white dark:bg-dark top-[85%] left-[-40px] shadow-[0px_10px_40px_rgba(0,0,0,0.05)] p-4 rounded-xl border-[1px] border-solid border-gray-100 dark:border-hover-dark hidden group-hover:block'>
        <ul className='w-[200px]'>
          {languages.map((language) => (
            <li
              key={language.name}
              className='flex items-center cursor-pointer hover:bg-hover-light dark:hover:bg-hover-dark p-3 rounded-md duration-300'
              onClick={() => setLanguage(language.name)}
            >
              <img
                src={language.image}
                alt={language.name}
                width='35'
                height='24'
              />
              <span className='ml-3 text-[14px] font-medium'>
                {language.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Navbar({ data }) {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleChangeTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('dark-theme', JSON.stringify(!darkMode));
  };

  return (
    <div className='w-full hidden xl:block'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <a id='logo' href={'/'}>
            <img
              src={darkMode ? logoWhite : logo}
              alt='CSD Vietnam'
              width='140'
              height='60'
              className='select-none'
            />
          </a>
          <ul className='flex items-center ml-10'>
            {data?.map((item) => (
              <li
                key={item.name}
                className='group py-8 px-3 mx-2 font-medium cursor-pointer'
              >
                <div className='flex items-center'>
                  <div className='text-sm group-hover:text-primary duration-300 font-bold'>
                    {item.menus ? (
                      <span className='uppercase'>{item.name}</span>
                    ) : (
                      <Link to={`/${translationURL(item.name)}`}>
                        <span className='uppercase'>{item.name}</span>
                      </Link>
                    )}
                  </div>
                  {item.menus ? (
                    <PiCaretDown
                      size={17}
                      className='ml-[0.4rem] group-hover:rotate-180 group-hover:text-primary duration-300'
                    />
                  ) : null}
                </div>
                <ul
                  className={
                    item.menus
                      ? 'absolute bg-white dark:bg-dark top-[85%] shadow-[0px_10px_40px_rgba(0,0,0,0.05)] py-4 px-5 rounded-xl border-[1px] border-solid border-gray-100 dark:border-hover-dark hidden group-hover:block'
                      : ''
                  }
                >
                  {item.menus?.map((menu) => (
                    <Link
                      key={menu.name}
                      to={
                        menu.href
                          ? menu.href
                          : `/${translationURL(item.name)}/${translationURL(
                              menu.name
                            )}`
                      }
                      className='group flex items-center rounded-md py-3 pl-4 pr-6 duration-300 hover:bg-hover-light dark:hover:bg-hover-dark mb-2 relative'
                    >
                      <div className='mr-4 inline-block'>
                        {menu.icon ? <menu.icon size='20' /> : null}
                      </div>
                      <span>{menu.name}</span>
                    </Link>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex items-center gap-7'>
          <div className='mx-6 h-7 w-px bg-gray-300 dark:bg-dark-stroke 2xl:block 3xl:mx-7'></div>
          <div
            onClick={handleChangeTheme}
            className='cursor-pointer opacity-60 hover:opacity-90 duration-300'
          >
            {darkMode ? <RiSunFill size={24} /> : <RiMoonFill size={24} />}
          </div>
          <div className='my-auto'>
            <Language />
          </div>
          <div className='ml-3'>
            <a
              href='https://www.facebook.com/CSD.Vie'
              target='_'
              className='w-[280px] h-[6px]'
            >
              <button className='bg-primary inline-flex items-center justify-center rounded-xl py-2 px-5 text-center text-base font-normal text-white hover:bg-opacity-90 uppercase focus:outline-none focus:ring-4 focus:ring-orange-200'>
                Contact
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
Navbar.propTypes = {
  data: PropTypes.array.isRequired,
};
