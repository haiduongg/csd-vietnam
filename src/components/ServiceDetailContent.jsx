import PropTypes from 'prop-types';
import DetailPageSlider from '../components/DetailPageSlider';

ServiceDetailContent.propTypes = {
  dataService: PropTypes.object.isRequired,
};
function ServiceDetailContent({ dataService }) {
  return (
    <div className='content container mt-8'>
      <h1 className='text-center font-bold mb-6'>{dataService.name}</h1>
      <DetailPageSlider dataImg={dataService.images ?? []} />
      <div
        dangerouslySetInnerHTML={{ __html: dataService.content }}
        className='mt-10'
      ></div>
    </div>
  );
}

export default ServiceDetailContent;
