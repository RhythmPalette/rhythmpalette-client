// SignUp_id.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
import Arrow from "./Img/화살표.svg";
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
const Name = styled.div`
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
  margin-top: 31.18px;
`
const Input = styled.input`
  width: 564.305px;
  height: 58.451px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #999999;
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
const Wrapping = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 563.997px;
  height: 58.451px;
  margin-top: 13.25px;
`
const InputHalf = styled.input`
  width: 410.99px;
  height: 58.451px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  flex-shrink: 0;
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
  line-height: 18px; /* 72% */
`

const Check = styled.button`
width: 153.008px;
height: 58.451px;
background: #04DB8F;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border: 1px solid #999;
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
  margin-top: 157.01px;
`


const SignUp_id = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [isIdAvailable, setIsIdAvailable] = useState(true);

  const navigate = useNavigate();
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
    if(setIsIdAvailable){
      navigate('/signup_pw');
    }
  }

  return (
    <Background>
      <SignUp>
        <Logo>logo</Logo>
        <Title>회원가입</Title>
        <Name>이름</Name>
        <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <Name>아이디</Name>
        <Wrapping>
          <div>
            <InputHalf
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div>
            <Check type="button" onClick={handleCheckId}>
              중복 확인
            </Check>
          </div>
        </Wrapping>
        <Error>
        {isIdAvailable ? (
            <div style={{ color: '#0029FF' }}>사용가능한 아이디입니다.</div>
          ) : (
            <div style={{ color: '#F00' }}>중복된 아이디입니다.</div>
          )}
        </Error>
        <ArrowBtn type="button" onClick={handleNext} disabled={!isIdAvailable}>
          <img src={Arrow} alt="arrow" />
        </ArrowBtn>
      </SignUp>
    </Background>
  );
};

export default SignUp_id;
