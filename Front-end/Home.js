
import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to PDF Uploader App</h1>
      <p>upload and view PDF files.</p>
      <Link to="/app" className="btn btn-primary">
        Go to App Page
      </Link>
    </div>
  );
}

export default Home;
