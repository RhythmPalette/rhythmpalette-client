import React, {useState} from 'react';
import styled from 'styled-components';
import IconSearch from '../assets/IconSearch.svg';
import IconAlarm from '../assets/IconAlarm.svg';
import ProfileImage from '../assets/ProfileImage.svg';

const SearchingContainer = styled.div`
    display : flex;
    width: 1562.377pxpx;
    height: 162px;
    background: #F9F9F9;

    
    `
const SearchBar =styled.div`
    display : flex;
    align-items : center;
`
const SearchingInput = styled.input`
    width: 770.373px;
    height: 62px;
    border-radius: 50px;
    background: #DADADA;
    padding-left : 20px;
    margin-top : 49.85px;
    margin-bottom : 49.49px;
    margin-left : 221.64px;
    border: #262626;
    &::placeholder{
        font-size : 15px;
        color : #9A9A9A;}
    &:focus {
            outline: none; 
        
    }
`
const SearchButton = styled.button`
background: none;
border: none;
cursor: pointer;
 `

const SearchImg = styled.img`
    width: 24.62px;
    height: 25.439px;
    margin-left : -66.72px;
  
`

const AlarmImg = styled.img`
width: 36.795px;
height: 39.231px;
flex-shrink: 0;
margin-top : 61.92px;
margin-left : 344.42px;
margin-bottom : 60.19px;


`
const ProfileImg = styled.img`
width: 62.488px;
height: 62.488px;
flex-shrink: 0;
margin-right : 67.62px;
margin-top : 50.29px;
margin-bottom : 48.55px;
margin-left : 41.17px;
`



const SearchingBar = () =>{
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        console.log('검색어:', query);
    }

return (
    <SearchingContainer>
        <SearchBar>
            <SearchingInput
                type = 'text'
                value = {query}
                onChange = {handleInputChange}
                placeholder = 'Search'
            />
            <SearchButton onClick = {handleSearch}>
                <SearchImg src = {IconSearch} alt = '검색'/>
            </SearchButton>
        </SearchBar>
        <AlarmImg src = {IconAlarm} alt = '알람'/>
        <ProfileImg src = {ProfileImage} alt = '프로필' />
    </SearchingContainer>
  )
}

export default SearchingBar;