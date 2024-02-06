import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

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
    height: 768.38px;
    //box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); 
`;

const TrackImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 15px;
`;

const TrackInfo = styled.div`
  font-size: 30px;
  color: #000000;
  margin-bottom: 82.16px;
  margin-top: 133.6px;
`;


const InputText = styled.input`
  font-size: 25px;
  padding: 10px 0; 
  width: 100%; 
  border: none; 
  border-bottom: 1px solid #666; 
  outline: none; 
  color: #333; 
  &::placeholder { 
    color: #999999; 
    font-size: 25px;
  }
  margin-bottom: 53.57px;
`;

const Container = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between; 
`;

const LeftSide = styled.div`
  flex: 1; 
`;

const RightSide = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  padding-left: 20px; 
`;


const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

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

const EditModal = ({ isOpen, onRequestClose, trackInfo, description, ImageComponent }) => {
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
                  <TrackImage src={ImageComponent} alt="Track" />
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