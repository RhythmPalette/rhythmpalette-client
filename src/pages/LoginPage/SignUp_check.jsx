import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from './check_Modal'; 
import Logo from './Img/Logo.svg'
import Arrow from "./Img/화살표.svg";
import checkbox1 from "./Img/Group 411.png";
import checkbox2 from "./Img/Group 410.png"
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

const SignUp_check = () => {
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);
  const [isCheckedPrivacy, setIsCheckedPrivacy] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

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
      // congratulations 페이지로 이동
      navigate('/congratulation');
    } else {
      // 동의하지 않은 항목이 있을 경우 경고 메시지 등을 표시
      alert('이용 약관과 개인정보 보호정책에 동의해주세요.');
    }
  };
  const handleCheckboxChange = () => {
    // 이미 동의한 경우에만 상태를 업데이트
    if (isCheckedTerms && isCheckedPrivacy) {
      setIsCheckedTerms(true);
      setIsCheckedPrivacy(true);
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
          <Modal
            title="서비스 이용약관 (상품, 서비스 등 이용 일반 회원용)"
            subtitle_1="제1조(목적)" 
            content_1="1. 본 약관은 Rhythm Palette가 운영하는 온라인 쇼핑몰 ‘http://www.rhythmpalette.store’에서 제공하는 서비스(이하 ‘서비스’라 합니다)를 이용함에 있어 당사자 의 권리 의무 및 책임 사항을 규정하는 것을 목적으로 합니다."
            content_2="2. PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 본 약관을 준용합니다."
            subtitle_2="제2조(정의)"
            content_3="1. ‘회사’라 함은, ‘Rhythm Palette’가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 운영하는 사업자를 말하며, 아울러 ‘http://www.rhythmpalette.store’을 통해 제공되는 전자상거래 관련 서비스의 의미로도 사용합니다."
            content_4="2. ‘이용자’라 함은, ‘사이트’에 접속하여 본 약관에 따라 ‘회사’가 제공하는 서비스를 받는 회원 및 비회원을 말합니다."
            content_5="3. ‘회원’이라 함은, ‘회사’에 개인정보를 제공하고 회원으로 등록한 자로서, ‘회사’의 서비스를 계속하여 이용할 수 있는 자를 말합니다."
            content_6="4. ‘비회원’이라 함은, 회원으로 등록하지 않고, ‘회사’가 제공하는 서비스를 이용하는 자를 말합니다."
            content_7="5. ‘상품’이라 함은 ‘사이트’를 통하여 제공되는 재화 또는 용역을 말합니다."
            content_8="6. ‘구매자’라 함은 ‘회사’가 제공하는 ‘상품’에 대한 구매서비스의 이용을 청약한 ‘회원’ 및 ‘비회원’을 말합니다."
            onClose={() => setIsTermsModalOpen(false)}
          />
        )}

        {/* 개인정보취급방침 모달 */}
        {isPrivacyModalOpen && (
          <Modal
            title="개인정보취급방침"
            content1="개인정보취급방침 내용을 여기에 입력하세요."
            content2="dsfs"
            onClose={() => setIsPrivacyModalOpen(false)}
          />
        )}
      </SignUp>
    </Background>
  )
}

export default SignUp_check;