import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Header, Footer, FloatButton, BlogPost } from '../components';
import toSlug from '../utils/toSLug';

export default function BlogDetail() {
  const [isLoading, setIsLoading] = useState(false);
  const { href } = useParams();
  const [blogs, setBlogs] = useState([]);
  const API_URL = 'https://api-csd-vietnam.onrender.com/api/v1/blog';

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(API_URL);
      setBlogs(response.data);
      setIsLoading(true);
    };
    getData();
  }, []);

  const blog =
    blogs?.find((x) => {
      return toSlug(x.title) === href;
    }) ?? {};
  let temp = [];
  blog.tag?.forEach((tag) => {
    blogs.forEach((post) => {
      let postTag = post.tag.toString();
      if (postTag.indexOf(tag) !== -1) {
        temp.push(post);
      }
    });
  });
  const relatedPosts = temp.filter((post) => post.id !== blog.id);
  return (
    <>
      <Helmet>
        <link rel='icon' type='image/svg+xml' href='../../public/favicon.ico' />
        <title>{blog.title ? `${blog.title} | CSD Vietnam` : ''}</title>
        {blog.description && (
          <meta name='description' content={blog.description} />
        )}
      </Helmet>
      <Header />
      <FloatButton />
      <main className='py-[72px] dark:text-white pb-32'>
        <section className='container'>
          <BlogPost
            blog={blog}
            relatedPosts={relatedPosts}
            isLoading={isLoading}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
