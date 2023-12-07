import PropTypes from 'prop-types';
import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from 'react-icons/ai';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { motion } from 'framer-motion';

export default function CategoryGallery({ dataCategory }) {
  const [currentImage, setCurrentImage] = useState({ img: null, i: 0 });
  console.log(currentImage);
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
      <div className='heading container mt-8 mb-6'>
        <h1 className='text-center font-bold mb-3'>
          Category {dataCategory.name}
        </h1>
        <p className='text-center'>
          This is category {dataCategory.name} image gallery.
        </p>
      </div>
      {currentImage.img && (
        <div className='overflow-hidden fixed top-0 w-full h-full flex justify-between items-center backdrop-blur-2xl z-50 cursor-zoom-out'>
          {/* Close Btn */}
          <motion.div
            className='absolute top-0 right-0 text-black hover:text-primary-900 cursor-pointer p-5'
            whileHover={{ scale: 1.1 }}
          >
            <AiOutlineClose
              size={40}
              onClick={() => setCurrentImage({ img: null, i: 0 })}
            />
          </motion.div>

          {/* Previous Btn  */}
          <motion.div
            className='absolute left-0 text-black hover:text-primary-900 cursor-pointer p-5'
            whileHover={{ scale: 1.1 }}
          >
            <AiOutlineLeft size={70} onClick={() => imgAction('previous')} />
          </motion.div>

          {/* Image */}
          <div className='w-full h-full flex items-center justify-center select-none'>
            <img
              src={currentImage.img}
              alt={`image`}
              className='max-w-[85%] max-h-[90%] rounded-lg cursor-pointer'
            />
          </div>

          {/* Next Btn  */}
          <motion.div
            className='absolute right-0 text-black hover:text-primary-900 cursor-pointer p-5'
            whileHover={{ scale: 1.1 }}
          >
            <AiOutlineRight size={70} onClick={() => imgAction('next')} />
          </motion.div>
        </div>
      )}
      <div className='mx-24'>
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
                  className='w-full shadow-lg cursor-zoom-in select-none'
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
