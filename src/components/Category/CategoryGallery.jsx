import { Button } from 'flowbite-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export default function CategoryGallery({ dataCategory }) {
  const [currentImage, setCurrentImage] = useState({ img: null, i: 0 });
  const viewImage = (image, index) => {
    setCurrentImage({ img: image, i: index });
  };
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
      {currentImage.i && (
        <div className='fixed top-0 w-[100vw] h-[100vh] overflow-hidden flex justify-between items-center bg-dark z-50 overflow-y-hidden'>
          <div
            className='absolute top-4 right-4'
            onClick={() => setCurrentImage({ img: null, i: 0 })}
          >
            <Button>
              <IoMdClose size={20} />
            </Button>
          </div>
          <div>
            <Button>
              <FaChevronLeft size={20} />
            </Button>
          </div>
          <img
            src={currentImage.img}
            alt={`image`}
            className='h-[90%] w-[90%]'
          />
          <div>
            <Button>
              <FaChevronRight size={20} />
            </Button>
          </div>
        </div>
      )}
      <div>
        {dataCategory.images && (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter='20px'>
              {dataCategory.images?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`image ${index}`}
                  className='w-full block shadow-lg cursor-pointer'
                  onClick={() => viewImage(image, index)}
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
