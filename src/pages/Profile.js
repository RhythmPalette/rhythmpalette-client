import React , {useState} from 'react'
import styled from 'styled-components'
import LeftBar from '../components/LeftBar'
import SearchingBar from '../components/SearchingBar'
import ProfileImage from '../assets/ProfileImage.svg'
import IconChange from '../assets/IconChange.svg'
import IconMusic from '../assets/IconMusic.svg'

const Layout = styled.div`
    display : flex;
    width: 1892.951px;
    height: 1092.061px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

const PageContainer= styled.div`
    display : flex;
    flex-direction : column;
    `

const ProfileBar = styled.div`
display : flex;
width: 1544.525px;
height: 399.668px;
flex-shrink: 0;
background: #F9F9F9;


`
const ProfileImg = styled.img`
width: 166.064px;
height: 158.816px;
margin-left : 153.07px;
margin-top : 59.48px;
margin-bottom 181.37px;
`

const UserName = styled.div`
width : 302.236px;
height : 44.266px;
margin-top : 59.18px;
margin-left : 59.81px;
font-size : 63px;
font-weight : 500;
line-height: 41px;
font-family: "Pretendard Variable";

`
const ChangeImg = styled.img`
width: 16.939px;
height: 31.492px;

margin-left : 18.9px;
margin-top : 68.29px
`
const Info = styled.div`
diplay : flex;
flex-direction : column;
align-items: column;
`
const Name = styled.div`
display : flex;
flex-direction : row;
`
const MyInfo = styled.div`
display : flex;
flex-direction : row;
margin-top : 45.74px;
margin-left : 59.81px;
`
const Post = styled.div`
width: 112.904px;
height: 45.97px;
flex-shrink: 0;
font-size : 20px;
`
const Follower = styled.div`
width: 112.904px;
height: 45.97px;
flex-shrink: 0;
font-size : 20px;

`
const Following = styled.div`
width: 112.904px;
height: 45.97px;
flex-shrink: 0;
font-size : 20px;

`
const Music = styled.div`
display : flex;
flex-direction : row;
margin-top : 22.34px;
`
const MusicImg = styled.img`
width: 28.254px;
height: 29.604px;
flex-shrink: 0;
`
const MusicName = styled.div`
margin-left : 23.73px;
width: 230.645px;
height: 41px;
flex-shrink: 0;
font-size : 30px;
`
const Comment=styled.div`
width: 316.914px;
height: 41px;
flex-shrink: 0;
font-size : 25px;
margin-top : 17.27px;
`
const Divider = styled.div`
width: 1544.526px;
height: 1px;

background: #C3C3C3;
`
const InfoBar = styled.div`
display : flex;
flex-direction : row;
`
const MyPost = styled.button`
width: 262.15px;
height: 60.488px;
flex-shrink: 0;
font-size : 30px;
text-align : center;
background-color: ${({ selected }) => (selected ? '#D9D9D9' : '#FFF')};
  cursor: pointer;
  &:hover {
    background-color: #D9D9D9;
  }
`;

const Playlist = styled.button`
width: 262.15px;
height: 60.488px;
flex-shrink: 0;
font-size : 30px;
text-align : center;
background-color: ${({ selected }) => (selected ? '#D9D9D9' : '#FFF')};
  cursor: pointer;
  &:hover {
    background-color: #D9D9D9;
  }
`;



const BookMark = styled.button`
width: 262.15px;
height: 60.488px;
flex-shrink: 0;
font-size : 30px;
text-align : center;
background-color: ${({ selected }) => (selected ? '#D9D9D9' : '#FFF')};
  cursor: pointer;
  &:hover {
    background-color: #D9D9D9;
  }
`;

const Profile = () => {
const [selectedTab, setSelectedTab] = useState('myPost');
  return (
    <Layout>
        <LeftBar />
        <PageContainer>
            <SearchingBar />
            <ProfileBar>
                <ProfileImg src = {ProfileImage} alt = '프로필' />
                <Info>
                    <Name>
                        <UserName> user name </UserName>
                        <ChangeImg src = {IconChange} alt = '수정' />
                    </Name>
                    <MyInfo>
                        <Post> 게시물 15 </Post>
                        <Follower> 팔로워 110 </Follower>
                        <Following> 팔로잉 89 </Following>
                    </MyInfo>
                    <Music>
                        <MusicImg src = {IconMusic} alt = '음악' />
                        <MusicName> NewJeans-ETA </MusicName>    
                    </Music>
                    <Comment> 저는 팝송을 좋아합니다~!</Comment>  
                </Info>
            </ProfileBar>       
            <Divider />
            <InfoBar>
            <MyPost selected={selectedTab === 'myPost'} 
                onClick={() => setSelectedTab('myPost')}>내 게시물</MyPost>
            <Playlist selected={selectedTab === 'playlist'} 
                onClick={() => setSelectedTab('playlist')}>재생목록</Playlist>
            <BookMark selected={selectedTab === 'bookMark'} 
                onClick={() => setSelectedTab('bookMark')}>북마크</BookMark>
            </InfoBar>
            <Divider />
            {selectedTab === 'myPost' && (
          <div>
             {/* 내 게시물에 대한 내용 */}
            게시물
          </div>
        )}
        {selectedTab === 'playlist' && (
          <div>
            {/* 재생목록에 대한 내용 */}
            재생목록
          </div>
        )}
        {selectedTab === 'bookMark' && (
          <div>
            {/* 북마크에 대한 내용 */}
            북마크
          </div>
        )}

        </PageContainer>
        
    </Layout>
    
  )
}

export default Profile;
