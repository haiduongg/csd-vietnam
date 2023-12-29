import { useSwiper } from 'swiper/react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default function SwiperNavButton() {
  const swiper = useSwiper();

  return (
    <div className='flex justify-between items-center px-4'>
      <button
        onClick={() => swiper.slidePrev()}
        className='left-0 text-black cursor-pointer bg-white w-12 aspect-square flex items-center justify-center rounded-full shadow-md shadow-black-300 hover:shadow-black-400'
      >
        <AiOutlineLeft size={20} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className='left-0 text-black cursor-pointer bg-white w-12 aspect-square flex items-center justify-center rounded-full shadow-md shadow-black-300 hover:shadow-black-400'
      >
        <AiOutlineRight size={20} />
      </button>
    </div>
  );
}
