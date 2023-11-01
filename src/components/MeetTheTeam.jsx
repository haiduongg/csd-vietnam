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
import PhongPham from '../assets/images/Vision/MeetTheTeam/PT.PHONG.png';
import MinhNguyen from '../assets/images/Vision/MeetTheTeam/NKH.MINH.png';
import DatLe from '../assets/images/Vision/MeetTheTeam/LT.DAT.png';
import HieuNguyen from '../assets/images/Vision/MeetTheTeam/NC.HIEU.png';
import DucNguyen from '../assets/images/Vision/MeetTheTeam/NQ.DUC.png';
import DuongCao from '../assets/images/Vision/MeetTheTeam/CH.DUONG.png';

const MeetTheTeam = () => {
  const teams = [
    {
      id: 1,
      name: 'Phong Pham',
      avatar: PhongPham,
      poisiton: 'Founder, Lead Engineer',
    },
    {
      id: 2,
      name: 'Dat Le',
      avatar: DatLe,
      poisiton: 'Mechanical Engineer',
    },
    {
      id: 3,
      name: 'Minh Nguyen',
      avatar: MinhNguyen,
      poisiton: 'Mechanical Engineer',
    },
    {
      id: 4,
      name: 'Hieu Nguyen',
      avatar: HieuNguyen,
      poisiton: 'Mechanical Engineer',
    },
    {
      id: 5,
      name: 'Duc Nguyen',
      avatar: DucNguyen,
      poisiton: 'Administrator, Lead Artist',
    },
    {
      id: 6,
      name: 'Duong Cao',
      avatar: DuongCao,
      poisiton: 'Developer',
    },
  ];
  return (
    <>
      <h3 className='heading text-center text-h3 uppercase font-bold'>
        Meet The Team
      </h3>
      <div className='slide-show mt-8'>
        <VisionSlider data={teams} />
      </div>
    </>
  );
};

const VisionSlider = ({ data }) => {
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
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='flex items-center justify-center hidden lg:block'
      >
        {data?.map((person) => (
          <SwiperSlide
            key={person.id}
            className='min-h-[300px] w-[500px] flex items-center justify-center bg-hover-light dark:bg-hover-dark rounded-3xl'
          >
            <div className='w-[400px] flex flex-col items-center justify-center p-7'>
              <img
                src={person.avatar}
                alt={person.name}
                width={100}
                height={100}
                className='w-[100px] h-[100px] object-cover rounded-full'
              />
              <span className='font-bold mt-7 mb-2 text-[22px]'>
                {person.name}
              </span>
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
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='flex items-center justify-center block lg:hidden'
      >
        {data?.map((person) => (
          <SwiperSlide
            key={person.id}
            className='min-h-[300px] w-[500px] flex items-center justify-center'
          >
            <div className='w-[400px] flex flex-col items-center justify-center p-7 bg-hover-light dark:bg-hover-dark rounded-3xl'>
              <img
                src={person.avatar}
                alt={person.name}
                width={100}
                height={100}
                className='w-[100px] h-[100px] object-cover rounded-full'
              />
              <span className='font-bold mt-7 mb-2 text-[22px]'>
                {person.name}
              </span>
              <span className='opacity-75'>{person.poisiton}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
VisionSlider.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MeetTheTeam;
