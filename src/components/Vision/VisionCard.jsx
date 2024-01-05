import { BiSolidUser } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import avatar from '/assets/img/card-avatar.webp';

export default function VisionCard() {
  const informations = {
    name: 'CAD SERVICES COMPANY',
    secondaryName: 'contact.us@csdvietnam.com',
    desc: [
      {
        type: 'Location',
        prefix: 'From',
        value: 'Vietnam',
        icon: MdLocationOn,
      },
      {
        type: 'Since',
        prefix: 'Since',
        value: 'Nov 10th, 2022',
        icon: BiSolidUser,
      },
    ],
  };

  return (
    <div className='border-solid border-[1px] border-gray-300 p-8 w-full'>
      <div className='flex flex-col items-center pb-5 text-center'>
        <img
          src={avatar}
          alt='CSD Vietnam'
          className='rounded-full'
          width='150px'
          height='150px'
        />
        <span className='my-3 text-sm'>{informations.secondaryName}</span>
        <span className='font-bold text-xl'>{informations.name}</span>
      </div>
      <div className='border-t-2 border-solid pt-5'>
        {informations.desc?.map((item, index) => (
          <div
            key={index}
            className='flex justify-between items-center text-base mb-4'
          >
            <div className='flex items-center'>
              <item.icon size={18} className='mr-3' />
              <p className='font-medium'>{item.prefix}</p>
            </div>
            <p className='font-semibold'>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
