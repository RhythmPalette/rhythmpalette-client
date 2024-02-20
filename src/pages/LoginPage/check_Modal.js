// check_Modal.js
import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ModalContent = styled.div`
  margin: 0 auto;
  width: 1567.238px;
  height: 886.209px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.div`
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 64.286% */
  margin-top: 78px;
`

const Box1 = styled.div`
  width: 1440.922px;
  height: 206.845px;
  flex-shrink: 0;
  background: #F1F1F1;
  margin-top: 47px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Box2 = styled.div`
  width: 1440.922px;
  height: 348.402px;
  flex-shrink: 0;
  background: #F1F1F1;
  margin-top: 14.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Text1 = styled.div`
  width: 1369.289px;
  height: 120px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 125% */
`
const Subtitle_1 = styled.div`
`
const Content_1 = styled.div`
  padding-left: 24px;
  text-indent: -24px;
`
const Content_2 = styled.div`
`
const Text2 = styled.div`
  width: 1369.289px;
  height: 270px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 125% */
`
const Subtitle_2 = styled.div`
`
const Content_3 = styled.div`
  padding-left: 24px;
  text-indent: -24px;
`
const Content_4 = styled.div`
`
const Content_5 = styled.div`
`
const Content_6 = styled.div`
`
const Content_7 = styled.div`
`
const Content_8 = styled.div`
`
const Button = styled.button`
  width: 250px;
  height: 74px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #04DB8F;
  border: 0;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 125% */
  margin-top: 45.2px;
  margin-bottom: 53.63px;
`
const Modal = ({ onClose, title, subtitle_1, content_1, content_2, subtitle_2, content_3, content_4, content_5, content_6, content_7, content_8 }) => (
  <ModalBackground onClick={onClose}>
    <ModalContent onClick={(e) => e.stopPropagation()}>
      <Title>{title}</Title>
      <Box1>
        <Text1>
          <Subtitle_1>{subtitle_1}</Subtitle_1>
          <Content_1>{content_1}</Content_1>
          <Content_2>{content_2}</Content_2>
        </Text1>
      </Box1>
      <Box2>
        <Text2>
          <Subtitle_2>{subtitle_2}</Subtitle_2>
          <Content_3>{content_3}</Content_3>
          <Content_4>{content_4}</Content_4>
          <Content_5>{content_5}</Content_5>
          <Content_6>{content_6}</Content_6>
          <Content_7>{content_7}</Content_7>
          <Content_8>{content_8}</Content_8>
        </Text2>
      </Box2>
      <Button onClick={onClose}>네,확인했습니다.</Button>
    </ModalContent>
  </ModalBackground>
);

export default Modal;
