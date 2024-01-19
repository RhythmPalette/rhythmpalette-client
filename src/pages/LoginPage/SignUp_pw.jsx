// SignUp_pw.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
import Arrow from './Img/화살표.svg'
import { useNavigate } from 'react-router-dom';

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
  font-family: Pretendard Variable;
  font-size: 60px;
  font-style: normal;
  font-weight: 600;
  line-height: 30%;
  margin-top: 70.61px;
`
const Pw = styled.div`
  width: 529.959px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  margin-top: 30.71px;
`
const Input = styled.input`
  width: 564.305px;
  height: 58.451px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #999999;
  background: #FFF;
  margin-top: 13.72px;
  padding-top: 14.17px;
  padding-bottom: 14.17px;
  padding-left: 17.17px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
`


const Error = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 536.83719px;
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
  margin-top: 152.95px;
`


const SignUp_pw = () => {
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
      navigate('/signup_email');
    }

    // 비밀번호가 일치하지 않으면 상태 업데이트하여 빨간 문구와 테두리 색상 변경
    setPasswordsMatch(match);
  };

  return (
    <Background>
      <SignUp>
        <Logo>logo</Logo>
        <Title>회원가입</Title>
        <Pw>비밀번호</Pw>
        <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <div>영어(대/소문자)</div>
        <Pw>비밀번호 확인</Pw>
        <Input
            type="password"
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
            style={{
              borderColor: passwordsMatch ? '' : 'red', // 비밀번호 일치 여부에 따라 테두리 색상 변경
            }}
        />
        <Error>
          {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
        </Error>
        <ArrowBtn type="button" onClick={handleSignUp}>
          <img src={Arrow} alt="arrow" />
        </ArrowBtn>
      </SignUp>
    </Background>
  );
};

export default SignUp_pw;
