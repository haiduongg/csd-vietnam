import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import servicesData from '../data/services';
import {
  Header,
  Footer,
  SocialFloatButton,
  BreadCrumb,
  ServiceDetailContent,
} from '../components';

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
      <SocialFloatButton />
      <main className='py-[72px]'>
        <BreadCrumb type='Service' name={service.name} href={service.href} />
        <section className='mt-10'>
          <ServiceDetailContent dataService={service} />
        </section>
      </main>
      <Footer />
    </>
  );
}
