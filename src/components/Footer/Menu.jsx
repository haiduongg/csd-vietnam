import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import { PiCaretRight } from 'react-icons/pi';

export default function Menu() {
  const menuList = [
    {
      name: 'About us',
      children: [
        { name: 'Vision', path: '/about/vision' },
        { name: 'History', path: '/about/history' },
      ],
    },
    {
      name: 'Services',
      children: [
        {
          name: '3D Modeling, 2D Drawing',
          path: '/services/3d-modeling-2d-drawing',
        },
        {
          name: '3D Mechanical Animation',
          path: '/services/3d-mechanical-animation',
        },
        {
          name: '3D Character for Printing',
          path: '/services/3d-character-for-printing',
        },
        { name: 'Training Courses', path: '/services/training-courses' },
      ],
    },
    {
      name: 'Projects',
      children: [
        {
          name: '3D Modeling, 2D Drawing',
          path: '/projects/3d-modeling-2d-drawing',
        },
        {
          name: '3D Mechanical Animation',
          path: '/projects/3d-mechanical-animation',
        },
        {
          name: '3D Character for Printing',
          path: '/projects/3d-character-for-printing',
        },
      ],
    },
    {
      name: 'News & Media',
      children: [
        { name: 'Carrers', path: '/news-&-media/carrers' },
        { name: 'Technical Blogs', path: '/news-&-media/techinal-blogs' },
      ],
    },
  ];
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 mt-10'>
      {menuList.map((item) => {
        return (
          <div key={item.name} className='text-white'>
            <p className='text-[23px] font-semibold mb-3'>{item.name}</p>
            {item.children.map((child) => {
              return (
                <ul
                  className='text-[18px] opacity-60 hover:!opacity-100 duration-300'
                  key={child.name}
                >
                  <li className='group my-3 relative flex items-center cursor-pointer'>
                    <Link to={child.path} title={child.name}>
                      {child.name}
                    </Link>
                    <PiCaretRight
                      icon={FaAngleRight}
                      className='hidden absolute left-[-22px] group-hover:block'
                    />
                  </li>
                </ul>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
