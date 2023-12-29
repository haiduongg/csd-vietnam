import { Helmet } from 'react-helmet';
import { Header, Footer, FloatButton, CarrersContent } from '../components';
import imageRecruitCllaborators from '../assets/images/Carrers/Recruit Cllaborators.jpg';

export default function Carrers() {
  return (
    <>
      <Helmet>
        <title>Carrers | CSD Vietnam</title>
        <meta name='description' content='Helmet application' />
      </Helmet>
      <Header />
      <FloatButton />
      <main className='pt-[72px]'>
        <section className=' pt-5 pb-14 container'>
          <CarrersContent dataImage={imageRecruitCllaborators} />
        </section>
      </main>
      <Footer />
    </>
  );
}
