import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import VisionCard from '../components/VisionCard';
import Focus1 from '../assets/images/Vision/Focus_1.png';
import MeetTheTeam from '../components/MeetTheTeam';
import worldwideBackground from '../assets/images/Vision/WorldwideBackground.png';

const AboutPage = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Helmet>
        <link rel='icon' type='image/svg+xml' href='../../public/favicon.ico' />
        <title>Vision | CSD Vietnam</title>
        <meta name='description' content='Helmet application' />
      </Helmet>
      <section>
        <AboutHeading />
      </section>
      <section>
        <Content />
      </section>
      <section className='mt-14'>
        <MeetTheTeam />
      </section>
    </>
  );
};

const AboutHeading = () => {
  return (
    <div className='w-full bg-text text-white py-12'>
      <h2 className='text-h2 text-center font-semibold uppercase '>
        Who are we ?
      </h2>
      <p className='mt-3 text-center'>
        &quot; We are a highly skilled and experienced group of mechanical
        engineers passionate about turning innovative ideas into tangible
        reality &quot;
      </p>
    </div>
  );
};

const Content = () => {
  return (
    <div className='mt-12 text-justify text-[18px] leading-loose '>
      <aside className='float-left mr-8'>
        <VisionCard />
      </aside>
      <section className='relative'>
        <img
          src={worldwideBackground}
          alt='background'
          className='absolute right-0 -z-10 opacity-80'
          width={800}
          height={800}
        />
        <p>
          Welcome to our Engineering Design Team. We are a highly skilled and
          experienced group of mechanical engineers passionate about turning
          innovative ideas into tangible reality. With expertise in diverse
          areas of mechanical engineering, we offer comprehensive design
          solutions tailored to meet your specific needs. Our team brings
          together a wealth of knowledge and practical experience in concept
          development, 3D modeling, 3D artist, CAD drafting, and product design.
          <br />
          <br />
          CADSQUAD&apos;s vision is to become a trusted and reputable partner in
          the field of 3D design and related services. We strive to achieve this
          mission by delivering creativity, quality, and exceptional performance
          to our clients in every project. With the ideal of surpassing client
          expectations and creating products and design solutions that go above
          and beyond, CADSQUAD is committed to shaping and driving sustainable
          growth in the CAD and 3D design industry. We prioritize continuous
          improvement, ceaseless innovation, and ensure that all our projects
          leave a unique mark and provide significant value to our clients.
          <br />
          <br />
        </p>
      </section>
      <section className='flex gap-8'>
        <p>
          “With a highly experienced workforce that has accumulated years of
          expertise in their respective fields, including notable achievements
          in mechanical engineering CAD design competitions, and a richly
          experienced team of 3D artists, CADSQUAD Vietnam takes pride in the
          quality of services we deliver to our clients.”
        </p>
        <img
          src={Focus1}
          alt='Focus one'
          width={500}
          height={282}
          className='mt-3 rounded-md'
        />
      </section>
    </div>
  );
};

export default AboutPage;
