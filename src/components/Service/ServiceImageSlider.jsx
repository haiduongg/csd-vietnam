import PropTypes from 'prop-types';
import { Carousel } from 'flowbite-react';

ServiceImageSlider.propTypes = {
  dataImg: PropTypes.array.isRequired,
};

export default function ServiceImageSlider({ dataImg }) {
  return (
    <div className='w-full h-[500px] background'>
      <Carousel slideInterval={3000}>
        {dataImg?.map((image) => (
          <img src={image.src} alt={`image ${image.id}`} key={image.id} />
        ))}
      </Carousel>
    </div>
  );
}
