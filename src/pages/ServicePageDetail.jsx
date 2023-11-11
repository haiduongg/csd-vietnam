import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import ServiceDetailContent from '../components/ServiceDetailContent';
import BreadCrumbs from '../components/BreadCrumbs';
import Header from '../components/Header';
import FloatingButton from '../components/FloatingButton';
import Footer from '../components/Footer';

function ServicePageDetail() {
  const [servicesData, setServicesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { href } = useParams();

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    // fetch API
    async function getResponse() {
      const response = await fetch(
        `https://api-csd-vietnam.vercel.app/services/`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setIsLoading(true);
      setServicesData(data);
    }
    getResponse();
  }, [href]);
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
        {isLoading && <BreadCrumbs serviceName={service.name} serviceHref={service.href} />}
        <section className='mt-10'>
          <ServiceDetailContent dataService={service} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ServicePageDetail;
