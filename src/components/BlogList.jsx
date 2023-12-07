/* eslint-disable react/prop-types */
import { useState } from 'react';
import { PiCaretRightBold, PiDotOutlineThin } from 'react-icons/pi';
import Button from './Button';
import blogs from '../data/blogs';

const Timeline = ({ tag }) => {
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
                  <a href={`/blogs/${blog.link}`}>
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
};

const BlogList = () => {
  const [showTag, setShowTag] = useState('All');
  const tags = [
    { id: 1, name: 'All', ref: 'news-&-media' },
    { id: 2, name: 'machinal', ref: 'machinal' },
    { id: 3, name: 'design', ref: 'design' },
    { id: 4, name: 'web', ref: 'web' },
    { id: 5, name: 'dev', ref: 'dev' },
    { id: 6, name: 'life', ref: 'life' },
    { id: 7, name: 'about-us', ref: 'about-us' },
  ];
  return (
    <div className='py-16'>
      <div className='heading'>
        <div>
          <h1 className='font-bold text-center'>
            {showTag !== 'All'
              ? `Tag #${showTag} | CSD Vietnam`
              : 'News & Media'}
          </h1>
          <h2 className='text-center'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </h2>
        </div>
        <div className='mx-auto max-w-[900px] h-14'>
          <ul className='flex flex-wrap items-center justify-center gap-3 h-full'>
            {tags.map((tag) => (
              <li key={tag.name} onClick={() => setShowTag(tag.name)}>
                <Button
                  name={tag.name}
                  // link={`/tags/${tag.ref}`}
                  type='outline'
                  show={showTag === tag.name ? true : false}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Timeline tag={showTag} />
      </div>
    </div>
  );
};

export default BlogList;
