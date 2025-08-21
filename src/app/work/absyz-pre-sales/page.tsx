'use client';

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
            Pre-Sales Assisted Portal
          </h1>
          <p className="text-white text-sm sm:text-base lg:text-lg max-w-2xl">
            Helping Absyz’s sales team create proposals efficiently by automating 80% of the process.
          </p>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="w-full my-16 md:my-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Challenge</h2>
          <p className="text-gray-400 text-sm sm:text-base mb-8">
            Previously, the sales team faced challenges in maintaining content quality, ensuring proper themes, managing files, and more, leading to potential failures in the proposal process.
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Solution</h2>
          <p className="text-gray-400 text-sm sm:text-base mb-8">
            The Pre-Sales Assisted Portal automates most of the proposal creation process, improving efficiency and consistency. As a full-stack developer, I designed and developed the entire application, both frontend and backend.
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full my-16 md:my-20 px-4 sm:px-6 lg:px-12 bg-slate-800 py-12 rounded-lg">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Tech Stack</h2>
          <p className="text-gray-300 mb-4">
            ReactJS, CSS3, ExpressJS, AWS, Dropbox, MySQL, Aspose Cloud
          </p>
        </div>
      </section>

      {/* Selected Accomplishments Section */}
      <section className="w-full my-16 md:my-20 px-4 sm:px-6 lg:px-12 bg-slate-900 py-12 rounded-lg">
        <div className="max-w-6xl mx-auto text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Selected Accomplishments</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Designed and implemented an intuitive user interface, enhancing user experience.</li>
            <li>Developed and integrated security measures ensuring data integrity and user privacy.</li>
            <li>Seamlessly integrated third-party services, enhancing application functionality.</li>
            <li>Optimized database performance, improving data management efficiency.</li>
            <li>Implemented cost-saving measures, reducing third-party billing charges.</li>
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
              <img src={salilPic.src} alt="Salil Konkar" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Salil Konkar</h3>
            <p className="text-gray-300 mb-1">COO at Absyz</p>
            <p className="text-gray-400 text-sm">salil.konkar@absyz.com</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center bg-slate-800 p-6 rounded-lg shadow-md w-full">
            <div className="w-32 h-32 mb-4">
              <img src={rajeshPic.src} alt="Rajesh Alajpur" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Rajesh Alajpur</h3>
            <p className="text-gray-300 mb-1">Principal Design Consultant at Absyz</p>
            <p className="text-gray-400 text-sm">rajesh.alajpur@absyz.com</p>
          </div>

        </div>
      </section>
    </main>
  );
}
