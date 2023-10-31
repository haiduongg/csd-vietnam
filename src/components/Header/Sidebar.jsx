/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiCaretDown } from 'react-icons/pi';
import translationURL from '../../utils/translationURL';

export default function SubMenu({ data }) {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      <li
        onClick={() => setSubMenuOpen(!subMenuOpen)}
        className='flex justify-between items-center cursor-pointer p-3 '
      >
        <div className='flex items-center'>
          <data.icon size={24} />
          {data.menus ? (
            <p className='capitalize ml-6'>{data.name}</p>
          ) : (
            <Link to={translationURL(data.name)} className='capitalize ml-6'>
              {data.name}
            </Link>
          )}
        </div>
        <PiCaretDown
          size={17}
          className={
            data.menus
              ? `block ${subMenuOpen && 'rotate-180'} duration-200`
              : 'hidden'
          }
        />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: 'fit-content',
              }
            : {
                height: 0,
              }
        }
        className={
          subMenuOpen
            ? 'block ml-16 overflow-hidden'
            : 'hidden ml-16 overflow-hidden'
        }
      >
        {data.menus?.map((menu) => (
          <li key={menu.name} className='py-3'>
            <Link
              to={`/${translationURL(data.name)}/${translationURL(menu.name)}`}
              className='link !bg-transparent capitalize'
            >
              <p className='text-sm'>{menu.name}</p>
            </Link>
          </li>
        ))}
      </motion.ul>
    </>
  );
}
