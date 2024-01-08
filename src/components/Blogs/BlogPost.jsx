import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import toSlug from '../../utils/toSLug';
import Content from './Content';

BlogPost.propTypes = {
  blog: PropTypes.object.isRequired,
  relatedPosts: PropTypes.array.isRequired,
};
export default function BlogPost({ blog, relatedPosts }) {
  const onThisPage = [
    'What is Vue?',
    'The Progressive Framework',
    'Single-File Components',
    'API Styles',
    'Still Got Questions?',
    'Pick Your Learning Path',
    'What is Vue?',
    'The Progressive Framework',
    'Single-File Components',
    'API Styles',
    'Still Got Questions?',
    'Pick Your Learning Path',
    'What is Vue?',
    'The Progressive Framework',
    'Single-File Components',
    'API Styles',
    'Still Got Questions?',
    'Pick Your Learning Path',
    'What is Vue?',
    'The Progressive Framework',
    'Single-File Components',
    'API Styles',
    'Still Got Questions?',
    'Pick Your Learning Path',
    'What is Vue?',
    'The Progressive Framework',
    'Single-File Components',
    'API Styles',
    'Still Got Questions?',
    'Pick Your Learning Path',
    'What is Vue?',
    'The Progressive Framework',
    'Single-File Components',
    'API Styles',
    'Still Got Questions?',
    'Pick Your Learning Path',
  ];
  return (
    <div className='grid grid-cols-14 gap-6'>
      <div className='col-span-3 pt-10 text-sm'>
        <div className='sticky top-24 max-h-[calc(100vh-8rem)] overflow-auto'>
          <span className='font-semibold uppercase mb-5'>On this page</span>
          <ul className='min-h-[500px] overflow-auto'>
            {onThisPage?.map((item, index) => (
              <li
                key={index}
                className='mt-3 opacity-60 font-semibold hover:opacity-100 duration-300'
              >
                <a
                  href={`#${item
                    .toLowerCase()
                    .replaceAll(' ', '-')
                    .replaceAll('?', '')
                    .replaceAll('!', '')}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='col-span-8 pt-8'>
        <Link
          to='/blog'
          className='mb-8 w-fit flex items-center justify-start gap-3 cursor-pointer text-sm hover:bg-black-50 dark:hover:bg-black-800 py-2 px-4 rounded-full duration-200 font-semibold opacity-70 hover:opacity-100'
        >
          <MdOutlineArrowBackIos size={13} />
          <span>All post</span>
        </Link>
        <Content blog={blog} />
      </div>
      <div className='col-span-3 pt-10 text-sm'>
        <div className='sticky'>
          <span className='font-semibold uppercase mb-5'>Related posts</span>
          <div className='mt-5'>
            {relatedPosts?.map((post, index) => (
              <Link
                to={`/blog/${toSlug(post.title)}`}
                key={index}
                className='group block my-4'
              >
                <div className='flex items-start justify-start gap-4'>
                  <img
                    src={post.img}
                    alt={`image of ${post.title}`}
                    className='group-hover:opacity-70 object-cover w-20 aspect-video rounded-md duration-300'
                  />
                  <span className='opacity-95 hover:opacity-100 duration-300'>
                    {post.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
