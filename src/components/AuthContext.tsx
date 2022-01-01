import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
  ReactNode,
  VFC
} from 'react';
import firebase from 'firebase/compat';
import { auth } from '../firebase/firebase';
import User = firebase.User;

type Props = {
  children: ReactNode;
};

type ContextValue = {
  user: User | null;
  loading: boolean;
};

const initialValue = {
  user: null,
  loading: false
};

const AuthContext = createContext<ContextValue>(initialValue);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: VFC<Props> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const value = useMemo(() => {
    return {
      user,
      loading
    };
  }, [user, loading]);

  useEffect(() => {
    // サインイン、サインアウトが行われると実行(onAuthStateChanged)
    const unsubscribed = auth.onAuthStateChanged((userValue) => {
      setUser(userValue);
      setLoading(false);
    });

    // アンマウント時にイベントリスナを削除する
    return () => {
      unsubscribed();
    };
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
