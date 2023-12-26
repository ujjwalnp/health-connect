import React, { useState, useEffect } from 'react';

const Reports = () => {
  // Mock data for PDF files
  const pdfFiles = ['Report 1', 'Report 2', 'Report 3'];

  const openPdf = (fileName) => {
    // Replace this with your logic to open the PDF in a new page
    window.open(`/api/pdfs/${fileName}`, '_blank');
  };

  return (
    <div className="rounded-lg bg-gradient-to-r from-green-500 to-blue-500 p-6 shadow-lg">
      <h1 className="text-3xl font-bold text-white mb-4">Reports</h1>

      <ul className="flex flex-col items-start list-none pl-5 text-white">
        {pdfFiles.map((file, index) => (
          <li
            key={index}
            className="flex items-center mb-4 py-2 border-t border-b border-white w-full cursor-pointer"
            onClick={() => openPdf(file)}
          >
            <span className="font-semibold text-lg">{file}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
