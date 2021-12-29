import React from 'react';
import { Link } from 'react-router-dom';

export const Index = () => {
  return (
    <div>
      <h1>Top</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="upload">Upload</Link>
      </nav>
    </div>
  );
};
