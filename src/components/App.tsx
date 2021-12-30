import React from 'react';
import '../css/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from './Index';
import { SignUp } from './SignUp';
import { Status } from './Status';
import { Upload } from './Upload';

/**
 * Routing component
 */
export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/status" element={<Status />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  </BrowserRouter>
);
