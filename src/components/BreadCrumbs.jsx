import PropTypes from 'prop-types';

export default function BreadCrumbs({ type, name, href }) {
  return (
    <div className='bg-black-100 dark:bg-black-800'>
      <div className='container py-2'>
        <ul className='flex gap-2 text-sm md:text-base'>
          <li className="after:content-['_/'] after:ml-1">
            <span>Home</span>
          </li>
          {type && (
            <li className="after:content-['_/'] after:ml-1">
              <span>{type}</span>
            </li>
          )}
          <li>
            <a
              href={`/${type.toLowerCase()}/${href || '#'}`}
              className='opacity-75'
            >
              {name}
            </a>
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
