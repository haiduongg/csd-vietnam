import PropTypes from 'prop-types';
import { Carousel } from 'flowbite-react';

ServiceImageSlider.propTypes = {
  dataImg: PropTypes.array.isRequired,
};

export default function ServiceImageSlider({ dataImg }) {
  return (
    <div className='w-full h-44 sm:h-80 md:h-96 lg:h-[450px] xl:h-[550px]'>
      <Carousel slideInterval={3000}>
        {dataImg?.map((image) => (
          <img src={image.src} alt={`image ${image.id}`} key={image.id} />
        ))}
      </Carousel>
    </div>
  );
}
