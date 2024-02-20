import React from 'react';
import styled from 'styled-components';
import checkboxUnchecked from '../assets/UnCheckedBox.svg'
import checkboxChecked from '../assets/CheckedBox.svg'

const CheckboxWrapper = styled.label`
  position: absolute;
  display: inline-block;
  width: 27px;
  height: 27px;
  top: 14px;
  left: 15px;
  border : none;
  outline : none;
  box-shadow : none;
  cursor : pointer;
  background-size: cover; 
  
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;

const CheckboxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
`;

const Checkbox = ({ checked, onChange }) => {
  return (
    <CheckboxWrapper>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <CheckboxImage src={checked ? checkboxChecked : checkboxUnchecked} />
    </CheckboxWrapper>
  );
};

export default Checkbox;
