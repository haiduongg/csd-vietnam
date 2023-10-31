import { useParams } from 'react-router-dom';
import projectsData from '../data/projectsData';
// import './breadcrumbs.scss';

const BreadCrumbs = () => {
  const { projectid } = useParams();
  const thisProject = projectsData.find((proj) => proj.id === projectid);

  return (
    <div className='bg-slate-200 dark:bg-hover-dark'>
      <div className='max-w-[1240px] mx-auto py-2 px-8 xl:px-0 '>
        <ol className='flex gap-2'>
          <li className="after:content-['_/'] after:ml-1">
            <a href='/'>Home</a>
          </li>
          <li className="after:content-['_/'] after:ml-1">
            <a href='/projects'>Projects</a>
          </li>
          <li>
            <a href='/projects/3'>{thisProject.name}</a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default BreadCrumbs;
