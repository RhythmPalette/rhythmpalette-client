import React ,{useEffect, useState,useRef} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {ReactComponent as Scope} from '../assets/ScopeImg.svg';
import {ReactComponent as Note} from '../assets/NoteImg.svg';


const CLIENT_ID = "d1b1e1bd14254ae2b50f43eb69ba9a87";
const CLIENT_SECRET ="2064724783bd4462b8671a035d864b13";


const UploadPost = () => {

const [selectedData, setSelectedData] = useState("");
const [haveClicked, setHaveClicked] = useState(false);
const [inputValue, setInputValue] = useState("");
const [isHaveInputValue, setIsHaveInputValue] = useState(false);
const [dropDownList, setDropDownList] = useState([]);
const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);
const [accessToken, setAccessToken] = useState("");
const [wholeTextArray,setWholeTextArray] = useState([]);
const [play, setPlay] = useState(false);
const dropDownRef = useRef(null); 
const navigate = useNavigate();



useEffect(()=>{
  if(dropDownRef.current && dropDownItemIndex>=0){
    const selectedElement = dropDownRef.current.children[dropDownItemIndex]
 
  if (selectedElement) {
    selectedElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }
}
}, [dropDownItemIndex]);

useEffect(()=>{   
 var authParameters = {
   method : 'POST',
  headers:{
    'Content-Type' : 'application/x-www-form-urlencoded'
  },
  body : 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret='+CLIENT_SECRET
};

  fetch('https://accounts.spotify.com/api/token',authParameters)
    .then(result => result.json())
    .then(data => setAccessToken(data.access_token))
 },[])

 useEffect(() => {
    // let artistArr;
    // const getArtists = async () => {
    //   try {
    //     const response = await fetch('https://api.spotify.com/v1/search?q=' + inputValue + '&type=artist', {
    //       method: 'GET',
    //       headers: {
    //         'Authorization' : 'Bearer ' + accessToken,
    //       },
    //     });
  
    //     if (response.ok) {
    //       const data = await response.json();
    //       // artists 객체가 존재하면서 items 속성이 존재하는지 확인
    //       if (data.artists && data.artists.items) {
    //         // 관련 아티스트 목록 업데이트
    //         // setWholeTextArray(data.artists.items.map((artists) => artists.name));
    //         // console.log("그냥 JSon파일 자체를 가져왔을 때"+data);
    //         artistArr = data.artists.items.map((artist) => ({
    //         name : artist.name,
    //         image : artist.images[0].url,
    //         genre : artist.genres,
    //         issong : false,
    //       }));
    //         setWholeTextArray(artistArr);
     
    //       } else {
    //         // 예상치 못한 데이터 형식이거나 검색 결과가 없는 경우
    //         console.error('Unexpected data format or no search results:', data);
    //       }
    //     } else {
    //       // 오류 응답 처리
    //       console.error('Error fetching artist data. Status:', response.status);
    //     }
    //   } catch (error) {
    //     console.error('Error fetching artist data:', error);
    //   }
    // };
  
      //track 부분을 좀 더 다시 봐서 수정하는게 필요할듯 
    const getTracks = async () => {
      try {
        const response = await fetch('https://api.spotify.com/v1/search?q=' + inputValue + '&type=track', {
          method: 'GET',
          headers: {
            'Authorization' : 'Bearer ' + accessToken,
          },
        });
  
  
        if (response.ok) {
          const data = await response.json();
          // artists 객체가 존재하면서 items 속성이 존재하는지 확인
          if (data.tracks && data.tracks.items) {
            // 관련 아티스트 목록 업데이트
            // setWholeTextArray(data.artists.items.map((artists) => artists.name));
            const tracksArr = data.tracks.items.map((track) => ({
              name : track.name,
              image : track.album.images[0].url,
              gerne :"",
              issong : true,
              //추가로 받아서 넣을 정보는 여기에 넣어주면 됨
            }));
          
            setWholeTextArray(tracksArr);
            // console.log("데이터를 받아왔을 때 "+wholeTextArray);
     
          } else {
            // 예상치 못한 데이터 형식이거나 검색 결과가 없는 경우
            console.error('Unexpected data format or no search results:', data);
          }
        } else {
          // 오류 응답 처리
          console.error('Error fetching track data. Status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching track data:', error);
      }
    };
 
    // getArtists();
    getTracks();

  }, [inputValue, accessToken]);


  const showDropDownList = () =>{
    
    if(inputValue === ''){
        setIsHaveInputValue(false);
        setDropDownList([]);
    }
    else{
        // console.log("지금실행되는중");
        // console.log("input이 있는경우 :"+ wholeTextArray);
        // console.log("여기까찌");
        console.log(wholeTextArray);
        const choosenTextList = wholeTextArray.filter(textItem=>
            textItem.name.includes(inputValue));
            // console.log(choosenTextList);
            setDropDownList(choosenTextList);
            
            //여기를 통해서 연관단어 보다는 포함하는 단어가 나오게끔 해놓음 -> 유사도를 더 높이기 위해서 이 부분 수정하면 관련도를 더 조절할 수 있음.
    }
}

const changeInputValue = event => {
    setInputValue(event.target.value);
    setIsHaveInputValue(true);
} 

const clickDropDownItem = clickedItem =>{
  console.log("노래를선택하였습니다.");
  setSelectedData(clickedItem);
  console.log(selectedData);
  setIsHaveInputValue(false);
  setHaveClicked(true);
}
const clickListItem = clickedItem =>{
    console.log("노래를선택하였습니다.");
    setSelectedData(clickedItem);
    console.log(selectedData);
    console.log(selectedData.image);
    setIsHaveInputValue(false);
    setHaveClicked(true);
}

const retrySelectSong=() =>{
    console.log("재선택버튼이 클릭되었습니다.")
    setIsHaveInputValue(false);
    setHaveClicked(false);
}
const goToMakeImagePage = ()=>{
  navigate(`/makeimages`, );
  // 여기서 장르도 같이 넘겨줘야 한다.
}

const playOn = (event)=>{
  event.stopPropagation();
  setPlay(!play);
}

const handleDropDownKey = event =>{
    if(isHaveInputValue){
      console.log(inputValue);
      if(event.key === 'ArrowDown' && 
        dropDownList.length - 1> dropDownItemIndex)
        {
            setDropDownItemIndex(dropDownItemIndex + 1);
        }
        if(event.key === 'ArrowUp' && dropDownItemIndex >= 0){
            setDropDownItemIndex(dropDownItemIndex-1);
        }
        if(event.keyCode===27){
          console.log("Esc Pressed");
          setIsHaveInputValue(false);
          //여기에 적어놓은 값을 지우는 것도 넣어도 괜찮을 듯
        }
        if(event.key=== 'Enter' && dropDownItemIndex >= 0){
           
            if(dropDownList[dropDownItemIndex]){
            clickDropDownItem(dropDownList[dropDownItemIndex]);
            setDropDownItemIndex(-1);
            // console.log(inputValue);
            }
            else{
            //   console.log(inputValue);
              clickListItem(dropDownList[dropDownItemIndex]);
            }
        }
    }
}
    useEffect(showDropDownList,[inputValue,wholeTextArray]);
    
    useEffect(()=>{

  },[play])

    return (
        <UploadPostPackage>

            <SearchingBox>
                <TextBox>
                 {"어떤 음악을 공유하고 싶으신가요?"}
                 </TextBox>
            <InputBox isHaveInputValue={isHaveInputValue}> 
                <InputText type='text' placeholder='검색어를 입력해주세요' value = {inputValue} onChange={changeInputValue} onKeyUp={handleDropDownKey}/>
                <Scope width={"25px"} height={"25px"}/>   
            </InputBox>      
          {isHaveInputValue && (
            <DropDownBox ref={dropDownRef} >
          {dropDownList.length === 0 && (
            <FirstDropDownItem>{"노래 제목으로 음악을 검색하세요."}</FirstDropDownItem>
          )}
          {dropDownList.map((dropDownItem, dropDownIndex) => {
            const {name,image,issong} = dropDownItem;
            return (
              <DropDownItem
                key={dropDownIndex}
                onClick={() => clickListItem(dropDownItem)}
                onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                className={
                  dropDownItemIndex === dropDownIndex ? 'selected' : ''
                }
              >
                {image && <img src={image} alt={name} style={{ width: '65px', height: '65px' }} />}
                <GrabText>
                {name}
                </GrabText>
                {issong && <Note  onClick={playOn}/>} 
                {/* 노트에 클릭을 했을 때는 선택이 안되도록 구현해야한다. */}
               </DropDownItem>
            )
          })}
        </DropDownBox>
      )}  
         </SearchingBox>
         <BottonBox>
            {haveClicked &&
                (
                <ClickedBox disabled={haveClicked ? false : true}> 
                  
                  <SongDetail>
                    <SongBox>
                    <ImgandName>
                    <img  src={selectedData.image} alt={"이미지"} width={"62px"} height={"62px"}/>
                    {selectedData.name}
                    </ImgandName>
                    <Note onClick={playOn}/>
                    </SongBox>
                  </SongDetail>
                <RetryBtn  onClick={retrySelectSong} >
                    {"노래 다시 고르기"}
                </RetryBtn>
                </ClickedBox>
            )
            }
            <ImgCreateBtn disabled={haveClicked ? false : true} onClick={goToMakeImagePage}>
                {"이미지 생성하기"}
            </ImgCreateBtn>

         </BottonBox>
        </UploadPostPackage>
    );
};

export default UploadPost;



const FirstDropDownItem =styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-left: 170px;
  opacity: 0.4;
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
  min-height: 400px;
  max-height: 400px; 
  -ms-overflow-style:none; /* IE and Edge */
  scrollbar-width : none; /* Firefox */
  &::-webkit-scrollbar{
    display: none;
  };
`;