import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Index } from '../components/Index';
import { Status } from '../components/Status';
import { Upload } from '../components/Upload';

/**
 * Routing component
 */
export const PrivateRoutes = () => (
  <Routes>
    <Route path="/status" element={<Status />} />
    <Route path="/upload" element={<Upload />} />
    <Route path="/*" element={<Index />} />
  </Routes>
);
