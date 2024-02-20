// SignUp_id.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
import Arrow from "./Img/화살표.svg";
import Logo from "./Img/Logo.svg";
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
const LogoImg = styled.div`
  margin-top: 68px;
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
  margin-top: 32.78px;
`
const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  width: 540px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  margin-top: 37.86px;
`
const Id = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  width: 540px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  margin-top: 51.04px;  
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
const Wrapping = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 563.997px;
  height: 58.451px;
  margin-top: 13.25px;
`
const InputHalf = styled.input`
  width: 411.21px;
  height: 58px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  flex-shrink: 0;
  border: 1px solid rgba(153, 153, 153, 1);
  border-right: 0;
  background: #FFF;
  padding-top: 14.17px;
  padding-bottom: 14.17px;
  padding-left: 17.17px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  outline: none; /* 강조 효과 없애기 */
`

const Check = styled.button`
  width: 152.789px;
  height: 58px;
  background: #04DB8F;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 0;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 90% */
`

const Error = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 520px;
  height: 30.391px;
  flex-shrink: 0;
  color: ${(props) => (props.isAvailable ?  '#F00' : '#0029FF' )};
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 90% */
  margin-top: 2px;
`

const ArrowBtn = styled.button`
  background: white;
  border: 0;
  margin-top: 152.8px;
  margin-bottom: 76.24px;
`

const SignUp_id = () => {
  const [name, setName] = useState('');
  const [loginId, setId] = useState('');
  const [isIdAvailable, setIsIdAvailable] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const doubleCheck = async () => {
    try {
        // 요청값 콘솔에 출력
      console.log('요청값:', name, loginId);

      const response = await fetch(
        'http://ec2-52-78-99-156.ap-northeast-2.compute.amazonaws.com:8080/api/v1/auth/signup/qq',
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        }
      );
      const responseData = await response.json();

      // 응답값 콘솔에 출력
      console.log('응답값:', responseData);

      if (response.ok) {
        // 서버 응답이 성공이면 handleNext가 활성화 되도록 해줘
        setIsIdAvailable(true);
        setError('사용가능한 아이디입니다');
      } else {
        // 서버 응답이 실패이면 에러 메시지를 설정합니다.
        setIsIdAvailable(false);
        setError('중복된 아이디입니다');
      }
    } catch (error) {
      // 네트워크 오류 등의 예외 처리
      console.error('API 호출 에러:', error);
      setError('API 호출 중 오류가 발생했습니다.');
    }
  };

  const handleNext = () => {
    if (isIdAvailable) {
      navigate('/signup_pw', { state: { 'name' : name, 'loginId': loginId } });
    } else {
      console.error('중복된 아이디로 인해 다음 페이지로 이동할 수 없습니다.');
    }
  }

  return (
    <Background>
      <SignUp>
        <LogoImg>
          <img src={Logo} alt='logo' />
        </LogoImg>
        <Title>회원가입</Title>
        <Name>이름</Name>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Id>아이디</Id>
        <Wrapping>
          <div>
            <InputHalf
              type="text"
              value={loginId}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div>
            <Check type="button" onClick={doubleCheck}>
              중복 확인
            </Check>
          </div>
        </Wrapping>
        <Error>{error}</Error>
        <ArrowBtn type="button" onClick={handleNext} disabled={!isIdAvailable}>
          <img src={Arrow} alt="arrow" />
        </ArrowBtn>
      </SignUp>
    </Background>
  );
};

export default SignUp_id;
