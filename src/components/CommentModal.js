import React from "react";
import styled from "styled-components";
import IconClose from "../assets/IconCloseShortModal.svg";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 179.84px; 
  left: 1534px;
  width: 483.58px; 
  height: 786.43px; 
  background: white;
  padding: 20px;
  border-radius: 20px;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 20px;
  top: 20px;
`;

const CloseIcon = styled.img`
  width: 21.52px;
  height: 21.52px;
`;

function Modal({ isOpen, close }) {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={close}>
          <CloseIcon src={IconClose} alt="Close" />
        </CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;