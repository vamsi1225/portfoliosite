"use client";

import TableauDashboard from "./TableauDashboard";

export default function TableauSection() {
  const dashboards = [
    {
      id: "viz1756852366852",
      name: "StudentDemographicsAnalysis/Dashboard1",
      title: "Student Demographics Analysis",
      description:
        "This dashboard visualizes student demographics including race, gender, and level of study, helping institutions identify trends and gaps.",
      staticImage:
        "https://public.tableau.com/static/images/St/StudentDemographicsAnalysis/Dashboard1/1.png",
      link: "https://public.tableau.com/views/StudentDemographicsAnalysis/Dashboard1?:language=en-US",
    },
    {
      id: "viz1756852404545",
      name: "StudentStressMonitoring/Dashboard1",
      title: "Student Stress Analysis",
      description:
        "This dashboard tracks stress levels among students across different courses and semesters, providing insights into mental well-being trends.",
      staticImage:
        "https://public.tableau.com/static/images/St/StudentStressMonitoring/Dashboard1/1.png",
      link: "https://public.tableau.com/views/StudentStressMonitoring/Dashboard1?:language=en-US",
      height: 827,
      mobileHeight: 1277,
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        Tableau Dashboards
      </h2>

      {dashboards.map((dash) => (
        <TableauDashboard key={dash.id} {...dash} />
      ))}
    </section>
  );
}
