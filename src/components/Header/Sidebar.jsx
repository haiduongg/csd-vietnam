import PropTypes from 'prop-types';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi';

Sidebar.propTypes = {
  menuList: PropTypes.array.isRequired,
  openMenu: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired,
};
function Sidebar({ menuList, openMenu, setOpenMenu }) {
  const [isItem, setIsItem] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: -200, opacity: 0 }}
      className='bg-primary text-white flex flex-col items-center justify-start select-none h-fit text-center z-50 py-2'
    >
      {menuList?.map((item) => (
        <li key={item.id}>
          <motion.div
            className='cursor-pointer py-3 w-screen'
            onClick={() => {
              setIsItem(item.label);
              isItem === item.label && isOpen == true
                ? setIsOpen(false)
                : setIsOpen(true);
            }}
            whileTap={{ scale: 0.9 }}
          >
            <span className='text-base'>{item.label}</span>
            <HiChevronDown
              className={`${
                isItem === item.label && isOpen === true && 'rotate-180'
              } inline-block duration-300`}
            />
          </motion.div>
          {isItem === item.label && isOpen === true && (
            <motion.ul
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className='w-screen border-y-[1px] border-solid border-gray-200 bg-primary hue-rotate-15'
            >
              {item.children?.map((child) => (
                <motion.li
                  key={child.id}
                  onClick={() => setOpenMenu(!openMenu)}
                  whileTap={{ scale: 0.9 }}
                  className='w-scrren'
                >
                  <Link to={child.href} className='py-3 w-full block'>
                    {child.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </li>
      ))}
    </motion.div>
  );
}

export default Sidebar;
