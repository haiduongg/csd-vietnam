import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { Button } from 'flowbite-react';
import { motion } from 'framer-motion';
import { Header, Footer, FloatButton, BlogList } from '../components';

export default function NewsPage() {
  const [showTag, setShowTag] = useState('All');
  const tags = [
    { id: 1, title: 'All', description: 'All our articles' },
    {
      id: 2,
      title: 'machinal',
      description: 'All articles have the tag #machine',
    },
    {
      id: 3,
      title: 'design',
      description: 'All articles have the tag #design',
    },
    { id: 4, title: 'web', description: 'All articles have the tag #web' },
    { id: 5, title: 'dev', description: 'All articles have the tag #dev' },
    { id: 6, title: 'life', description: 'All articles have the tag #life' },
    {
      id: 7,
      title: 'about-us',
      description: 'All articles have the tag #about-us',
    },
  ];
  return (
    <>
      <Helmet>
        <title>Blog | CSD Vietnam</title>
        <meta name='description' content='Helmet application' />
      </Helmet>
      <Header />
      <FloatButton />
      <main className='container pt-[60px]'>
        <section
          id='heading'
          className='max-w-[1440px] mx-auto pt-[120px] lg:pt-[75px] px-8 xl:px-0'
        >
          <div>
            <h1 className='font-bold text-center'>
              {showTag !== 'All'
                ? `Tag #${showTag} | CSD Vietnam`
                : 'News & Media'}
            </h1>
            <h5 className='text-center mt-2 mb-12 opacity-80'>
              All our articles
            </h5>
          </div>
          <div className='mx-auto max-w-[900px] h-14'>
            <ul className='flex flex-wrap items-center justify-center gap-5 h-full'>
              {tags.map((tag, index) => (
                <motion.li key={index} onClick={() => setShowTag(tag.title)}>
                  <Button
                    href='#'
                    className={`${
                      showTag === tag.title
                        ? 'bg-primary-900 dark:bg-primary-800 hover:opacity-75 border-2 border-transparent'
                        : 'text-black bg-transparent border-solid border-2 border-primary-900 dark:bg-primary-700 hover:bg-primary-900 dark:bg-transparent'
                    } px-2 py-0 rounded-lg group focus:ring-0`}
                  >
                    <span
                      className={`${
                        showTag === tag.title
                          ? 'text-white dark:text-white'
                          : 'text-black-800 group-hover:text-white dark:text-white dark:group-hover:opacity-85'
                      } text-base font-semibold`}
                    >
                      {tag.title}
                    </span>
                  </Button>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
        <section className='mt-8 pb-40'>
          <BlogList tag={showTag} />
        </section>
      </main>
      <Footer />
    </>
  );
}
