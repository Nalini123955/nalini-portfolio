import React from "react";
import { useParams, Link } from "react-router-dom";

const CertificatePage: React.FC = () => {
  const { filename } = useParams<{ filename: string }>();

  if (!filename) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h2 className="text-2xl mb-4">Certificate not found 😔</h2>
        <Link to="/#certifications" className="text-blue-400 underline">
          Go Back
        </Link>
      </div>
    );
  }

  const fileUrl = `/certifications/${filename}.pdf`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-6">📜 Certificate Viewer</h2>
      <iframe
        src={fileUrl}
        title={filename}
        className="w-full max-w-4xl h-[80vh] border-2 border-gray-700 rounded-xl shadow-lg"
      ></iframe>
      <Link to="/#certifications" className="mt-6 text-blue-400 underline">
        ← Back to Certifications
      </Link>
    </div>
  );
};

export default CertificatePage;
