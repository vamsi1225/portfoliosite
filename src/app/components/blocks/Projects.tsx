'use client';
import { useState } from 'react';
import Image from 'next/image';
import backgroundImage from '@/app/assets/autism.jpg';
import { projects } from '@/app/constants/nav';

export default function Projects() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section className="mt-4 md:mt-16 text-foreground m-0 p-0 pb-16">
            {/* Section heading */}
            <div className="text-center mb-8 lg:mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold">Featured Work</h2>
                <p className="mt-2 text-gray-400 text-sm sm:text-base">
                    Some selected projects that blend clean design, solid engineering, and real-world impact.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative">
                {projects.map((project, index) => {
                    const isHovered = hovered === index;
                    return (
                        <div
                            key={project.id}
                            className={`
    relative rounded-lg overflow-hidden group shadow-md transition-all duration-500
    h-[260px] sm:h-[300px] lg:h-[360px]
    lg:hover:z-50 lg:hover:scale-125
  `}
                            style={{ transformOrigin: 'center' }}
                        >
                            {/* Background */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />


                            {/* Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/90"></div>

                            {/* Top text */}
                            <div className="absolute top-3 left-3 right-3 z-10">
                                <h3 className="text-white text-lg font-bold">{project.title}</h3>
                                <p className="text-gray-300 text-xs sm:text-sm">{project.domain}</p>
                            </div>

                            {/* Bottom description */}
                            <div className="absolute bottom-3 left-3 right-3 z-10">
                                <p className="text-gray-200 text-xs sm:text-sm mb-2 line-clamp-2 lg:group-hover:line-clamp-none">
                                    {project.description}
                                </p>
                                <a
                                    href={project.link}
                                    className="inline-block px-3 py-1.5 text-xs sm:text-sm font-medium bg-white text-black rounded-md hover:bg-gray-200 transition"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>

                    );
                })}
            </div>
        </section>
    );
}
