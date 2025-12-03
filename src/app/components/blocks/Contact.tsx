"use client";

import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-8 md:py-16 max-w-6xl mx-auto px-4">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 text-center mb-12">
        Get in Touch
      </h2>

      {/* Contact Items */}
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between gap-8 md:gap-12 text-base md:text-lg">
        {/* Email */}
        <a
          href="mailto:msvamsikvinay@gmail.com"
          className="flex flex-col md:flex-row items-center md:space-x-2 hover:underline min-w-[180px]"
        >
          <Mail className="w-6 h-6 md:w-7 md:h-7 text-teal-400 mb-1 md:mb-0" />
          <span className="text-center md:text-left">
            msvamsikvinay@gmail.com
          </span>
        </a>

        {/* Phone */}
        <a
          href="tel:+12166006350"
          className="flex flex-col md:flex-row items-center md:space-x-2 hover:underline min-w-[160px]"
        >
          <Phone className="w-6 h-6 md:w-7 md:h-7 text-teal-400 mb-1 md:mb-0" />
          <span className="text-center md:text-left">+1 (216) 600 6350</span>
        </a>

        {/* Location */}
        <div className="flex flex-col md:flex-row items-center md:space-x-2 min-w-[140px]">
          <MapPin className="w-6 h-6 md:w-7 md:h-7 text-teal-400 mb-1 md:mb-0" />
          <span className="text-center md:text-left">Cleveland, Ohio</span>
        </div>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/saivamsi-morisetti"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col md:flex-row items-center md:space-x-2 hover:underline min-w-[180px]"
        >
          <Linkedin className="w-6 h-6 md:w-7 md:h-7 text-teal-400 mb-1 md:mb-0" />
          <span className="text-center md:text-left">LinkedIn Profile</span>
        </a>
      </div>
    </section>
  );
}
