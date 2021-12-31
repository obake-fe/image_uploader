import React, { VFC } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export const Login: VFC = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    await signInWithEmailAndPassword(auth, email.value, password.value);
  };

  return (
    <div>
      <h1>ログイン</h1>
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
          <button type="submit">ログイン</button>
        </div>
        <div>
          ユーザ登録は<Link to="/signup">こちら</Link>から
        </div>
      </form>
    </div>
  );
};
