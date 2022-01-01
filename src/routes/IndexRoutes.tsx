import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAuthContext } from '../components/AuthContext';
import { GuestRoutes } from './GuestRoutes';
import { PrivateRoutes } from './PrivateRoutes';

/**
 * Routing component
 */
export const IndexRoutes = () => {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>{!user ? <GuestRoutes /> : <PrivateRoutes />}</BrowserRouter>
  );
};
