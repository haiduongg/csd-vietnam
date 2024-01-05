import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header, Footer, FloatButton, BlogList } from '../components';
import { Button } from '@chakra-ui/react';

export default function NewsPage() {
  const [showTag, setShowTag] = useState('All');
  const tags = ['All', 'machinal', 'design', 'web', 'dev', 'life', 'about-us'];
  return (
    <HelmetProvider>
      <Helmet>
        <title>Blog | CSD Vietnam</title>
        <meta name='description' content='Helmet application' />
      </Helmet>
      <Header />
      <FloatButton />
      <main className='container pt-[60px]'>
        <section id='heading' className='max-w-[1440px] mx-auto mt-10 lg:mt-14'>
          <div id='title'>
            <h1 className='text-center font-extrabold text-3xl md:text-4xl lg:text-4xl xl:text-5xl'>
              {showTag !== 'All' ? `Tag #${showTag}` : 'CSD Blogs'}
            </h1>
            <h5 className='text-center mt-2 xl:mt-3 opacity-80 text-base md:text-lg xl:text-xl'>
              All our articles
            </h5>
          </div>
          <div className='my-14 mx-auto xl:max-w-4xl'>
            <ul className='flex flex-wrap items-center justify-center gap-2'>
              {tags.map((tag, index) => (
                <motion.li key={index} onClick={() => setShowTag(tag)}>
                  <Button
                    className={`${
                      showTag === tag
                        ? 'bg-primary-900 dark:bg-primary-800 hover:opacity-75 border-2 border-transparent'
                        : 'text-black bg-transparent border-solid border-2 border-primary-900 dark:bg-primary-700 hover:bg-primary-900 dark:bg-transparent'
                    } rounded-lg group focus:ring-0`}
                  >
                    <span
                      className={`${
                        showTag === tag
                          ? 'text-white dark:text-white'
                          : 'text-black-800 group-hover:text-white dark:text-white dark:group-hover:opacity-85'
                      } text-base font-semibold`}
                    >
                      {tag}
                    </span>
                  </Button>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
        <section className='pb-40'>
          <BlogList tag={showTag} />
        </section>
      </main>
      <Footer />
    </HelmetProvider>
  );
}
