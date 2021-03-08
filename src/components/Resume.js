import React, { useState } from 'react';
import '../App.css'
import './Resume.css'
import { Document, Page } from 'react-pdf';
import resume from '../assets/Nelson_Resume_2021.pdf'
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function Resume (){

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className = 'resume-container'>
      <Document
        file={resume}
        onLoadSuccess={onDocumentLoadSuccess} className = ' res '
      >
        <Page pageNumber={pageNumber} />
      </Document>
     
    </div>
  );
	//return <h1 className = 'products'> Projects </h1>
	
}
export default Resume;
