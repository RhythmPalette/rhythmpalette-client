// SignUp_pw.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
import Arrow from './Img/화살표.svg';
import Logo from './Img/Logo.svg';
import { useNavigate, useLocation } from 'react-router-dom';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  background: radial-gradient(140.12% 112.97% at -1.52% -17.47%, rgba(0, 201, 130, 0.50) 1.59%, rgba(241, 241, 241, 0.50) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
`;

const LogoImg = styled.div`
  margin-top: 68px;
`;

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
  margin-top: 32.7px;
`;

const Pw = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  width: 529.959px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  margin-top: 33.25px;
`;

const Input = styled.input`
  width: 564.305px;
  height: 58.451px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid ${(props) => (props.error ? '#F00' : 'rgba(153, 153, 153, 1)')};
  background: #FFF;
  margin-top: 13px;
  padding-top: 14.17px;
  padding-bottom: 14.17px;
  padding-left: 22px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  outline: none; /* 강조 효과 없애기 */
`;

const Text = styled.div`
  display: flex;
  width: 520px;
  height: 30.391px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #666;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 90% */
  margin-top: 2px;
`;

const Error = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 520px;
  height: 30.391px;
  flex-shrink: 0;
  color: #F00;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 90% */
  margin-top: 2px;
`;

const ArrowBtn = styled.button`
  background: white;
  border: 0;
  margin-top: 142.8px;
  margin-bottom: 76.24px;
`;

const SignUp_pw = () => {
  const location = useLocation();
  const { name, loginId } = location.state;

  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await fetch(
        'http://ec2-52-78-99-156.ap-northeast-2.compute.amazonaws.com:8080/api/v1/auth/signup/passwordCheck',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstPassword: password,
            secondPassword: confirmedPassword,
          }),
        }
      );

      const responseData = await response.json();

      if (response.ok && responseData.success) {
        // 서버 응답이 성공이면 다음 페이지로 이동
        navigate('/signup_email', {
          state: {
            name,
            loginId,
            password,
          },
        });
        // 콘솔에 데이터 출력
        console.log('Name:', name);
        console.log('ID:', loginId);
        console.log('Password:', password);
      } else {
        // 서버 응답이 실패이면 에러 메시지를 설정합니다.
        setPasswordError(responseData.message);
      }
    } catch (error) {
      // 네트워크 오류 등의 예외 처리
      console.error('API 호출 에러:', error);
      setPasswordError('API 호출 중 오류가 발생했습니다.');
    }
  };

  return (
    <Background>
      <SignUp>
        <LogoImg>
          <img src={Logo} alt='logo' />
        </LogoImg>
        <Title>회원가입</Title>
        <Pw>비밀번호</Pw>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Text>영어(대/소문자),숫자,특수문자를 포함해주세요</Text>
        <Pw>비밀번호 확인</Pw>
        <Input
          type="password"
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
          error={!!passwordError} // 에러 메시지가 있을 때 테두리 색상 변경
        />
        <Error>{passwordError}</Error>
        <ArrowBtn type="button" onClick={handleSignUp}>
          <img src={Arrow} alt="arrow" />
        </ArrowBtn>
      </SignUp>
    </Background>
  );
};

export default SignUp_pw;
