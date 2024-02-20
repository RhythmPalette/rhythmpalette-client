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

const Box = styled.div`
  width: 1440.922px;
  height: 555.247px;
  flex-shrink: 0;
  background: #F1F1F1;
  margin-top: 47px;
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
const Modal_1 = ({ onClose, title, subtitle_1, content_1, content_2, subtitle_2, content_3, content_4, content_5, content_6, content_7, content_8 }) => (
  <ModalBackground onClick={onClose}>
    <ModalContent onClick={(e) => e.stopPropagation()}>
      <Title>{title}</Title>
      <Box>
        <Text1>
        </Text1>
      </Box>
      <Button onClick={onClose}>네,확인했습니다.</Button>
    </ModalContent>
  </ModalBackground>
);

export default Modal_1;
