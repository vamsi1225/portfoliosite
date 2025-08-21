'use client';

import corticaBanner from '@/app/assets/cortica-banner.jpg';
import ambujPic from '@/app/assets/ambuj.png';
import samPic from '@/app/assets/sam.png';

export default function CorticaProject() {
  return (
    <main className="text-foreground">

      {/* Hero Section */}
      <section className="relative w-full h-[35vh] sm:h-[40vh] lg:h-[45vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${corticaBanner.src})` }}
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Cortica Healthcare
          </h1>
          <p className="text-white text-sm sm:text-base lg:text-lg max-w-2xl">
            Providing healthcare solutions for children diagnosed with autism in the United States.
          </p>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="w-full my-16 md:my-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Challenge</h2>
          <p className="text-gray-400 text-sm sm:text-base mb-8">
            Autism is a complex condition, and managing healthcare for children requires specialized tools. Cortica simplifies doctor-patient management, telehealth, and scheduling for families and medical professionals.
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Solution</h2>
          <p className="text-gray-400 text-sm sm:text-base mb-8">
            The project is divided into Website, Axon, and Telehealth modules. Features include appointment management for doctors, smart scheduling, billing algorithms, and integration with external healthcare systems.
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full my-16 md:my-20 px-4 sm:px-6 lg:px-12 bg-slate-800 py-12 rounded-lg">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Tech Stack</h2>
          <p className="text-gray-300 mb-4">
            SASS, ReactJS, TypeScript, GraphQL, Material UI, TypeORM, MySQL, AWS Lambda, ExpressJS, Auth0
          </p>
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="w-full my-16 md:my-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Primary Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Analyze client-provided epics and execute them in iterative phases.</li>
            <li>Develop UI elements with ReactJS and reusable components.</li>
            <li>Handle database modifications and write migration scripts.</li>
            <li>Develop APIs using Apollo GraphQL and TypeORM scripts.</li>
            <li>Maintain integration with Central Reach and AthenaHealth systems.</li>
            <li>Write and maintain AWS Lambda functions to support application functionalities.</li>
          </ul>
        </div>
      </section>

      {/* Selected Accomplishments Section */}
      <section className="w-full my-16 md:my-20 px-4 sm:px-6 lg:px-12 bg-slate-900 py-12 rounded-lg">
        <div className="max-w-6xl mx-auto text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Selected Accomplishments</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Developed a billing algorithm crucial for revenue generation.</li>
            <li>Single-handedly developed the frontend application for doctor appointment management.</li>
            <li>Implemented smart scheduling for efficient appointment handling between doctors and clients.</li>
          </ul>
        </div>
      </section>

      {/* Contact / Reference Cards Section */}
      <section className="w-full my-16 md:my-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold">For more information on my work, feel free to contact:</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center bg-slate-800 p-6 rounded-lg shadow-md w-full">
            <div className="w-32 h-32 mb-4">
              <img src={ambujPic.src} alt="Ambuj Shrivastava" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Ambuj Shrivastava</h3>
            <p className="text-gray-300 mb-1">Product Owner at Cortica</p>
            <p className="text-gray-400 text-sm">ashrivastava@corticacare.com</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center bg-slate-800 p-6 rounded-lg shadow-md w-full">
            <div className="w-32 h-32 mb-4">
              <img src={samPic.src} alt="Sam Roy" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Sam Roy</h3>
            <p className="text-gray-300 mb-1">Head of IT Operations at Cortica</p>
            <p className="text-gray-400 text-sm">sam.roy@corticacare.com</p>
          </div>

        </div>
      </section>
    </main>
  );
}
