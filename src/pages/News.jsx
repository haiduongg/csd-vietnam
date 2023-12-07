import { Helmet } from 'react-helmet';
import BlogList from '../components/BlogList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/SocialFloatButton';

const NewsPage = () => {
  return (
    <>
      <Helmet>
        <title>News & Media | CSD Vietnam</title>
        <meta name='description' content='Helmet application' />
      </Helmet>
      <Header />
      <FloatingButton />
      <main className='container py-[72px]'>
        <section className='max-w-[1440px] mx-auto pt-[120px] lg:pt-[88px] px-8 xl:px-0'>
          <BlogList />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NewsPage;
