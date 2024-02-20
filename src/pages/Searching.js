import React ,{useEffect, useState,useRef} from 'react';
import styled from 'styled-components';
import Clouds from '../components/Clouds';
import {useNavigate} from 'react-router-dom'
import { IoSearchSharp } from "react-icons/io5";
import {classificationData} from "../store/classificationData";
import LeftBar from '../components/LeftBar';
import SearchingBar from '../components/SearchingBar';

const CLIENT_ID = "d1b1e1bd14254ae2b50f43eb69ba9a87";
const CLIENT_SECRET ="2064724783bd4462b8671a035d864b13";



const Searching = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const [isHaveInputValue, setIsHaveInputValue] = useState(false);
    const [dropDownList, setDropDownList] = useState([]);
    const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);
    const [accessToken, setAccessToken] = useState("");
    const [wholeTextArray,setWholeTextArray] = useState([]);
    const dropDownRef = useRef(null); 

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
     //이건 이렇게 함으로써 처음 업데이트 될 때만 accesstoken을 가져오는 것이고.

    useEffect(() => {
      let artistArr;
      const getArtists = async () => {
        try {
          
          const response = await fetch('https://api.spotify.com/v1/search?q=' + inputValue + '&type=artist', {
            method: 'GET',
            headers: {
              'Authorization' : 'Bearer ' + accessToken,
            },
          });
    
    
          if (response.ok) {
            const data = await response.json();
            // artists 객체가 존재하면서 items 속성이 존재하는지 확인
            if (data.artists && data.artists.items) {
              // 관련 아티스트 목록 업데이트
              // setWholeTextArray(data.artists.items.map((artists) => artists.name));
              console.log("그냥 JSon파일 자체를 가져왔을 때"+data);
              artistArr = data.artists.items.map((artist) => ({
              name : artist.name,
              image : artist.images[0].url,
            }));
              setWholeTextArray(artistArr);
       
            } else {
              // 예상치 못한 데이터 형식이거나 검색 결과가 없는 경우
              console.error('Unexpected data format or no search results:', data);
            }
          } else {
            // 오류 응답 처리
            console.error('Error fetching artist data. Status:', response.status);
          }
        } catch (error) {
          console.error('Error fetching artist data:', error);
        }
      };
    
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
              }));
              setWholeTextArray([...artistArr,...tracksArr]);
              console.log("데이터를 받아왔을 때 "+wholeTextArray);
       
            } else {
              // 예상치 못한 데이터 형식이거나 검색 결과가 없는 경우
              console.error('Unexpected data format or no search results:', data);
            }
          } else {
            // 오류 응답 처리
            console.error('Error fetching artist data. Status:', response.status);
          }
        } catch (error) {
          console.error('Error fetching artist data:', error);
        }
      };
   
      getArtists();
      getTracks();

    }, [inputValue, accessToken]);
  
    const showDropDownList = () =>{
    
        if(inputValue === ''){
            setIsHaveInputValue(false);
            setDropDownList([]);
        }
        else{
            console.log("지금실행되는중");
            console.log("input이 있는경우 :"+ wholeTextArray);
            console.log("여기까찌");
            const choosenTextList = wholeTextArray.filter(textItem=>
                textItem.name.includes(inputValue));
                console.log(choosenTextList);
                setDropDownList(choosenTextList);
                //여기를 통해서 연관단어 보다는 포함하는 단어가 나오게끔 해놓음 -> 유사도를 더 높이기 위해서 이 부분 수정하면 관련도를 더 조절할 수 있음.
        }
    }
    
    const changeInputValue = event => {
        setInputValue(event.target.value);
        setIsHaveInputValue(true);
    } 
    
    const clickDropDownItem = clickedItem =>{
      
      setIsHaveInputValue(false);
      navigate(`/post/${clickedItem.name}`); 
       
    }
    const clickListItem = clickedItem =>{
      navigate(`/post/${clickedItem.name}`);

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
                // search();
                setDropDownItemIndex(-1);
                console.log(inputValue);
                }
                else{
                  console.log(inputValue);
                  clickListItem(inputValue);
                }
            }
        }
    }
  useEffect(showDropDownList,[inputValue,wholeTextArray]);
    return (
      <BigBoxDiv>
        <LeftBar/>
        <SearchingBar></SearchingBar>
        <SearchingPackage> 
          <SearchingBox>
            <InputBox isHaveInputValue={isHaveInputValue}>
                <label>
                    <InputText type='text' placeholder='Search' value = {inputValue} onChange={changeInputValue} onKeyUp={handleDropDownKey}/>
                    <IoSearchSharp />
                </label>
           
            </InputBox>
          {isHaveInputValue && (
            <DropDownBox ref={dropDownRef} >
          {dropDownList.length === 0 && (
            <DropDownItem>해당하는 단어가 없습니다</DropDownItem>
          )}
          {dropDownList.map((dropDownItem, dropDownIndex) => {
            const {name,image} = dropDownItem;
            return (
              <DropDownItem
                key={dropDownIndex}
              
                onClick={() => clickListItem(dropDownItem)}
                onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                className={
                  dropDownItemIndex === dropDownIndex ? 'selected' : ''
                }
              >
                <IoSearchSharp />
                {image && <img src={image} alt={name} style={{ width: '40px', height: '40px' }} />}
                <GrabText id='GrabText'>
                {name}
                </GrabText>
               </DropDownItem>
            )
          })}
        </DropDownBox>
      )}  
      </SearchingBox>
      <CloudBox>
        <CloudGrid>
         {classificationData.map((item)=>{
                return (
                    <Clouds
                    title = {item.title}
                    />
                )
            }
            )
          }
        </CloudGrid>
        </CloudBox>
     
        </SearchingPackage>
          </BigBoxDiv>
    );
};


export default Searching;


const BigBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

 const activeBorderRadius = '50px 50px 50px 50px';
 const inactiveBorderRadius = '50px 50px 50px 50px';
const SearchingBox = styled.div`
  max-height: 300px;
  width: 770.37px;
  height: 62px;
  top: 54px;
  left: 575.1px;
  border-radius: 50px;
  position: absolute;

`;

const CloudBox = styled.div`
  position: absolute;
   width: 730.83px;
  height: 812.36px;
  top: 221.15px;
  left: 768.59px;
  border: 25px;

`;
const CloudGrid = styled.div`
  display: grid;
  column-gap: 150px;
  margin-left: 0px;
  margin-top: 20px;
  row-gap: 20px;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 100px 100px 100px 100px ;
`;

export const SearchingPackage = styled.div`
    display: flex;
    max-height: 1000px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
export const DropDownBox = styled.ul`
  display: flex;
  position: absolute;
  top: 60px;
  flex-direction: column;
  margin: 0 auto;
  padding: 8px 0;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  width: 600px;
  border-radius: 35px 35px 35px 35px;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  list-style-type: none;
  z-index: 10;
  overflow: scroll;
  max-height: 600px; 
  -ms-overflow-style:none; /* IE and Edge */
  scrollbar-width : none; /* Firefox */
  &::-webkit-scrollbar{
    display: none;
  }
`;

export const DropDownItem = styled.li`
  font-size: 20px;
  font-weight: bold;  
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  column-gap: 50px;
  &.selected {
    background-color: lightgray;
  }
`;
export const GrabText = styled.div`
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const InputBox = styled.div`
  display: flex;
  background-color: #E3E3E3;
  flex-direction: row;
  width: 770.37px;
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  z-index: 3;
  border-radius: ${props => props.isHaveInputValue ? activeBorderRadius : inactiveBorderRadius};
  &:focus-within {
    box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  }
`;

export const InputText = styled.input`
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