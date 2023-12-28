import { useParams } from 'react-router';
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
          <div className='container my-14'>
            <h1 className='text-center font-bold mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl'>
              Category {category.name}
            </h1>
          </div>
          <CategoryGallery dataCategory={category} />
        </section>
      </main>
      <Footer />
    </>
  );
}
