import PropTypes from 'prop-types';

const BreadCrumbs = ({ serviceName, serviceHref }) => {
  return (
    <div className='bg-black-100 dark:bg-black-800'>
      <div className='container py-2'>
        <ul className='flex gap-2 text-sm md:text-base'>
          <li className="after:content-['_/'] after:ml-1">
            <span>Home</span>
          </li>
          <li className="after:content-['_/'] after:ml-1">
            <span>Service</span>
          </li>
          <li>
            <a href={`/services/${serviceHref}`} className='opacity-75'>
              {serviceName}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
BreadCrumbs.propTypes = {
  serviceName: PropTypes.string.isRequired,
  serviceHref: PropTypes.string,
};
BreadCrumbs.defaultProps = {
  serviceHref: '',
};

export default BreadCrumbs;
