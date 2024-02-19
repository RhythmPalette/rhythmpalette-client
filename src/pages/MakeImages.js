import React ,{ useEffect, useState} from 'react';
import styled from 'styled-components';
import Images from '../components/Images';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';
//아마 여기서 서버에서 이미지를 받아서 사용할 예정 전 페이지에서 서버에 데이터를 요청함
const MakeImages = (props) => {

    // const [imageData, setImageData] = useState("");
    // //서버에서 이미지 데이터를 받아와서 사용함.
    // // setImageData()
    // setImageData();
    const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbHNndXIyIiwiaWF0IjoxNzA4MzYwMTYyLCJleHAiOjE3MDgzNjE2MDJ9.nw3reURcdoF46o4cuSHxvw7b8_EQwoFzJcZQVF1CJeg"
    const prompt = useLocation();
    const navigate = useNavigate();
    const [retry, setRetry] = useState(0);
    const [imgUrls, setImgUrls] = useState();
    const [countFirst, setCountFirst]= useState(false);
    const [chosenImg, setChosenImg] = useState();
    const [imgChosen, setImgChosen] = useState(false);
    const [makePrompt, setMakePrompt] =useState();
    useEffect(() => {
        // 비동기 함수 정의
        const makeImage = async (madePrompt) => {
        //     const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbHNndXIyIiwiaWF0IjoxNzA4MzQwMjkzLCJleHAiOjE3MDgzNDE3MzN9.KEYG8J4BlTjFLn_hEGrVbtwDtjq2tUwEi6jrY4ukGkU" ;
          try {
       
            const dataSend ={
                "prompt" : madePrompt,
                "samples" : 6,
            }
     
            const response =  await axios.post('http://52.78.99.156:8080/api/v1/posts/image',dataSend,{
                headers : {
                'Authorization': 'Bearer ' + access_token,
            }
            });
         
            console.log(response);
            console.log(response.data.data);
            console.log(response.data.data.images)
            const imgArr = await response.data.data.images.map((item)=>({
                imgUrl : item.image,

            }));

            setImgUrls(imgArr);
            setCountFirst(true);
          } catch (error) {
            console.log(prompt.state.prompt.trackId);
            console.log(prompt.state.prompt.name);
            console.error('API 호출 에러:', error);
            console.error('어떤 에러:',error.response);
          }
        }
        const getLyrics = (trackId) => {
            let config = {
              method: 'get',
              maxBodyLength: Infinity,
              url: `https://spotify-lyric-api-984e7b4face0.herokuapp.com/?trackid=${trackId}&format=lrc`,
              headers: { }
            };
          
            axios.request(config)
            .then((response) => {
              const originLyrics = response.data.lines;
              const result = originLyrics.map(line => line.words).join('. ');
              console.log("lyrics done");
             getPrompt(result);
            })
            .catch((error) => {
              console.log(error);
              alert("해당 곡은 가사를 지원하지 않습니다. 다른 곡을 선택해주세요.")
            });
          }
        
        const getPrompt = async (message) => {
            const apiKey = process.env.REACT_APP_GPT_KEY;
            let config = {
              method: 'post',
              maxBodyLength: Infinity,
              url: 'https://api.openai.com/v1/chat/completions',
              headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${apiKey}`
              },
              data : {
                'model' : "gpt-3.5-turbo",
                "messages": [
                  { "role": "system", "content": "You are prompt generator. Task is to convert song lyrics into a single descriptive prompt under 3 sentences that can be utilized by an image creation AI to generate an image aligned with the lyrical content. You have to finish this task in 10 seconds."},
                  { "role": "user", "content": `${message}`},
                ],
                'max_tokens': 500,
              }
            }
            console.log(message);
            axios.request(config)
            .then((response) => {
              console.log(response.data.choices[0].message.content);
              const result = response.data.choices[0].message.content;
            setMakePrompt(result);
            })
            .catch((error) => {
              console.log(error);
            })
          };


        getLyrics(prompt.state.prompt.trackId);
        makeImage(makePrompt);

         },[retry]);

    //프롬프트 생성하는 부분

   
      



    const goToDecidePost = () =>
    {

        const data ={
            imgUrl : chosenImg,
            musicData : prompt.state.prompt
        }
        navigate(`/decideposts`, {state:  data});
        //여기서 url하고 트랙이름이랑 다 넘겨주면 된다.
    }




    return (
        <MakegImagesPackage>
            <NavBar/>
            <ImageGrid>
            {!countFirst&&(
                <AltDiv>
                    {"이미지 생성중입니다."}
                </AltDiv>
            )}
            {countFirst&&(imgUrls.map((item)=>{
                return (
                    <Images
                    imgUrl = {item.imgUrl}
                    chosenImg = {chosenImg}
                    setChosenImg = {setChosenImg}
                    setImgChosen = {setImgChosen}
                    />
                )
            }
            ))
          }
            </ImageGrid>
            <BtnBox>
                <RecreateBtn onClick={()=>{setRetry(retry+1)}}>
                    {"이미지 재생성"}
                </RecreateBtn>
                <ChooseBtn onClick={goToDecidePost} disabled={!imgChosen} >
                    {"선택완료"}
                </ChooseBtn>
            </BtnBox>


        </MakegImagesPackage>
    );
};

export default MakeImages;

const AltDiv = styled.div`
    font-size: 40px;
    position: absolute;
    top:200px;
    left : 250px;
    `;
const MakegImagesPackage = styled.div`
`;

const ImageGrid = styled.div`
width: 829.14px;
height: 535.07px;
Top:275.92px;
Left:590.46px;
border-radius: 10px;
position: absolute;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
row-gap: 20px;
column-gap: 20px;

`;
const BtnBox = styled.div`
    position: absolute;
    top: 882.92px;
    left: 664.71px;
    display: flex;
    flex-direction: row;
    row-gap: 80px;
    column-gap: 80px;
`;
const RecreateBtn = styled.button`
    height: 90px;
    width: 300px;
    border-radius: 45.12px;
    background-color: #04DB8F;
    border: 0;
    font-family: Pretendard Variable;
    font-size: 35px;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0.01em;
    text-align: center;
    color: #ffff;

`;
const ChooseBtn = styled.button`
    height: 90px;
    width: 300px;
    border-radius: 45.12px;
    background-color: #F9C0C6;
    border: 0;
    font-family: Pretendard Variable;
    font-size: 35px;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0.01em;
    text-align: center;
    color: #ffff;
    
`;