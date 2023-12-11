import logoWhite from '/assets/img/logo-white.webp';
import Social from './Social';
import Fanpage from './Fanpage';

const Footer = () => {
  return (
    <footer>
      <div className='bg-gradient-to-tl from-secondary-700 via-secondary-900 to-secondary-700 dark:from-black-900 dark:via-black-800 dark:to-black-900 dark:border-solid dark:border-gray-500'>
        <div className='container py-16'>
          <a href='/' title='CSD Vietnam' className='block w-fit'>
            <img src={logoWhite} alt='CSD Vietnam' width='200' height='90' />
          </a>
          <div className='mt-8 grid grid-cols-3 xl:grid-cols-3'>
            <div className='col-span-3 lg:col-span-2'>
              <Social />
            </div>
            <div className='col-span-1 xl:block hidden'>
              <Fanpage />
            </div>
          </div>
        </div>
        <div className='h-[50px] leading-[50px] text-center bg-gradient-to-r from-secondary-900 to-secondary-800 dark:from-black-900 dark:to-black-800 text-white text-base'>
          <span>
            Copyright @ 2023 by{' '}
            <a
              href='https://facebook.com/CSD.Vie'
              target='_'
              className='hover:opacity-70 duration-200'
            >
              CADSQUAD
            </a>{' '}
            - All Right Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
