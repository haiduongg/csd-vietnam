import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { Header, Footer, FloatButton, BlogList } from '../components';

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
                <li key={index} onClick={() => setShowTag(tag)}>
                  <Button
                    colorScheme='orange'
                    variant={showTag === tag ? 'solid' : 'outline'}
                  >
                    <span className='font-semibold'>{tag}</span>
                  </Button>
                </li>
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
