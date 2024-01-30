import React, { useState } from 'react';
import styled from 'styled-components';
import Arrow from "./Img/화살표.svg";
import { useNavigate } from 'react-router-dom';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  background: radial-gradient(140.12% 112.97% at -1.52% -17.47%, rgba(0, 201, 130, 0.50) 1.59%, rgba(241, 241, 241, 0.50) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.form`
  width: 1636.578px;
  height: 894.085px;
  flex-shrink: 0;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  width: 657.865px;
  height: 30.391px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 40% */
  position: absolute;
  top: 100.63px;
  left: 521.91px;
`;

const SearchInput = styled.input`
  width: 80%;
  height: 40px;
  margin-top: 20px;
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchResults = styled.div`
  width: 80%;
  margin-top: 20px;
`;

const SearchResultItem = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

const SelectedSong = styled.div`
  margin-top: 20px;
  font-size: 20px;
`;

const ChooseAgainButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  background: #04DB8F;
  color: #FFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Profile_music = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSong, setSelectedSong] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    const mockSearchResults = ['Song 1', 'Song 2', 'Song 3'];
    setSearchResults(mockSearchResults);
  };

  const handleSelectResult = (result) => {
    setSelectedSong(result);
  };

  const handleChooseAgain = () => {
    setSelectedSong('');
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <Background>
      <Wrap>
        <Title>대표 프로필 뮤직을 설정해주세요</Title>
        <SearchInput
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>검색</button>
        <SearchResults>
          {searchResults.map((result, index) => (
            <SearchResultItem key={index} onClick={() => handleSelectResult(result)}>
              {result}
            </SearchResultItem>
          ))}
        </SearchResults>
        {selectedSong && (
          <>
            <SelectedSong>선택된 노래: {selectedSong}</SelectedSong>
            <ChooseAgainButton onClick={handleChooseAgain}>다시 고르기</ChooseAgainButton>
          </>
        )}
      </Wrap>
    </Background>
  );
};

export default Profile_music;
