import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import App from './App';
import PdfViewer from './PdfViewer';

function AppRoutes() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<App />} />
          <Route path="/pdfviewer" component={<PdfViewer/>} />  
      </Routes>
    </Router>
  );
}

ReactDOM.render(<AppRoutes />, document.getElementById('root'));
