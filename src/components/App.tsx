import React from 'react';
import '../css/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from './Index';
import { Upload } from './Upload';
import { Status } from './Status';

/**
 * Routing component
 */
export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/signUp" element={<Status />} />
    </Routes>
  </BrowserRouter>
);
