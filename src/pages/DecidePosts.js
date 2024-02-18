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

const DecidePosts = () => {
    const [hashClicked,setHashClicked] = useState(false);
    const [situation1, setSituation1] = useState("");
    const [situation2, setSituation2] = useState("");
    const [situation3, setSituation3] = useState("");

    const HashTagBtnClicked = (event) => {
        event.stopPropagation();
        setHashClicked(!hashClicked);

    }
    const CompleteBtnClicked = () =>{
        

    }
    //여기에 클릭되었을 때 hashtag넣을 수 있는 div만들어두고 
    useEffect(()=>{},[hashClicked]);
    return (
        <DecidePostsPackage>
            <ImgBox>
            <ExampleSquareImg
            width={"559.55px"} height={"545.07px"}/>
            </ImgBox>
            <TrackName>
            {"Track"}
            </TrackName>
            <InPutPost type = "text" placeholder='게시글 내용을 입력해주세요'>
            </InPutPost>
            <EmotionDiv>
                <ComplexImage src ={ComplexImg} alt="짜증"/>
                <DepressImage src = {DepressImg} alt="우울"/>
                <GoodImage src ={GoodImg} alt="기분좋음"/>
                <HappyImage src = {HappyImg} alt="행복"/>
                <NoExpressImage src={NoExpressImg} alt="무표정"/>
                <NothingImage src = {NothingImg} alt="무념무상"/>
                <SadImage src = {SadImg} alt="슬픔"/>
                <ShyImage src = {ShyImg} alt="머쓱"/>
                <SickImage src = {SickImg} alt="아픔"/>
                <SquerkImage src={SquerkImg} alt="삐짐"/>
            </EmotionDiv>


            <HashDiv>
            <HashTagButton onClick={HashTagBtnClicked} display={hashClicked ? "none" : "block"} >
            {"#해시태그 추가"}
            </HashTagButton>
            {hashClicked&&(
                <WriteHash>
                    <MentDiv>
                        {"3개까지 추가할 수 있어요"}
                    </MentDiv>
                    <HashTagDiv>
                        {"#"}
                    <FirstHash>
                     </FirstHash>   
                    </HashTagDiv>
                    <HashTagDiv>
                         {"#"}   
                    <SecondHash>
                    </SecondHash>
                    </HashTagDiv>
                    <HashTagDiv>
                         {"#"}   
                    <ThirdHash>
                    </ThirdHash>
                    </HashTagDiv>
                    <BtnDiv>
                    <CompleteBtn>
                        {"완료"}
                    </CompleteBtn>
                    </BtnDiv>
                  
                </WriteHash>
            )}
            </HashDiv>
            <UploadButton>
            {"업로드"}
            </UploadButton>
        </DecidePostsPackage>
    );
};

export default DecidePosts;
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
display: ${props => props.hashClicked ? "none" : "block" };

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
top: 409.44px;
left: 1112.95px;
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
top: 285.28px;
left: 1112.95px;
position: absolute;
`;