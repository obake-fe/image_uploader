import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';

export const SignUp = () => {
  const navigate = useNavigate();
  const [errorText, setError] = useState('');
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      navigate('/');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>ユーザ登録</h1>
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
          <button type="submit">登録</button>
        </div>
      </form>
    </div>
  );
};
