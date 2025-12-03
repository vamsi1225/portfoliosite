'use client';

import { motion } from "framer-motion";
import preSalesBanner from '@/app/assets/presales-banner.jpg'; // Banner image
import salilPic from '@/app/assets/salil.png';
import rajeshPic from '@/app/assets/rajesh.png';

export default function PreSalesProject() {
  return (
    <main className="text-foreground">

      {/* Hero Section */}
      <section className="relative w-full h-[35vh] sm:h-[40vh] lg:h-[45vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${preSalesBanner.src})` }}
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Daily Nickel
          </h1>
          <p className="text-white text-sm sm:text-base lg:text-lg max-w-2xl">
            Community Marketplace
          </p>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="w-full my-16 md:my-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Challenge</h2>
          <p className="text-gray-400 text-sm sm:text-base mb-8">
          The client wanted to create a unified online marketplace where users could buy, sell, trade, and also build communities based on shared interests. Existing platforms lacked seamless community-based selling, smooth user experience, and scalable architecture to support high seller engagement and fast product discovery.
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Solution</h2>
          <p className="text-gray-400 text-sm sm:text-base mb-8">
            We developed a full stack online marketplace featuring a responsive Angular Frontend with modern UI components. We designed user profiles, listings, community groups and interest based feeds. The backend is scalable to handle large number of users built with node.js, MySQL and TypeORM.
            This solution connected the buyers, sellers, communities in one platform improving engagement and product visibility.
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full my-16 md:my-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Angular 10', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg' },
              { name: 'Angular Materials', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg' },
              { name: 'Node.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg' },
              { name: 'MySQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
              { name: 'TypeORM', logo: null },
              { name: 'AWS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-6 bg-slate-800 rounded-xl hover:bg-slate-700 hover:scale-105 transition-all duration-300 border border-slate-600/50 hover:border-slate-500/70 shadow-lg hover:shadow-xl"
              >
                {tech.logo ? (
                  <div className="mb-3 flex items-center justify-center min-h-[80px] w-full bg-white/10 rounded-lg p-4">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      width={80}
                      height={80}
                      className="object-contain w-auto h-auto filter brightness-110 contrast-110"
                      style={{ maxWidth: '80px', maxHeight: '80px' }}
                      onError={(e) => {
                        console.error(`Failed to load logo for ${tech.name}:`, tech.logo);
                      }}
                    />
                  </div>
                ) : (
                  <div className="mb-3 flex items-center justify-center min-h-[80px] w-full bg-white/10 rounded-lg p-4">
                    <span className="text-xl font-bold text-gray-300 text-center">{tech.name}</span>
                  </div>
                )}
                <span className="text-xs sm:text-sm font-semibold text-gray-100 mt-2 text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Accomplishments Section */}
      <section className="w-full my-16 md:my-20 px-4 sm:px-6 lg:px-12 bg-slate-900 py-12 rounded-lg">
        <div className="max-w-6xl mx-auto text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Selected Accomplishments</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Delivered a seamless user experience that increased user engagement by 40%</li>
            <li>Built optimized APIs and UI components improving page load and search responsiveness by 43%</li>
            <li>Enabled community-driven selling, boosting product visibility and increasing active listings by 30%</li>
            <li>Optimized database performance, improving data management efficiency.</li>
            <li>Achieved reliable performance and scalability supporting 10,000+ monthly active users</li>
          </ul>
        </div>
      </section>

      {/* Contact / Reference Cards Section */}
      {/* <section className="w-full my-16 md:my-20 px-4 sm:px-6 lg:px-12"> */}
        {/* <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold">For more information on my work, feel free to contact:</h2>
        </div> */}
{/* 
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"> */}
          
          {/* Card 1 */}
          {/* <div className="flex flex-col items-center text-center bg-slate-800 p-6 rounded-lg shadow-md w-full">
            <div className="w-32 h-32 mb-4">
              <img src={salilPic.src} alt="Salil Konkar" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Salil Konkar</h3>
            <p className="text-gray-300 mb-1">COO at Absyz</p>
            <p className="text-gray-400 text-sm">salil.konkar@absyz.com</p>
          </div> */}

          {/* Card 2 */}
          {/* <div className="flex flex-col items-center text-center bg-slate-800 p-6 rounded-lg shadow-md w-full">
            <div className="w-32 h-32 mb-4">
              <img src={rajeshPic.src} alt="Rajesh Alajpur" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Rajesh Alajpur</h3>
            <p className="text-gray-300 mb-1">Principal Design Consultant at Absyz</p>
            <p className="text-gray-400 text-sm">rajesh.alajpur@absyz.com</p>
          </div> */}

        {/* </div>
      </section> */}
    </main>
  );
}
