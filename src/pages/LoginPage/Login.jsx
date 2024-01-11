// Login.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [identifierError, setIdentifierError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    // 예제에서는 간단히 이메일이나 아이디가 'test@test.com'이고, 비밀번호가 'password'일 때를 로그인 성공으로 가정
    const correctIdentifier = 'test@test.com'; // You can replace this with the actual logic for checking email or username
    const correctPassword = 'password';

    // 이메일 또는 아이디 유효성 검사
    if (identifier !== correctIdentifier) {
      setIdentifierError('이메일 또는 아이디가 일치하지 않습니다.');
    } else {
      setIdentifierError('');
    }

    // 비밀번호 유효성 검사
    if (password !== correctPassword) {
      setPasswordError('비밀번호가 일치하지 않습니다.');
    } else {
      setPasswordError('');
    }

    // 이메일 또는 아이디와 비밀번호가 일치하면 로그인 성공
    if (identifier === correctIdentifier && password === correctPassword) {
      console.log('로그인 성공');
    }
  };

  return (
    <div>
      <h3>logo</h3>
      <h2>로그인</h2>
      <form>
        <div>
          이메일 주소 또는 아이디
        </div>
        <input
          type="text"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        {identifierError && <p style={{ color: 'red' }}>{identifierError}</p>}
        <div>
          비밀번호
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        <br></br>
        <button type="button" onClick={handleLogin}>
          로그인
        </button>
      </form>
      <div>
        <Link to="/signup_id">회원가입</Link>
      </div>
      <div>
        <a href="#">아이디 찾기</a> | <a href="#">비밀번호 찾기</a>
      </div>
    </div>
  );
};

export default Login;
