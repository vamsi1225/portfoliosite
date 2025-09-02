"use client";

import { useEffect, useRef, useState } from "react";

interface TableauDashboardProps {
  id: string;
  name: string;
  title: string;
  description?: string;
  staticImage: string;
  link?: string;
}

export default function TableauDashboard({
  id,
  name,
  title,
  description,
  staticImage,
  link,
}: TableauDashboardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [vizHeight, setVizHeight] = useState(827); // default height

  useEffect(() => {
    const updateHeight = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;

      if (width > 1000) setVizHeight(827);
      else if (width > 800) setVizHeight(827);
      else if (width > 500) setVizHeight(827);
      else setVizHeight(1377); // mobile height
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    // Load Tableau script
    const divElement = containerRef.current;
    if (divElement) {
      const vizElement = divElement.getElementsByTagName("object")[0];
      if (vizElement) {
        const script = document.createElement("script");
        script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
        vizElement.parentNode?.insertBefore(script, vizElement);
      }
    }

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="my-12">
      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 text-center">
        {title}
      </h3>
      {description && (
        <p className="text-gray-300 mb-6 text-center max-w-3xl mx-auto">
          {description}
        </p>
      )}

      <div
        className="tableauPlaceholder w-full relative"
        id={id}
        ref={containerRef}
        style={{ minHeight: vizHeight }}
      >
        <noscript>
          <a href="#">
            <img alt={name} src={staticImage} style={{ border: "none" }} />
          </a>
        </noscript>
        <object
          className="tableauViz"
          style={{ width: "100%", height: vizHeight }}
        >
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value={name} />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param name="static_image" value={staticImage} />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
        </object>
      </div>

      {link && (
        <div className="text-center mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 underline"
          >
            View on Tableau
          </a>
        </div>
      )}
    </div>
  );
}
