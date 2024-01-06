import React ,{useEffect, useState} from 'react';

import styled from 'styled-components';
import { IoSearchSharp } from "react-icons/io5";
const wholeTextArray = [
    'apple',
    'banana',
]

const Searching = () => {
    const [inputValue, setInputValue] = useState('');
    const [isHaveInputValue, setIsHaveInputValue] = useState(false);
    const [dropDownList, setDropDownList] = useState(wholeTextArray);
    const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);
    const showDropDownList = () =>{
        if(inputValue === ''){
            setIsHaveInputValue(false);
            setDropDownList([]);
        }
        else{
            const choosenTextList = wholeTextArray.filter(textItem=>
                textItem.includes(inputValue));
                setDropDownList(choosenTextList);
        }
    }
    
    const changeInputValue = event => {
        setInputValue(event.target.value);
        setIsHaveInputValue(true);
    } 
    
    const clickDropDownItem = clickedItem =>{
        setInputValue(clickedItem);
        setIsHaveInputValue(false);
    }

    const handleDropDownKey = event =>{
        if(isHaveInputValue){
          if(  event.key === 'ArrowDown' && 
            dropDownList.length - 1> dropDownItemIndex)
            {
                setDropDownItemIndex(dropDownItemIndex + 1);
            }
            else if(event.key === 'ArrowUp' && dropDownItemIndex>=0){
                setDropDownItemIndex(dropDownItemIndex-1);
            }
            else if(event.key === 'Enter' && dropDownItemIndex>=0){
                clickDropDownItem(dropDownList[dropDownItemIndex]);
                setDropDownItemIndex(-1);
            }
       
        }

    }
    useEffect(showDropDownList,[inputValue]);
    return (
        <SearchingPackage>
            <InputBox isHaveInputValue={isHaveInputValue}>
            <MusicText>
                {"어떤 음악을 공유하고 싶으신가요?"}
            </MusicText>
            <form>
                <label>
                    <InputText type='text' placeholder='Search' value = {inputValue} onChange={changeInputValue} onKeyUp={handleDropDownKey}/>
                    <IoSearchSharp />
                </label>
            </form>
            </InputBox>
            {isHaveInputValue && (
        <DropDownBox>
          {dropDownList.length === 0 && (
            <DropDownItem>해당하는 단어가 없습니다</DropDownItem>
          )}
          {dropDownList.map((dropDownItem, dropDownIndex) => {
            return (
              <DropDownItem
                key={dropDownIndex}
                onClick={() => clickDropDownItem(dropDownItem)}
                onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                className={
                  dropDownItemIndex === dropDownIndex ? 'selected' : ''
                }
              >
                {dropDownItem}
              </DropDownItem>
            )
          })}
        </DropDownBox>
      )}  
        </SearchingPackage>
    );
};


export default Searching;
const activeBorderRadius = '16px 16px 0 0'
const inactiveBorderRadius = '16px 16px 16px 16px'

const SearchingPackage = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
const DropDownBox = styled.ul`
  display: block;
  margin: 0 auto;
  padding: 8px 0;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  width: 600px;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  list-style-type: none;
  z-index: 3;
`
const DropDownItem = styled.li`
  padding: 0 16px;
  &.selected {
    background-color: lightgray;
  }
`
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  z-index: 3;
  border-radius: ${props => props.isHaveInputValue ? activeBorderRadius : inactiveBorderRadius};
  &:focus-within {
    box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  }
`
const MusicText = styled.h1`
  padding-bottom:30px;
`;
const InputText = styled.input`
  flex: 1 0 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;

    width: 550px;
    border: none; 
    border-bottom: solid 2px #aaaa;
`;
