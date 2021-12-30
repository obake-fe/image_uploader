import React, { useState, useEffect, useCallback } from 'react';
import {
  Auth,
  UserCredential,
  signInWithCredential,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import { auth, provider } from '../firebase/firebase';

const useAuth = (authArg: Auth) => {
  const [state, setState] = useState<
    'idol' | 'progress' | 'login' | 'logout' | 'error'
  >('idol');
  const [error, setError] = useState<unknown>('');
  const [credential, setCredential] = useState<UserCredential>();
  const dispatch = useCallback(
    (
      action:
        | { type: 'login'; payload?: { token: string } }
        | { type: 'logout' }
    ) => {
      setError('');
      switch (action.type) {
        case 'login':
          setState('progress');
          if (action.payload?.token) {
            signInWithCredential(
              authArg,
              GoogleAuthProvider.credential(action.payload?.token)
            )
              .then((result) => {
                setCredential(result);
                setState('login');
              })
              .catch((e) => {
                setError(e);
                setState('error');
              });
          } else {
            signInWithPopup(authArg, provider)
              .then((result) => {
                setCredential(result);
                setState('login');
              })
              .catch((e) => {
                setError(e);
                setState('error');
              });
          }
          break;
        case 'logout':
          setState('progress');
          signOut(authArg)
            .then(() => {
              setCredential(undefined);
              setState('logout');
            })
            .catch((e) => {
              setError(e);
              setState('error');
            });
          break;
        default:
          break;
      }
    },
    [authArg]
  );

  return { state, error, credential, dispatch };
};

export const Status = () => {
  const { state, dispatch, credential, error } = useAuth(auth);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      dispatch({ type: 'login', payload: { token } });
    }
  }, [dispatch]);
  useEffect(() => {
    if (credential) {
      const token =
        GoogleAuthProvider.credentialFromResult(credential)?.idToken;

      if (token) {
        sessionStorage.setItem('token', token);
      }
    } else {
      sessionStorage.removeItem('token');
    }
  }, [credential]);

  const handleLogin = () => dispatch({ type: 'login' });
  const handleLogout = () => dispatch({ type: 'logout' });

  return (
    <div>
      <h1 className="text-3xl font-bold">Status</h1>
      <button onClick={handleLogin} type="submit">
        ログイン
      </button>
      <button onClick={handleLogout} type="submit">
        ログアウト
      </button>
      <div>User: {credential?.user.displayName}</div>
      <div>State: {state}</div>
      <div>Error: {String(error)}</div>
    </div>
  );
};
