import PropTypes from 'prop-types';

const BreadCrumbs = ({ serviceName, serviceHref }) => {
  return (
    <div className='bg-slate-200 dark:bg-hover-dark'>
      <div className='container py-2'>
        <ol className='flex gap-2'>
          <li className="after:content-['_/'] after:ml-1">
            <a href='/'>Home</a>
          </li>
          <li className="after:content-['_/'] after:ml-1">
            <a href='/services'>Service</a>
          </li>
          <li>
            <a href={`/services/${serviceHref}`}>{serviceName}</a>
          </li>
        </ol>
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
