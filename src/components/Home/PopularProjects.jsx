import { useEffect, useState } from 'react';
import { Skeleton } from '@chakra-ui/react';
import projectData from '../../data/projects';

export default function ProjectsList() {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      const data = projectData.slice(0, 8);
      setProjects(data);
    }, 1200);
  }, []);
  return (
    <div className='border-b border-solid border-gray-200 dark:border-gray-700 bg-gradient-to-b from-black-none to-black-50 dark:from-black-900 dark:to-black-800'>
      <div className='container mx-auto py-20'>
        <h3 className='font-bold text-center uppercase text-2xl sm:text-3xl xl:text-4xl'>
          <p className='bg-gradient-to-b from-black-700 to-black-900 dark:from-black-none dark:to-black-200 inline-block text-transparent bg-clip-text'>
            Popular <span className='text-primary-900'>Project</span>
          </p>
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14'>
          {projects &&
            projects?.map((project) => (
              <div
                key={project.id}
                title={project.name}
                className='overflow-hidden rounded-xl'
              >
                <img
                  src={project.img}
                  alt={`Project ${project.id}`}
                  className='hover:opacity-60 duration-300 hover:scale-105 object-cover h-full'
                />
              </div>
            ))}

          {!projects &&
            new Array(8).fill(0).map((item, index) => (
              <div key={index} className='overflow-hidden rounded-xl h-44'>
                <Skeleton className='h-full' />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
