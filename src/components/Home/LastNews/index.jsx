import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import blogs from '../../../data/blogs.js';
import LastNewsList from './LastNewsList';

export default function LastNews() {
  const lastPost = blogs
    .slice(blogs.length - 1, blogs.length)
    .reduce((prev, curr) => ({ ...prev, ...curr }), {});
  const dataBlogs =
    blogs.slice(blogs.length - 4, blogs.length - 1) ??
    blogs.slice(blogs.length - 3, blogs.length - 1) ??
    blogs.slice(blogs.length - 2, blogs.length - 1);
  return (
    <div className='border-b border-gray-200 dark:border-gray-700 border-solid bg-gradient-to-b from-black-none to-black-50 dark:from-black-900 dark:to-black-800'>
      <div className='container w-full pt-20 pb-32'>
        <div className='heading flex items-center justify-between'>
          <h3 className='font-bold text-center uppercase text-2xl sm:text-3xl xl:text-4xl'>
            <p className='bg-gradient-to-b from-black-700 to-black-900 dark:from-black-none dark:to-black-200 inline-block text-transparent bg-clip-text'>
              Last <span className='text-primary-900'>News</span>
            </p>
          </h3>
          <Link
            to='/blog'
            className='flex items-center justify-start gap-2 dark:text-white opacity-80 hover:opacity-100'
            title='View all news'
          >
            <span>View all news</span>
            <BiRightArrowAlt size={25} />
          </Link>
        </div>
        <div className='mt-14'>
          <LastNewsList lastPost={lastPost} dataBlogs={dataBlogs} />
        </div>
      </div>
    </div>
  );
}
