import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MenuBar from '../assets/MenuBar.svg';
import IconHome from '../assets/IconHome.svg';
import IconUpload from '../assets/IconUpload.svg';
import IconMyPage from '../assets/IconMypage.svg';
import Logo from '../assets/Logo.svg';
import Help from '../assets/IconHelp.svg';
import FriendsAdd from '../assets/FriendsAdd.svg';
import IconSetting from "../assets/IconSetting.svg";

const NavBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F9F9F9; 
    height: 1080px;
    width: 348px;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`

const MainLogo = styled.img` 
    margin-top: 41.54px;
    margin-right: 70.51px;
    height: 86.9px;
    width: 110.28px;
`;

const MenuBarImg = styled.img`
    height: 19.49px;
    width: 31.41px;
    margin-right: 75.24px;
    margin-left: 39px;
    margin-top: 33.7px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333; 
  margin: 5px 0; 
  &:hover {
    color: #555; 
  }
`;

const Divider = styled.hr`
  height: 1px;
  width: 348px;
  background-color: #C3C3C3;
  margin: 26 39; 

  &:first-of-type {
    margin-top: 33.56px; // 예시로, 맨 위의 Divider의 상단 마진을 다르게 설정
  }
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
  margin-top: 47.04px;
  margin-left: 47.04px;
`;

const FriendList = styled.ul`
  padding: 5px;
  margin-left: 74.09px;
  margin-top: 24.78px;
  margin-bottom: 17.31px;
  font-size: 24px;
`;

const FriendListItem = styled.li`
  /*list-style-type: none; */
`;

const FriendLink = styled(Link)`
  display: block; // 링크를 블록 요소로 만들어 줄 바꿈 효과
  color: #333; // 기본 텍스트 색상
  text-decoration: none; // 밑줄 제거
  &:hover {
    color: #555;
  }
  padding: 5px 0; // 상하 패딩 조정
`;

const FriendsAddIcon = styled.img`
  height: 32.62px;
  width: 32.62px;
  margin-left: 157.49px;
`

const IconContainer = styled.div`
    display: flex; // Flex 컨테이너로 만들기
    justify-content: flex-start; // 아이템들을 왼쪽 정렬
    align-items: center; // 아이템들을 세로 중앙 정렬
    margin-left: 33px; // 필요에 따라 조정
    margin-top: 55.32px; // 기존 HelpIcon의 margin-top을 이용
`;

const HelpIcon = styled.img`
    height: 40.33px;
    width: 40.33px;
`;

const SettingIcon = styled.img`
    height: 40.51px;
    width: 40.63px;
    margin-left: 201.04px; 
`;

const NavBar = () => {
  return (
    <NavBarContainer>
        <LogoContainer>
            <MenuBarImg src={MenuBar} alt="menuBar" />
            <MainLogo src={Logo} alt="logo" />
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
            <StyledLink to="/profile">마이페이지</StyledLink>
        </LinkContainer>
        <Divider />
        <FriendListTitle>친구 목록</FriendListTitle>
        <FriendList>
          <FriendListItem><FriendLink to="#">리듬 1</FriendLink></FriendListItem>
          <FriendListItem><FriendLink to="#">리듬 2</FriendLink></FriendListItem>
          <FriendListItem><FriendLink to="#">리듬 3</FriendLink></FriendListItem>
          <FriendListItem><FriendLink to="#">리듬 4</FriendLink></FriendListItem>
          <FriendListItem><FriendLink to="#">리듬 5</FriendLink></FriendListItem>
          <FriendListItem><FriendLink to="#">리듬 6</FriendLink></FriendListItem>
          <FriendListItem><FriendLink to="#">리듬 7</FriendLink></FriendListItem>
          <FriendListItem><FriendLink to="#">리듬 8</FriendLink></FriendListItem>
          <FriendListItem><FriendLink to="#">리듬 9</FriendLink></FriendListItem>
          <FriendListItem><FriendLink to="#">리듬 10</FriendLink></FriendListItem>
          {/* 기타 리스트 아이템 */}
        </FriendList>
        <FriendsAddIcon src={FriendsAdd} alt="친구추가" />
        <IconContainer>
          <HelpIcon src={Help} alt="도움말"/>
          <SettingIcon src={IconSetting} alt="설정" />
        </IconContainer>
    </NavBarContainer>
  );
};

export default NavBar;
