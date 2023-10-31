import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProjectsList = () => {
  const [projects, setProjects] = useState(new Array(1, 2, 3, 4, 5, 6, 7, 8));
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);
  console.log(projects);
  useEffect(() => {
    // fetch API

    async function getResponse() {
      const response = await fetch(
        'https://api-csd-vietnam.vercel.app/projects',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
            'x-rapidapi-key': 'your_api_key',
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProjects(data);
      setIsLoading(true);
    }
    getResponse();
  }, []);

  return (
    <div className='mx-auto'>
      <h2 className='text-h2 font-bold text-center'>Popular Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-11 xl:mx-0 gap-6 mt-10'>
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
                  width={342}
                  height={193}
                  className=' hover:opacity-60 duration-300 hover:scale-105 object-cover'
                />
              </div>
            ))
          : projects.map((item) => (
              <Skeleton
                key={item}
                className='rounded-xl'
                width={342}
                height={193}
              />
            ))}
      </div>
    </div>
  );
};

export default ProjectsList;
