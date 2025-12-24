'use client';

import { rotatingTitles } from '@/app/constants/nav';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const certifications = [
  {
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    badgeUrl: 'https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
    credlyUrl: 'https://www.credly.com/badges/9e92fdcd-43a2-43ef-af70-5dc871830471/public_url',
  },
  {
    name: 'Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate',
    issuer: 'Oracle',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg',
    badgeUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg',
    credlyUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=9B96A0A5BC5AC2EBC3C8152FAACA356ED55E37ED446F69D91CBA27DA6ED185D9',
  },
];

export default function Certifications() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-4 md:mt-16 text-foreground m-0 p-0 pb-16">
      {/* Certifications Section */}
      <div className="mt-12 md:mt-16">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Certifications</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4">
          {certifications.map((cert, certIndex) => (
            <motion.a
              key={certIndex}
              href={cert.credlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 bg-gray-100/10 rounded-xl hover:bg-gray-100/20 hover:scale-105 transition-all duration-300 border-2 border-gray-300/30 hover:border-gray-200/50 shadow-xl hover:shadow-2xl hover:shadow-white/10 backdrop-blur-md cursor-pointer no-underline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: certIndex * 0.1 }}
            >
              <div className="mb-4 flex items-center justify-center min-h-[120px] w-full bg-white/20 rounded-lg p-4 backdrop-blur-sm border border-white/20 hover:bg-white/30 hover:border-white/40 transition-all duration-300">
                <img
                  src={cert.badgeUrl}
                  alt={cert.name}
                  width={120}
                  height={120}
                  className="object-contain w-auto h-auto filter brightness-110 contrast-110 drop-shadow-lg"
                  style={{ maxWidth: '120px', maxHeight: '120px' }}
                  onError={(e) => {
                    // Fallback to issuer logo if badge fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = cert.logo;
                    target.style.maxWidth = '100px';
                    target.style.maxHeight = '100px';
                  }}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-100 mt-2 text-center mb-2">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-300 text-center">
                {cert.issuer}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
