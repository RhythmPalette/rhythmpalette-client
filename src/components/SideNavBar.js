import React, { useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import MenuBar from '../assets/MenuBar.svg';
import IconHome from '../assets/IconHome.svg';
import IconMypage from '../assets/IconMypage.svg';
import IconUpload from '../assets/IconUpload.svg';
import IconFriends from '../assets/Friends.svg';
import FriendsAdd from '../assets/FriendsAdd.svg';
import IconLogo from '../assets/IconLogo.svg';
import Help from '../assets/IconHelp.svg';
import Setting from '../assets/IconSetting.svg';
import { useNavigate } from 'react-router-dom';

const SideNavBar = () => {
  const navigate = useNavigate();
  const [isMenuExtended, setIsMenuExtended] = useState(false);
  return (
    <>
      {isMenuExtended ? 
        <LeftContainer>
        <LogoContainer>
            <MenuBarImg src = {MenuBar} alt = 'MenuBar' onClick={()=>setIsMenuExtended(false)}/>
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
            <SettingBox>
            <HelpImg src = {Help} alt = '도움말' />
            <SetImg src = {Setting} alt = '설정' />  
            </SettingBox>   
        </LeftContainer>        
      : 
        <Layout>
          <LogoIconContainer onClick={()=>navigate("/home")}>
            <LogoImg src = {IconLogo} alt = 'Logo' />
          </LogoIconContainer>
          <UpperContainer>
            <BurgerMenuContainer onClick={()=>setIsMenuExtended(true)}>
              <BurgerMenuIcon src={MenuBar} alt="menu"/>
            </BurgerMenuContainer>
            <IconContainer onClick={()=>navigate("/home")}>
              <Icon src={IconHome} alt="home"/>
            </IconContainer>
            <IconContainer onClick={()=>navigate("/uploadpost")}>
              <Icon src={IconUpload} alt="upload"/>
            </IconContainer>
            <IconContainer onClick={()=>navigate("/profile")}>
              <Icon src={IconMypage} alt="mypage"/>
            </IconContainer>
            <IconContainer onClick={()=>navigate("/home")}>
              <Icon src={IconFriends} alt="mypage"/>
            </IconContainer>
          </UpperContainer>
          <ToolsContainer>
            <Icon src={Help} alt="help" />
            <Icon src={Setting} alt="setting"/>
          </ToolsContainer>
        </Layout>
      } 
    </>
  )
}

export default SideNavBar

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
    height : 161px;

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
    height : 0.5px;
    background : #C3C3C3;
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
  height : 81px;
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
margin-top : 48.37px;
`

const StyledUl = styled.ul`
padding : 0;
margin-top : 12px;
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
margin-top : 12.75px;
`

const AddImg = styled.img`
width: 28.391px;
height: 27px;
margin-left : 157.49px;
margin-top : 14.3px;
`

const SettingBox = styled.div`
display : flex;
flex-direction: row;
`

const HelpImg = styled.img`
width: 40.328px;
height: 40.328px;
flex-shrink: 0;
margin-left:33px;
margin-top : 45px;

`

const SetImg = styled.img`
width: 40.63px;
height: 40.511px;
flex-shrink: 0;
margin-top : 45px;
margin-left : 201.04px;
`

const Layout = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  left: 0;
  width: 109.287px;
  height: 1080px;
  flex-shrink: 0;
  background: #F9F9F9;
  box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.10);
  z-index: 1;
`;

const LogoIconContainer = styled.div`
  position: absolute;
  left: 71px;
`;

const UpperContainer = styled.div`
  height: 486px;
`;

const BurgerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 162px;
  border-bottom: 1px solid #d9d9d9;
`;

const BurgerMenuIcon = styled.img`
  width: 31.41px;
  height: 19.492px;
  flex-shrink: 0;
`;

const IconContainer = styled(BurgerMenuContainer)`
  height: 81px;
`;

const Icon = styled.img`
  width: 35px;
  height: 35px;
`;

const ToolsContainer = styled(BurgerMenuContainer)`
  height: 153px;
  border: none;
  justify-content: space-evenly;
`;