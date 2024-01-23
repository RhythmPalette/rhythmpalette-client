// SignUp_email.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Arrow from "./Img/화살표.svg";

const Background = styled.div`
  width: 1910.395px;
  height: 1080px;
  flex-shrink: 0;
  background: radial-gradient(140.12% 112.97% at -1.52% -17.47%, rgba(0, 201, 130, 0.50) 1.59%, rgba(241, 241, 241, 0.50) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`
const SignUp = styled.form`
  width: 1636.578px;
  height: 894.085px;
  flex-shrink: 0;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Logo = styled.div`
  color: #000;
  text-align: center;
  font-family: "Segoe UI";
  font-size: 50px;
  font-style: normal;
  font-weight: 300;
  line-height: 18px; /* 36% */
  margin-top: 105.88px;
`
const Title = styled.div`
  display: flex;
  width: 243.816px;
  height: 93.652px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 60px;
  font-style: normal;
  font-weight: 600;
  line-height: 30%;
  margin-top: 70.61px;
`
const Email = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  width: 539.965px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  margin-top: 31.13px;
`
const Wrapping = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  width: 564.305px;
  height: 58.451px;
  flex-shrink: 0;
  margin-top: 13.72px;
`
const Input = styled.input`
  width: 411.35px;
  height: 58.451px;
  flex-shrink: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 1px solid #999999;
  background: #FFF;
  padding-top: 14.17px;
  padding-bottom: 14.17px;
  padding-left: 17.17px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 
  72% */
`
const Send = styled.button`
width: 152.953px;
height: 58.451px;
flex-shrink: 0;
background: #04DB8F;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border: 1px solid #999999;
color: #000;
text-align: center;
font-family: "Pretendard Variable";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 90% */
`
const Timer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 531.28469px;
height: 30.391px;
flex-shrink: 0;
color: #F00;
font-family: "Pretendard Variable";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 90% */
margin-top: 2.08px;
`
const ArrowBtn = styled.button`
  background: white;
  border: 0;
  width: 141.629px;
  height: 77.66px;
  flex-shrink: 0;
  margin-top: 157.56px;
  margin-bottom: 76.24px;
`
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
      navigate('/signup_check');
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
    <Background>
      <SignUp>
        <Logo>logo</Logo>
        <Title>회원가입</Title>
        <Email>이메일 주소</Email>
        <Wrapping>
          <div>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Send type="button" onClick={handleSendVerificationCode}>
              인증번호 발송
            </Send>
          </div>
        </Wrapping>
        <Email>인증번호 확인</Email>
        <Wrapping>
          <div>
            <Input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
          </div>
          <div>
            <Send type="button" onClick={handleResendVerificationCode}>
              인증번호 재발송
            </Send>
          </div>
        </Wrapping>
        <Timer>
          {isTimerRunning && (
            <div>
              {`${Math.floor(timer / 60)}:${(timer % 60).toString().padStart(2, '0')}`}
            </div>
          )}
        </Timer>
        
        <ArrowBtn type="button" onClick={handleVerifyCode}>
          <img src={Arrow} alt="arrow" />
        </ArrowBtn>
        {verificationError && <p style={{ color: 'red' }}>{verificationError}</p>}
      </SignUp>
    </Background>
  );
};

export default SignUp_email;
