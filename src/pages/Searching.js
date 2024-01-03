import React ,{useState} from 'react';

import styled from 'styled-components';
import { IoSearchSharp } from "react-icons/io5";
const Searching = () => {
    const [inputValue, setInputValue] = useState('');
    
    
    
    const changeInputValue = event => {
        setInputValue(event.target.value)
        
    } 
    
    return (
        <SearchingPackage>
            <MusicText>
                {"어떤 음악을 공유하고 싶으신가요?"}
            </MusicText>
            <form>
                <label>
                    <InputText type='text' placeholder='검색어를 입력해주세요' value = {inputValue} onChange={changeInputValue} />
                    <IoSearchSharp />
                </label>
            </form>
        </SearchingPackage>
    );
};


export default Searching;
const SearchingPackage = styled.div`
    height: 100vh;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;


const MusicText = styled.h1`
  padding-bottom:30px;
`;
const InputText = styled.input`
    width: 550px;
    border: none; 
    border-bottom: solid 2px #aaaa;
`;
