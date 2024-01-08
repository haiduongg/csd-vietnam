import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import toSlug from '../../utils/toSLug';
import formatDate from '../../utils/formatDate';

export default function BlogList({ tag }) {
  const [blogs, setBlogs] = useState([]);
  const API_URL = 'https://api-csd-vietnam.onrender.com/api/v1/blog';

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(API_URL);
      setBlogs(response.data);
    };
    getData();
  }, []);

  return (
    <div className='max-w-[1040px] mx-auto select-none'>
      <div>
        {blogs
          ?.filter((blog) =>
            tag === 'All' ? blog : blog.tag.toString().indexOf(tag) !== -1
          )
          ?.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${toSlug(blog.title)}`}
              className='group block max-w-6xl rounded-lg mt-6 py-3 px-5 hover:bg-black-100 duration-300'
            >
              <div className='flex flex-row items-start gap-12'>
                <p className='mt-1'>{formatDate(blog.createdAt)}</p>
                <div>
                  <p className='group-hover:text-primary-900 mb-2 text-xl font-semibold'>
                    {blog.title}
                  </p>
                  <p className='opacity-75 h-[50px] overflow-hidden text-ellipsis'>
                    {blog.description?.slice(0, 140) ?? 'No description'}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
BlogList.propTypes = {
  tag: PropTypes.string.isRequired,
};
