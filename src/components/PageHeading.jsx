import PropTypes from 'prop-types';

export default function PageHeading({ title, description }) {
  return (
    <div className='w-full bg-text text-white py-12'>
      <h2 className='text-center font-semibold uppercase '>{title}</h2>
      <p className='mt-3 text-center'>{description}</p>
    </div>
  );
}
PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
