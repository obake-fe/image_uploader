import React from 'react';
import { Link } from 'react-router-dom';

export const Index = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Top</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="upload">Upload</Link>
        <Link to="signup">Status</Link>
      </nav>
    </div>
  );
};
