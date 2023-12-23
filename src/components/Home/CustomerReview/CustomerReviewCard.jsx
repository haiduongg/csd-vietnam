import PropTypes from 'prop-types';
import { ImQuotesLeft } from 'react-icons/im';
import { ImQuotesRight } from 'react-icons/im';
import { GoTriangleDown } from 'react-icons/go';
import style from './CustomerReviewCard.module.css';

CustomerReviewCard.propTypes = {
  dataCustomer: PropTypes.object.isRequired,
};

export default function CustomerReviewCard({ dataCustomer }) {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      {/* Review  */}
      <div className='relative shadow-lg dark:shadow-md dark:shadow-black-900 py-14 px-10 rounded-lg z-20'>
        <div className='absolute top-3 left-7 text-primary-800 opacity-60'>
          <ImQuotesLeft size={30} />
        </div>
        <p className={`${style.comment}`}>{dataCustomer.comment}</p>
        <div className='absolute bottom-3 right-7 text-primary-800 opacity-60'>
          <ImQuotesRight size={30} />
        </div>
      </div>
      {/* Triangle */}
      <div className='mt-[-35px] inline-block mb-[-10px] text-primary-800 z-0 opacity-80'>
        <GoTriangleDown size={100} />
      </div>
      {/* profile */}
      <div className='flex items-center justify-start gap-4'>
        <div className='w-24 h-24 flex items-center justify-center'>
          <img
            src={dataCustomer.avatar}
            alt={`avatar of ${dataCustomer.name}`}
            width={90}
            height={90}
            className='rounded-full p-[1px] border-2 boder-solid border-primary-800 object-cover aspect-square'
          />
        </div>
        {/* information */}
        <div className='flex flex-col'>
          <span className='font-bold'>{dataCustomer.name}</span>
          <span className='font-semibold opacity-50'>
            {dataCustomer.country}
          </span>
        </div>
      </div>
    </div>
  );
}
