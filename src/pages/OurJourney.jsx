import { Helmet } from 'react-helmet';
import { BiSolidTimeFive } from 'react-icons/bi';
import Timeline from '../components/Timeline';

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
      <section>
        <Timeline dataTimeline={timelines} />
      </section>
    </>
  );
};

export default OurJourney;
