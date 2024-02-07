import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import MenuBar from '../assets/MenuBar.svg';
import IconHome from '../assets/IconHome.svg';
import IconMypage from '../assets/IconMypage.svg';
import IconUpload from '../assets/IconUpload.svg';
import FriendsAdd from '../assets/FriendsAdd.svg';
import Help from '../assets/Help.svg';


const LeftContainer = styled.div`
    display : flex;
    flex-direction : column;
    width: 348.426px;
    height: 1092.061px;
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
    margin-right : 75.24px;
`
const Logo = styled.div`
    width: 164.209px;
    height: 62px;
    background: #04DB8F;
    margin-top : 50.18px;
    text-align : center;
    font-size : 30px;
    margin-right : 38.57px;
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
const Friend = styled.div`
`

const FriendList = styled.div`
`
const AddImg = styled.img`
width: 28.391px;
height: 27px;
margin-right: 20px;

`
const HelpImg = styled.img`
width: 28.391px;
height: 27px;
margin-right: 20px;
`
const TopContainer = styled.div`
`
const LeftBar = () => {
  return (
    <LeftContainer>
        <LogoContainer>
            <MenuBarImg src = {MenuBar} alt = 'MenuBar' />
            <Logo>logo</Logo>
        </LogoContainer>
        <Divider />
        <MenuContainer>
            <MenuIcon src = {IconHome} alt = 'Home' /> 
            <StyledLink to = '/home'> 홈 </StyledLink>
        </MenuContainer>
        <Divider />
        <MenuContainer>
                <MenuIcon src = {IconUpload} alt = 'Upload' /> 
                <StyledLink to = '/Upload'> 마이페이지 </StyledLink>
        </MenuContainer>
        <Divider />
        <MenuContainer>
                <MenuIcon src = {IconMypage} alt = 'MyPage' /> 
                <StyledLink to = '/Mypage'> 업로드 </StyledLink>
        </MenuContainer>
        <Divider />
        <FriendList>친구 목록</FriendList>
            <ul>
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
            </ul>
            <AddImg src = {FriendsAdd} alt = '추가' />
            <HelpImg src = {Help} alt = '도움말' />  
    </LeftContainer>
 
   
  );
};

export default LeftBar;