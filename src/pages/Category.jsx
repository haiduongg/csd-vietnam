import { useParams } from 'react-router';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import categoriesData from '../data/category';
import {
  Header,
  Footer,
  SocialFloatButton,
  CategoryGallery,
  BreadCrumb,
} from '../components';

export default function Category() {
  const { href } = useParams();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  const category =
    categoriesData?.find((x) => {
      return x.href === href;
    }) ?? {};
  return (
    <>
      <Helmet>
        <link rel='icon' type='image/svg+xml' href='/favicon.ico' />
        <title>{category.name ? `${category.name} | CSD Vietnam` : ''}</title>
        <meta name='description' content='Helmet application' />
      </Helmet>
      <Header />
      <SocialFloatButton />
      <main className='py-[72px]'>
        <BreadCrumb type='Category' name={category.name} href={category.href} />
        <section className='mt-10'>
          <CategoryGallery dataCategory={category} />
        </section>
      </main>
      <Footer />
    </>
  );
}
