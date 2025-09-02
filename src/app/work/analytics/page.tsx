"use client";

import TableauSection from "./TableuSection";

export default function AnalyticsSection() {
  const projects = [
    {
      title: "Blood Donation Prediction",
      description:
        "Logistic Regression model with preprocessing to predict if someone will donate blood based on historical data.",
      tech: "Python · Pandas · Scikit-Learn",
      link: "https://github.com/Shravannaikini/Blood_Donation_Prediction",
    },
    {
      title: "Airline Delay Prediction",
      description:
        "Linear Regression model trained on ~30 flight features to forecast airline delays.",
      tech: "Python · Pandas · Scikit-Learn",
      link: "https://github.com/Shravannaikini/Airline_Delay",
    },
    {
      title: "Credit Card Approval Prediction",
      description:
        "Logistic Regression credit scoring system to predict approval status of credit card applications.",
      tech: "Python · Pandas · Scikit-Learn",
      link: "https://github.com/Shravannaikini/Credit_card_approval_prediction",
    },
  ];

  return (
    <section className="w-full my-16 md:my-20 px-4 sm:px-6 lg:px-12 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold">
          Analytics & Data Science
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mt-4">
          Projects showcasing predictive modeling and data-driven insights.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-300 mb-4 text-sm">{proj.description}</p>
            <p className="text-gray-400 mb-4 text-xs italic">{proj.tech}</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
      <TableauSection />
    </section>
  );
}
