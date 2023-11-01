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

const CustomerCard = ({ dataCustomers }) => {
  return (
    <>
      {/* For large screen */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          delay: 2200,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='hidden lg:block'
      >
        {dataCustomers?.map((customer) => (
          <SwiperSlide
            key={customer.id}
            className='h-[550px] w-[500px] flex items-center justify-center bg-hover-light dark:bg-hover-dark rounded-3xl'
          >
            <div className='w-[400px] flex flex-col items-center justify-center p-7'>
              <div className='rounded-full cursor-pointer w-32 h-32'>
                <img
                  src={customer.avatar}
                  width={150}
                  height={150}
                  className='rounded-full object-cover'
                />
              </div>
              <span className='font-bold mt-7 mb-2'>{customer.name}</span>
              <span className='opacity-75'>{customer.country}</span>
              <p className='max-h-[190px] min-h-[190px] overflow-hidden mt-3 text-justify'>
                {customer.comment}
              </p>
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
          delay: 2200,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        className='block lg:hidden'
      >
        {dataCustomers?.map((customer) => (
          <SwiperSlide
            key={customer.id}
            className='h-[550px] w-[500px] flex items-center justify-center '
          >
            <div className='w-[400px] flex flex-col items-center justify-center p-7 bg-hover-light dark:bg-hover-dark rounded-3xl'>
              <div className='rounded-full cursor-pointer w-32 h-32'>
                <img
                  src={customer.avatar}
                  width={150}
                  height={150}
                  className='rounded-full object-cover'
                />
              </div>
              <span className='font-bold mt-7 mb-2'>{customer.name}</span>
              <span className='opacity-75'>{customer.country}</span>
              <p className='max-h-[190px] min-h-[190px] overflow-hidden mt-3 text-justify'>
                {customer.comment}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
CustomerCard.propTypes = {
  dataCustomers: PropTypes.array.isRequired,
};

export default CustomerCard;
