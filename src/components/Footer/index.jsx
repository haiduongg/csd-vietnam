import logoWhite from '/assets/img/logo-white.webp';
import Social from './Social';
import Fanpage from './Fanpage';

const Footer = () => {
  return (
    <footer>
      <div className='bg-text dark:bg-gray-800 dark:border-t-2 dark:border-solid dark:border-gray-500'>
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
        <div className='h-[50px] leading-[50px] text-center bg-[#130e49] text-white dark:bg-[#191f27] text-lg'>
          <span>Copyright @ 2023 by CADSQUAD - All Right Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
