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
          <h1 className='text-center font-extrabold my-10 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl'>
            {service.name}
          </h1>
          <ServiceDetailContent dataService={service} />
        </section>
      </main>
      <Footer />
    </>
  );
}
