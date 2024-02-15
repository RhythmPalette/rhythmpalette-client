import React ,{useEffect, useState} from 'react';
import styled from 'styled-components';
import { ReactComponent as ExampleSquareImg } from '../assets/ExampleSquareImg.svg';
import { ReactComponent as NothingImg} from '../assets/Emoticons/Nothing.svg';
import { ReactComponent as ComplexImg} from '../assets/Emoticons/Complex.svg';
import { ReactComponent as DepressImg} from '../assets/Emoticons/Depressed.svg';
import { ReactComponent as GoodImg} from '../assets/Emoticons/Good.svg';
import { ReactComponent as HappyImg} from '../assets/Emoticons/Happy.svg';
import { ReactComponent as NoExpressImg} from '../assets/Emoticons/NoExpression.svg';
import { ReactComponent as SadImg} from '../assets/Emoticons/Sad.svg';
import { ReactComponent as ShyImg} from '../assets/Emoticons/Shy.svg';
import { ReactComponent as SickImg} from '../assets/Emoticons/Sick.svg';
import { ReactComponent as SquerkImg} from '../assets/Emoticons/Squerk.svg';

const DecidePosts = () => {
    const [hashClicked,setHashClicked] = useState(false);
    
    
    const HashTagBtnClicked = () => {
        setHashClicked(!hashClicked);

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
                <NothingImg/>
                <ComplexImg/>
                <DepressImg/>
                <GoodImg/>
                <HappyImg/>
                <NoExpressImg/>
                <NothingImg/>
                <SadImg/>
                <ShyImg/>
                <SickImg/>
                <SquerkImg/>
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
                    <FirstHash>
                    </FirstHash>
                    <SecondHash>
                    </SecondHash>
                    <ThirdHash>
                    </ThirdHash>
                    <CompleteBtn>
                        {"완료"}
                    </CompleteBtn>
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

const EmotionDiv = styled.div`

`;

const CompleteBtn = styled.button`

`;

const MentDiv = styled.div`
font-family: Pretendard Variable;
font-size: 20px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0em;
text-align: left;



`;

const FirstHash = styled.input`

`;
const SecondHash = styled.input`

`;
const ThirdHash = styled.input`

`;


const WriteHash = styled.div`
    display: flex;
    flex-direction: column ;
    width: 349.81px;
    height: 252.26px;
    top: 528.53px;
    left: 1480.05px;
    border-radius: 15px;
    position: absolute;
    border: 1px solid #000000;

`;

const HashDiv = styled.div`

`;

const HashTagDiv = styled.div`

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