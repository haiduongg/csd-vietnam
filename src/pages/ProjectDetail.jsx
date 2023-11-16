/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Content from '../components/Content';
import BreadCrumbs from '../components/BreadCrumbs';
import FloatingButton from '../components/FloatingButton';

const ProjectDetail = () => {
  const [project, setProject] = useState({});
  const { projectid } = useParams();

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    // fetch API
    async function getResponse() {
      const response = await fetch(
        `https://api-csd-vietnam.vercel.app/projects/${projectid}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProject(data);
    }
    getResponse();
  }, [projectid]);

  return (
    <>
      <Helmet>
        <link rel='icon' type='image/svg+xml' href='../../public/favicon.ico' />
        {project.name && <title>{`${project.name} | CSD Vietnam`}</title>}
        <meta name='description' content='Helmet application' />
      </Helmet>
      <main className='pt-[80px] pb-28 dark:bg-black-900 dark:text-white'>
        <BreadCrumbs />
        <FloatingButton />
        <div className='max-w-[1440px] mx-auto px-8 xl:px-0'>
          <Content
            dataImage={project.img}
            name={project.name}
            content={project.content}
          />
        </div>
      </main>
    </>
  );
};

export default ProjectDetail;
