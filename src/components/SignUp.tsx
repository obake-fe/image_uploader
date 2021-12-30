import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useAuthContext } from './AuthContext';

export const SignUp = () => {
  const user = useAuthContext() || undefined;
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    createUserWithEmailAndPassword(auth, email.value, password.value);
  };

  return (
    <div>
      <h1>ユーザ登録 {user ? user.email : ''}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            メールアドレス
            <input id="email" name="email" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            パスワード
            <input id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">登録</button>
        </div>
      </form>
    </div>
  );
};
