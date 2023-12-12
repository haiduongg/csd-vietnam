import PropTypes from 'prop-types';
import ServiceImageSlider from './ServiceImageSlider';

ServiceDetailContent.propTypes = {
  dataService: PropTypes.object.isRequired,
};
function ServiceDetailContent({ dataService }) {
  return (
    <div className='container w-full'>
      <ServiceImageSlider
        dataImg={dataService.images ?? []}
        dataVideo={dataService.videos ?? []}
      />
      <div
        dangerouslySetInnerHTML={{ __html: dataService.content }}
        className='mt-10 text-justify'
      ></div>
    </div>
  );
}

export default ServiceDetailContent;
