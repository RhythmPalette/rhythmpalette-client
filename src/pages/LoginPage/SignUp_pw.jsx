// SignUp_pw.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp_pw = ({ name, id }) => {
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const handleSignUp = () => {
    // 비밀번호 일치 여부를 직접 확인하는 로직
    const match = password === confirmedPassword;

    // 빈칸이거나 비밀번호가 일치하지 않는 경우 에러 처리
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요.');
    } else if (!match) {
      setPasswordError('비밀번호가 일치하지 않습니다.');
    } else {
      setPasswordError(''); // 에러가 없을 경우 에러 메시지 초기화
      // 여기에서 최종적인 회원가입 로직을 추가
      console.log('회원가입 정보:', name, id, password);
      // 실제로는 서버에 회원가입 요청을 보내야 합니다.
      // 예제에서는 다음 페이지로 이동
      navigate('/signup_email');
    }

    // 비밀번호가 일치하지 않으면 상태 업데이트하여 빨간 문구와 테두리 색상 변경
    setPasswordsMatch(match);
  };

  return (
    <div>
      <h3>logo</h3>
      <h2>회원가입</h2>
      <div>
        비밀번호
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        비밀번호 확인
        <input
          type="password"
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
          style={{
            borderColor: passwordsMatch ? '' : 'red', // 비밀번호 일치 여부에 따라 테두리 색상 변경
          }}
        />
        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
      </div>
      <button type="button" onClick={handleSignUp}>
        다음
      </button>
    </div>
  );
};

export default SignUp_pw;
