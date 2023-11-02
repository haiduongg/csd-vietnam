import FacebookMessenger from '../assets/images/Icons/facebook-messenger.webp';
import Skype from '../assets/images/Icons/skype-2019.webp';
import Whatsapp from '../assets/images/Icons/whatsapp.webp';

const FloatingButton = () => {
  const contacts = [
    {
      id: 1,
      icon: FacebookMessenger,
      title: 'Facebook',
      href: 'https://www.messenger.com/t/CSD.Vie',
      description: '(8h00 - 24h00)',
    },
    {
      id: 2,
      icon: Skype,
      title: 'Skype',
      href: 'Skype:live:.cid.484f3503905e6563',
      description: '(8h00 - 24h00)',
    },
    {
      id: 3,
      icon: Whatsapp,
      title: '076.527.9228',
      href: 'tel:0765279228',
      description: '(8h00 - 24h00)',
    },
  ];
  return (
    <div className='fixed bottom-[2%] right-3 lg:bottom-[5%] z-10'>
      <div>
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className='group p-2 lg:pl-3 lg:pr-6 lg:py-2 mb-3 bg-white dark:bg-dark rounded-xl shadow-lg dark:shadow-slate-700 select-none'
          >
            <a href={contact.href} target='_' className='flex items-center'>
              <img
                src={contact.icon}
                alt={contact.title}
                width='40'
                height='40'
                className='mr-0 lg:mr-3'
              />
              <p className='hidden md:block dark:text-white'>
                <span className='group-hover:text-primary font-semibold'>
                  {contact.title}
                </span>
                <br />
                <span className='font-semibold text-[13px] opacity-60'>
                  {contact.description}
                </span>
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingButton;
