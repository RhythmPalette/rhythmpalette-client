import React from 'react'
import styled from 'styled-components'
import MenuBar from '../assets/MenuBar.svg';
import IconHome from '../assets/IconHome.svg';
import IconMypage from '../assets/IconMypage.svg';
import IconUpload from '../assets/IconUpload.svg';
import IconFriends from '../assets/Friends.svg';
import IconLogo from '../assets/IconLogo.svg';
import Help from '../assets/IconHelp.svg';
import Setting from '../assets/IconSetting.svg';

const ShortLeftBar = () => {
  return (
    <>
      <Layout>
        <UpperContainer>
          <BurgerMenuContainer>
            <BurgerMenuIcon src={MenuBar} alt="menu"/>
          </BurgerMenuContainer>
          <IconContainer>
            <Icon src={IconHome} alt="home"/>
          </IconContainer>
          <IconContainer>
            <Icon src={IconUpload} alt="upload"/>
          </IconContainer>
          <IconContainer>
            <Icon src={IconMypage} alt="mypage"/>
          </IconContainer>
          <IconContainer>
            <Icon src={IconFriends} alt="mypage"/>
          </IconContainer>
        </UpperContainer>
        <ToolsContainer>
          <Icon src={Help} alt="help" />
          <Icon src={Setting} alt="setting"/>
        </ToolsContainer>
      </Layout>
    </>
  )
}

export default ShortLeftBar

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 0;
  width: 109.287px;
  height: 1080px;
  flex-shrink: 0;
  background: #F9F9F9;
  box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.10); 
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