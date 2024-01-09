import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SwiperNavButton from '../SwiperNavButton';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// eslint-disable-next-line no-unused-vars
export default function ServiceImageSlider({ dataImg, dataVideo }) {
  return (
    <div className='w-full max-h-[40rem] relative'>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        className='w-full max-h-[40rem] shadow-lg rounded-xl'
      >
        {dataImg?.map((image, index) => (
          <SwiperSlide
            key={index}
            className='flex items-center justify-center bg-black-200'
          >
            <img
              src={image}
              alt={`image ${index}`}
              title={`image ${index}`}
              loading='eager'
              className='max-h-[40rem] object-contain select-none'
            />
          </SwiperSlide>
        ))}
        {dataVideo?.map((video, index) => (
          <SwiperSlide
            key={index}
            className='flex items-center justify-center bg-black-200'
          >
            <video controls className='h-[40rem] object-contain select-none'>
              <source src={video} type='video/mp4' />
            </video>
          </SwiperSlide>
        ))}
        <div className='absolute w-full top-[50%] z-20'>
          <SwiperNavButton />
        </div>
      </Swiper>
    </div>
  );
}
ServiceImageSlider.propTypes = {
  dataImg: PropTypes.array.isRequired,
  dataVideo: PropTypes.array.isRequired,
};
