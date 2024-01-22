import React ,{useEffect, useState} from 'react';
import styled from 'styled-components';
import Clouds from './Clouds';
import {useNavigate} from 'react-router-dom'
import { IoSearchSharp } from "react-icons/io5";
import {ReactComponent as NodeBtn} from "../assets/NoteBtn.svg";
import {ReactComponent as AlbumImgExample} from "../assets/AlbumImgExample.svg";

const CLIENT_ID = "d1b1e1bd14254ae2b50f43eb69ba9a87";
const CLIENT_SECRET ="2064724783bd4462b8671a035d864b13";

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
    const [inputValue, setInputValue] = useState("");
    const [isHaveInputValue, setIsHaveInputValue] = useState(false);
    const [dropDownList, setDropDownList] = useState([]);
    const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);
    const [accessToken, setAccessToken] = useState("");
    const [wholeTextArray,setWholeTextArray] = useState([]);
   
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


    //  const getArtists = async () => {
    //   try {
    //     const response = await fetch('https://api.spotify.com/v1/search?q=' + inputValue + '&type=artist', {
    //       method: 'GET',
    //       headers: {
    //         Authorization: 'Bearer ' + accessToken,
    //       },
    //     });
    
    //     if (response.ok) {
    //       const data =  await response.json();
    //       // artists 객체가 존재하면서 items 속성이 존재하는지 확인
    //       if (data.artists && data.artists.items) {
    //         // 관련 아티스트 목록 업데이트
    //         console.log(data.artists.items);
    //         setWholeTextArray(data.artists.items.map((artist) => artist.name));
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
    useEffect(() => {
      var artistArr;
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
              artistArr = data.artists.items.map((artist) => artist.name);
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
              const tracksArr = data.tracks.items.map((track) => track.name);
              setWholeTextArray([...artistArr,...tracksArr]);
              console.log(wholeTextArray);
       
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
  

    async function search(){
      var artistParameters = {
        method: 'GET',
        headers: {
          'Content-Type' : 'application/json',
          'Authorization' : 'Bearer ' + accessToken
        }
      }
      var artistID = await fetch('https://api.spotify.com/v1/search?q='+ inputValue + '&type=artist',artistParameters)
      .then(response =>response.json())
      .then(data => {return data.artists.items[0].id})
      
      
      // const  wholeTextArrayChanger = ()  => { 
      //  fetch('https://api.spotify.com/v1/search?q='+ inputValue + '&type=artist',artistParameters)
      // .then(response =>response.json())
      // .then(data => {setWholeTextArray(data.artists.item.slice(0,100))})}
      //   wholeTextArrayChanger();
    }
    const showDropDownList = () =>{
    
        if(inputValue === ''){
            setIsHaveInputValue(false);
            setDropDownList([]);
        }
        else{
            console.log("지금실행되는중");
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
      
      setIsHaveInputValue(false);
      navigate(`/post/${clickedItem}`); 
       
    }
    const clickListItem = clickedItem =>{
      navigate(`/post/${clickedItem}`);

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
            if(event.key=== 'Enter' && dropDownItemIndex >= 0){
               
                if(dropDownList[dropDownItemIndex]){
                clickDropDownItem(dropDownList[dropDownItemIndex]);
                search();
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
        <SearchingPackage>
            <InputBox isHaveInputValue={isHaveInputValue}>
         
         
                <label>
                    <InputText type='text' placeholder='Search' value = {inputValue} onChange={changeInputValue} onKeyUp={handleDropDownKey}/>
                    <IoSearchSharp />
                </label>
           
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
      <CloudBox>
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
        </CloudBox>
        </SearchingPackage>
    );
};


export default Searching;

const activeBorderRadius = '20px 20px 0 0';
const inactiveBorderRadius = '20px 20px 20px 20px';

const CloudBox = styled.div`
  position: absolute;
  margin-top: 1000px;
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

const SearchingPackage = styled.div`
   
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
const DropDownBox = styled.ul`
  display: flex;
  position: fixed;
  top: 85px;
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
  z-index: 10;
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
