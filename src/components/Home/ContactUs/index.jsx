import { GrMail, GrSkype } from 'react-icons/gr';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaFonticons } from 'react-icons/fa';
import ContactForm from './ContactForm';

export default function ContactUs() {
  const contactInformation = [
    {
      icon: BiSolidPhoneCall,
      name: '076 527 9228',
      path: 'tel:0765279228',
    },
    {
      icon: GrMail,
      name: 'Contact.us@csdvietnam.com',
      path: 'mailto: contact.us@csdvietnam.com',
    },
    {
      icon: GrSkype,
      name: 'live:.cid.484f3503905e6563',
      path: 'skype:live:.cid.484f3503905e6563',
    },
    {
      icon: FaFonticons,
      name: 'Fiverr.com/vietnamcsd',
      path: 'https://www.fiverr.com/vietnamcsd',
    },
  ];
  return (
    <div className='border-b border-solid border-gray-200 dark:border-gray-700 bg-gradient-to-b from-black-none to-black-50 dark:from-black-900 dark:to-black-800'>
      <div className='container mx-auto py-20'>
        {/* Heading  */}
        <div className='mb-11'>
          <h3 className='font-bold text-center uppercase text-2xl sm:text-3xl xl:text-4xl'>
            <p className='bg-gradient-to-b from-black-700 to-black-900 dark:from-black-none dark:to-black-200 inline-block text-transparent bg-clip-text'>
              Contact <span className='text-primary-900'>Us</span>
            </p>
          </h3>
          <p className='text-center opacity-80 text-lg mt-4'>
            Any question or remarks? Just write us a message!
          </p>
        </div>
        {/* Main */}
        <div className='flex flex-col lg:flex-row gap-6 w-full rounded-xl shadow-lg border border-solid border-gray-100'>
          <div className='w-full lg:w-[65%] bg-blue-500 rounded-xl py-5 px-5 lg:py-12 md:pl-8 lg:pl-10 xl:pl-14 text-white shadow-lg'>
            <h4>
              <span className='font-semibold'>Contact Information</span>
            </h4>
            <p className='mt-2 opacity-80'>
              Say something to start a live chat!
            </p>
            <ul className='mt-10 lg:mt-14 md:mt-6 md:grid md:grid-cols-2 lg:block'>
              {contactInformation.map((item, index) => (
                <li
                  key={index}
                  className='md:flex md:items-center gap-4 my-6 md:my-4 lg:my-7 overflow-hidden'
                >
                  <item.icon size={25} />
                  <a
                    href={item.path}
                    target='_'
                    className='text-base overflow-hidden'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='p-8 w-full'>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
