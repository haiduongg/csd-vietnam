import PropTypes from 'prop-types';

LastNewsList.propTypes = {
  dataList: PropTypes.array.isRequired,
};

function LastNewsList({ dataList }) {
  return (
    <ul className='flex item-start justify-between'>
      {dataList?.map((blog) => (
        <li
          key={blog.id}
          className='border-solid border-[1px] border-black pr-5 w-[30%] cursor-pointer'
        >
          <div className='flex gap-6'>
            <img
              className='w-[90px] h-[90px]'
              src={blog.thumbnail}
              alt={blog.description}
              width={90}
              height={90}
            />
            <div className='mt-3'>
              <p className='text-primary-900'>{blog.createAt}</p>
              <p className='uppercase'>{blog.tag}</p>
            </div>
          </div>
          <p className='p-3 text-base'>{blog.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default LastNewsList;
