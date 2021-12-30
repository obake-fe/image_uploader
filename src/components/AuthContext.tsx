import React, { createContext, useState, useContext, useEffect } from 'react';
import firebase from 'firebase/compat';
import { auth } from '../firebase/firebase';
import User = firebase.User;

const AuthContext = createContext(null);

export const useAuthContext = (): User | null => useContext(AuthContext);

export const AuthProvider = ({ children }: never) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // サインイン、サインアウトが行われると実行(onAuthStateChanged)
    const unsubscribed = auth.onAuthStateChanged((userValue) => {
      setUser(userValue);
    });

    // アンマウント時にイベントリスナを削除する
    return () => {
      unsubscribed();
    };
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
