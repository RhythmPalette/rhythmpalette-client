// 필요한 React 컴포넌트 및 라이브러리들을 불러옵니다.
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Scope } from './Img/ScopeImg.svg';
import { ReactComponent as Note } from './Img/NoteImg.svg';

// Spotify API 인증 정보
const CLIENT_ID = "d1b1e1bd14254ae2b50f43eb69ba9a87";
const CLIENT_SECRET ="2064724783bd4462b8671a035d864b13";

// UploadPost 컴포넌트 정의
const UploadPost = () => {
  // 상태 변수들 선언
  const [selectedData, setSelectedData] = useState(""); // 선택된 데이터의 상태
  const [haveClicked, setHaveClicked] = useState(false); // 클릭 여부 상태
  const [inputValue, setInputValue] = useState(""); // 입력된 값 상태
  const [isHaveInputValue, setIsHaveInputValue] = useState(false); // 입력값 존재 여부 상태
  const [dropDownList, setDropDownList] = useState([]); // 드롭다운 리스트 상태
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1); // 드롭다운 아이템 인덱스 상태
  const [accessToken, setAccessToken] = useState(""); // Spotify API 접근 토큰 상태
  const [wholeTextArray, setWholeTextArray] = useState([]); // 전체 텍스트 배열 상태
  const dropDownRef = useRef(null); // 드롭다운 참조를 위한 useRef
  const navigate = useNavigate(); // React Router의 useNavigate 훅 사용

  // 드롭다운 아이템 스크롤 효과
  useEffect(() => {
    if (dropDownRef.current && dropDownItemIndex >= 0) {
      const selectedElement = dropDownRef.current.children[dropDownItemIndex];

      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'
        });
      }
    }
  }, [dropDownItemIndex]);

  // Spotify API 토큰 획득
  useEffect(() => {
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    };

    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token));
  }, []);

  // 입력값이 변경될 때마다 Spotify API에서 아티스트 및 트랙 검색
  useEffect(() => {
    let artistArr;
    const getArtists = async () => {
      try {
        const response = await fetch('https://api.spotify.com/v1/search?q=' + inputValue + '&type=artist', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + accessToken,
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data.artists && data.artists.items) {
            artistArr = data.artists.items.map((artist) => ({
              name: artist.name,
              image: artist.images[0].url,
              genre: artist.genres,
            }));
            setWholeTextArray(artistArr);
          } else {
            console.error('Unexpected data format or no search results:', data);
          }
        } else {
          console.error('Error fetching artist data. Status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching artist data:', error);
      }
    };

    const getTracks = async () => {
      try {
        const response = await fetch('https://api.spotify.com/v1/search?q=' + inputValue + '&type=track', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + accessToken,
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data.tracks && data.tracks.items) {
            const tracksArr = data.tracks.items.map((track) => ({
              name: track.name,
              image: track.album.images[0].url,
            }));
            setWholeTextArray([...artistArr, ...tracksArr]);
          } else {
            console.error('Unexpected data format or no search results:', data);
          }
        } else {
          console.error('Error fetching artist data. Status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching artist data:', error);
      }
    };

    getArtists();
    getTracks();
  }, [inputValue, accessToken]);

  // 드롭다운 리스트 표시 및 관리
  const showDropDownList = () => {
    if (inputValue === '') {
      setIsHaveInputValue(false);
      setDropDownList([]);
    } else {
      const choosenTextList = wholeTextArray.filter(textItem =>
        textItem.name.includes(inputValue)
      );
      setDropDownList(choosenTextList);
    }
  };

  // 입력값 변경 시 드롭다운 리스트 업데이트
  const changeInputValue = event => {
    setInputValue(event.target.value);
    setIsHaveInputValue(true);
  };

  // 드롭다운 아이템 클릭 시
  const clickDropDownItem = clickedItem => {
    setSelectedData(clickedItem);
    setIsHaveInputValue(false);
    setHaveClicked(true);
  };

  // 리스트 아이템 클릭 시
  const clickListItem = clickedItem => {
    setSelectedData(clickedItem);
    setIsHaveInputValue(false);
    setHaveClicked(true);
  };

  // 노래 재선택 시
  const retrySelectSong = () => {
    setIsHaveInputValue(false);
    setHaveClicked(false);
  };

  // 드롭다운 키 이벤트 핸들링
  const handleDropDownKey = event => {
    if (isHaveInputValue) {
      if (event.key === 'ArrowDown' && dropDownList.length - 1 > dropDownItemIndex) {
        setDropDownItemIndex(dropDownItemIndex + 1);
      }
      if (event.key === 'ArrowUp' && dropDownItemIndex >= 0) {
        setDropDownItemIndex(dropDownItemIndex - 1);
      }
      if (event.keyCode === 27) {
        setIsHaveInputValue(false);
      }
      if (event.key === 'Enter' && dropDownItemIndex >= 0) {
        if (dropDownList[dropDownItemIndex]) {
          clickDropDownItem(dropDownList[dropDownItemIndex]);
          setDropDownItemIndex(-1);
        } else {
          clickListItem(dropDownList[dropDownItemIndex]);
        }
      }
    }
  };

  useEffect(showDropDownList, [inputValue, wholeTextArray]);

  return (
    <Background>
      <Wrap>
        <UploadPostPackage>
          <SearchingBox>
            <TextBox>
              {"대표 프로필 뮤직을 설정해주세요"}
            </TextBox>
            <InputBox isHaveInputValue={isHaveInputValue}>
              <InputText
                type='text'
                placeholder='Search'
                value={inputValue}
                onChange={changeInputValue}
                onKeyUp={handleDropDownKey}
              />
              <Scope width={"25px"} height={"25px"} />
            </InputBox>
            {isHaveInputValue && (
              <DropDownBox ref={dropDownRef}>
                {dropDownList.length === 0 && (
                  <div>해당하는 단어가 없습니다</div>
                )}
                {dropDownList.map((dropDownItem, dropDownIndex) => {
                  const { name, image } = dropDownItem;
                  return (
                    <DropDownItem
                      key={dropDownIndex}
                      onClick={() => clickListItem(dropDownItem)}
                      onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                      className={dropDownItemIndex === dropDownIndex ? 'selected' : ''}
                    >
                      {image && <img src={image} alt={name} style={{ width: '65px', height: '65px' }} />}
                      <GrabText>
                        {name}
                      </GrabText>
                      <Note />
                    </DropDownItem>
                  );
                })}
              </DropDownBox>
            )}
          </SearchingBox>
          <BottonBox>
            {haveClicked && (
              <ClickedBox disabled={haveClicked ? false : true}>
                <SongDetail>
                  <SongBox>
                    <ImgandName>
                      <img src={selectedData.image} alt={"이미지"} width={"62px"} height={"62px"} />
                      {selectedData.name}
                    </ImgandName>
                    <Note />
                  </SongBox>
                </SongDetail>
                <RetryBtn onClick={retrySelectSong}>
                  {"노래 다시 고르기"}
                </RetryBtn>
              </ClickedBox>
            )}
            <ImgCreateBtn disabled={haveClicked ? false : true}>
              {"이미지 생성하기"}
            </ImgCreateBtn>
          </BottonBox>
        </UploadPostPackage>
      </Wrap>
      
    </Background>
  );
};

