'use client';

import { rotatingTitles } from '@/app/constants/nav';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';


export default function HeroIntro() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-4 md:mt-16 mb-8 text-foreground m-0 p-0">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[3rem] m-0 p-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Shravan builds <span className="text-cyan-400">full-stack</span> experiences.<br />
        passionate about clean UIs and <span className="text-green-400">fast APIs</span>.<br />
        A midnight problem-solver who dreams in <span className="text-yellow-400">JavaScript</span>.<br />
        By heart, he is{' '}
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            className={`${rotatingTitles[index].color} font-semibold inline-block`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {rotatingTitles[index].text}
          </motion.span>
        </AnimatePresence>
      </motion.h1>
    </section>
  );
}
