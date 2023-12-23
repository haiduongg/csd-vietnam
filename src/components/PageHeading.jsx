import PropTypes from 'prop-types';

export default function PageHeading({ title, description }) {
  return (
    <div className='w-full bg-gradient-to-r from-secondary-700 via-secondary-900 to-secondary-700 dark:from-secondary-900 dark:via-secondary-700 dark:to-secondary-900 text-white py-20'>
      <h2 className=' text-center font-extrabold uppercase text-4xl lg:text-5xl'>
        {title}
      </h2>
      {description && (
        <p className='mt-5 text-center text-lg opacity-95'>{description}</p>
      )}
    </div>
  );
}
PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
