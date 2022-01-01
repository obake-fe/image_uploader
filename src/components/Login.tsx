import React, { useState, VFC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export const Login: VFC = () => {
  const navigate = useNavigate();
  const [errorText, setError] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      navigate('/');
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>ログイン</h1>
      {errorText && <p style={{ color: 'red' }}>{errorText}</p>}
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
