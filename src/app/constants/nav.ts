export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  // { label: 'Work', href: '/work' },
  // { label: 'Thoughts', href: '/thoughts' },
] as const;

export const rotatingTitles = [
  { text: 'smarter', color: 'text-violet-400' },
  { text: 'faster', color: 'text-orange-500' },
  { text: 'an intuitive experience', color: 'text-red-600' }
  // { text: "Shreya's man", color: 'text-pink-600' }
];

import autism from '@/app/assets/autism.jpg';
import presentation from '@/app/assets/presentation.jpg';
import sticky from '@/app/assets/sticky.jpg';

export const projects = [
  {
    id: 1,
    slug: 'cortica',
    title: 'Cortica',
    domain: 'Healthcare',
    description: 'A streamlined scheduling tool that connects patients to providers and syncs effortlessly with EMR systems',
    link: '/work/cortica',
    image: autism,
  },
  {
    id: 2,
    slug: 'daily nickel',
    title: 'Daily Nickel',
    domain: 'Digital marketplace',
    description: 'A full-featured e-commerce platform enabling users to buy, sell, and browse products through a fast, responsive web interface',
    link: '/work/daily-nickel',
    image: presentation,
  },
  {
    id: 3,
    slug: 'Absy',
    title: 'Absy',
    domain: 'Social Media Application',
    description: 'A collaborative office social hub that strengthens culture by sharing achievements, events, and team moments',
    link: '/work/Absy',
    image: sticky,
  }
  // {
  //   id: 4,
  //   slug: 'shopease',
  //   title: 'ShopEase',
  //   domain: 'E-commerce',
  //   description: 'Seamless shopping experience with recommendations and smooth checkout.',
  //   link: '/work/resume',
  //   image: shopping,
  // },
];