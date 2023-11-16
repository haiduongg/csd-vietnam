const Services = () => {
  const services = [
    {
      name: '3D Modeling, 2D Drawing',
      detail: [
        'lorem',
        'lorem',
        'lorem',
        'lorem',
        'lorem',
        'lorem',
        'lorem',
        'lorem',
        'lorem',
      ],
    },
    {
      name: '3D Mechanical Animation',
      detail: [
        'lorem',
        'lorem',
        'lorem',
        'lorem',
        'lorem',
        'lorem',
        'lorem',
        'lorem',
        'lorem',
      ],
    },
    {
      name: '3D Character for Printing',
      detail: [
        'lorem',
        'lorem',
        'lorem',
        'lorem',
        'lorem',
        'lorem',
        'lorem',
        'lorem',
        'lorem',
      ],
    },
  ];

  return (
    <div className='w-full'>
      <h2 className='text-center font-bold mb-10'> Our Services</h2>
      <div className='grid grid-cols-3 gap-7'>
        {services.map((service) => (
          <div
            key={service.name}
            className='group rounded-2xl py-10 px-8 border-[1.5px] border-solid border-gray-300'
          >
            <h3 className='text-h3 text-center font-medium uppercase my-6 group-hover:text-primary-900 duration-300'>
              {service.name}
            </h3>
            <ul className='list-disc pl-8'>
              {service.detail.map((item) => (
                <li key={item} className='mb-4'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
