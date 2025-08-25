'use client';

import Image from "next/image";
import { motion } from "framer-motion";

import corticaBanner from "@/app/assets/cortica-banner.jpg";
import mobileApp from '@/app/assets/mobile-app.jpg';
import ambujPic from '@/app/assets/ambuj.png';
import samPic from '@/app/assets/sam.png';
import { FaLinkedin, FaRegCopy } from 'react-icons/fa';

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  alert(`${text} copied to clipboard!`);
};

export default function CorticaPage() {
  return (
    <div className="w-full flex flex-col items-center px-4 mt-8 space-y-16">

      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-6xl h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl"
      >
        <Image
          src={corticaBanner}
          alt="Cortica Care Banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Reimagining Autism Care
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            One platform. Integrated therapies. Better outcomes for families.
          </p>
        </div>
      </motion.div>

      {/* Introducing Cortica */}
      <div className="w-full my-16 md:my-20 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto text-white">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Introducing Cortica</h2>
        <p className="text-base sm:text-lg mb-4">
          Cortica arrived at our team as a half-baked product—unorganized code and incomplete functionalities. We took the knowledge transfer at blazing speed, analyzing the existing architecture and identifying key improvements. Then, we rolled up our sleeves and began transforming it into a fully functioning healthcare platform.
        </p>
        <p className="text-base sm:text-lg">
          As a client, the Cortica team trusted our plan. From that moment, our focus has been on making the product better and better, introducing usable features, and revamping the entire system for reliability and scalability.
        </p>
      </div>

      {/* Taming the Complexity */}
      <div className="w-full my-16 md:my-20 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto text-white">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Taming the Complexity</h2>
        <p className="text-base sm:text-lg mb-4">
          When we first examined Cortica&apos;s backend, it was a maze of step functions, convoluted logic, and messy integrations. Connecting with sophisticated healthcare systems like Athena and Central Reach for record-keeping and billing was a daunting challenge. Each process felt fragile and prone to errors.
        </p>
        <p className="text-base sm:text-lg mb-4">
          Taking ownership, I carefully analyzed the existing architecture, refactored the code, and simplified the step functions. Leveraging React, GraphQL, TypeORM, and AWS Lambda, I streamlined the interactions with external systems, making the workflow far more efficient and reliable.
        </p>
        <p className="text-base sm:text-lg">
          The result? Our team no longer faced billing issues with Central Reach or Athena, and the platform&apos;s performance became predictable and robust. This was a crucial milestone in transforming Cortica into a dependable healthcare solution.
        </p>
      </div>

      {/* Impact & Metrics */}
      <div className="w-full my-16 md:my-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            Impact & Metrics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-lg shadow-md flex flex-col items-center">
              <span className="text-5xl sm:text-6xl font-bold text-white mb-4">50%</span>
              <p className="text-gray-300 text-center">Faster appointment sync</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg shadow-md flex flex-col items-center">
              <span className="text-5xl sm:text-6xl font-bold text-white mb-4">4x</span>
              <p className="text-gray-300 text-center">Application usage growth</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg shadow-md flex flex-col items-center">
              <span className="text-5xl sm:text-6xl font-bold text-white mb-4">99%</span>
              <p className="text-gray-300 text-center">Billing accuracy after refactor</p>
            </div>
          </div>
        </div>
      </div>

      {/* Doctor & Caregiver App */}
      <div className="w-full py-16 my-16 md:my-20 px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          An App Doctors and Caregivers Loved
        </h2>
        <div className="relative w-full h-[35vh] sm:h-[40vh] lg:h-[45vh] rounded-lg overflow-hidden mb-8">
          <Image
            src={mobileApp}
            alt="Cortica Mobile App"
            fill
            className="object-cover object-center rounded-lg"
          />
        </div>
        <div className="max-w-6xl mx-auto text-white mb-12">
          <p className="text-gray-300 text-sm sm:text-base">
            Before this app, appointment management was chaotic: caregivers called admins, doctors received text messages, and data syncing was slow.
            <br /><br />
            I developed this application single-handedly, bringing live appointment updates, seamless syncing with Central Reach and Athena, and instant access to all critical information. Just a tap, and the data is at the fingertips of doctors and caregivers. The app became an instant success, praised by everyone for simplifying their daily workflow.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-10 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <span className="text-5xl sm:text-6xl font-bold text-white mb-4">4000+</span>
            <p className="text-gray-300 text-center">Doctors using the app daily</p>
          </div>
          <div className="bg-slate-800 p-10 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <span className="text-5xl sm:text-6xl font-bold text-white mb-4">1000+</span>
            <p className="text-gray-300 text-center">Appointments synced automatically</p>
          </div>
        </div>
      </div>

      {/* References */}
      <div className="w-full my-20 px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
          References
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Ambuj */}
          <div className="bg-slate-800 p-8 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-32 h-32 mb-4 relative">
              <Image
                src={ambujPic}
                alt="Ambuj Shrivastava"
                width={128}
                height={128}
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Ambuj Shrivastava</h3>
            <p className="text-gray-300 mb-1">Product Owner at Cortica</p>
            <div className="flex items-center justify-center text-gray-400 space-x-2 mb-2">
              <span>ashrivastava@corticacare.com</span>
              <button
                onClick={() => copyToClipboard("ashrivastava@corticacare.com")}
                className="bg-gray-700 p-1 rounded-full hover:bg-gray-600 transition"
                title="Copy email"
              >
                <FaRegCopy className="text-white" />
              </button>
            </div>
            <a
              href="https://www.linkedin.com/in/ambuj-shrivastava/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 flex items-center space-x-2"
            >
              <FaLinkedin /> <span>LinkedIn</span>
            </a>
          </div>

          {/* Sam */}
          <div className="bg-slate-800 p-8 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-32 h-32 mb-4 relative">
              <Image
                src={samPic}
                alt="Sam Roy"
                width={128}
                height={128}
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Sam Roy</h3>
            <p className="text-gray-300 mb-1">Head of IT Operations at Cortica</p>
            <div className="flex items-center justify-center text-gray-400 space-x-2 mb-2">
              <span>sam.roy@corticacare.com</span>
              <button
                onClick={() => copyToClipboard("sam.roy@corticacare.com")}
                className="bg-gray-700 p-1 rounded-full hover:bg-gray-600 transition"
                title="Copy email"
              >
                <FaRegCopy className="text-white" />
              </button>
            </div>
            <a
              href="https://www.linkedin.com/in/samroy92/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 flex items-center space-x-2"
            >
              <FaLinkedin /> <span>LinkedIn</span>
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}
