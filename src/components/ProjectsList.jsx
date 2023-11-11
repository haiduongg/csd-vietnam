import axios from 'axios';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProjectsList = () => {
  const [projects, setProjects] = useState(new Array(1, 2, 3, 4, 5, 6, 7, 8));
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // fetch API
    const getData = async () => {
      const response = await axios.get(
        'https://api-csd-vietnam.vercel.app/projects'
      );
      const data = await response.data;
      setProjects(data);
      setIsLoading(true);
    };
    getData();
  }, []);

  return (
    <div className='mx-auto'>
      <h3 className='font-bold text-center uppercase'>Popular Projects</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-11 xl:mx-0 gap-6 mt-10'>
        {isLoading
          ? projects?.map((project) => (
              <div
                key={project.id}
                title={project.name}
                className='overflow-hidden rounded-xl'
              >
                <img
                  src={project.thumbnail}
                  alt={`Project ${project.id}`}
                  className=' hover:opacity-60 duration-300 hover:scale-105 object-cover'
                />
              </div>
            ))
          : projects.map((item) => (
              <Skeleton
                key={item}
                className='rounded-xl w-full min-h-[100px]'
              />
            ))}
      </div>
    </div>
  );
};

export default ProjectsList;
