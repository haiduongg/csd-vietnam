import { Helmet } from 'react-helmet';
import { BiSolidTimeFive } from 'react-icons/bi';
import Timeline from '../components/Timeline';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';

const Heading = () => {
  return (
    <section className='w-full bg-text text-white py-12'>
      <h2 className='text-center font-semibold uppercase '>Our Journey</h2>
      <p className='mt-3 text-center'>
        &quot; We are a highly skilled and experienced group of mechanical
        engineers passionate about turning innovative ideas into tangible
        reality &quot;
      </p>
    </section>
  );
};

const OurJourney = () => {
  const timelines = [
    {
      year: '11/2022',
      icon: BiSolidTimeFive,
      title: 'Establishment Startup team',
      description: 'Set up in Ho Chi Minh, Vietnam',
    },
    {
      year: '06/2023',
      icon: BiSolidTimeFive,
      title: 'Lv.1 Seller on Fiverr',
      description: 'Channel Founder',
    },
    {
      year: '09/2023',
      icon: BiSolidTimeFive,
      title: 'Lv.2 Seller on Fiverr',
      description: 'Channel Founder',
    },
    {
      year: '10/2023',
      icon: BiSolidTimeFive,
      title: 'Lv.1 Seller on Fiverr ',
      description: 'Channel CSD',
    },
  ];
  return (
    <>
      <Helmet>
        <title>Our Journey | CSD Vietnam</title>
        <meta name='description' content='Helmet application' />
      </Helmet>
      <Header />
      <FloatingButton />
      <main className='py-[72px]'>
        <section>
          <Heading />
        </section>
        <div className='container'>
          <section>
            <Timeline dataTimeline={timelines} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OurJourney;
