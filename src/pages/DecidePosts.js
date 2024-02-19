import React ,{useEffect, useState} from 'react';
import styled from 'styled-components';
import  {ReactComponent as ExampleSquareImg}  from '../assets/ExampleSquareImg.svg';
import  NothingImg from '../assets/Emoticons/Nothing.svg';
import  ComplexImg from '../assets/Emoticons/Complex.svg';
import  DepressImg from '../assets/Emoticons/Depressed.svg';
import  GoodImg from '../assets/Emoticons/Good.svg';
import  HappyImg from '../assets/Emoticons/Happy.svg';
import  NoExpressImg from '../assets/Emoticons/NoExpression.svg';
import  SadImg from '../assets/Emoticons/Sad.svg';
import  ShyImg from '../assets/Emoticons/Shy.svg';
import  SickImg from '../assets/Emoticons/Sick.svg';
import  SquerkImg from '../assets/Emoticons/Squerk.svg';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const DecidePosts = (props) => {
    const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbHNndXIyIiwiaWF0IjoxNzA4MzUwMTk1LCJleHAiOjE3MDgzNTE2MzV9.39auC6J6g4EX-1iPh1KGKnP1emR5gIwmpC86_XsWjOY"
    const [hashClicked,setHashClicked] = useState(false);
    const [situation1, setSituation1] = useState("");
    const [situation2, setSituation2] = useState("");
    const [situation3, setSituation3] = useState("");
    const [hashDIvClicked, setHashDivClicked] =useState(false);
    const [content, setContent] = useState("");
    const [emoticonId, setEmoticonId] =useState();
    const HashTagBtnClicked = (event) => {
        event.stopPropagation();
        setHashClicked(!hashClicked);

    }
    const getUrl = useLocation();
   
    useEffect(()=>{
        const sendImg = async ()=>{
            try{
                const response = await axios.post('http://52.78.99.156:8080/api/v1/posts/image/upload?imageUrl='+getUrl.state.imgUrl,null,{
                params : {
                    imageUrl : getUrl.state.imgUrl
                },   
                headers : {
                        'Authorization': 'Bearer ' + access_token,
                    },
                });
                console.log(response);
            }
            catch (error) {
                console.log(getUrl.state.imgUrl);
                console.error('API 호출 에러:', error);
                console.error('어떤 에러:',error.response);
              }

        }
        sendImg();
    },[])
    //왜 안되는지 이유를 모르겠음. 이건 나중에 다시 확인하는 것으로 고

    
        
        const  makePost = async () => {
           
          try {
       
            const dataSend = {
                "addDTO": {
                  "postImg": getUrl.state.imgUrl,
                  "content": content,
                  "situation1": situation1,
                  "situation2": situation2,
                  "situation3": situation3,
                  "emotionId": emoticonId,
                  "musicRequest": {
                    "title": getUrl.state.musicData.name,
                    "artist": getUrl.state.musicData.artist_name,
                    "genre": getUrl.state.musicData.genre,
                    "imageUrl": getUrl.state.musicData.image,
                    "previewUrl": getUrl.state.musicData.preview_url
                  }
                },
                "user": {
                  "createdAt": "2024-02-18T11:13:31.966Z",
                  "updateAt": "2024-02-18T11:13:31.966Z",
                  "userId": 0,
                  "loginId": "string",
                  "password": "string",
                  "name": "string",
                  "email": "string",
                  "nickname": "string",
                  "introduction": "string",
                  "gender": "string",
                  "birth": "2024-02-18",
                  "role": "ROEL_NO_USER",
                  "profileImg": "string",
                  "musicId": {
                    "id": 0,
                    "title": "string",
                    "artist": "string",
                    "genre": "string",
                    "imageUrl": "string",
                    "previewUrl": "string"
                  },
                  "enabled": true,
                  "username": "string",
                  "authorities": [
                    {
                      "authority": "string"
                    }
                  ],
                  "accountNonExpired": true,
                  "accountNonLocked": true,
                  "credentialsNonExpired": true
                }
              }
        
     
            const response = await axios.post('http://ec2-52-78-99-156.ap-northeast-2.compute.amazonaws.com:8080/api/v1/posts',dataSend,{
                headers : {
                'Authorization': 'Bearer ' + access_token,
            }
            });
    //         const response = await fetch('http://52.78.99.156:8080/api/v1/posts/image', dataSend, {
    //     method: 'POST',
    //     headers: {
    //       'Authorization' : 'Bearer ' + accessToken,
    //     },
    //   });
       
            console.log(response);
            console.log(response.data)
          } catch (error) {
            console.error('API 호출 에러:', error);
            console.error('어떤 에러:',error.response);
          }
       
        }
       
    
    const testBtnClicked =() =>{

        console.log(getUrl.state.imgUrl);
    }






    const CompleteBtnClicked = () =>{
        
    }

    //여기에 클릭되었을 때 hashtag넣을 수 있는 div만들어두고 
    useEffect(()=>{},[hashClicked]);
    return (
        <DecidePostsPackage>
            <ImgBox>
            <CreatedImg src={getUrl.state.imgUrl} alt={"이미지"}/>
            </ImgBox>
            <TrackName>
            {"Track: "}
            {getUrl.state.musicData.name}
            <TestBtn onClick={testBtnClicked}>
                {"실헝"}
            </TestBtn>
            </TrackName>
            <InPutPost type = "text" placeholder='게시글 내용을 입력해주세요' value={content} onChange={(e)=>{
                setContent(e.target.value)
            }}>
            </InPutPost>
            <EmotionDiv>
                <ComplexImage src ={ComplexImg} alt="짜증" onClick={()=>{setEmoticonId(1)}}/>
                <DepressImage src = {DepressImg} alt="우울"onClick={()=>{setEmoticonId(2)}}/>
                <GoodImage src ={GoodImg} alt="기분좋음"onClick={()=>{setEmoticonId(3)}}/>
                <HappyImage src = {HappyImg} alt="행복"onClick={()=>{setEmoticonId(4)}}/>
                <NoExpressImage src={NoExpressImg} alt="무표정"onClick={()=>{setEmoticonId(5)}}/>
                <NothingImage src = {NothingImg} alt="무념무상"onClick={()=>{setEmoticonId(6)}}/>
                <SadImage src = {SadImg} alt="슬픔"onClick={()=>{setEmoticonId(7)}}/>
                <ShyImage src = {ShyImg} alt="머쓱"onClick={()=>{setEmoticonId(8)}}/>
                <SickImage src = {SickImg} alt="아픔"onClick={()=>{setEmoticonId(9)}}/>
                <SquerkImage src={SquerkImg} alt="삐짐"onClick={()=>{setEmoticonId(10)}}/>
            </EmotionDiv>


            <HashDiv>
            {!hashDIvClicked&&(<HashTagButton onClick={HashTagBtnClicked} display={hashClicked ? "none" : "block"} >
            {"#해시태그 추가"}
            </HashTagButton>)}
            {hashClicked&&!hashDIvClicked&&(
                <WriteHash>
                    <MentDiv>
                        {"3개까지 추가할 수 있어요"}
                    </MentDiv>
                    <HashTagDiv>
                        {"#"}
                    <FirstHash type='text' maxLength={10} value={situation1} onChange={(e)=>{
                        setSituation1(e.target.value);
                    }}>
                     </FirstHash>   
                    </HashTagDiv>
                    <HashTagDiv>
                         {"#"}   
                    <SecondHash type='text' maxLength={10} value={situation2} onChange={(e)=>{
                        setSituation2(e.target.value);}}>
                    </SecondHash>
                    </HashTagDiv>
                    <HashTagDiv>
                         {"#"}   
                    <ThirdHash type='text' maxLength={10} value={situation3} onChange={(e)=>{
                        setSituation3(e.target.value);}}>
                    </ThirdHash>
                    </HashTagDiv>
                    <BtnDiv>
                    <CompleteBtn onClick={()=>{setHashDivClicked(!hashDIvClicked)}}>
                        {"완료"}
                    </CompleteBtn>
                    </BtnDiv>
                  
                </WriteHash>
            )}
            {hashDIvClicked&&(
                <HashBox>

          
                <MadeHashTagDiv>
                    <ForHash>
                    {"#" + situation1}
                    </ForHash>
                    <ForHash>
                    {"#" + situation2}
                    </ForHash>
                    <ForHash>
                    {"#" + situation3}
                    </ForHash>
                  
                </MadeHashTagDiv>
                <ReHashBtn onClick={()=>{setHashDivClicked(!hashDIvClicked)}}>
                    {"#해시태그 수정"}
                </ReHashBtn>
                </HashBox>
                
            )}
            </HashDiv>
            <UploadButton>
            {"업로드"}
            </UploadButton>
        </DecidePostsPackage>
    );
};