export default UploadPost;

// 스타일 컴포넌트로 스타일링된 하위 컴포넌트들 정의
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  background: radial-gradient(140.12% 112.97% at -1.52% -17.47%, rgba(0, 201, 130, 0.50) 1.59%, rgba(241, 241, 241, 0.50) 100%);
  display: flex;
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
`;

const ImgandName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 33px;
  font-family: Pretendard Variable;
  font-size: 26px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0.01em;
  text-align: center;
  margin-right: 20px;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SongBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  column-gap: 50px;
  padding-top: 10px;
  padding-left: 90px;
  padding-right: 90px;
 

`;

const ClickedBox = styled.div`

`;

const SongDetail = styled.div`

  
  width: 600px;
  height: 82px;
  background-color: #F7F7F7;
  box-shadow: 5px 4px 5px 0px #00000033;
  display: ${props=>props.disabled? 'none': 'block' };
  position: relative;
  margin-top: 80px;
`;

const RetryBtn = styled.button`
    border: 1px solid #04DB8F;
    display: ${props=>props.disabled? 'none': 'block' };
    position: relative;
    margin-top: 130px;
    width: 645.04px;
    height: 90.24px;
    color: #04DB8F;
    background-color: #FFFFFF;
    border-radius: 45.12px;
    font-family: Pretendard Variable;
    font-size: 35px;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0.01em;
    text-align: center;
    z-index: 0;
`;

const ImgCreateBtn = styled.button`
    position: relative;
    width: 645.04px;
    height: 90.24px;
    border: 0;
    border-radius: 45.12px;
    background-color: ${props=>props.disabled? '#D2D2D2': '#04DB8F' };
    margin-top: ${props=>props.disabled? '300px': '20px' };
    font-family: Pretendard Variable;
    font-size: 35px;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0.01em;
    text-align: center;
    z-index: 0;
`;

const BottonBox = styled.div`
    display: flex;
    flex-direction: column;

`;


const GrabText = styled.div`
width: 90%;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
font-family: Pretendard Variable;
font-size: 26px;
font-weight: 400;
line-height: 31px;
letter-spacing: 0.01em;
text-align: left;

`;

const InputBox = styled.div`
  display: flex;
  height: 42px;
  padding-top: 5px;
  flex-direction: row;
  padding-right: 20px;
  margin-top: 140px;
  width: 800px;
  z-index: 3;
  border-radius: ${props => props.isHaveInputValue ? "15px 15px 0 0" : " 0 0 0 0 "};
  background-color: ${props => props.isHaveInputValue ? "#F9F9F9" : "#0000" };
  box-shadow: ${props => props.isHaveInputValue ?  "2px 4px 6px 0px #00000033" : "0 0 0 0" };
  border-width: 0 0 1px;
  border-style: solid;
`;
const DropDownItem = styled.li`
  font-size: 20px;
  font-weight: bold;  
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 80px;
  padding-right: 80px;
  column-gap: 60px;
  &.selected {
    background-color: lightgray;
  }
`;

const InputText = styled.input`
  flex: 1 0 0;
  margin: 0;
  background-color: transparent;
  outline: none;
  font-size: 25px;
  font-weight: 400;
  width: 550px;
  padding-left: 15px;
  padding-bottom: 5px;
  border: 0px;
`;

const UploadPostPackage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-height: 1000px;
`;
const TextBox = styled.div`
    font-size: 40px;    
    font-weight: 400;
    width: 650px;
    height: 51.01px;

`;
const SearchingBox = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 3;
`;
const DropDownBox = styled.ul`
  display: flex;
  position: absolute;
  top: 334px;
  flex-direction: column;
  margin: 0 auto;
  padding: 8px 0;
  background-color: #F9F9F9;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  width: 800px;
  border-radius: 0 0  15px 15px;
  box-shadow: 2px 4px 6px 0px #00000033;
  list-style-type: none;
  z-index: 10;
  overflow: scroll;
  max-height: 400px; 
  -ms-overflow-style:none; /* IE and Edge */
  scrollbar-width : none; /* Firefox */
  &::-webkit-scrollbar{
    display: none;
  };
`
