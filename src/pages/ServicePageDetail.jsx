import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import ServiceDetailContent from '../components/ServiceDetailContent';
import BreadCrumbs from '../components/BreadCrumbs';

function ServicePageDetail() {
  const [servicesData, setServicesData] = useState([]);
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
      <BreadCrumbs serviceName={service.name} serviceHref={service.href} />
      <div className='mt-10'>
        <ServiceDetailContent dataService={service} />
      </div>
    </>
  );
}

export default ServicePageDetail;
