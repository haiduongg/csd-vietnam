import PropTypes from 'prop-types';

export default function BreadCrumbs({ type, name, href }) {
  return (
    <div className='bg-black-100 dark:bg-black-800'>
      <div className='container py-2'>
        <ul className='flex items-center justify-start gap-2 text-sm md:text-base truncate'>
          <li
            className="after:content-['_/'] after:ml-1 hover:opacity-70 duration-100"
            title='Go to the homepage'
          >
            <a href={'/'}>Home</a>
          </li>
          {type && (
            <li className="after:content-['_/'] after:ml-1">
              <span>{type}</span>
            </li>
          )}
          <li>
            <span className='opacity-70'>{name}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
BreadCrumbs.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
};
