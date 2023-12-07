import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CustomerReviewCard from './CustomerReviewCard';

SliderReview.propTypes = {
  dataSlide: PropTypes.array.isRequired,
};
export default function SliderReview({ dataSlide }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={25}
      slidesPerView={2}
      autoplay={{
        delay: 2200,
        disableOnInteraction: false,
      }}
    >
      {dataSlide.map((review, index) => (
        <SwiperSlide key={index}>
          <CustomerReviewCard dataCustomer={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
