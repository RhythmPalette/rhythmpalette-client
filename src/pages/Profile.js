import React , {useState, useEffect} from 'react'
import styled from 'styled-components'
import SearchingBar from '../components/SearchingBar'
import ProfileImage from '../assets/ProfileImage.svg'
import IconChange from '../assets/IconChange.svg'
import IconMusic from '../assets/IconMusic.svg'
import PlaylistImg from '../assets/PlaylistImg.svg'
import {Link} from 'react-router-dom'
import SideNavBar from '../components/SideNavBar'



const Layout = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width: 1920px;
    height: 1080px;
    background: #FFF;
    margin : auto;
   
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

const PageContainer= styled.div`
    display : flex;
    flex-direction : column;
    width : 100%;
    height : 1080px;
    `

const ProfileBar = styled.div`
display : flex;
width: 1562.377px;
width : 100%;
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
const StyledLink = styled(Link)`
text-decoration: none;
color: #333; 
margin: 5px 0; 
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

width: 1562.377px;
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
  border : none;
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
  border : none;

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
    background-color: #D9D9D9;}
  border : none;

  
`;
const Text= styled.div`
width: 500px;
height: 41px;
flex-shrink: 0;
color: #666;
text-align: center;
font-family: "Pretendard Variable";
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 41px; /* 136.667% */
letter-spacing: -1px;
margin-left : 616px;
margin-top : 206.68px

`
const Button = styled.button`
width: 182px;
height: 46px;
flex-shrink: 0;
cursor: pointer;
border-radius: 10px;
border: 1px solid #000;
background: #FFF;
margin-left : 35px;
margin-top : 20.68px;
color: #000;
text-align: center;
font-family: "Pretendard Variable";
font-size: 23px;
font-style: normal;
font-weight: 400;
line-height: 41px; /* 164% */
letter-spacing: -1px;
`
const PlistContainer = styled.div`
width: 255px;
height: 340px;
flex-shrink: 0;
border-radius: 20px;
background: #D9D9D9;
margin-top : 24px;
margin-left : 51px;
`

const PlistImg = styled.img`
width: 202px;
height: 191px;
flex-shrink: 0;
margin-left : 27px;
margin-top : 27px;

`
const PlistTitle = styled.div`

color: #000;
font-family: "Pretendard Variable";
font-size: 29px;
font-style: normal;
font-weight: 400;
line-height: 41px; /* 136.667% */
letter-spacing: -1px;
text-align : center;

margin-top : 8px;

`

const PlistInfo = styled.div`
display : flex;
justify-content : center;
align-items: center;
height : 31px;
flex-shrink: 0;
color: #000;
text-align: center;
font-family: "Pretendard Variable";
font-size: 19px;
font-style: normal;
font-weight: 400;
line-height: 41px; /* 205% */
letter-spacing: -1px;


`

const PlaylistWrapper=styled.div`
display : flex;
flex-direction : row;

