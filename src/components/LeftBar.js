import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import MenuBar from '../assets/MenuBar.svg';
import IconHome from '../assets/IconHome.svg';
import IconMypage from '../assets/IconMyPage.svg';
import IconUpload from '../assets/IconUpload.svg';
import FriendsAdd from '../assets/FriendsAdd.svg';
import IconLogo from '../assets/IconLogo.svg';
import Help from '../assets/Help.svg';


const LeftContainer = styled.div`
    display : flex;
    flex-direction : column;
    width: 348.426px;
    height: 1080px;
    background: #F9F9F9;
    box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.10);
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`
const MenuBarImg = styled.img`
    width: 31.41px;
    height: 19.492px;
    margin-top : 71.8px;
    margin-left : 39px;
   
`
const LogoImg = styled.img`
width: 110.276px;
height: 86.901px;
flex-shrink: 0;
margin-left : 96.95px;
margin-top : 41.23px;
`

const Divider = styled.div`
    width: 348.16px;
    height: 0.5px;
    background : #C3C3C3;
    margin : 10px 0;

`

const StyledLink = styled(Link)`
text-decoration: none;
color: #333; 
margin: 5px 0; 
&:hover {

}
`
const MenuContainer = styled.div`
display: flex;
  align-items: center;
  margin: 5px 0;
  margin-left: 20px;
  font-size: 25px;
`

const MenuIcon = styled.img`
width: 28.391px;
height: 27px;
margin-right: 20px;

`
const FriendList = styled.div`
display: flex;
width: 120px;
height: 32px;
justify-content: center;
align-items: center;
flex-shrink: 0;
color: #000;
text-align: center;
font-family: "Pretendard Variable";
font-size: 27px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.27px;
margin-left : 47.04px;
`


const StyledUl = styled.ul`
padding : 0;
`
const Friend = styled.div`
width: 90px;
height: 28.306px;
flex-shrink: 0;
color: #000;
font-family: "Pretendard Variable";
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.24px;
margin-left : 74.09px;

`


const AddImg = styled.img`
width: 28.391px;
height: 27px;
margin-left : 157.49px;

`
const HelpContainer = styled.div`
display : inline-block;
  position: relative;
`;

const HelpImg = styled.img`
width: 28.391px;
height: 27px;
margin-right: 20px;
z-index : 2;
`

const QuestionMark = styled.div`
color: #FFF;
text-align: center;
font-family: "Pretendard Variable";
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: 17px; /* 68% */
letter-spacing: -0.5px;
font-size: 18px;
  display: flex;
width: 21.805px;
height: 38.881px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
position : absolute;
z-index : 1;
`;

const LeftBar = () => {
  return (
    <LeftContainer>
        <LogoContainer>
            <MenuBarImg src = {MenuBar} alt = 'MenuBar' />
            <LogoImg src = {IconLogo} alt = 'Logo' />
        </LogoContainer>
        <Divider />
        <MenuContainer>
            <MenuIcon src = {IconHome} alt = 'Home' /> 
            <StyledLink to = '/home'> 홈 </StyledLink>
        </MenuContainer>
        <Divider />
        <MenuContainer>
                <MenuIcon src = {IconUpload} alt = 'Upload' /> 
                <StyledLink to = '/Upload'> 업로드 </StyledLink>
        </MenuContainer>
        <Divider />
        <MenuContainer>
                <MenuIcon src = {IconMypage} alt = 'MyPage' /> 
                <StyledLink to = '/profile'> 마이페이지 </StyledLink>
        </MenuContainer>
        <Divider />
        <FriendList>친구 목록</FriendList>
            <StyledUl>
                <Friend>리듬 1</Friend>
                <Friend>리듬 2</Friend>
                <Friend>리듬 3</Friend>
                <Friend>리듬 4</Friend>
                <Friend>리듬 5</Friend>
                <Friend>리듬 6</Friend>
                <Friend>리듬 7</Friend>
                <Friend>리듬 8</Friend>
                <Friend>리듬 9</Friend>
                <Friend>리듬 10</Friend>
            </StyledUl>
            <AddImg src = {FriendsAdd} alt = '추가' />
            <HelpContainer>
               <HelpImg src = {Help} alt = '도움말' /> 
                <QuestionMark>?</QuestionMark>  
            </HelpContainer>
            
    </LeftContainer>
 
   
  );
};

export default LeftBar;