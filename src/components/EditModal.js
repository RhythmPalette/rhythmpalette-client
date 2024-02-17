import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import IconEmotionAwkward from "../assets/IconEmotionAwkward.svg";
import IconEmotionBad from "../assets/IconEmotionBad.svg";
import IconEmotionBlankface from "../assets/IconEmotionBlankface.svg";
import IconEmotionDepression from "../assets/IconEmotionDepression.svg";
import IconEmotionDizzy from "../assets/IconEmotionDizzy.svg";
import IconEmotionGood from "../assets/IconEmotionGood.svg";
import IconEmotionHappy from "../assets/IconEmotionHappy.svg";
import IconEmotionSad from "../assets/IconEmotionSad.svg";
import IconEmotionSick from "../assets/IconEmotionSick.svg";
import IconEmotionThoughtless from "../assets/IconEmotionThoughtless.svg";


Modal.setAppElement('#root'); 

const StyledModal = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 115px;
  width: 1096.9px;
  height: 769.09px;
  //box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); 
`;

const Container = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between; 
`;

const LeftSide = styled.div`
  flex: 1; 
`;

const TrackImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
`;


const RightSide = styled.div`
  position: absolute;
  flex: 1; 
  display: flex;
  flex-direction: column; 
  top: 133.53px;
  left: 516.07px;
  gap: 82.24px;
`;

const TrackInfo = styled.div`
  font-size: 30px;
  color: #000000;
`;


const InputText = styled.input`
  font-size: 25px;
  padding: 10px 0; 
  width: 468.48px; 
  border: none; 
  border-bottom: 1px solid #000000; 
  outline: none; 
  &::placeholder { 
    color: #999999; 
    font-size: 25px;
  }
`;



const BlankFaceEmotion = styled.img`
  position: absolute;
  width: 37.36px;
  height: 48.16px;
  left: 569.75px;
  top: 332.37px;
`
const AwkWardEmotion = styled.img`
  position: absolute;
  width: 39.27px;
  height: 49.13px;
  left: 525.35px;
  top: 361.21px;
`
const DepressionEmotion = styled.img`
  position: absolute;
  width: 37.36px;
  height: 48.24px;
  left: 506.65px;
  top: 411.89px;
`
const ThoughtlessEmotion = styled.img`
  position: absolute;
  width: 37.36px;
  height: 48.61px;
  left: 526.14px;
  top: 462.18px;
`
const SickEmotion = styled.img`
  position: absolute;
  width: 37.41px;
  height: 48.74px;
  left: 569.8px;
  top: 493.36px;
`
const DizzyEmotion = styled.img`
  position: absolute;
  width: 47.34px;
  height: 49.22px;
  left: 618.14px;
  top: 494.14px;
`
const HappyEmotion = styled.img`
  position: absolute;
  width: 37.36px;
  height: 48.61px;
  left: 662.57px;
  top: 462.18px;
`
const SadEmotion = styled.img`
  position: absolute;
  width: 37.36px;
  height: 47.35px;
  left: 686.75px;
  top: 414.39px;
`
const GoodEmotion = styled.img`
  position: absolute;
  width: 37.36px;
  height: 48.37px;
  left: 666.47px;
  top: 360.82px;
`
const BadEmotion = styled.img`
  position: absolute;
  width: 37.36px;
  height: 48.03px;
  left: 622.81px;
  top: 332.37px;
`


const ButtonGroup = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 619.03px;
  left: 229.17px;
`;

const AddHashtags = styled.input`
  position: absolute;
  width: 162px;
  height: 40px;
  top: 369px;
  left: 799px;
  border-radius: 15px;
  align-items: center; 
  &::placeholder { 
    color: #999999; 
    font-size: 20px;
    text-align: center;
  }
`

const ButtonFinish = styled.button`
  width: 306.16px;
  height: 90.24px;
  border-radius: 45.12px;
  border: none;
  background-color: #04DB8F;
  color: #FFFFFF;
  font-size: 35px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  margin-right: 26.04px;
`;

const ButtonCancel = styled.button`
  width: 306.16px;
  height: 90.24px;
  border-radius: 45.12px;
  border: 1px solid #04DB8F;
  background-color: #FFFFFF;
  color: #04DB8F;
  font-size: 35px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;


const EditModal = ({ isOpen, onRequestClose, trackInfo, description, ImageComponent, hashtags, onEmotionSelect }) => {
    const [desc, setDesc] = useState(description);

    const handleSubmit = (e) => {
        e.preventDefault();
        onRequestClose(); 
    };

    return (
        <StyledModal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Edit Track Info"
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.4)'
              }
            }}
            >
            <form onSubmit={handleSubmit}>
              <Container>
                <LeftSide>
                  <TrackImage src={ImageComponent} alt="TrackImage" />
                </LeftSide>
                <RightSide>
                  <TrackInfo>{trackInfo}</TrackInfo>
                  <InputText
                          type="text"
                          id="description"
                          placeholder="게시글 내용을 입력해주세요" 
                          value={desc}
                          onChange={(e) => setDesc(e.target.value)}
                    />  
                </RightSide>
                <BlankFaceEmotion src={IconEmotionBlankface} alt="무표정" onClick={() => onEmotionSelect("무표정")} />
                <AwkWardEmotion src={IconEmotionAwkward} alt="머쓱" onClick={() => onEmotionSelect("머쓱")}/>
                <DepressionEmotion src={IconEmotionDepression} alt="우울" onClick={() => onEmotionSelect("우울")}/>
                <ThoughtlessEmotion src={IconEmotionThoughtless} alt="무념무상" onClick={() => onEmotionSelect("무념무상")} />
                <SickEmotion src={IconEmotionSick} alt="아픔" onClick={() => onEmotionSelect("아픔")}/>
                <BadEmotion src={IconEmotionBad} alt="삐침" onClick={() => onEmotionSelect("삐침")}/>
                <GoodEmotion src={IconEmotionGood} alt="기분좋음" onClick={() => onEmotionSelect("기분좋음")}/>
                <SadEmotion src={IconEmotionSad} alt="슬픔" onClick={() => onEmotionSelect("슬픔")}/>
                <HappyEmotion src={IconEmotionHappy} alt="행복" onClick={() => onEmotionSelect("행복")}/>
                <DizzyEmotion src={IconEmotionDizzy} alt="헤롱헤롱" onClick={() => onEmotionSelect("헤롱헤롱")}/>
                <AddHashtags
                        type="text"
                        id="hashtags"
                        placeholder="# 해시태그 추가" 
                        /*value={desc}
                        onChange={(e) => setDesc(e.target.value)}*/
                    /> 
              </Container>
                <ButtonGroup>
                    <ButtonFinish type="submit">수정 완료</ButtonFinish>
                    <ButtonCancel cancel onClick={onRequestClose}>취소</ButtonCancel>
                </ButtonGroup>
            </form>
        </StyledModal>
        
    );
};

export default EditModal;