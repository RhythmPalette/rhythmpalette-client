// SignUp_id.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp_id = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [isIdAvailable, setIsIdAvailable] = useState(true);

  const handleCheckId = () => {
    // 여기에 아이디 중복 확인 로직을 추가
    // 예제로 간단하게 구현하겠습니다.
    // 실제로는 서버에 아이디 중복 확인 요청을 보내야 합니다.
    // 중복이면 setIsIdAvailable(false), 중복이 아니면 setIsIdAvailable(true) 설정
    console.log('아이디 중복 확인:', id);
    // 예제에서는 아이디 중복 여부에 따라 상태를 변경
    setIsIdAvailable(Math.random() > 0.5); // 임의로 설정한 예제 중복 여부
  };

  const handleNext = () => {
    // 여기에서 다음 페이지로 이동하는 로직 추가
    // 예제로는 비밀번호 확인 페이지로 이동하도록 함
    console.log('다음 페이지로 이동:', name, id);
  };

  return (
    <div>
      <h3>logo</h3>
      <h2>회원가입</h2>
      <div>
        이름
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        아이디
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="button" onClick={handleCheckId}>
          중복 확인
        </button>
        {isIdAvailable ? (
          <div style={{ color: 'blue' }}>사용 가능한 아이디입니다.</div>
        ) : (
          <div style={{ color: 'red' }}>중복된 아이디입니다.</div>
        )}
      </div>
      <Link to="/signup_pw">
        <button type="button" onClick={handleNext} disabled={!isIdAvailable}>
          다음
        </button>
      </Link>
    </div>
  );
};

export default SignUp_id;
