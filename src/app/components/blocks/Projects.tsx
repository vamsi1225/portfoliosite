'use client';

import { projects } from "@/app/constants/nav";
import Image from "next/image";
import Link from "next/link";
import backgroundImage from "@/app/assets/autism.jpg";

export default function FullWidthFeaturedProjects() {
    return (
        <section
            className="w-screen max-w-[3840px] mx-auto relative left-1/2 right-1/2
                 -ml-[50vw] -mr-[50vw] py-16"
        >
            {/* Title section */}
            <div className="container mx-auto max-w-6xl mb-12 relative z-10 px-4">
                <h2 className="text-4xl font-bold text-white text-center mt-4">
                    Featured Projects
                </h2>
                <p className="text-center text-gray-300 mt-4 mb-16">
                    Some of my selected work showcasing frontend and full-stack skills.
                </p>
            </div>

            {/* Full-width grid with no gaps */}
            <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="relative group overflow-hidden w-full aspect-[4/3]"
                    >
                        {/* Background image */}
                        <Image
                            src={backgroundImage}
                            alt={project.title}
                            fill
                            className="object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
                        />

                        {/* Cinematic overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                        {/* Top title */}
                        <h3 className="absolute top-4 left-4 text-white text-xl font-semibold z-10 transition-opacity duration-500 group-hover:opacity-0">
                            {project.title}
                        </h3>

                        {/* Hover info overlay */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-500 px-4">
                            <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                            <p className="text-sm text-white max-w-xs mb-4">{project.description}</p>
                            <Link
                                href={`/projects/${project.id}`}
                                className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition"
                            >
                                See Project
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
