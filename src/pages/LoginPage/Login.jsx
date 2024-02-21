// Login.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './Img/Logo.svg';
import KakaoLogo from './Img/Vector.svg';
import KakaoText from './Img/TALK.svg';
import { useNavigate } from 'react-router-dom';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
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
const LogoImg = styled.div`
  margin-top: 45.87px;
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
  margin-top: 7.9px;
`
const KakaoWrab = styled.div`
  width: 564px;
  height: 58px;
  margin-top: 19.35px;
  position: relative;
`
const Img_kakaologo = styled.img`
  position: absolute;
  left: 46px;
  top: 13px;
  z-index: 1;
`
const Img_kakaoText = styled.img`
  position: absolute;
  left: 50.73px;
  top: 23.67px;
  z-index: 2;
`
const KakaoTALK = styled.div`
  width: 564px;
  height: 58px;
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
  z-index: 0;
`
const Line = styled.hr`
  width: 529.959px;
  height: 1px;
  transform: scaleY(0.5);
  margin-top: 35px;
  background: #A9A9A9;
`
const Email = styled.div`
  width: 540px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  margin-top: 26px;
`
const Input = styled.input`
  width: 564px;
  height: 58px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid rgba(153, 153, 153, 1);
  background: #FFF;
  margin-top: 13px;
  padding-top: 13.8px;
  padding-bottom: 13.8px;
  padding-left: 22px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  outline: none; /* 강조 효과 없애기 */
`
const Password = styled.div`
  width: 540px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  margin-top: 10.61px;
`
const LoginBtn =styled.button`
  width: 564px;
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
  margin-top: 28.61px;
`
const Find = styled.div`
  width: 564.305px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30.391px;
  color: #666;
  margin-top: 22.82px;
`
const FindId = styled.a`
  color: #666;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  text-decoration-line: none;
`
const FindPw = styled.a`
  color: #666;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  text-decoration-line: none;
`
const SignUp = styled.a`
  color: #666;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  text-decoration-line: none;
`

const Separation = styled.div`
  font-size: 25px;
`
const Error = styled.div`
  width: 520px;
  height: 30.391px;
  color: #F00;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 90% */
  margin-top: 2px;
`

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [pw, setPassword] = useState('');
  const [identifierError, setIdentifierError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      console.log('로그인 시도:', identifier, pw);
      
      const response = await fetch(
        'http://ec2-52-78-99-156.ap-northeast-2.compute.amazonaws.com:8080/api/v1/auth/signin',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            loginId: identifier,
            password: pw,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // 로그인 성공 시 토큰을 저장하거나 다른 작업을 수행할 수 있음
        console.log('로그인 성공:', data);

        // 예시: 토큰 저장
        const { token, refreshToken } = data;
        localStorage.setItem('accessToken', token);
        localStorage.setItem('refreshToken', refreshToken);

        // 로그인 후 이동할 페이지로 navigate
        navigate('/register_profile');
      } else {
        // 로그인 실패 시 에러 메시지 표시
        const data = await response.json();
        console.log('서버 응답:', data);
        console.error('로그인 실패:', data.error);
        setIdentifierError('이메일 또는 아이디가 일치하지 않습니다.');
        setPasswordError('비밀번호가 일치하지 않습니다.')
      }
    } catch (error) {
      console.error('로그인 오류:', error);
    }
  };

  const Rest_api_key='9ca8862f645265320a040503a774512d' //REST API KEY
  const redirect_uri = 'http://localhost:3000/kakaologin' //Redirect URI
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
  const kakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <Background>
      <SignIn>
        <LogoImg>
          <img src={Logo} alt='logo' />
        </LogoImg>
        <Title>로그인</Title>
        <KakaoWrab onClick={kakaoLogin}>
          <Img_kakaologo src={KakaoLogo} alt='KakaoLogo' />
          <Img_kakaoText src={KakaoText} alt='KakaoText' />
          <KakaoTALK>카카오톡으로 로그인하기</KakaoTALK> 
        </KakaoWrab>
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
          value={pw}
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
          <Separation>|</Separation>
          <SignUp href="/Signup_id">회원가입하기</SignUp>
        </Find>
      </SignIn>
    </Background>
  );
};

export default Login;