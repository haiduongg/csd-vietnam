import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Header, Footer, FloatButton, BlogPost } from '../components';
import blogsData from '../data/blogs';

export default function BlogDetail() {
  const { href } = useParams();
  const blog =
    blogsData?.find((x) => {
      return x.url === href;
    }) ?? {};
  return (
    <>
      <Helmet>
        <link rel='icon' type='image/svg+xml' href='../../public/favicon.ico' />
        <title>{blog.title ? `${blog.title} | CSD Vietnam` : ''}</title>
        <meta name='description' content='Helmet application' />
      </Helmet>
      <Header />
      <FloatButton />
      <main className='py-[72px] bg-gradient-to-b from-black-50 to-black-none dark:bg-black-800 dark:text-white'>
        <section className='container mt-10'>
          <BlogPost blog={blog} />
        </section>
      </main>
      <Footer />
    </>
  );
}
