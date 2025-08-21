export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Thoughts', href: '/thoughts' },
] as const;

export const rotatingTitles = [
  { text: 'into Planes.', color: 'text-violet-400' },
  { text: 'an SRH fan.', color: 'text-orange-500' },
  { text: 'an F1 enthusiast.', color: 'text-red-600' }
  // { text: "Shreya's man", color: 'text-pink-600' }
];

import autism from '@/app/assets/autism.jpg';
import presentation from '@/app/assets/presentation.jpg';
import sticky from '@/app/assets/sticky.jpg';
import shopping from '@/app/assets/shopping.jpg';

export const projects = [
  {
    id: 1,
    slug: 'cortica',
    title: 'Cortica',
    domain: 'Healthcare',
    description: 'A platform that bridges patients and doctors with real-time communication and secure data.',
    link: '/work/cortica',
    image: autism,
  },
  {
    id: 2,
    slug: 'absyz-pre-sales',
    title: 'Absyz Pre-Sales',
    domain: 'Sales Enablement Platform',
    description: 'A platform for sales teams to create, preview, and manage presentations. Users can drag & drop slides from different sections, store PPTs in the cloud, and share or edit them collaboratively.',
    link: '/work/absyz-pre-sales',
    image: presentation,
  },
  {
    id: 3,
    slug: 'boardbuddy',
    title: 'BoardBuddy',
    domain: 'Online Sticky Notes Board',
    description: 'A web application for creating personal and collaborative sticky note boards. Users can organize, share, and collaborate on boards with others in real-time.',
    link: '/work/resume',
    image: sticky,
  },
  {
    id: 4,
    slug: 'shopease',
    title: 'ShopEase',
    domain: 'E-commerce',
    description: 'Seamless shopping experience with recommendations and smooth checkout.',
    link: '/work/resume',
    image: shopping,
  },
];