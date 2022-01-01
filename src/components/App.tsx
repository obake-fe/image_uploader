import React from 'react';
import '../css/index.css';
import { AuthProvider } from './AuthContext';
import { IndexRoutes } from '../routes/IndexRoutes';

/**
 * Routing component
 */
export const App = () => {
  return (
    <AuthProvider>
      <IndexRoutes />
    </AuthProvider>
  );
};
