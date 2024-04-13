export const Skill_set = [
  {
    skill_name: 'Html5',
    Image: '/html.webp',
    width: 40,
    height: 40,
  },
  {
    skill_name: 'CSS',
    Image: '/css.webp',
    width: 45,
    height: 45,
  },
  {
    skill_name: 'Java Script',
    Image: '/js.webp',
    width: 32,
    height: 32,
    style: 3,
  },
  {
    skill_name: 'Tailwind Css',
    Image: '/tailwind.webp',
    width: 45,
    height: 45,
  },
  {
    skill_name: 'Material UI',
    Image: '/mui.webp',
    width: 47,
    height: 47,
  },
  {
    skill_name: 'React',
    Image: '/react.webp',
    width: 36,
    height: 36,
    style: 4,
  },
  {
    skill_name: 'React Query',
    Image: '/reactquery.webp',
    width: 40,
    height: 40,
  },
  {
    skill_name: `ReduxToolkit`,
    Image: '/redux.webp',
    width: 35,
    height: 35,
  },
  {
    skill_name: 'Type Script',
    Image: '/ts.webp',
    width: 30,
    height: 30,
  },
  {
    skill_name: 'Next js 14',
    Image: '/next.webp',
    width: 30,
    height: 30,
  },
  {
    skill_name: 'FramerMotion',
    Image: '/framer.webp',
    width: 30,
    height: 30,
  },
  {
    skill_name: 'Stripe',
    Image: '/stripe.webp',
    width: 30,
    height: 30,
  },
  {
    skill_name: 'Node js',
    Image: '/node-js.webp',
    width: 40,
    height: 40,
  },
  {
    skill_name: 'Express js',
    Image: '/express.webp',
    width: 40,
    height: 40,
  },
  {
    skill_name: 'Mongo db',
    Image: '/mongodb.webp',
    width: 45,
    height: 45,
  },
  {
    skill_name: 'Socket.IO',
    Image: '/socket.webp',
    width: 45,
    height: 45,
  },
  // {
  //   skill_name: 'WebRTC',
  //   Image: '/webrtc.webp',
  //   width: 45,
  //   height: 45,
  // },
  {
    skill_name: 'REST API',
    Image: '/REST.webp',
    width: 40,
    height: 40,
  },
  {
    skill_name: 'Docker',
    Image: '/docker.webp',
    width: 40,
    height: 40,
  },

  {
    skill_name: 'Figma',
    Image: '/figma.webp',
    width: 35,
    height: 35,
  },
]

import carShowcase from './app/images/car_showcase.webp'
import ecommerce from './app/images/ecommerce.webp'
import evently from './app/images/evently.webp'
import yt from './app/images/yt.webp'
import portfolio from './app/images/portfolio.webp'

export const projects = [
  {
    id: 1,
    title: 'Carhub',
    subtitle: 'A car showcasing platform',
    description:
      ' Built with Next.js and TypeScript, featuring advanced filtering and Rapid API integration for showcasing cars.',
    image: carShowcase,
    link: 'https://car-showcase-vert-six.vercel.app/',
    github: 'https://github.com/ajeshs02/car_showcase',
    category: 'nextjs',
  },
  {
    id: 2,
    title: 'Evently',
    subtitle: 'An Event Management Platform',
    description:
      'A Next.js platform with  Stripe payment integration for efficient event management.',
    image: evently,
    link: 'https://evently-six-topaz.vercel.app/',
    github: 'https://github.com/ajeshs02/event_platform',
    category: 'nextjs',
  },
  {
    id: 3,
    title: 'Ajesh Portfolio',
    subtitle: 'My portfolio',
    description:
      ' Created with Next.js utilizing its SSR capabilities, to showcase my professional portfolio.',
    image: portfolio,
    link: 'https://ajesh-s.vercel.app/',
    github: 'https://github.com/ajeshs02/NextJS-Portfolio',
    category: 'nextjs',
  },
  {
    id: 4,
    title: 'Youtube 2.0',
    subtitle: 'A modern youtube app',
    description:
      'A modern YouTube app using React, Material UI, and Rapid API for a seamless video experience',
    image: yt,
    link: 'https://youtube-2-0-five.vercel.app/',
    github: 'https://github.com/ajeshs02/youtube-2.0',
    category: 'react',
  },
  {
    id: 5,
    title: 'Gadget Bazaar',
    subtitle: 'An Ecommerce platform',
    description:
      ' A fullstack MERN e-commerce platform for buying tech gadgets, with Redux Toolkit and payment integration.',
    image: ecommerce,
    link: '',
    github: 'https://github.com/ajeshs02/e-commerce',
    category: 'mern',
  },
]
