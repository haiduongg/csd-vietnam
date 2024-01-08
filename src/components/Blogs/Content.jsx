import PropTypes from 'prop-types';
import { GoDotFill } from 'react-icons/go';
import formatDate from '../../utils/formatDate';
import { Skeleton, SkeletonText } from '@chakra-ui/react';

export default function Content({ isLoading, blog }) {
  return (
    <div className='ml-5'>
      {isLoading && (
        <>
          <h1 className='text-4xl font-semibold'>{blog.title}</h1>
          <p className='flex items-center justify-start gap-2 mt-4 mb-5'>
            <span className='text-primary-900'>
              {blog.author ?? 'CSD Vietnam'}
            </span>
            <GoDotFill size={10} className='text-primary-900' />
            <span>{formatDate(blog.createdAt)}</span>
          </p>
          <img
            src={blog.thumbnail}
            alt={`image of ${blog.title}`}
            className='mb-8 aspect-video rounded-lg object-cover'
          />
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          <ul className='mt-5 flex items-center justify-start gap-2'>
            {blog.tag?.map((tag, index) => (
              <li key={index}>
                <span className='text-primary-900 font-semibold'>#{tag}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {!isLoading && (
        <>
          <SkeletonText noOfLines={1} skeletonHeight='10' />
          <SkeletonText noOfLines={1} skeletonHeight='3' mt={4} mb={5} />
          <Skeleton height={400} mb={8} />
          <SkeletonText mt='4' noOfLines={6} spacing='4' skeletonHeight='3' />
        </>
      )}
    </div>
  );
}
Content.propTypes = {
  isLoading: PropTypes.bool,
  blog: PropTypes.object.isRequired,
};
