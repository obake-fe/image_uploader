import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { useAuthContext } from './AuthContext';

export const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const handleLogout = async () => {
    await auth.signOut();
  };

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  return (
    <div>
      <h1 className="text-3xl font-bold">Top</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/status">Status</Link>
        <Link to="/upload">Upload</Link>
      </nav>
      <button onClick={handleLogout} type="submit">
        ログアウト
      </button>
    </div>
  );
};
