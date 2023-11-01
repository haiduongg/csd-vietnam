import { Helmet } from 'react-helmet';
import HeroSection from '../components/Hero';
import ProjectsList from '../components/ProjectsList';
import WhyChooseCSDSection from '../components/WhyChooseCSD';
import CustomerReviewSection from '../components/CustomerReviewSlider';

const HomePage = () => {
  return (
    <div className='container'>
      <Helmet>
        <title>CSD Vietnam | Highly skilled and experienced group</title>
        <meta name='description' content='Helmet application' />
      </Helmet>
      <section className='pt-[100px]'>
        <HeroSection />
      </section>
      <section className='mt-8'>
        <ProjectsList />
      </section>
      <section className='mt-20'>
        <WhyChooseCSDSection />
      </section>
      <section className='mt-20'>
        <CustomerReviewSection />
      </section>
    </div>
  );
};

export default HomePage;
