import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import LeftBar from '../components/LeftBar'
import SearchingBar from '../components/SearchingBar'
import { ReactComponent as Scope } from '../assets/IconSearch.svg';
import { ReactComponent as Note } from '../assets/IconMusic.svg';
import checkbox1 from '../assets/UnCheckedBox.svg';
import checkbox2 from '../assets/CheckedBox.svg';

const CLIENT_ID = "d1b1e1bd14254ae2b50f43eb69ba9a87";
const CLIENT_SECRET ="2064724783bd4462b8671a035d864b13";


const Layout = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width: 1920px;
    height: 1080px;
    background: #FFF;
    margin : auto;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

const PageContainer= styled.div`
    display : flex;
    flex-direction : column;
    width : 100%;
    height : 1080px;

    `  

const Wrap = styled.form`
width: 1572px;
height:918px;
  flex-shrink: 0;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
`;

const CompleteText = styled.div`
  width: 118.296px;
  height: 32px;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.26px;
  position: absolute;
  right: 759.14px;
  top: 790.42px;
`

const DropDownItem1 = styled.li`
  font-size: 20px;
  font-weight: bold;  
  padding: 15px;
  padding-left: 40px;
  padding-right: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 50px;
  &.selected {
    background-color: lightgray;
  }
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
  padding-top: 9.22px;
  padding-left: 40px;
  padding-right: 50px;

`;

const ClickedBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SongDetail = styled.div`
  width: 770.373px;
  height: 82.421px;
  background-color: #F7F7F7;
  border-radius: 10px;
  box-shadow: 5px 4px 5px 0px #00000033;
  display: ${props=>props.disabled? 'none': 'block' };
  position: relative;
  margin-top: 54.5px;
`;

const RetryBtn = styled.button`
  border: 0;
  display: ${props=>props.disabled? 'none': 'block' };
  padding: 0;
  margin-top: 21.72px;
  width: 140px;
  height: 32px;
  flex-shrink: 0;
  color: #00C982;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.26px;
  background-color: white;
`;



const BottonBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-right: 50px;
  padding-left: 40px;
  margin-top: 131px;
  width: 770.373px;
  height: 82.354px;
  z-index: 3;
  border-radius: ${props => props.isHaveInputValue ? "15px 15px 0 0" : " 50px 50px 50px 50px "};
  background-color: #F9F9F9;
  box-shadow: ${props => props.isHaveInputValue ?  "2px 4px 6px 0px #00000033" : "3px 4px 4px 0px rgba(0,0,0,0.25)" };
  border-width: 0 0 1px;
  border: 0;
`;
const DropDownItem = styled.li`
  font-size: 20px;
  font-weight: bold;  
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 40px;
  padding-right: 50px;
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
  border: 0px;
  &::placeholder {
    color: #B5B5B5; /* 원하는 placeholder 색상으로 변경 */
  }
`;

const UploadPostPackage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-height: 1000px;
`;
const TextBox = styled.div`
  display: flex;
  width: 530px;
  height: 30.391px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 40% */
`;
const SearchingBox = styled.div`
    margin-top: 119px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 3;
`;
const DropDownBox = styled.ul`
  display: flex;
  position: absolute;
  top: 357px;
  flex-direction: column;
  margin : 0 auto;
  padding: 8px 0;
  background-color: #F9F9F9;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  width: 770.373px;
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
const ClearBtn = styled.button`
width: 408px;
height: 85px;
flex-shrink: 0;
border-radius: 10px;
background: #04DB8F;
color: #000;
text-align: center;
font-family: "Pretendard Variable";
font-size: 35px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 51.429% */
top : 706px;
left : 545px;
border : none;
cursor : pointer;
position : absolute;


`
const Text4 = styled.div`
width : 520px;
height : 40px;
color: #000;
text-align: center;
font-family: "Pretendard Variable";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 40px; /* 200% */
top : 803px;
left : 498px;
position : absolute;

` 

const ProfileChange3 = () => {
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
  const isPlaceholderVisible = !isHaveInputValue && !selectedData;

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
    setInputValue('');
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
    <Layout>
        <LeftBar />
        <PageContainer>
            <SearchingBar />
            <Wrap>
        <UploadPostPackage>
          <SearchingBox>
            <TextBox>
              {"대표 프로필 뮤직을 설정해주세요"}
            </TextBox>
            <InputBox isHaveInputValue={isHaveInputValue}>
              <InputText
                type='text'
                placeholder={isPlaceholderVisible ? 'Search' : 'Search'}
                value={inputValue}
                onChange={changeInputValue}
                onKeyUp={handleDropDownKey}
              />
              <Scope width={"25px"} height={"25px"} />
            </InputBox>
            {isHaveInputValue && (
              <DropDownBox ref={dropDownRef}>
                {dropDownList.length === 0 && (
                  <DropDownItem1>해당하는 단어가 없습니다</DropDownItem1>
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
                      {image && <img src={image} alt={name} style={{ width: '65px', height: '64px' }} />}
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
                      <img src={selectedData.image} alt={"이미지"} width={"65px"} height={"64px"} />
                      {selectedData.name}
                    </ImgandName>
                    <Note />
                  </SongBox>
                </SongDetail>
                <RetryBtn onClick={retrySelectSong}>
                  {"다시 고르기"}
                </RetryBtn>
              </ClickedBox>
            )}
          </BottonBox>
        </UploadPostPackage>
        <ClearBtn>프로필 수정 완료</ClearBtn>
        <Text4>해당 페이지에 수정사항이 없다면 다음으로 넘어가주세요</Text4>
   
      </Wrap>
 
        
        </PageContainer>
    </Layout>
  )
}
export default ProfileChange3;