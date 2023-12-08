import { PiCaretRightBold, PiDotOutlineThin } from 'react-icons/pi';
import PropTypes from 'prop-types';
import blogs from '../data/blogs';

export default function BlogList({ tag }) {
  return (
    <div className='max-w-[1040px] mx-auto select-none'>
      <div>
        {blogs
          .filter((blog) => (tag === 'All' ? blog : blog.tag === tag))
          ?.map((blog) => (
            <div
              key={blog.id}
              className='flex flex-row items-start justify-between mt-6 relative'
            >
              <div className='hidden sm:block'>
                <div className='absolute top-0 left-[-900px] mt-2 sm:top-[-10px] sm:left-[95px] xl:mt-4 flex flex-col items-center justify-center opacity-10 mr-1 '>
                  <PiDotOutlineThin size={60} className='inline' />
                  <div className='h-[250px] w-[2px] xl:h-[172px] bg-black-900 dark:bg-white mt-[-24px]'></div>
                </div>
              </div>
              <div className='flex flex-col xl:flex-row'>
                <div className='Time mt-6 min-w-fit mr-11'>
                  <span>{blog.createAt}</span>
                </div>
                <div className='BlogItem hover:bg-black-100 hover:dark:bg-black-800 p-6 rounded-2xl cursor-pointer'>
                  <a href={`/blog/${blog.link}`}>
                    <p className='mb-2'>
                      <span className='font-semibold'>{blog.title}</span>
                    </p>
                    <p className='opacity-75 max-h-[50px] overflow-hidden text-ellipsis'>
                      {blog.description}
                    </p>
                    <div className='flex items-center justify-start text-primary-900 font-semibold leading-none mt-4'>
                      <span className='mr-1'>See more</span>
                      <PiCaretRightBold className='text-sm' />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
BlogList.propTypes = {
  tag: PropTypes.string.isRequired,
};
