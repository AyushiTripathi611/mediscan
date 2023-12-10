import React from 'react';
import { Link } from 'react-router-dom';

const OptionsComponent = () => {
  return (
    <div className="mt-3 d-flex justify-content-center flex-column align-items-center response">
      <Link to="/query" className="options text-black">
        Query
      </Link>
      <Link to="/report-scanning" className="options text-black">
        Report Scanning
      </Link>
    </div>
  );
};

export default OptionsComponent;
