"use client";
import Image from "next/image";
import Link from "next/link";
import autism from "@/app/assets/autism.jpg";
import presentation from "@/app/assets/presentation.jpg";
import sticky from "@/app/assets/sticky.jpg";

// You can later move this to constants if you prefer
const workProjects = [
  {
    id: 1,
    title: "Cortica",
    domain: "Healthcare AI",
    description:
      "Contributed to scalable applications with a strong focus on frontend performance and seamless API integrations for caregivers and doctors.",
    image: autism, // replace with your asset path
    link: "#", // add case study or details link
  },
  {
    id: 2,
    title: "Absyz",
    domain: "CRM Solutions",
    description:
      "Delivered enterprise-grade Salesforce implementations and custom CRM features, optimizing backend workflows and automation.",
    image: presentation,
    link: "#",
  },
  {
    id: 3,
    title: "Presales Projects",
    domain: "Solution Architecting",
    description:
      "Built proof-of-concepts and demo applications, showcasing cloud-native and data-driven solutions during presales engagements.",
    image: sticky,
    link: "#",
  },
];

export default function WorkPage() {
  return (
    <main className="mt-4 md:mt-16 text-foreground m-0 p-0 pb-16">
      {/* Section heading */}
      <div className="text-center mb-8 lg:mb-12">
        <h1 className="text-4xl font-bold">My Work</h1>
        <p className="mt-2 text-gray-400 text-base">
          A showcase of professional projects and experiences across
          development, architecture, and data.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 relative max-w-7xl mx-auto px-4">
        {workProjects.map((project) => (
          <div
            key={project.id}
            className={`
              relative rounded-lg overflow-hidden group shadow-md transition-all duration-500
              h-[260px] sm:h-[300px] lg:h-[360px]
              lg:hover:z-50 lg:hover:scale-110
            `}
            style={{ transformOrigin: "center" }}
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
              <p className="text-gray-300 text-xs sm:text-sm">
                {project.domain}
              </p>
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
        ))}
      </div>

      {/* Analytics Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Data Analytics Work</h2>
        <p className="text-gray-400 mb-6">
          Beyond software engineering, I also specialize in analytics &
          visualization. Explore my dashboards and predictive models here:
        </p>
        <Link
          href="/work/analytics"
          className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-emerald-600 transition"
        >
          View Analytics Projects →
        </Link>
      </div>
    </main>
  );
}
