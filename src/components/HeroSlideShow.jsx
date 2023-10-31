import React from 'react';
import PropTypes from 'prop-types';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SlideShow = ({ dataImg }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      // navigation
      // pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='flex items-center justify-center'
    >
      {dataImg?.map((image) => (
        <SwiperSlide
          key={image.id}
          className='w-[500px] flex items-center justify-center'
        >
          <img src={image.src} alt={image.id} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

SlideShow.propTypes = {
  dataImg: PropTypes.array.isRequired,
};

export default SlideShow;
