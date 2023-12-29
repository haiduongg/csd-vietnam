import PropTypes from 'prop-types';
// import ServiceImageSlider from './ServiceImageSlider';
import SwiperJsSlider from './SwiperJsSlider';

ServiceDetailContent.propTypes = {
  dataService: PropTypes.object.isRequired,
};
export default function ServiceDetailContent({ dataService }) {
  return (
    <div className='container'>
      {/* <ServiceImageSlider
        dataImg={dataService.images ?? []}
        dataVideo={dataService.videos ?? []}
      /> */}
      <div className='static'>
        <SwiperJsSlider
          dataImg={dataService.images ?? []}
          dataVideo={dataService.videos ?? []}
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: dataService.content }}
        className='mt-10 text-justify w-full'
      ></div>
    </div>
  );
}
