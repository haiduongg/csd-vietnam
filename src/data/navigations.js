import { AiOutlineCodepen, AiOutlineMacCommand } from 'react-icons/ai';
import { GiTeleport } from 'react-icons/gi';
import { TbBoxModel } from 'react-icons/tb';
import { LuBadgeCheck } from 'react-icons/lu';
import { MdOutlineClass } from 'react-icons/md';
import {
  PiTreeStructureDuotone,
  PiUserListDuotone,
  PiUsersFourLight,
} from 'react-icons/pi';
import { CgGhostCharacter } from 'react-icons/cg';

export default [
  {
    id: 1,
    label: 'About us',
    children: [
      {
        id: 'about:1',
        label: 'Vision',
        href: '/about-us/vision',
        icon: PiUserListDuotone,
      },
      {
        id: 'about:2',
        label: 'Our Journey',
        href: '/about-us/our-journey',
        icon: PiUsersFourLight,
      },
    ],
  },
  {
    id: 2,
    label: 'Services',
    children: [
      {
        id: 'services:1',
        label: '3D Modeling & Rendering',
        href: '/services/3d-modeling-rendering',
        icon: TbBoxModel,
      },
      {
        id: 'services:2',
        label: 'Steel Structure & Landscape',
        href: '/services/steel-structure-landscape',
        icon: CgGhostCharacter,
      },
      {
        id: 'services:3',
        label: 'Simulation & Rendering',
        href: '/services/simulation-rendering',
        icon: AiOutlineCodepen,
      },
      {
        id: 'services:4',
        label: '3D Artist & 3D Printing',
        href: '/services/3d-artist-3d-printing',
        icon: AiOutlineMacCommand,
      },
      {
        id: 'services:5',
        label: 'Portraits & Caricatures',
        href: '/services/portraits-caricatures',
        icon: PiTreeStructureDuotone,
      },
      {
        id: 'services:6',
        label: 'Logo Design',
        href: '/services/logo-design',
        icon: GiTeleport,
      },
      {
        id: 'services:7',
        label: 'Training Courses',
        href: 'https://courses.csdvietnam.com',
        icon: MdOutlineClass,
      },
    ],
  },
  {
    id: 3,
    label: 'Categories',
    children: [
      {
        id: 'categories:1',
        label: '3D Modeling & 2D Drawings',
        href: '/categories/3d-modeling-rendering',
        icon: LuBadgeCheck,
      },
      {
        id: 'categories:2',
        label: 'Steel Structure & Landscape ',
        href: '/categories/steel-structure-landscape',
        icon: LuBadgeCheck,
      },
      {
        id: 'categories:3',
        label: 'Simulation & Rendering',
        href: '/categories/simulation-rendering',
        icon: LuBadgeCheck,
      },
      {
        id: 'categories:4',
        label: '3D Artist & 3D Printing',
        href: '/categories/3d-artist-3d-printing',
        icon: LuBadgeCheck,
      },
      {
        id: 'categories:5',
        label: 'Portraits & Cricatures',
        href: '/categories/portraits-cricatures',
        icon: LuBadgeCheck,
      },
      {
        id: 'categories:6',
        label: 'Logo Design',
        href: '/categories/logo-design',
        icon: LuBadgeCheck,
      },
    ],
  },
  {
    id: 4,
    label: 'New & Media',
    children: [
      {
        id: 'news:1',
        label: 'Carrers',
        href: '/news/carrers',
        icon: LuBadgeCheck,
      },
      {
        id: 'news:2',
        label: 'Blogs',
        href: '/blogs',
        icon: LuBadgeCheck,
      },
    ],
  },
];
