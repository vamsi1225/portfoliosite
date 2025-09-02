"use client";
import React, { useEffect } from "react";

export default function TableauDashboard() {
  useEffect(() => {
    const divElement = document.getElementById("viz1756770679458");
    if (!divElement) return;
    const vizElement = divElement.getElementsByTagName("object")[0];
    if (divElement.offsetWidth > 800) {
      vizElement.style.width = "1000px";
      vizElement.style.height = "827px";
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.width = "1000px";
      vizElement.style.height = "827px";
    } else {
      vizElement.style.width = "100%";
      vizElement.style.height = "1377px";
    }

    const scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode?.insertBefore(scriptElement, vizElement);
  }, []);

  return (
    <div className="w-full my-20 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
        Tableau Dashboard: Student Demographics Analysis
      </h2>

      <p className="text-gray-300 text-base sm:text-lg mb-8 text-center max-w-4xl mx-auto">
        This interactive Tableau dashboard visualizes student demographics
        across various parameters such as gender, ethnicity, and program level.
        It allows dynamic filtering and provides insights into enrollment
        trends. Built as part of my data analytics projects, this dashboard
        showcases data visualization and analytical capabilities.
      </p>

      <div className="max-w-6xl mx-auto">
        <div
          className="tableauPlaceholder w-full relative"
          id="viz1756770679458"
          style={{ position: "relative", paddingBottom: "82.7%" }}
        >
          <noscript>
            <a href="#">
              <img
                alt="Dashboard 1"
                src="https://public.tableau.com/static/images/St/StudentDemographicsAnalysis/Dashboard1/1_rss.png"
                style={{ border: "none" }}
              />
            </a>
          </noscript>
          <object className="tableauViz" style={{ display: "none" }}>
            <param
              name="host_url"
              value="https%3A%2F%2Fpublic.tableau.com%2F"
            />
            <param name="embed_code_version" value="3" />
            <param name="site_root" value="" />
            <param name="name" value="StudentDemographicsAnalysis/Dashboard1" />
            <param name="tabs" value="no" />
            <param name="toolbar" value="yes" />
            <param
              name="static_image"
              value="https://public.tableau.com/static/images/St/StudentDemographicsAnalysis/Dashboard1/1.png"
            />
            <param name="animate_transition" value="yes" />
            <param name="display_static_image" value="yes" />
            <param name="display_spinner" value="yes" />
            <param name="display_overlay" value="yes" />
            <param name="display_count" value="yes" />
            <param name="language" value="en-US" />
          </object>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="https://public.tableau.com/views/StudentDemographicsAnalysis/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
        >
          View on Tableau
        </a>
      </div>
    </div>
  );
}
