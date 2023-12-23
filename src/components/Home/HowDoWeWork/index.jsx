import { Button } from 'flowbite-react';
import { FaUser, FaPenRuler } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import DiagramItem from './DiagramItem';

export default function TestHowDoWeWork() {
  const diagrams = [
    {
      id: 1,
      title: 'Idea Reception',
      icon: FaUser,
      connect: true,
      description:
        "We begin by receiving your concept and understanding your vision. Our team collaborates with you to grasp your project's objectives and unique requirements.",
    },
    {
      id: 2,
      title: '3D Modeling and Technical Drawings',
      icon: FaPenRuler,
      connect: true,
      description:
        'Once we have a clear understanding of your idea, our experts proceed to create detailed 3D models and technical drawings. These serve as the foundation for the design and engineering aspects of the project.',
    },
    {
      id: 3,
      title: 'Inspection and Handover',
      icon: FaUser,
      connect: true,
      description:
        'After the 3D models and technical drawings are complete, we conduct thorough quality checks to ensure that all aspects meet the specified standards. Upon successful validation, we deliver the project to you.',
    },
    {
      id: 4,
      title: 'Production',
      icon: FaUser,
      connect: true,
      description:
        'Depending on the nature of your project, this step can involve the actual production, fabrication, or realization of the design. We tailor our production processes to align with your specific project requirements and goals.',
    },
    {
      id: 5,
      title: 'Acceptance Testing',
      icon: FaUser,
      connect: false,
      description:
        "The final phase involves acceptance testing, which is performed based on your project's individual needs and criteria. We work closely with you to conduct the necessary testing and ensure that the end product aligns with your expectations.",
    },
  ];
  return (
    <div className='border-b border-gray-200 dark:border-gray-700 border-solid bg-gradient-to-b from-black-none to-black-50 dark:from-black-900 dark:to-black-800'>
      <div className='container w-full pt-20 pb-32'>
        <h3 className='font-bold text-center uppercase text-2xl sm:text-3xl xl:text-4xl'>
          <p className='bg-gradient-to-b from-black-700 to-black-900 dark:from-black-none dark:to-black-200 inline-block text-transparent bg-clip-text'>
            How Do We <span className='text-primary-900'>Work ?</span>
          </p>
        </h3>
        <p className='text-center opacity-80 text-base mt-2'>
          Hover to see details
        </p>
        <div className='mt-5 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14'>
          <div className='flex items-center justify-center'>
            <div className='grid grid-cols-1 xl:grid-cols-5 gap-2'>
              {diagrams.map((diagram) => (
                <div key={diagram.id}>
                  <DiagramItem diagram={diagram} />
                </div>
              ))}
            </div>
          </div>
          <div className='mt-5 px-10 font-semibold text-center'>
            <p className='text-primary-900'>
              Please note that the last two stages, Production and Acceptance
              Testing, are flexible and can be adjusted to suit the specific
              demands and preferences of our clients. Our commitment is to work
              closely with you throughout the process to achieve the best
              possible outcome for your project.
            </p>
          </div>
        </div>
        <motion.div whileHover={{ scale: 0.97 }} whileTap={{ scale: 0.95 }}>
          <Button
            size='md'
            href='https://res.cloudinary.com/dqx1guyc0/image/upload/v1702146134/CSD%20Vietnam/mpq1zdzddrgfbuen3cva.png'
            target='_blank'
            className='mx-auto w-[200px] mt-8 bg-primary-900 dark:bg-primary-700 hover:opacity-75 uppercase focus:ring-0'
          >
            See diagram
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
