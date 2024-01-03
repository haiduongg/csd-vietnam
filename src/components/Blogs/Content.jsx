import PropTypes from 'prop-types';
import { GoDotFill } from 'react-icons/go';

export default function Content({ blog }) {
  return (
    <div className='ml-5'>
      <h1 className='text-4xl font-semibold'>{blog.title}</h1>
      <p className='flex items-center justify-start gap-2 mt-4 mb-5'>
        <span className='text-primary-900'>{blog.author ?? 'CSD Vietnam'}</span>
        <GoDotFill size={10} className='text-primary-900' />
        <span>{blog.createAt}</span>
      </p>
      <img
        src={blog.img}
        alt={`image of ${blog.title}`}
        className='mb-8 aspect-video rounded-lg object-cover'
      />
      <div>{blog.content}</div>
      <ul className='mt-5 flex items-center justify-start gap-2'>
        {blog.tag?.map((tag, index) => (
          <li key={index}>
            <span className='text-primary-900 font-semibold'>#{tag}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
Content.propTypes = {
  blog: PropTypes.object.isRequired,
};
