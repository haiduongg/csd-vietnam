import { Helmet } from 'react-helmet';
import HeroSection from '../components/Hero';
import ProjectsList from '../components/ProjectsList';
import WhyChooseCSDSection from '../components/WhyChooseCSD';
import CustomerReviewSection from '../components/CustomerReviewSlider';
import Procedure from '../components/Procedure';
import LastNews from '../components/LastNews';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>CSD Vietnam | Highly skilled and experienced group</title>
        <meta name='description' content='Helmet application' />
      </Helmet>
      <Header />
      <FloatingButton />
      <main className='container py-[72px]'>
        <section className='pt-[50px] lg:pt-[100px]'>
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
        <section className='mt-20'>
          <Procedure />
        </section>
        <section className='mt-20'>
          <LastNews />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