export default DecidePosts;
const TestBtn = styled.button`
`;
const CreatedImg = styled.img`

`;
const ForHash = styled.div`

`;
const HashBox = styled.div`
    margin-left: 30px;
`;
const ReHashBtnDiv = styled.div`

`;
const ReHashBtn = styled.button`
width: 162px;
height: 40px;
top: 641.91px;
left: 1356.78px;
border-radius: 15px;
border: 1px;
position: absolute;
font-family: Pretendard Variable;
font-size: 20px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0em;
text-align: center;
`;
const MadeHashTagDiv = styled.div`
position: absolute;
Top: 528.53px;
Left: 1346.43px;
font-family: Pretendard Variable;
font-size: 25px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0em;
text-align: left;
display: flex;
flex-wrap: wrap;
column-gap: 20px;
row-gap: 20px;
`;

const SickImage = styled.img`
width: 57.26px;
height: 74.61px;
top: 756.95px;
left: 1075.62px;
position: absolute;

`;
const ShyImage = styled.img`
width: 60.11px;
height: 75.21px;
top: 554.66px;
left: 1007.59px;
position: absolute;


`;
const SadImage = styled.img`
width: 57.19px;
height: 72.48px;
top: 636.06px;
left: 1254.64px;
position: absolute;



`;
const NothingImage = styled.img`
width: 57.19px;
height: 74.41px;
top: 709.21px;
left: 1008.79px;
position: absolute;
`;

