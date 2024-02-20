import React, { useState } from 'react'
import styled from 'styled-components'
import Modal_1 from './check_Modal_1'; 
import Modal_2 from './check_Modal_2';
import Logo from './Img/Logo.svg';
import Arrow from "./Img/화살표.svg";
import checkbox1 from "./Img/Group 411.png";
import checkbox2 from "./Img/Group 410.png"
import { useNavigate, useLocation } from 'react-router-dom';

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
  position: relative;
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
  margin-top: 32.7px;
  margin-bottom: 68.83px;
`

const Box = styled.label`
  width: 564px;
  height: 58px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid rgba(153, 153, 153, 1);
  background: #FFFFFF;
  margin-bottom: 24px;
  padding-top: 13.8px;
  padding-bottom: 13.8px;
  padding-left: 34px;
  padding-right: 43.43px;
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

const CustomCheckbox = styled.div`
  width: 31.27px;
  height: 31.27px;
  margin: 0;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s;
  background: url(${({ checked }) => (checked ? checkbox2 : checkbox1)}) no-repeat center center;
  background-size: cover;
`;

const Input = styled.input`
  display: none; /* 기존 체크박스를 감춥니다. */
`;

const ArrowBtn = styled.button`
  background: white;
  border: 0;
  width: 141.629px;
  height: 77.66px;
  flex-shrink: 0;
  margin-top: 219.19px;
  margin-bottom: 76.24px;
`
const ModalContent = styled.div`
  max-height: 400px; /* 원하는 높이로 조정 */
  overflow-y: auto;
  padding: 20px;
`;

const SignUp_check = () => {
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);
  const [isCheckedPrivacy, setIsCheckedPrivacy] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const navigate = useNavigate();

  // useLocation을 사용하여 데이터 받아오기
  const location = useLocation();

  // 사용자 정보를 저장할 상태 정의
  const { name, loginId, email, password } = location.state;

  const handleTermsCheckboxChange = () => {
    setIsCheckedTerms(!isCheckedTerms);
  };

  const handlePrivacyCheckboxChange = () => {
    setIsCheckedPrivacy(!isCheckedPrivacy);
  };

  const handleCheckboxChange = () => {
    if (isCheckedTerms) {
      setIsCheckedTerms(true);
    }
    if (isCheckedPrivacy) {
      setIsCheckedPrivacy(true);
    }
  };

  const handleProceedButtonClick = () => {
    if (isCheckedTerms && isCheckedPrivacy) {
      // 회원가입 요청 함수 호출
      signUpRequest();
    } else {
      alert('이용 약관과 개인정보 보호정책에 동의해주세요.');
    }
  };

  // 서버에 회원가입 요청을 보내는 함수
  const signUpRequest = async () => {
    try {
      console.log('회원가입 요청 데이터:', {
        name,
        loginId,
        email,
        password,
      });
      // 사용자 정보와 함께 서버에 POST 요청 보내기
      const response = await fetch(
        'http://ec2-52-78-99-156.ap-northeast-2.compute.amazonaws.com:8080/api/v1/auth/signup',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            loginId,
            email,
            password,
          }),
        }
      );

      console.log('회원가입 응답 데이터:', await response.json());
      
      // 응답 확인 및 처리
      if (response.ok) {
        // 회원가입 성공
        navigate('/congratulation');
      } else {
        // 오류 처리, 적절한 메시지 표시
        alert('회원가입에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      // 오류 처리, 적절한 메시지 표시
      console.error('회원가입 오류:', error);
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Background>
      <SignUp>
        <LogoImg>
          <img src={Logo} alt='logo' />
        </LogoImg>
        <Title>회원가입</Title>
        <Box onClick={() => setIsTermsModalOpen(true)}>
          <Text>서비스이용약관</Text>
          <Wrapping>
            <Input
              type="checkbox"
              checked={isCheckedTerms}
              onChange={() => {
                handleTermsCheckboxChange();
                handleCheckboxChange();
              }}
            />
            <CustomCheckbox checked={isCheckedTerms} />
          </Wrapping>
        </Box>
        <Box onClick={() => setIsPrivacyModalOpen(true)}>
          <Text>개인정보취급방침</Text>
          <Wrapping>
            <Input
              type="checkbox"
              checked={isCheckedPrivacy}
              onChange={() => {
                handlePrivacyCheckboxChange();
                handleCheckboxChange();
              }}
            />
            <CustomCheckbox checked={isCheckedPrivacy} />
          </Wrapping>
        </Box>
        <ArrowBtn type="button" onClick={handleProceedButtonClick}>
          <img src={Arrow} alt="arrow" />
        </ArrowBtn>
        {/* 이용 약관 모달 */}
        {isTermsModalOpen && (
          <Modal_1
            title="서비스 이용약관 (상품, 서비스 등 이용 일반 회원용)"
            onClose={() => setIsTermsModalOpen(false)}
          >
            <ModalContent>
              {/* 이용 약관 내용을 여기에 입력하세요. */}
              {/* 긴 텍스트나 스크롤이 필요한 경우 이 부분에 내용을 추가하세요. */}
            </ModalContent>
          </Modal_1>
        )}

        {/* 개인정보취급방침 모달 */}
        {isPrivacyModalOpen && (
          <Modal_1
            title="개인정보취급방침"
            onClose={() => setIsPrivacyModalOpen(false)}
          >
            <ModalContent>
              {/* 개인정보취급방침 내용을 여기에 입력하세요. */}
              {/* 긴 텍스트나 스크롤이 필요한 경우 이 부분에 내용을 추가하세요. */}
            </ModalContent>
          </Modal_1>
        )}
      </SignUp>
    </Background>
  )
}

export default SignUp_check;