import { Button } from 'flowbite-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { motion } from 'framer-motion';

export default function CategoryGallery({ dataCategory }) {
  const [currentImage, setCurrentImage] = useState({ img: null, i: 0 });
  const [openModal, setOpenModal] = useState(false);
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
      {openModal && (
        <div className='overflow-hidden fixed top-0 w-full h-full flex justify-between items-center bg-dark z-50'>
          {/* Close Btn */}
          <div
            className='absolute top-4 right-4'
            onClick={() => setOpenModal(false)}
          >
            <Button className='rounded-full bg-primary-900 hover:bg-primary-800'>
              <IoMdClose size={20} />
            </Button>
          </div>

          {/* Next Btn 
          <div className='fixed left-3'>
            <Button>
              <FaChevronLeft size={20} />
            </Button>
          </div> */}

          {/* Image */}
          <div className='w-full h-full flex items-center justify-center'>
            <img
              src={currentImage.img}
              alt={`image`}
              className='max-w-[90%] max-h-[90%] cursor-zoom-out'
              onClick={() => setOpenModal(false)}
            />
          </div>

          {/* Previous Btn 
          <div className='fixed right-3'>
            <Button>
              <FaChevronRight size={20} />
            </Button>
          </div> */}
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
                  className='w-full block shadow-lg cursor-zoom-in'
                  onClick={() => {
                    setCurrentImage({ img: image, i: index });
                    setOpenModal(true);
                  }}
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
