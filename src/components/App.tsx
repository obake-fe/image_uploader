import React from 'react';
import '../css/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { Index } from './Index';
import { SignUp } from './SignUp';
import { Login } from './Login';
import { Status } from './Status';
import { Upload } from './Upload';

/**
 * Routing component
 */
export const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/status" element={<Status />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
