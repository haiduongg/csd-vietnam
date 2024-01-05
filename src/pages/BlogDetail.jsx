import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Header, Footer, FloatButton, BlogPost } from '../components';
import blogsData from '../data/blogs';

export default function BlogDetail() {
  const { href } = useParams();
  const blog =
    blogsData?.find((x) => {
      return x.url === href;
    }) ?? {};
  let temp = [];
  blog.tag?.forEach((tag) => {
    blogsData.forEach((post) => {
      let postTag = post.tag.toString();
      if (postTag.indexOf(tag) !== -1) {
        temp.push(post);
      }
    });
  });
  const relatedPosts = temp.filter((post) => post.id !== blog.id);
  console.log(relatedPosts);
  return (
    <HelmetProvider>
      <Helmet>
        <link rel='icon' type='image/svg+xml' href='../../public/favicon.ico' />
        <title>{blog.title ? `${blog.title} | CSD Vietnam` : ''}</title>
        <meta name='description' content='Helmet application' />
      </Helmet>
      <Header />
      <FloatButton />
      <main className='py-[72px] dark:text-white pb-32'>
        <section className='container'>
          <BlogPost blog={blog} relatedPosts={relatedPosts} />
        </section>
      </main>
      <Footer />
    </HelmetProvider>
  );
}
