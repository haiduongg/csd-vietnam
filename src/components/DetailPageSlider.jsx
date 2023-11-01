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

DetailPageSlider.propTypes = {
  dataImg: PropTypes.array.isRequired,
};

function DetailPageSlider({ dataImg }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='flex items-center justify-center'
    >
      {dataImg?.map((image) => (
        <SwiperSlide
          key={image.id}
          className='flex items-center justify-center'
        >
          <div className='w-[900px] h-[400px] flex items-center justify-center object-fill'>
            <img
              src={image.src}
              alt={image.id}
              className='object-fill scale-125'
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default DetailPageSlider;
