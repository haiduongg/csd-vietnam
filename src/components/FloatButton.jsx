import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';
import { BiArrowToTop } from 'react-icons/bi';
import FacebookMessenger from '../assets/images/Icons/facebook-messenger.webp';
import Skype from '../assets/images/Icons/skype-2019.webp';
import Whatsapp from '../assets/images/Icons/whatsapp.webp';
import { Tooltip } from '@chakra-ui/react';

const variants = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 1,
    },
  },
  hidden: {
    opacity: 0,
    x: 100,
  },
};

export default function FloatButton() {
  const [show, setShow] = useState(false);
  const [enableScroll, setEnableScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', controlShow);
    return () => {
      window.removeEventListener('scroll', controlShow);
    };
  }, []);
  const controlShow = () => {
    if (window.scrollY > 700) {
      setEnableScroll(true);
    } else {
      setEnableScroll(false);
    }
  };
  const contacts = [
    {
      id: 1,
      icon: FacebookMessenger,
      title: 'Facebook',
      href: 'https://www.messenger.com/t/CSD.Vie',
      description: '(8h00 - 24h00)',
    },
    {
      id: 2,
      icon: Skype,
      title: 'Skype',
      href: 'Skype:live:.cid.484f3503905e6563',
      description: '(8h00 - 24h00)',
    },
    {
      id: 3,
      icon: Whatsapp,
      title: '076.527.9228',
      href: 'tel:0765279228',
      description: '(8h00 - 24h00)',
    },
  ];
  return (
    <>
      {/* Scroll to top */}
      {enableScroll && (
        <motion.div
          className='fixed bottom-4 md:bottom-10 right-4 md:right-8 z-10'
          initial={{ y: 5 }}
          animate={{ y: 0 }}
        >
          <Tooltip label='Scroll to top' placement='left'>
            <motion.button
              className='p-1 rounded-full bg-error text-white'
              onClick={() => {
                window.scrollTo(0, 0);
                if (show == true) {
                  setShow(false);
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BiArrowToTop size={30} />
            </motion.button>
          </Tooltip>
        </motion.div>
      )}
      {/* Button show menu  */}
      <div
        className={`${
          enableScroll
            ? 'bottom-[4.5rem] md:bottom-24'
            : 'bottom-4 md:bottom-10'
        } fixed right-2 md:right-6 z-10`}
      >
        <Tooltip
          label={!show ? 'Show social menu' : 'Close social menu'}
          placement='left'
        >
          <motion.button
            className='p-3 bg-white dark:bg-black-900 rounded-full shadow-lg dark:shadow-black-full hover:text-primary-900'
            onClick={() => setShow(!show)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {!show && <FaPlus size={30} />}
            {show && <IoCloseSharp size={30} />}
          </motion.button>
        </Tooltip>
      </div>
      {/* Social menu  */}
      <div
        className={`${
          enableScroll
            ? 'bottom-[8rem] md:bottom-[9.5rem]'
            : 'bottom-[4.5rem] md:bottom-24'
        } fixed right-2 md:right-6 z-10`}
      >
        {show && (
          <motion.div initial='hidden' animate='show' variants={variants}>
            {contacts.map((contact) => (
              <motion.div
                key={contact.id}
                className='group p-2 md:pr-4 lg:pl-3 lg:pr-6 lg:py-2 mb-3 bg-white dark:bg-black-900 rounded-xl shadow-lg dark:shadow-black-full dark:border dark:border-solid dark:border-gray-900 select-none'
                whileTap={{ scale: 0.95 }}
                whileHover={{ x: -10 }}
                initial={{ x: 0 }}
              >
                <a href={contact.href} target='_' className='flex items-center'>
                  <img
                    src={contact.icon}
                    alt={contact.title}
                    width='40'
                    height='40'
                    className='mr-3'
                  />
                  <p className='dark:text-white'>
                    <span className='group-hover:text-primary-900 font-semibold'>
                      {contact.title}
                    </span>
                    <br />
                    <span className='font-semibold text-sm opacity-60'>
                      {contact.description}
                    </span>
                  </p>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
}
