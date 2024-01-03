import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

LastNewsList.propTypes = {
  lastPost: PropTypes.object.isRequired,
  dataBlogs: PropTypes.array.isRequired,
};
export default function LastNewsList({ lastPost, dataBlogs }) {
  return (
    <div className='w-full grid grid-cols-2 gap-5'>
      {/* Last Post */}
      <div className='group col-span-1 bg-white dark:bg-dark rounded-lg shadow-md border-[1px] border-black-100 dark:border-black-900'>
        <Link to={`/blog/${lastPost.url}`} title={lastPost.title}>
          <img
            src={lastPost.img}
            alt='image'
            className='group-hover:opacity-70 duration-300 object-cover rounded-lg w-full select-none aspect-video'
          />
        </Link>
        <div className='pl-4 pr-4 pt-3 pb-1 w-full'>
          <Link to={`/blog/${lastPost.url}`} title={lastPost.title}>
            <span className='block font-extrabold text-3xl overflow-hidden max-h-24 ellipsis leading-normal'>
              {lastPost.title}
            </span>
          </Link>
          <p className='my-2 text-primary-900 font-semibold'>
            {lastPost.createAt}
          </p>
          <p className='ellipsis'>{lastPost.description}</p>
        </div>
      </div>
      {/* Semi Last Post */}
      <div className='col-span-1 flex flex-col gap-5 border-black-100 dark:border-black-900'>
        {dataBlogs?.map((blog) => (
          <div
            key={blog.id}
            className='group rounded-lg bg-white dark:bg-dark shadow-md'
          >
            <div className='flex items-start justify-start gap-2'>
              <div className='h-44 aspect-video'>
                <Link to={`/blog/${blog.url}`} title={blog.title}>
                  <img
                    src={blog.img}
                    alt={`image ${blog.id}`}
                    className='group-hover:opacity-70 duration-300 rounded-lg w-full h-full select-none object-cover'
                  />
                </Link>
              </div>
              <div className='py-2 px-4 overflow-hidden'>
                <Link to={`/blog/${blog.url}`} title={blog.title}>
                  <p
                    className='max-h-14 font-bold text-lg overflow-hidden'
                    title={blog.title}
                  >
                    {blog.title}
                  </p>
                </Link>
                <p className='text-primary-900'>{blog.createAt}</p>
                <p className='max-h-12 overflow-hidden'>
                  {blog.description} ...
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
