"use client";

export default function EducationReferences() {
  const pdfData = "/assets/Sravan_Naikini_LOR.pdf";

  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-emerald-400">
          Education References
        </h2>
        <p className="mt-2 text-gray-400">
          Here are my letters of recommendation and educational references.
        </p>
      </div>

      {/* PDF Viewer */}
      <div className="relative border rounded-lg overflow-hidden shadow-lg mb-6">
        <iframe
          src={pdfData}
          className="w-full h-[600px] sm:h-[800px] md:h-[900px]"
          title="Education References PDF"
        ></iframe>
      </div>

      {/* Download button */}
      <div className="text-center">
        <a
          href={pdfData}
          download
          className="inline-block px-6 py-3 bg-emerald-400 text-white font-semibold rounded-md hover:bg-emerald-500 transition"
        >
          Download PDF
        </a>
      </div>
    </section>
  );
}
