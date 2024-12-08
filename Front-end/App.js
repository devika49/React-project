import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./App.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setTitle(uploadedFile.name);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  const handleProcessing = () => {
    // Add your processing logic here
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
 return (
    <div className="pdf-viewer">
      <div className="pdf-container">
      <div className="pdf-title">
        <div className="pdf-uploader">
          <h4>Upload PDF</h4>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
          />
       
       
          <h4>Title</h4>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter title"
          />
        
        <div className="pdf-processing-button">
          <button onClick={handleProcessing}>Click on Processing</button>
        </div>
      </div>
        </div>
        </div>
      {file && (
        <div className="pdf-document">
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={pageNumber}
              onLoadError={(error) => console.log("Error loading page", error)}
            />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <div className="pdf-navigation">
            <button
              onClick={() => handlePageChange(pageNumber - 1)}
              disabled={pageNumber <= 1}
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(pageNumber + 1)}
              disabled={pageNumber >= numPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
