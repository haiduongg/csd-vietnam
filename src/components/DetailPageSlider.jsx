import PropTypes from 'prop-types';
import { Carousel } from 'flowbite-react';

DetailPageSlider.propTypes = {
  dataImg: PropTypes.array.isRequired,
};

function DetailPageSlider({ dataImg }) {
  return (
    <div className='w-full h-[500px] background'>
      <Carousel slideInterval={3000}>
      {dataImg?.map((image) => (
        <img src={image.src} alt={`image ${image.id}`} key={image.id}/>
      ))}
      </Carousel>
    </div>
  );
}

export default DetailPageSlider;
