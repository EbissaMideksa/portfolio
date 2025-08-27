import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/port1.jpeg';
import Work4 from './assets/port3.jpeg';
import Work5 from './assets/landing-pg.jpeg';
import Work6 from './assets/r-estate.jpeg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Ebissa',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Fetula',
  },

  {
    id: 3,
    title: 'Middle Name : ',
    description: 'Mideksa',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Ethiopian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Addis Ababa',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+251930075246',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'neweebbiwaan1@gmail.com',
  },

  {
    id: 9,
    title: 'Twitter : ',
    description: '',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '3',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '1+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '1+',
    title: ' Group <br /> Project',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Jan 2024 - PRESENT',
    title: 'Web Developer <span> mini e-commerce </span>',
    desc: 'Developed, manage and maintain mini e-commerce,',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'May 2024 - Jun 2025',
    title: 'To do list<span> todo-list </span>',
    desc: 'To do list that depicts daily activities',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'Oct 2010- Jul 2014',
    title: 'Bachelors of Science Degree <span> Addis Ababa University </span>',
    desc: 'Studied Electrical and Computer Engineering @ Addis Ababa University Ethiopia',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'Jan 2023',
    title: 'Web Development <span> Freecodecamp </span>',
    desc: 'Studied the introduction to web development in Freecodecamp',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'Aug 2023',
    title: 'Frontend Development <span> Freecodecamp </span>',
    desc: 'Studied Frontend Development',
  },
  {
    id: 7,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'Sep 2024',
    title: 'Backend Development <span> Freecodecamp </span>',
    desc: 'Studied Frontend Development',
  },
];

export const skills = [
  {
    id: 1,
    title: 'HTML',
    percentage: '98',
  },

  {
    id: 2,
    title: 'JavaScript',
    percentage: '92',
  },

  {
    id: 3,
    title: 'CSS',
    percentage: '84',
  },

  {
    id: 4,
    title: 'React',
    percentage: '80',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '83',
  },

  {
    id: 6,
    title: 'Python',
    percentage: '80',
  },

  {
    id: 7,
    title: 'Bootstrap',
    percentage: '68',
  },

  {
    id: 8,
    title: 'Google Analytics',
    percentage: '45',
  },
  { 
    id: 9,
    title: 'Node JS',
    percentage: '80',

  }
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Resturant Reservation System',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Resturant Reservation System',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React js, Tailwind CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://polite-malasada-648584.netlify.app/',
      },
    ],
  },

 

  {
    id: 4,
    img: Work4,
    title: 'Real Estate Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS and Tailwind CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Hair Oil Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Personal : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Construction company website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Construction',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, and JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
