import PropTypes from 'prop-types';
// import { motion } from 'framer-motion';
import { LuArrowBigRight } from 'react-icons/lu';

export default function DiagramItem({ diagram }) {
  return (
    <div className='flex items-center'>
      <div className='group relative w-[235px] h-96 rounded-[30px] cursor-pointer border-2 border-solid border-black-400'>
        <div className='group-hover:bg-blue-400 h-full rounded-[30px] group-hover:rounded-bl-none group-hover:rounded-br-none flex flex-col justify-center items-center group-hover:h-32 duration-500'>
          <div id='heading' className='group-hover:text-white'>
            <p className='text-center font-bold text-6xl pt-3 group-hover:text-3xl duration-500'>{`0${diagram.id}`}</p>
            <p className='text-center text-lg group-hover:text-base px-3 uppercase mt-5 font-semibold group-hover:mt-0 duration-500'>
              {diagram.title}
            </p>
          </div>
          <div
            id='main'
            className=' absolute top-36 left-0 opacity-0 group-hover:opacity-100 duration-500 delay-200'
          >
            <p className='px-4 text-justify text-sm'>{diagram.description}</p>
          </div>
        </div>
      </div>
      {diagram.connect && <LuArrowBigRight size={40} />}
    </div>
  );
}
DiagramItem.propTypes = {
  diagram: PropTypes.object.isRequired,
};
