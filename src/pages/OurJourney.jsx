import { Helmet } from 'react-helmet-async';
import { BiSolidTimeFive } from 'react-icons/bi';
import {
  Header,
  Footer,
  FloatButton,
  Timeline,
  PageHeading,
} from '../components';

export default function OurJourney() {
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
      description: 'More than 50 customers',
    },
    {
      year: '09/2023',
      icon: BiSolidTimeFive,
      title: 'Lv.2 Seller on Fiverr',
      description: 'More than 100 customers',
    },
  ];
  return (
    <>
      <Helmet>
        <title>Our Journey | CSD Vietnam</title>
        <meta
          name='description'
          content='Discover CSD Vietnam: Your hub for captivating reads! Dive into diverse, inspiring articles & valuable insights. Join our journey of knowledge & inspiration.'
        />
      </Helmet>
      <Header />
      <FloatButton />
      <main className='py-[72px]'>
        <section className='w-full'>
          <PageHeading
            title='Our Journey'
            description='" We are a highly skilled and experienced group of mechanical
            engineers passionate about turning innovative ideas into tangible
            reality "'
          />
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
}