const HappyImage = styled.img`
width: 57.19px;
height: 74.41px;
top: 709.21px;
left: 1217.64px;
position: absolute;


`;

const GoodImage = styled.img`
width: 57.19px;
height: 74.05px;
top: 554.06px;
left: 1223.61px;
position: absolute;

`;

const ComplexImage = styled.img`
width: 72.47px;
height: 75.35px;
top: 758.15px;
left: 1149.61px;
position: absolute;

`;


const DepressImage = styled.img`
width: 57.19px;
height: 73.85px;
top: 632.24px;
left: 978.95px;
position: relative;
`;

const SquerkImage = styled.img`
width: 57.19px;
height: 73.52px;
top: 510.5px;
left: 1156.78px;
position : absolute;
`;


const NoExpressImage = styled.img`
width: 57.19px;
height: 73.72px;
top: 510.5px;
left: 1075.55px;
position: absolute;
`;

const HashTagDiv = styled.div`
    border-bottom : 1px solid
`;


const BtnDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;

const EmotionDiv = styled.div`


`;

const CompleteBtn = styled.button`
width: 117.64px;
height: 38.54px;
border-radius: 15px;
margin-top: 10px;
font-family: Pretendard Variable;
font-size: 25px;
font-weight: 400;
line-height: 41px;
letter-spacing: -1px;
text-align: center;
padding-bottom: 3px;
background: #F9C0C6;

border: 0;

`;

const MentDiv = styled.div`
font-family: Pretendard Variable;
font-size: 20px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0em;
text-align: left;
padding-left: 20px;


`;

const FirstHash = styled.input`
    border-top: 0;
    border-left: 0;
    border-right: 0;
    height: 50px;
    border-bottom : 0;
    width: 300px;
    padding-left: 10px;
`;
const SecondHash = styled.input`
    border-top: 0;
    border-left: 0;
    border-right: 0;
    height: 50px;
    border-bottom : 0;
    width: 300px;
    padding-left: 10px;
`;
const ThirdHash = styled.input`
    border-top: 0;
    border-left: 0;
    border-right: 0;
    height: 50px;
    border-bottom : 0;
    width: 300px;
    padding-left: 10px;
`;


const WriteHash = styled.div`
    display: flex;
    flex-direction: column ;
    width: 349.81px;
    height: 252.26px;
    top: 528.53px;
    left: 1478.05px;
    border-radius: 15px;
    position: absolute;
    border: 1px solid #000000;
    background-color: #ffff;
    color : #999999;

`;

const HashDiv = styled.div`

`;


const UploadButton = styled.button`
background: #04DB8F;
width: 306.16px;
height: 90.24px;
top: 907.77px;
left: 980.92px;
border-radius: 45.12px;
position: absolute;
font-family: Pretendard Variable;
font-size: 35px;
font-weight: 400;
line-height: 42px;
letter-spacing: 0.01em;
text-align: center;
color: #ffff;
border: 0;
`;


const HashTagButton = styled.button`
width: 162px;
height: 40px;
top: 528.53px;
left: 1479.27px;
border-radius: 15px;
border: 1px;
position: absolute;
/* background: linear-gradient(0deg, #000000, #000000),
linear-gradient(0deg, #FFFFFF, #FFFFFF); */
border: 1px solid #000000;
font-family: Pretendard Variable;
font-size: 20px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0em;
text-align: center;
background-color :#9999;
display: ${props => props.hashClicked ? "none" : "block" };
`;


const DecidePostsPackage = styled.div`

`;
const InPutPost = styled.input`
position: absolute;
font-family: Pretendard Variable;
font-size: 25px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0em;
text-align: left;
width: 651.36px;
height: 31.54px;
Top :412.78px;
Left: 979.32px;
padding-bottom: 10px;
border-width: 0 0 1px;
padding-bottom : 5px;
`;

const ImgBox = styled.div`
position: absolute;
width: 559.55px;
height: 545.07px;
top: 258px;
left: 370.08px;
border-radius: 10px;
`;

const TrackName = styled.div`
font-family: Pretendard Variable;
font-size: 35px;
font-weight: 400;
line-height: 42px;
letter-spacing: 0.01em;
text-align: left;
width: 588px;
height: 42px;
Top:285.28px;
Left:979.32px;
position: absolute;
`;