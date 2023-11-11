import PropTypes from 'prop-types';
import experience from '../assets/gifs/best-customer-experience.gif';
import service from '../assets/gifs/customer-service.gif';
import premium from '../assets/gifs/premium.gif';
import innovation from '../assets/gifs/innovation.gif';
import learning from '../assets/gifs/learning.gif';
import delivery from '../assets/gifs/delivery-truck.gif';
import satisfaction from '../assets/gifs/customer-satisfaction.gif';
import dollar from '../assets/gifs/dollar.gif';

const ReasonCard = ({ data }) => {
  return (
    <div className='group p-4 border-[1px] border-solid border-gray-300 rounded-xl hover:border-text dark:hover:border-primary hover:shadow-xl duration-300'>
      <img
        src={data.icon}
        alt={data.title}
        width='70'
        height='70'
        className='mx-auto my-6'
      />
      <p className='text-center font-bold'>{data.title}</p>
      <p className='mt-2 text-sm leading-normal group-hover:text-text dark:group-hover:text-primary opacity-80 text-center'>
        {data.description}
      </p>
    </div>
  );
};
ReasonCard.propTypes = {
  data: PropTypes.object.isRequired,
};

const WhyChooseCSD = () => {
  const reasons = [
    {
      id: 1,
      title: 'Experience and Expertise',
      description:
        "CADSQUAD boasts a wealth of experience in 3D modeling and rendering, particularly in the field of mechanical and 3D artist. Our team's deep expertise ensures high-quality results.",
      icon: experience,
    },
    {
      id: 2,
      title: 'Comprehensive Services',
      description:
        'We offer a wide range of services, including 3D modeling, 2D drawings, steel structure, landscape design, simulation, rendering, 3D printing, portraits, caricatures, and logo design. Our versatility caters to various client needs.',
      icon: service,
    },
    {
      id: 3,
      title: 'Quality Assurance',
      description:
        'CADSQUAD is committed to delivering top-notch results with a focus on precision and attention to detail. Our quality assurance processes guarantee excellence in every project we undertake',
      icon: premium,
    },
    {
      id: 4,
      title: 'Creative Solutions',
      description:
        'Our team of 3D artists is dedicated to bringing your ideas to life with creativity and innovation, turning concepts into stunning visual representations that make a lasting impact.',
      icon: innovation,
    },
    {
      id: 5,
      title: 'Cutting-Edge Technology',
      description:
        'We leverage the latest software and hardware tools to stay at the forefront of the industry, ensuring efficiency and accuracy in all our projects.',
      icon: learning,
    },
    {
      id: 6,
      title: 'Timely Delivery',
      description:
        'CADSQUAD understands the importance of deadlines. We are dedicated to delivering projects on time, helping you stay on track with your project schedules.',
      icon: delivery,
    },
    {
      id: 7,
      title: 'Client-Centric Approach',
      description:
        'We prioritize open communication with our clients, ensuring that your vision and feedback are incorporated into the design process to achieve your desired outcomes.',
      icon: satisfaction,
    },
    {
      id: 8,
      title: 'Competitive Pricing',
      description:
        'Despite our high-quality services, CADSQUAD offers competitive pricing options, making professional 3D modeling, rendering, and design services accessible to a broad range of clients.',
      icon: dollar,
    },
  ];
  return (
    <div className='w-full'>
      <h3 className='font-bold text-center uppercase'>
        Why Choose <p className='inline-block text-primary'>CSD?</p>
      </h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:mx-0 px-8 gap-7 mt-10'>
        {reasons.map((reason) => (
          <ReasonCard key={reason.id} data={reason} />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseCSD;
