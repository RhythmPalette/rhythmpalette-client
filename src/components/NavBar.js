import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MenuBar from '../assets/MenuBar.svg';
import IconHome from '../assets/IconHome.svg';
import IconUpload from '../assets/IconUpload.svg';
import IconMyPage from '../assets/IconMypage.svg';

const NavBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F9F9F9; 
    height: 100vh; 
    width: 348.01px;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`

const Logo = styled.div`
    background-color: #04DB8F; 
    margin-top: 50.18px;
    margin-right: 38.42px;
    height: 62px;
    width: 164.21px;
    font-size: 30px;
    text-align: center;
`;

const MenuBarImg = styled.img`
    height: 19.49px;
    width: 31.41px;
    margin-right: 75.24px;
    margin-left: 38.73px;
    margin-top: 71.79px;
`


const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333; // 텍스트 색상
  margin: 5px 0; // 링크 간격 조정
  &:hover {
    color: #555; 
  }
`;

const Divider = styled.div`
height: 0.5px;
width: 348.01px;
background-color: #C3C3C3;
margin: 10px 0; 
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  margin-left: 20px;
  font-size: 25px;
`;

const LinkIcon = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 20px;
`;

const FriendListTitle = styled.div`
  margin-left: 30px;
  font-size: 27px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const FriendLink = styled.div`
  padding: 5px;
  margin-left: 30px;
  font-size: 24px;
`

const NavBar = () => {
  return (
    <NavBarContainer>
        <LogoContainer>
            <MenuBarImg src={MenuBar} alt="menuBar" />
            <Logo>logo</Logo>
        </LogoContainer>
        <Divider />
        <LinkContainer>
            <LinkIcon src={IconHome} alt="홈" />
            <StyledLink to="/home">홈</StyledLink>
        </LinkContainer>
        <Divider />
        <LinkContainer>
            <LinkIcon src={IconUpload} alt="업로드" />
            <StyledLink to="/upload">업로드</StyledLink>
        </LinkContainer>
        <Divider />
        <LinkContainer>
            <LinkIcon src={IconMyPage} alt="마이페이지" />
            <StyledLink to="/mypage">마이페이지</StyledLink>
        </LinkContainer>
        <Divider />
        <FriendListTitle>친구 목록</FriendListTitle>
        <FriendLink to=""><li>리듬 1</li></FriendLink>
        <FriendLink to=""><li>리듬 2</li></FriendLink>
        <FriendLink to=""><li>리듬 3</li></FriendLink>
        <FriendLink to=""><li>리듬 4</li></FriendLink>
        <FriendLink to=""><li>리듬 5</li></FriendLink>
        <FriendLink to=""><li>리듬 6</li></FriendLink>
        <FriendLink to=""><li>리듬 7</li></FriendLink>
        <FriendLink to=""><li>리듬 8</li></FriendLink>
        <FriendLink to=""><li>리듬 9</li></FriendLink>
        <FriendLink to=""><li>리듬 10</li></FriendLink>
    </NavBarContainer>
  );
};

export default NavBar;
