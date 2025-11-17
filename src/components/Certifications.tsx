import React from "react";
import { Link } from "react-router-dom";

/**
 * Generates a data-URI for a simple modern flat-style certificate thumbnail (SVG).
 * title: certificate title text
 * bg: background color (hex)
 */
function makeCertificateDataUri(title, bg) {
  const safeTitle = title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'>
    <defs>
      <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
        <stop offset='0' stop-color='${bg}' stop-opacity='1'/>
        <stop offset='1' stop-color='${bg}' stop-opacity='0.85'/>
      </linearGradient>
      <filter id='f' x='-20%' y='-20%' width='140%' height='140%'>
        <feDropShadow dx='0' dy='6' stdDeviation='12' flood-color='#000' flood-opacity='0.12'/>
      </filter>
    </defs>

    <!-- card background -->
    <rect x='18' y='18' rx='20' ry='20' width='764' height='564' fill='url(#g)' filter='url(#f)' />

    <!-- subtle grid lines / decoration -->
    <g opacity='0.06'>
      <rect x='40' y='120' width='720' height='3' fill='#ffffff'/>
      <rect x='40' y='200' width='720' height='3' fill='#ffffff'/>
    </g>

    <!-- logo circle -->
    <circle cx='80' cy='80' r='34' fill='rgba(255,255,255,0.18)' stroke='rgba(255,255,255,0.22)' stroke-width='1' />

    <!-- tiny badge -->
    <rect x='640' y='48' width='96' height='36' rx='8' fill='rgba(255,255,255,0.14)' />

    <!-- title text -->
    <text x='400' y='320' font-family='Segoe UI, Roboto, Arial, sans-serif' font-size='36' font-weight='700' fill='rgba(255,255,255,0.95)' text-anchor='middle'>
      ${safeTitle}
    </text>

    <!-- subtitle / small label -->
    <text x='400' y='370' font-family='Segoe UI, Roboto, Arial, sans-serif' font-size='16' fill='rgba(255,255,255,0.85)' text-anchor='middle'>
      Certificate of Completion
    </text>

    <!-- thin footer line -->
    <rect x='120' y='460' width='560' height='2' fill='rgba(255,255,255,0.10)' rx='1' />
    <text x='400' y='500' font-family='Segoe UI, Roboto, Arial, sans-serif' font-size='12' fill='rgba(255,255,255,0.7)' text-anchor='middle'>
      Generated thumbnail — replace with real certificate image anytime
    </text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const colorPalette = [
  "#6C5CE7", // purple
  "#00B894", // green
  "#0984E3", // blue
  "#FD79A8", // pink
  "#FFB86B", // orange
  "#00B8D9", // teal
  "#7B61FF", // indigo
  "#F6D365", // yellowish
];

const certifications = [
  { name: "AI First Software Engineering", file: "AI First Software Engineering" },
  { name: "AI Introduction", file: "AI Introduction" },
  { name: "Cuvette Gen-AI & LLMs Workshop", file: "Cuvette Gen-AI & LLMs Workshop" },
  { name: "Certification from the TechSaksham_-1", file: "Certification from the TechSaksham_-1" },
  { name: "Clustering Using Python", file: "Clustering Using Python" },
  { name: "CyberSecurity Terminology", file: "CyberSecurity Terminology" },
  { name: "CyberSecurity Threat Landscape", file: "CyberSecurity Threat Landscape" },
  { name: "Career Catalyst Program", file: "Career Catalyst Program" },
  { name: "Ethical AI", file: "Ethical AI" },
  { name: "Exploratory Data Analysis", file: "Exploratory Data Analysis" },
  { name: "Machine Learning", file: "Machine learning" },
  { name: "OpenAI GPT Models", file: "OpenAI GPT Models" },
  { name: "Generative models for Developers", file: "Generative models for Developers" },
  { name: "Prompt Engineering", file: "Prompt Engineering" },
  { name: "Python for Data Science", file: "Python for Data science" },
  { name: "Regression Analysis", file: "Regression Analysis" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="p-10 bg-gray-900 text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center">📜 Certifications</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => {
          const bg = colorPalette[index % colorPalette.length];
          const dataUri = makeCertificateDataUri(cert.name, bg);

          return (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl p-4 text-center transition-transform transform hover:-translate-y-2"
            >
              <img
                src={dataUri}
                alt={cert.name}
                className="w-full h-44 object-cover rounded-xl mb-4"
                // prevent image dragging selection noise
                draggable={false}
              />
              <h3 className="font-semibold text-lg mb-3">{cert.name}</h3>
              <Link
                to={`/certificate/${encodeURIComponent(cert.file)}`}
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-4 py-2 rounded text-white transition"
              >
                View Certificate
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}