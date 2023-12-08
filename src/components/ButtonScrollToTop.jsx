import { useEffect } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { Button } from 'flowbite-react';

export default function ButtonScrollToTop() {
  const [show, setShow] = useState(false);
  const controlShow = () => {
    if (window.scrollY > 2) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', controlShow);
    return () => {
      window.removeEventListener('scroll', controlShow);
    };
  }, []);

  return (
    <div className='fixed bottom-8 right-20 z-50'>
      <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }}>
        <Button
          variant={'outline'}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className={`${show ? 'block' : 'hidden'} duration-300 px-8 py-2`}
        >
          <FaArrowUp />
        </Button>
      </motion.div>
    </div>
  );
}
