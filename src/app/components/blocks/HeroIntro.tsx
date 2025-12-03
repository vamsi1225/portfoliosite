'use client';

import { rotatingTitles } from '@/app/constants/nav';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';


export default function HeroIntro() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-4 md:mt-16 text-foreground m-0 p-0 pb-16">
      <motion.h1
        className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold leading-[3rem] m-0 p-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <span className="text-cyan-400">Full-Stack Developer</span> focused on cloud-native, scalable systems and AI-enhanced experiences that feel{' '}
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            className={`${
              rotatingTitles[index].color
            } font-semibold inline-block`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {rotatingTitles[index].text}
          </motion.span>
        </AnimatePresence>
      </motion.h1>
    </section>
  );
}
