import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from './Index';
import { Upload } from './Upload';

/**
 * Routing component
 */
export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  </BrowserRouter>
);
