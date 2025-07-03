'use client';

import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'; // Optional icons, install lucide-react if needed

export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 text-foreground bg-background">
      <h2 className="text-3xl font-semibold mb-6 text-emerald-400">Get in Touch</h2>
      <p className="mb-6">Feel free to reach out via any of the below methods:</p>

      <ul className="space-y-4 text-lg">
        <li className="flex items-center space-x-3">
          <Mail className="w-6 h-6 text-teal-400" />
          <a href="mailto:shra1.naikini@gmail.com" className="hover:underline">
            shra1.naikini@gmail.com</a>
        </li>
        <li className="flex items-center space-x-3">
          <Phone className="w-6 h-6 text-teal-400" />
          <a href="tel:+15124227027" className="hover:underline">
            +1 512 422 7027
          </a>
        </li>
        <li className="flex items-center space-x-3">
          <MapPin className="w-6 h-6 text-teal-400" />
          <span>Austin, Texas</span>
        </li>
        <li className="flex items-center space-x-3">
          <Linkedin className="w-6 h-6 text-teal-400" />
          <a
            href="https://www.linkedin.com/in/sravan-naikini-5924b611b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn Profile
          </a>
        </li>
      </ul>
    </section>
  );
}
