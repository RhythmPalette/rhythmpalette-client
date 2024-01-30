import React, { useState } from 'react'
import styled from 'styled-components'
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
  margin-bottom: 45.48px;
`

const Box = styled.label`
  width: 564.305px;
  height: 67.182px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #999999;
  background: #FFFFFF;
  margin-top: 28.73px;
  padding-top: 18.4px;
  padding-bottom: 18.4px;
  padding-left: 25.76px;
  padding-right: 17.96px;
  display: flex;
  justify-content: center;
  
`

const Text = styled.div`
  display: flex;
  height: 31.27px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
`
const Wrapping = styled.div`
  width: 31.271px;
  height: 31.271px;
  margin-left: auto;
  position: relative;

`

const Input = styled.input`
  width: 31.27px;
  height: 31.27px;
  margin: 0;
  border-radius: 50%;
  background: #D9D9D9;
  cursor: pointer;
  transition: background 0.2s;
  &:checked {
    background: #04DB8F;
  }
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

const SignUp_check = () => {
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);
  const [isCheckedPrivacy, setIsCheckedPrivacy] = useState(false);

  const navigate = useNavigate();

  const handleTermsCheckboxChange = () => {
    setIsCheckedTerms(!isCheckedTerms);
  };

  const handlePrivacyCheckboxChange = () => {
    setIsCheckedPrivacy(!isCheckedPrivacy);
  };

  const handleProceedButtonClick = () => {
    // 이용 약관과 개인정보 보호정책에 모두 동의했는지 확인
    if (isCheckedTerms && isCheckedPrivacy) {
      // 로그인 페이지로 이동
      navigate('/login');
    } else {
      // 동의하지 않은 항목이 있을 경우 경고 메시지 등을 표시
      alert('이용 약관과 개인정보 보호정책에 동의해주세요.');
    }
  };
  return (
    <Background>
      <SignUp>
        <Logo>logo</Logo>
        <Title>회원가입</Title>
        <Box>
          <Text>서비스이용약관</Text>
          <Wrapping>
            <Input
              type="checkbox"
              checked={isCheckedTerms}
              onChange={handleTermsCheckboxChange}
            />
          </Wrapping>
        </Box>
        <Box>
          <Text>개인정보취급방침</Text>
          <Wrapping>
            <Input
              type="checkbox"
              checked={isCheckedPrivacy}
              onChange={handlePrivacyCheckboxChange}
            />
          </Wrapping>
        </Box>
        <ArrowBtn type="button" onClick={handleProceedButtonClick}>
          <img src={Arrow} alt="arrow" />
        </ArrowBtn>
      </SignUp>
    </Background>
  )
}

export default SignUp_check