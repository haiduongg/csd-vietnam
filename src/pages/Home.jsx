import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Header,
  Footer,
  Hero,
  SocialFloatButton,
  // PopularProjects,
  WhyChooseCSD,
  CustomerReview,
  HowDoWeWork,
  // LastNews,
} from '../components';

const LazyPopularProjects = React.lazy(() =>
  import('../components/Home/PopularProjects')
);

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>CSD Vietnam | Highly skilled and experienced group</title>
        <meta name='description' content='Helmet application' />
      </Helmet>
      <Header />
      <SocialFloatButton />
      <main className='container py-[72px]'>
        <section className='pt-[50px] lg:pt-[100px] '>
          <Hero />
        </section>
        <section className='mt-8'>
          <React.Suspense fallback='Loading..'>
            <LazyPopularProjects />
          </React.Suspense>
        </section>
        <section className='mt-20'>
          <WhyChooseCSD />
        </section>
        <section className='mt-20'>
          <CustomerReview />
        </section>
        <section className='mt-20'>
          <HowDoWeWork />
        </section>
        {/* <section className='mt-20'>
          <LastNews />
        </section> */}
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
