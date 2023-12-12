import PropTypes from 'prop-types';
import ServiceImageSlider from './ServiceImageSlider';

ServiceDetailContent.propTypes = {
  dataService: PropTypes.object.isRequired,
};
function ServiceDetailContent({ dataService }) {
  return (
    <div className='container'>
      <ServiceImageSlider
        dataImg={dataService.images ?? []}
        dataVideo={dataService.videos ?? []}
      />
      <div
        dangerouslySetInnerHTML={{ __html: dataService.content }}
        className='mt-10 text-justify w-full'
      ></div>
    </div>
  );
}

export default ServiceDetailContent;
