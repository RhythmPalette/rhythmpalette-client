// Login.jsx

import React, { useState } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 1910.395px;
  height: 1080px;
  flex-shrink: 0;
  background: radial-gradient(140.12% 112.97% at -1.52% -17.47%, rgba(0, 201, 130, 0.50) 1.59%, rgba(241, 241, 241, 0.50) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`
const SignIn = styled.form`
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
  margin-top: 75.88px;
`

const Title = styled.div`
  display: flex;
  width: 180px;
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
  margin-top: 48.78px;
`
const KakaoWrab = styled.div`
  width: 564.305px;
  height: 58.451px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #FFEB3B;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  margin-top: 20.65px;
`
const Line = styled.hr`
  width: 529.959px;
  height: 1px;
  transform: scaleY(0.5);
  margin-top: 44.82px;
  background: #A9A9A9;
`
const Email = styled.div`
  width: 529.959px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  margin-top:31.68px;
`
const Input = styled.input`
  width: 564.305px;
  height: 58.451px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #999;
  background: #FFF;
  margin-top: 13.25px;
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
const Password = styled.div`
  width: 529.959px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  margin-top: 10.549px;
`
const LoginBtn =styled.button`
  width: 564.305px;
  height: 73.758px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #04DB8F;
  border: 0;
  flex-shrink: 0;
  color: #FFF;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  margin-top: 19.969px;
`
const Find = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 30.391px;
  color: #666;
  margin-top: 23.65px;
`
const FindId = styled.a`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  margin-right: 44.2px;
  text-decoration-line: none;
`
const FindPw = styled.a`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  margin-left: 36.18px;
  text-decoration-line: none;
`
const Separation = styled.div`
  font-size: 25px;
`
const Error = styled.div`
  width: 529.959px;
  height: 30.391px;
  color: #F00;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 90% */
  margin-top: 4.18px;
`

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [identifierError, setIdentifierError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    // 예제에서는 간단히 이메일이나 아이디가 'test@test.com'이고, 비밀번호가 'password'일 때를 로그인 성공으로 가정
    const correctIdentifier = 'test@test.com'; 
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

  const Rest_api_key='9ca8862f645265320a040503a774512d' //REST API KEY
  const redirect_uri = 'http://localhost:3000/kakaologin' //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
  const kakaoLogin = ()=>{
    window.location.href = kakaoURL
  }
  // const code = new URL(window.location.href).searchParams.get("code");

  return (
    <Background>
      <SignIn>
        <Logo>logo</Logo>
        <Title>로그인</Title>
        <KakaoWrab onClick={kakaoLogin}>카카오톡으로 로그인하기</KakaoWrab>
        <Line />
        <Email>
          이메일 주소 또는 아이디
        </Email>
        <Input
          type="text"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <Error>{identifierError && <div>{identifierError}</div>}</Error>
        <Password>
          비밀번호
        </Password>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Error>{passwordError && <div>{passwordError}</div>}</Error>
        <LoginBtn type="button" onClick={handleLogin}>
          로그인
        </LoginBtn>
        <Find>
          <FindId href="#">아이디 찾기</FindId>
          <Separation>|</Separation>
          <FindPw href="#">비밀번호 찾기</FindPw>
        </Find>
      </SignIn>
    </Background>
  );
};

export default Login;
