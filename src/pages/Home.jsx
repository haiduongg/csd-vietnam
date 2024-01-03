import { Helmet } from 'react-helmet';
import {
  Header,
  Footer,
  Hero,
  FloatButton,
  PopularProjects,
  WhyChooseCSD,
  CustomerReview,
  HowDoWeWork,
  ContactUs,
  LastNews,
  // LastNews,
} from '../components';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>CSD Vietnam | Highly skilled and experienced group</title>
        <meta name='description' content='Helmet application' />
      </Helmet>
      <Header />
      <FloatButton />
      <main className='pt-[72px]'>
        <section className='pt-12 lg:pt-36'>
          <Hero />
        </section>
        <section>
          <PopularProjects />
        </section>
        <section>
          <WhyChooseCSD />
        </section>
        <section>
          <CustomerReview />
        </section>
        <section>
          <HowDoWeWork />
        </section>
        <section>
          <LastNews />
        </section>
        <section>
          <ContactUs />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
