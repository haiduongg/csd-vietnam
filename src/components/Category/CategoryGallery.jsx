import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';

export default function CategoryGallery({ dataCategory }) {
  const [currentImage, setCurrentImage] = useState({ img: null, i: 0 });
  // ESC to exit modal
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setCurrentImage({ img: null, i: 0 });
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  function imgAction(action) {
    let index = currentImage.i;
    if (action === 'next') {
      setCurrentImage({ img: dataCategory.images[index + 1], i: index + 1 });
    }
    if (action === 'previous') {
      setCurrentImage({ img: dataCategory.images[index - 1], i: index - 1 });
    }
  }

  return (
    <div className='relative'>
      {currentImage.img && (
        <div className='overflow-hidden fixed top-0 w-screen h-screen flex justify-between items-center z-50'>
          <div
            className='absolute w-screen h-screen bg-white opacity-95'
            onClick={() => setCurrentImage({ img: null, i: 0 })}
          ></div>
          {/* Close Btn */}
          <motion.div
            className='absolute top-3 right-3 text-black cursor-pointer bg-white w-12 aspect-square flex items-center justify-center rounded-full shadow-md shadow-black-300 hover:shadow-black-400'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentImage({ img: null, i: 0 })}
          >
            <AiOutlineClose size={20} className='opacity-70' />
          </motion.div>

          {/* Previous Btn  */}
          <div className='hidden md:block'>
            <motion.div
              className='absolute left-3 text-black cursor-pointer bg-white w-12 aspect-square flex items-center justify-center rounded-full shadow-md shadow-black-300 hover:shadow-black-400'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => imgAction('previous')}
            >
              <AiOutlineLeft size={20} className='opacity-70' />
            </motion.div>
          </div>

          {/* Image */}
          <div className='max-w-[95%] md:max-w-[85%] max-h-[95%] flex items-center justify-center select-none z-40'>
            <img
              src={currentImage.img}
              alt={`image`}
              className='max-w-[95%] md:max-w-[85%] max-h-[95%] rounded-lg'
            />
          </div>

          {/* Next Btn  */}
          <div className='hidden md:block'>
            <motion.div
              className='absolute right-3 text-black cursor-pointer bg-white w-12 aspect-square flex items-center justify-center rounded-full shadow-md shadow-black-300 hover:shadow-black-400'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => imgAction('next')}
            >
              <AiOutlineRight size={20} className='opacity-70' />
            </motion.div>
          </div>
        </div>
      )}
      <div className='mx-5 sm:mx-10 xl:mx-16'>
        {dataCategory.images && (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter='20px'>
              {dataCategory.images?.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`image ${index}`}
                  className='w-full shadow-lg cursor-pointer select-none rounded-md'
                  onClick={() => setCurrentImage({ img: image, i: index })}
                  whileHover={{ scale: 1.04 }}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        )}
        {!dataCategory.images && <div>Updating...</div>}
      </div>
    </div>
  );
}
CategoryGallery.propTypes = {
  dataCategory: PropTypes.object.isRequired,
};
