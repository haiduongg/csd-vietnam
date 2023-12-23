import {
  GrMail,
  GrFacebook,
  GrYoutube,
  GrSkype,
  GrLinkedin,
  GrTwitter,
} from 'react-icons/gr';
import { FaFonticons } from 'react-icons/fa';
import { BiSolidPhoneCall } from 'react-icons/bi';

export default function Social() {
  const social = [
    {
      icon: GrFacebook,
      name: 'Facebook.com/CSD.Vie',
      path: 'https://www.facebook.com/CSD.Vie',
    },
    {
      icon: BiSolidPhoneCall,
      name: '076 527 9228',
      path: 'tel:0765279228',
    },
    {
      icon: GrLinkedin,
      name: 'Linkedin.com/in/Cadsquad22',
      path: 'https://www.linkedin.com/in/Cadsquad22',
    },
    {
      icon: GrMail,
      name: 'Contact.us@csdvietnam.com',
      path: 'mailto: contact.us@csdvietnam.com',
    },
    {
      icon: GrTwitter,
      name: 'Twitter.com/csdvietnam',
      path: 'https://twitter.com/csdvietnam',
    },
    {
      icon: FaFonticons,
      name: 'Fiverr.com/vietnamcsd',
      path: 'https://www.fiverr.com/vietnamcsd',
    },
    {
      icon: GrSkype,
      name: 'live:.cid.484f3503905e6563',
      path: 'skype:live:.cid.484f3503905e6563',
    },
    {
      icon: GrYoutube,
      name: '@CSDVietnam',
      path: 'https://www.youtube.com/@CSDVietnam',
    },
  ];
  return (
    <div className='text-white grid lg:grid-cols-2'>
      {social.map((item) => {
        return (
          <div className='flex items-center my-3' key={item.name}>
            <item.icon size={25} className='mr-4' />
            <a
              href={item.path}
              title={item.name}
              target='_'
              className='cursor-pointer opacity-70 hover:opacity-100 border-b-[1px] border-solid border-gray-200 pb-[1px] duration-200'
            >
              {item.name}
            </a>
          </div>
        );
      })}
    </div>
  );
}
