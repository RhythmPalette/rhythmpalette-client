import React ,{useEffect, useState} from 'react';
import styled from 'styled-components';
import Clouds from './Clouds';
import {useNavigate} from 'react-router-dom'
import { IoSearchSharp } from "react-icons/io5";
import {ReactComponent as NodeBtn} from "../assets/NoteBtn.svg";
import {ReactComponent as AlbumImgExample} from "../assets/AlbumImgExample.svg";


const wholeTextArray = [
    'apple',
    'banana',
]
const DATA = [
  {
    id :'1',
    title: 'first',
  },
  {
    id : '2',
    title: 'second',
  },
  {
    id : '3',
    title: 'second',
  },
   
  {
    id:'3',
    title: 'third',
  },
  {
    id : '3',
    title: 'second',
  },
  
  {
    id : '3',
    title: 'second',
  },
  
  {
    id : '3',
    title: 'second',
  },
  
  {
    id : '3',
    title: 'second',
  },
  
  {
    id : '3',
    title: 'second',
  },
  
  {
    id : '3',
    title: 'second',
  },
  
  {
    id : '3',
    title: 'second',
  },
  
  {
    id : '3',
    title: 'second',
  },
  {
    id : '3',
    title: 'second',
  },
  {
    id : '3',
    title: 'second',
  },
  {
    id : '3',
    title: 'second',
  },
  {
    id : '3',
    title: 'second',
  },
  {
    id : '3',
    title: 'second',
  },
  {
    id : '3',
    title: 'second',
  },
  {
    id : '3',
    title: 'second',
  },
  {
    id : '3',
    title: 'second',
  },


]

const Searching = () => {
    const navigate = useNavigate();
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
      navigate(`/post/${clickedItem}`); 
       
    }
    const clickListItem = clickedItem =>{
      navigate(`/post/${clickedItem}`);

    }

    const handleDropDownKey = event =>{
        if(isHaveInputValue){
          if(event.key === 'ArrowDown' && 
            dropDownList.length - 1> dropDownItemIndex)
            {
                setDropDownItemIndex(dropDownItemIndex + 1);
            }
             if(event.key === 'ArrowUp' && dropDownItemIndex >= 0){
                setDropDownItemIndex(dropDownItemIndex-1);
            }
             if(event.key === 'Enter' && dropDownItemIndex >= 0){
                if(dropDownList[dropDownItemIndex]){
                clickDropDownItem(dropDownList[dropDownItemIndex]);
                setDropDownItemIndex(-1);
                }
                else{
                  clickListItem(event);
                }
            }
        }
    }
    useEffect(showDropDownList,[inputValue]);
    return (
        <SearchingPackage>
            <InputBox isHaveInputValue={isHaveInputValue}>
         
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
                onClick={() => clickListItem(dropDownItem)}
                onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                className={
                  dropDownItemIndex === dropDownIndex ? 'selected' : ''
                }
              >

                <AlbumImgExample width="40px" height="40px" />
                {dropDownItem}
                <NodeBtn width="20px" height="20px" />
              </DropDownItem>
            )
          })}
        </DropDownBox>
      )}  
        <CloudGrid>
         {DATA.map((item)=>{
                return (
                    <Clouds
                    title = {item.title}
                    />
                )
            }
            )

          }
        </CloudGrid>
        </SearchingPackage>
    );
};


export default Searching;

const activeBorderRadius = '20px 20px 0 0';
const inactiveBorderRadius = '20px 20px 20px 20px';

const CloudGrid = styled.div`
  display: grid;
  column-gap: 150px;
  margin-left: 0px;
  margin-top: 20px;
  row-gap: 20px;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 100px 100px 100px 100px ;
`;

const SearchingPackage = styled.div`
   
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
const DropDownBox = styled.ul`
  display: flex;
  flex-direction: column;
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
`;
const DropDownItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 15px;

  &.selected {
    background-color: lightgray;
  }
`;
const InputBox = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  width: 600px;
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  z-index: 3;
  border-radius: ${props => props.isHaveInputValue ? activeBorderRadius : inactiveBorderRadius};
  &:focus-within {
    box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  }
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
 
`;
