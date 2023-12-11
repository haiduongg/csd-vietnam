import PropTypes from 'prop-types';
import { Carousel } from 'flowbite-react';

ServiceImageSlider.propTypes = {
  dataImg: PropTypes.array.isRequired,
  dataVideo: PropTypes.array.isRequired,
};

export default function ServiceImageSlider({ dataImg, dataVideo }) {
  return (
    <div className='w-full h-44 sm:h-80 md:h-96 lg:h-[450px] xl:h-[550px]'>
      <Carousel slideInterval={2200} pauseOnHover>
        {dataImg?.map((image, index) => (
          <img src={image} alt={`image ${index}`} key={index} />
        ))}
        {dataVideo?.map((video, index) => (
          <div key={index}>
            <video controls className='w-full h-full'>
              <source src={video} type='video/mp4' />
            </video>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
