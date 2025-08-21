'use client';

export default function ResumePage() {
  return (
    <main className="bg-slate-900 text-white min-h-screen px-4 sm:px-6 lg:px-12 py-8">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Sravan Naikini</h1>
        <p className="text-gray-300">
          Iso17@txstate.edu | +1(512)422-7027 | LinkedIn | GitHub | Austin, Texas
        </p>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 border-b border-gray-700 pb-1">Education</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>
            Masters in Data Analytics and Information Systems (MSDAIS), 3.6 GPA – Texas State University, Jan 2025
          </li>
          <li>
            B.Tech in Mechanical Engineering – Jawaharlal Nehru Technological University, Hyderabad, Jun 2015 – May 2019
          </li>
        </ul>
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 border-b border-gray-700 pb-1">Technical Skills</h2>
        <p className="text-gray-300">
          Programming & Data: Python, SQL, JavaScript, TypeScript, Data Analysis, Data Visualization
          <br />
          Instructional Tools: Zoom, Canvas, MS Excel, MS Word, PowerPoint, Keynote, Pages
          <br />
          Frameworks & Platforms: Angular, React, NextJS, NodeJS, ExpressJS, Flask
          <br />
          Database Systems: MySQL, PostgreSQL
          <br />
          Cloud Platforms: AWS, Azure, Heroku
          <br />
          Other Skills: Strong written & verbal communication, confidentiality in handling student and client data
        </p>
      </section>

      {/* Professional Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 border-b border-gray-700 pb-1">Professional Experience</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>Mentoring & Instructional Support | Absyz Inc., Hyderabad, India | Apr 2021 – Dec 2024</strong>
            <ul className="list-disc list-inside ml-5 space-y-1">
              <li>Designed and conducted onboarding training sessions for interns.</li>
              <li>Mentored junior developers with code reviews and guidance.</li>
              <li>Collaborated across teams to resolve issues and ensure clarity.</li>
              <li>Assisted in developing documentation and resources for internal training.</li>
            </ul>
          </li>
          <li>
            <strong>Healthcare Project (Cortica) – Full-stack Software Engineer | Absyz Inc. | Apr 2023 – Dec 2024</strong>
            <ul className="list-disc list-inside ml-5 space-y-1">
              <li>Developed secure healthcare web app for children with autism.</li>
              <li>Created data dashboards and analytics tools.</li>
              <li>Supported non-technical stakeholders in understanding features.</li>
            </ul>
          </li>
          <li>
            <strong>Frontend Developer | Absyz Inc. | Apr 2021 - Mar 2023</strong>
            <ul className="list-disc list-inside ml-5 space-y-1">
              <li>Developed internal application automating 80% of sales tasks.</li>
              <li>Planned frontend architecture and built UI components.</li>
              <li>Maintained large cloud databases on AWS, Azure, Heroku.</li>
            </ul>
          </li>
          <li>
            <strong>Software Development Intern | Absyz Inc. | Sep 2020 - Mar 2021</strong>
            <ul className="list-disc list-inside ml-5 space-y-1">
              <li>Built app providing real-time vaccine availability.</li>
              <li>Completed Salesforce Trailheads and multiple hackathons.</li>
              <li>Mastered frontend frameworks and contributed to client projects.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Notable Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 border-b border-gray-700 pb-1">Notable Projects</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>Cortica Healthcare:</strong> Healthcare platform for children with autism. Techstack: React, AWS Lambda, Aurora SQL, GraphQL, TypeORM.
          </li>
          <li>
            <strong>Pre-Sales Assisted Portal:</strong> Internal project automating 80% of sales proposal process. Techstack: ReactJS, CSS3, ExpressJS, AWS, Dropbox, MySQL.
          </li>
          <li>
            <strong>Daily Nickel:</strong> E-commerce front-end revamp using Angular, NodeJS, JWT, Angular Material.
          </li>
        </ul>
      </section>

      {/* Certifications & Coursework */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 border-b border-gray-700 pb-1">Certifications & Coursework</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Applied Data Science with Python Specialization</li>
          <li>Web Application Technologies</li>
          <li>TensorFlow for AI and Machine Learning</li>
          <li>Programming Algorithms Coursework</li>
          <li>Lightning Web Components Specialist Super Badge</li>
        </ul>
      </section>

      {/* Honors & Awards */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 border-b border-gray-700 pb-1">Honors & Awards</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>TXST Graduate Merit Fellowship (Feb 2025)</li>
          <li>Best Team Player – ABSYZ Healthcare Project (Dec 2023)</li>
          <li>Behind the Scenes Award – ABSYZ Annual Day (Dec 2022)</li>
          <li>Nominated for Best-in-Class Innovation Award (Dec 2022)</li>
        </ul>
      </section>

      {/* Volunteer Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 border-b border-gray-700 pb-1">Volunteer Experience</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>
            Tutor & Instructor | Best Brains Learning Center – Leander, TX | Jan 2025 - Apr 2025
          </li>
          <li>Taught mathematics and introductory programming (Python, web development).</li>
          <li>Assisted with grading assignments and providing constructive feedback.</li>
          <li>Designed and delivered lesson plans to enhance student understanding.</li>
        </ul>
      </section>
    </main>
  );
}