/* eslint-disable react/prop-types */
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineCodepen,
} from 'react-icons/ai';
import { GiTeleport } from 'react-icons/gi';
import { AiOutlineMacCommand } from 'react-icons/ai';
import { TbBoxModel } from 'react-icons/tb';
import { LuBadgeCheck } from 'react-icons/lu';
import { FaRegPenToSquare, FaNewspaper } from 'react-icons/fa6';
import { FaPencilRuler } from 'react-icons/fa';
import { MdMiscellaneousServices, MdOutlineClass } from 'react-icons/md';
import {
  PiTreeStructureDuotone,
  PiUserListDuotone,
  PiUsersFourLight,
} from 'react-icons/pi';
import { CgGhostCharacter } from 'react-icons/cg';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import logo from '../../assets/images/logo.webp';
import logoWhite from '../../assets/images/logo-white.webp';

export default function Header() {
  const [show, setShow] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  const menuList = [
    {
      name: 'About us',
      icon: FaRegPenToSquare,
      menus: [
        { name: 'Vision', href: '/about-us/vision', icon: PiUserListDuotone },
        {
          name: 'Our Journey',
          href: '/about-us/our-journey',
          icon: PiUsersFourLight,
        },
      ],
    },
    {
      name: 'Services',
      icon: MdMiscellaneousServices,
      menus: [
        {
          name: '3D Modeling & Rendering',
          href: '/services/3d-modeling-rendering',
          icon: TbBoxModel,
        },
        {
          name: 'Steel Structure & Landscape',
          href: '/services/steel-structure-landscape',
          icon: CgGhostCharacter,
        },
        {
          name: 'Simulation & Rendering',
          href: '/services/simulation-rendering',
          icon: AiOutlineCodepen,
        },
        {
          name: '3D Artist & 3D Printing',
          href: '/services/3d-artist-3d-printing',
          icon: AiOutlineMacCommand,
        },
        {
          name: 'Portraits & Caricatures',
          href: '/services/portraits-caricatures',
          icon: PiTreeStructureDuotone,
        },
        {
          name: 'Logo Design',
          href: '/services/logo-design',
          icon: GiTeleport,
        },
        {
          name: 'Training Courses',
          href: 'https://courses.csdvietnam.com',
          icon: MdOutlineClass,
        },
      ],
    },
    {
      name: 'Categories',
      icon: FaPencilRuler,
      menus: [
        { name: '3D Modeling & 2D Drawings', icon: LuBadgeCheck },
        { name: 'Steel Structure & Landscape ', icon: LuBadgeCheck },
        { name: 'Simulation & Rendering', icon: LuBadgeCheck },
        { name: '3D Artist & 3D Printing', icon: LuBadgeCheck },
        { name: 'Portraits & Cricatures', icon: LuBadgeCheck },
        { name: 'Logo Design', icon: LuBadgeCheck },
      ],
    },
    {
      name: 'News & Media',
      icon: FaNewspaper,
      menus: [
        { name: 'Carrers', icon: LuBadgeCheck },
        { name: 'Blogs', icon: LuBadgeCheck },
      ],
    },
  ];
  return (
    <header
      className={`fixed w-full z-50 ${
        navbar &&
        'dark:bg-dark bg-[white] border-b-[1.5px] border-solid !border-gray-300 dark:!border-gray-500'
      } duration-200 border-b-[1.5px] border-solid border-transparent`}
    >
      <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto text-black dark:text-white px-4 md:px-10'>
        <Navbar data={menuList} />

        <div className='block cursor-pointer xl:hidden flex justify-between items-center w-full'>
          <a id='logo' href={'/'}>
            <img
              src={logo}
              alt='CSD Vietnam'
              width='140'
              height='60'
              className='select-none'
            />
          </a>
          {!show ? (
            <AiOutlineMenu size={40} onClick={() => setShow(!show)} />
          ) : (
            <AiOutlineClose size={40} onClick={() => setShow(!show)} />
          )}
          <nav
            id='mobile'
            className={
              show
                ? 'fixed top-0 left-0 bg-primary text-white w-[80%] h-full ease-in-out duration-500 p-4'
                : 'fixed top-0 left-[-100%] w-[90%] h-full ease-in-out duration-500 p-4'
            }
          >
            <div className='pb-2'>
              <img
                src={logoWhite}
                alt='CSD Vietnam'
                width='140'
                height='60'
                className='select-none'
              />
            </div>
            <ul className='mt-[30px] overflow-auto'>
              {menuList?.map((item) => (
                <Sidebar key={item.name} data={item} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
