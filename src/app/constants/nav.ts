export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Thoughts', href: '/thoughts' },
] as const;

export const rotatingTitles = [
  { text: 'into Planes.', color: 'text-violet-400' },
  { text: 'an SRH fan.', color: 'text-orange-500' },
  { text: 'an F1 enthusiast.', color: 'text-red-600' },
  { text: "Shreya's man", color: 'text-pink-600' }
];

export const projects = [
  {
    id: 1,
    title: "API Dashboard",
    description: "Next.js + TypeScript + GraphQL project",
    image: "/projects/project1.jpg",
  },
  {
    id: 2,
    title: "UI Clone",
    description: "React + Tailwind landing page clone",
    image: "/projects/project2.jpg",
  },
  {
    id: 3,
    title: "Full-Stack App",
    description: "Next.js + SQL backend + TypeORM",
    image: "/projects/project3.jpg",
  },
  {
    id: 4,
    title: "Creative Design",
    description: "Animation-heavy landing page",
    image: "/projects/project4.jpg",
  },
];