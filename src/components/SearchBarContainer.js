import React from 'react';
import styled from 'styled-components';
import IconAlarm from '../assets/IconAlarm.svg';
import IconProfile from '../assets/IconProfile.svg';


const SearchBarContainerstyled = styled.div`
    display: flex;
    width: 1560.78px;
    height: 161.33px;
    background-color: #F9F9F9;
`;

const SearchBar = styled.div`
    display: flex;
    flex-grow: 1; 
    align-items: center; 
`;

const SearchInput = styled.input`
    width: 770.37px; 
    height: 62px;
    padding: 12px 20px; 
    margin: 8px 0; 
    border: #262626;
    border-radius: 50px; 
    background-color: #E3E3E3;
    margin-left: 221.79px;
    margin-top: 49.85px;
    margin-bottom: 49.49px;
    font-size: 26px;
    &:focus {
        outline: none;
    }
    &::placeholder {
        font-size: 26px;
        color: #9A9A9A;
    }
`;

const IconsContainer = styled.div`
    display: flex;
    gap: 19.33px; 
    margin-top: 49.85px;
    margin-right: 83.73px;
`;

const IconAlarmStyled = styled.img`
    width: 36.79px;
    height: 39.23px;
    margin-top: 0px;
    margin-right: 20px;
`;

const IconProfileStyled = styled.img`
    width: 62.49px;
    height: 62.49px;
    margin-top: -10px;
`;

const SearchBarContainer = ({ query, handleSearch }) => {
    return (
        <SearchBarContainerstyled>
        <SearchBar>
            <SearchInput
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search"
            />
        </SearchBar>
        <IconsContainer>
            <IconAlarmStyled src={IconAlarm} alt="Alarm" />
            <IconProfileStyled src={IconProfile} alt="Profile" />
        </IconsContainer>
        </SearchBarContainerstyled>
    );
};

export default SearchBarContainer;
