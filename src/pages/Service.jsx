import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import ServiceDetailContent from '../components/Service/ServiceDetailContent';
import BreadCrumbs from '../components/BreadCrumbs';
import Header from '../components/Header';
import FloatingButton from '../components/SocialFloatButton';
import Footer from '../components/Footer';
import servicesData from '../data/services';
import { useEffect } from 'react';

export default function Service() {
  const { href } = useParams();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  const service =
    servicesData?.find((x) => {
      return x.href === href;
    }) ?? {};
  return (
    <>
      <Helmet>
        <link rel='icon' type='image/svg+xml' href='../../public/favicon.ico' />
        <title>{service.name ? `${service.name} | CSD Vietnam` : ''}</title>
        <meta name='description' content='Helmet application' />
      </Helmet>
      <Header />
      <FloatingButton />
      <main className='py-[72px]'>
        <BreadCrumbs type='Service' name={service.name} href={service.href} />
        <section className='mt-10'>
          <ServiceDetailContent dataService={service} />
        </section>
      </main>
      <Footer />
    </>
  );
}
