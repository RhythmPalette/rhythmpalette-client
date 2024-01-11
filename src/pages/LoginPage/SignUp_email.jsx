// SignUp_email.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp_email = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [timer, setTimer] = useState(120); // 초 단위로 타이머 설정
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [verificationError, setVerificationError] = useState('');

  const navigate = useNavigate();

  const handleSendVerificationCode = () => {
    // TODO: 서버로 이메일과 함께 요청을 보내어 인증번호를 받아오는 로직 추가
    // 이 예제에서는 간단히 콘솔에 출력하여 확인
    console.log('인증번호를 이메일로 발송합니다.');
    startTimer();
  };

  const handleResendVerificationCode = () => {
    // TODO: 서버로 이메일과 함께 요청을 보내어 인증번호를 다시 발송하는 로직 추가
    // 이 예제에서는 간단히 콘솔에 출력하여 확인
    console.log('인증번호를 다시 이메일로 발송합니다.');
    startTimer();
  };

  const handleVerifyCode = () => {
    // TODO: 서버로 인증번호를 포함한 요청을 보내어 검증하는 로직 추가
    // 이 예제에서는 간단히 콘솔에 출력하여 확인
    console.log('인증번호를 확인합니다.');

    // TODO: 실제로는 서버로 인증번호를 검증하는 요청을 보내어 결과를 받아옵니다.
    const isCodeCorrect = true; // 예제에서는 항상 맞다고 가정합니다.

    if (isCodeCorrect) {
      // 인증이 맞으면 로그인 페이지로 이동
      navigate('/login');
    } else {
      // 인증이 틀리면 에러 메시지 표시
      setVerificationError('인증번호가 올바르지 않습니다. 다시 시도해주세요.');
    }
  };

  const startTimer = () => {
    setTimer(120);
    setIsTimerRunning(true);
  };

  useEffect(() => {
    let intervalId;

    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            clearInterval(intervalId);
            setIsTimerRunning(false);
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isTimerRunning]);

  return (
    <div>
      <h3>logo</h3>
      <h2>이메일 인증</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          이메일
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSendVerificationCode}>
          발송
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
        <div>
          인증번호 확인
          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleResendVerificationCode}>
          재전송
        </button>
      </div>
      {isTimerRunning && (
        <div style={{ marginLeft: '10px', color: 'red' }}>
          {`${Math.floor(timer / 60)}:${(timer % 60).toString().padStart(2, '0')}`}
        </div>
      )}
      <button type="button" onClick={handleVerifyCode}>
        인증 확인
      </button>
      {verificationError && <p style={{ color: 'red' }}>{verificationError}</p>}
    </div>
  );
};

export default SignUp_email;
