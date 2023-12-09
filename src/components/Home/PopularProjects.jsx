import 'react-loading-skeleton/dist/skeleton.css';
import projectData from '../../data/projects';

export default function ProjectsList() {
  return (
    <div className='mx-auto'>
      <h3 className='font-bold text-center uppercase'>Popular Projects</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-11 xl:mx-0 gap-6 mt-10'>
        {projectData?.map((project) => (
          <div
            key={project.id}
            title={project.name}
            className='overflow-hidden rounded-xl'
          >
            <img
              src={project.img}
              alt={`Project ${project.id}`}
              className=' hover:opacity-60 duration-300 hover:scale-105 object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
