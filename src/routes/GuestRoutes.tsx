import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Index } from '../components/Index';
import { Login } from '../components/Login';
import { SignUp } from '../components/SignUp';

export const GuestRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};
