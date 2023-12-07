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

VisionSlider.propTypes = {
  data: PropTypes.array.isRequired,
};

function VisionSlider({ data }) {
  return (
    <div>
      {/* For large screen  */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          delay: 3100,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        className='flex items-center justify-center hidden lg:block'
      >
        {data?.map((person) => (
          <SwiperSlide
            key={person.id}
            className='min-h-[300px] w-[500px] flex items-center justify-center bg-black-100 dark:bg-black-800 rounded-3xl'
          >
            <div className='w-[400px] flex flex-col items-center justify-center p-7'>
              <img
                src={person.avatar}
                alt={person.name}
                width={100}
                height={100}
                className='w-[100px] h-[100px] object-cover rounded-full'
              />
              <span className='font-bold mt-7 mb-2 text-xl'>{person.name}</span>
              <span className='opacity-75'>{person.poisiton}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* For small screen  */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3100,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        className='flex items-center justify-center block lg:hidden'
      >
        {data?.map((person) => (
          <SwiperSlide
            key={person.id}
            className='min-h-[300px] w-[500px] flex items-center justify-center'
          >
            <div className='w-[400px] flex flex-col items-center justify-center p-7 bg-black-100 dark:bg-black-800 rounded-3xl'>
              <img
                src={person.avatar}
                alt={person.name}
                width={100}
                height={100}
                className='w-[100px] h-[100px] object-cover rounded-full'
              />
              <span className='font-bold mt-7 mb-2 text-lg'>{person.name}</span>
              <span className='opacity-75'>{person.poisiton}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default VisionSlider;
