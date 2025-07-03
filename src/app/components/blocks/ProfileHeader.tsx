'use client';

import Image from 'next/image';
import profilePic from '@/app/assets/profile.jpg';
import backgroundImage from '@/app/assets/header-bg.jpg';

export default function ProfileHeader() {
  return (
    <section className="relative flex flex-col items-center justify-center mb-24">
      {/* Full-Width Background Banner */}
      <div className="w-full h-60 md:h-72 relative overflow-hidden rounded-xl shadow-md">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover rounded-xl"
          priority
        />
      </div>

      {/* Profile Picture (Floating) */}
      <div className="absolute top-44 md:top-52">
        <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-zinc-900 overflow-hidden shadow-lg">
          <Image
            src={profilePic}
            alt="Shravan Naikini"
            width={144}
            height={144}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
