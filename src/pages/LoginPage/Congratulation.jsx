// Congratulation.jsx

import styled from 'styled-components';
import Logo from "./Img/Logo.svg";
import Circle_big from "./Img/circle_big.svg";
import Circle_small from "./Img/circle_small.svg"
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
const Text1 = styled.div`
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 75% */
  margin-top: 97px;
  position: relative;
  z-index: 1;
`
const Text2 = styled.div`
  color: #04DB8F;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 45px;
  font-style: normal;
  font-weight: 800;
  line-height: 50px; /* 111.111% */
  margin-top: 82px;
`
const Btn = styled.button`
  width: 390px;
  height: 118px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 0;
  background: #04DB8F;
  color: #FFF;
  font-family: "Pretendard Variable";
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 66.667% */
  margin-top: 214.5px;
  margin-bottom: 90px;
`
const Circle_1 = styled.div`
position: absolute;
top: 158px;
left: 469.43px;
`
const Circle_2 = styled.div`
position: absolute;
top: 298.45px;
left: 427.88px;

`
const Congratulation = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/login');
  }

  return (
    <Background>
      <SignUp>
        <LogoImg>
          <img src={Logo} alt='logo' />
        </LogoImg>
        <Text1>
          회원가입이 완료되었습니다.
        </Text1>
        <Text2>
          리듬팔레트에서 내가 좋아하는 음악을<br />이미지로 만나보세요
        </Text2>
        <Btn type="button" onClick={handleNext}>
          로그인 하러가기
        </Btn>
        <Circle_1>
          <img src={Circle_big} alt='circle_big'/>
        </Circle_1>
        <Circle_2>
          <img src={Circle_small} alt='circle_small'/>
        </Circle_2>
      </SignUp>
    </Background>
  );
};

export default Congratulation;
