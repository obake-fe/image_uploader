import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';

export const Index = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Top</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="signup">SignUp</Link>
        <Link to="login">Login</Link>
        <Link to="status">Status</Link>
        <Link to="upload">Upload</Link>
      </nav>
      <button onClick={handleLogout} type="submit">
        ログアウト
      </button>
    </div>
  );
};
