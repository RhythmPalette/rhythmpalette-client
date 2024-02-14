import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ExampleSquareImg } from '../assets/ExampleSquareImg.svg';
const DecidePosts = () => {
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
        </DecidePostsPackage>
    );
};

export default DecidePosts;

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