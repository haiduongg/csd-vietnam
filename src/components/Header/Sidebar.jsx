import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { AiFillHome } from 'react-icons/ai';
import { BiSolidChevronLeft } from 'react-icons/bi';
import {
  BsGrid,
  BsGridFill,
  BsCollection,
  BsCollectionFill,
  BsBriefcase,
  BsBriefcaseFill,
  BsImages,
  BsPeople,
  BsPeopleFill,
} from 'react-icons/bs';
import { FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

function Sidebar() {
  const sidebarMenu = [
    {
      id: 1,
      title: 'Dashboard',
      icon: BsGrid,
      iconFill: BsGridFill,
      href: '/dashboard',
    },
    {
      id: 2,
      title: 'Project Collection',
      icon: BsCollection,
      iconFill: BsCollectionFill,
      href: 'projects',
    },
    {
      id: 3,
      title: 'Service',
      icon: BsBriefcase,
      iconFill: BsBriefcaseFill,
      href: 'services',
    },
    {
      id: 4,
      title: 'Categories',
      icon: BsImages,
      iconFill: BsImages,
      href: 'categories',
    },
    {
      id: 5,
      title: 'Team',
      icon: BsPeople,
      iconFill: BsPeopleFill,
      href: 'team',
    },
  ];
  const [open, setOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <nav
      className={`${
        open ? 'w-[250px]' : 'w-[85px]'
      } bg-hover-light dark:bg-hover-dark duration-200 h-screen pb-10 fixed`}
    >
      {/* Heading  */}
      <div className='heading relative'>
        <div className='flex items-center justify-start gap-3 pt-6 pb-4 px-6 border-b-[1px] border-solid border-gray-600 text-primary font-bold'>
          <div className=''>
            <FaTools size={32} />
          </div>
          <span
            style={{ fontFamily: 'JetBrains Mono' }}
            className={`${
              open ? 'block' : 'hidden'
            } whitespace-nowrap overflow-hidden text-xl duration-200`}
          >
            CSD Vietnam
          </span>
        </div>
        <div
          className='absolute top-[60%] translate-y-[-50%] right-[-17px] rounded-full bg-white dark:bg-gray-700 cursor-pointer w-8 h-8 flex items-center justify-center shadow-xl'
          onClick={() => setOpen(!open)}
        >
          <BiSolidChevronLeft
            size={25}
            className={`${open ? '' : 'rotate-180'} duration-200`}
          />
        </div>
      </div>
      {/* Menu  */}
      <div className='h-[calc(100%-61px)] flex flex-col justify-between'>
        <SidebarMenuList
          dataMenu={sidebarMenu}
          isOpen={open}
          setIsOpen={setOpen}
        />
        <div className='px-3'>
          <div
            onClick={() => {
              setDarkMode(!darkMode);
              localStorage.setItem('dark-theme', JSON.stringify(!darkMode));
            }}
            className={`${
              open ? 'justify-start' : 'justify-center'
            } gap-3 cursor-pointer hover:bg-gray-700 rounded-xl duration-300 flex items-center py-3 px-3`}
          >
            <div className='w-5 h-5'>
              {darkMode ? <RiSunFill size={20} /> : <RiMoonFill size={20} />}
            </div>
            {open && (
              <span className='whitespace-nowrap overflow-hidden'>
                {darkMode ? 'Dark Mode' : 'Light Mode'}
              </span>
            )}
          </div>
          <div className='hover:bg-gray-700 rounded-xl py-3 px-3 duration-300 cursor-pointer mt-2'>
            <Link
              to={'/'}
              className={`${
                open ? 'justify-start' : 'justify-center'
              } flex items-center gap-3`}
            >
              <div className='w-5 h-5'>
                <AiFillHome size={20} />
              </div>
              <span
                className={`${
                  open ? 'block' : 'hidden'
                } uppercase whitespace-nowrap overflow-hidden`}
              >
                Go home
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

const SidebarMenuList = ({ dataMenu, isOpen, setIsOpen }) => {
  const [current, setCurrent] = useState('Dashboard');
  return (
    <ul className='mt-4'>
      {dataMenu?.map((item) => (
        <li
          key={item.id}
          className='relative group mt-1 first:mt-0'
          onClick={() => {
            setCurrent(item.title);
            setIsOpen(false);
          }}
          title={item.title}
        >
          <div
            className={`${
              current === item.title ? 'block' : 'hidden group-hover:block'
            } absolute left-0 w-1 h-[80%] top-[50%] translate-y-[-50%] bg-primary rounded-r-full`}
          />
          <Link
            to={item.href}
            className={`${isOpen ? 'justify-start' : 'justify-center'} ${
              current === item.title && 'text-primary'
            } group-hover:text-primary flex items-center gap-3 py-3 px-6`}
          >
            <div className='w-5 h-5'>
              <div
                className={`${
                  current === item.title && 'hidden'
                } group-hover:hidden`}
              >
                <item.icon size={20} />
              </div>
              <div
                className={`${
                  current !== item.title && 'hidden'
                } group-hover:block`}
              >
                <item.iconFill size={20} />
              </div>
            </div>
            {isOpen && (
              <span className='whitespace-nowrap overflow-hidden'>
                {item.title}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};
SidebarMenuList.propTypes = {
  dataMenu: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Sidebar;