`
const ImageContainer=styled.div`
`
const PostImage = styled.img`
`


const Profile = () => {
const [selectedTab, setSelectedTab] = useState('myPost');
const [posts, setPosts] = useState([]);
const [playlists, setPlaylists] = useState([]);
const [info, setInfo] = useState([]);



useEffect(() => {
  const fetchPost = async () => {
    try {
      const response = await fetch('http://52.78.99.156:8080/api/v1/posts/mypage', {
      method: 'get',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhc2QiLCJpYXQiOjE3MDg0NTg2OTksImV4cCI6MTcwODQ2MDEzOX0.DUG2UDlJmtydzrQM-RlofqkFYBoDMtrTdzF2fPIaSZs'
      }
    });
    if (response.ok){

      const data = await response.json();
      console.log('게시물이 불러와졌습니다.', response.data);

      setPosts(data);
  }
  else {
    console.error('게시물 가져오기 실패:', response.statusText);
    } 
    } catch (error) {
      console.error('게시물 가져오기 오류:', error);
    }
  };

  fetchPost();
}, []);

useEffect(() => {
  const fetchPlaylist = async () => {
    try {
      const response = await fetch('http://52.78.99.156:8080/playlists/{playlistid}', {
      method: 'get',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZCIsImlhdCI6MTcwODQyODMwMiwiZXhwIjoxNzA4NDI5NzQyfQ.wcAlnIPlwflC0XLf2c5fdA3L8MIdNBNtfnnXzw-0MGM'
      }
    });
    if (response.ok){
      const data = await response.json();
      setPlaylists(data);
  }
  else {
    console.error('플레이리스트 가져오기 실패:', response.statusText);
    } 
  }
  catch (error) {
      console.error('재생목록 가져오기 오류:', error);
    }
  };

  fetchPlaylist();
}, []);


useEffect(() => {
  const fetchInfo = async () => {
    try {
      const response = await fetch('http://52.78.99.156:8080/ap1/v1/user/{loginId}', {
      method: 'get',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZCIsImlhdCI6MTcwODQyODMwMiwiZXhwIjoxNzA4NDI5NzQyfQ.wcAlnIPlwflC0XLf2c5fdA3L8MIdNBNtfnnXzw-0MGM'
      }
    });
    if (response.ok){
      const data = await response.json();
      setInfo(data);
  }
  else {
    console.error('사용자 정보 가져오기 실패:', response.statusText);
    } 
  }
  catch (error) {
      console.error('사용자 정보 가져오기 오류:', error);
    }
  };

  fetchInfo();
}, []);


/*
const playlists = [
  { id: 1, title: '재생목록 1', posts: 11, musicCount: 15 },
  { id: 2, title: '재생목록 2', posts: 8, musicCount: 12 },
  { id: 3, title: '재생목록 3', posts: 15, musicCount: 20 },
  { id: 4, title: '재생목록 4', posts: 7, musicCount: 34 },
  { id: 5, title: '재생목록 5', posts: 2, musicCount: 8 },


]; */

  return (
    <Layout>
        <SideNavBar />
        <PageContainer>
            <SearchingBar />
            <ProfileBar>
                <ProfileImg src = {ProfileImage} alt = '프로필' />
                <Info>
                    <Name>
                        <UserName> {info.nickname} </UserName>
                        <Link to ='/ProfileChange1'>
                        <ChangeImg src = {IconChange} alt = '수정' />
                        </Link>
                    </Name>
                    <MyInfo>
                        <Post> 게시물 {posts.length} </Post>
                        <Follower> 팔로워 {info['Total Follower']} </Follower>
                        <Following> 팔로잉 {info['Total Following']}</Following>
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
             {posts.length > 0 ? (
            posts.map((post) => (
              <ImageContainer key={post.id}>
                <PostImage src={post.imageUrl} alt={`Post ${post.id}`} />
              </ImageContainer>
            ))
          ) : (
           <Text>게시물을 올려보세요</Text> 
          )}
          </div>
        )}
        {selectedTab === 'playlist' && (
          <div>
            <Link to ="/playlist">
            <Button>+ 재생목록 추가</Button>
            </Link>
            <PlaylistWrapper>
            {playlists.map((playlist) => (
            <PlistContainer key = {playlist.id}>
              <PlistImg src = {PlaylistImg} alt= '플레이리스트' />
              <PlistTitle>{playlist.title}</PlistTitle>
              <PlistInfo>{playlist.posts}개의 게시물</PlistInfo>
              <PlistInfo>{playlist.musicCount}개의 음악</PlistInfo>
            </PlistContainer>
            ))}
            </PlaylistWrapper>
          </div>
        )}
        {selectedTab === 'bookMark' && (
          <div>
            <Text>원하는 게시물을 저장해보세요</Text>
          </div>
        )}

        </PageContainer>
        
    </Layout>
    
  )
}

export default Profile;

/*
<Info>
                    <Name>
                        <UserName> username </UserName>
                        <Link to ='/ProfileChange1'>
                        <ChangeImg src = {IconChange} alt = '수정' />
                        </Link>
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
                */