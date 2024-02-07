import React, {useState} from 'react'
import styled from 'styled-components'
import LeftBar from '../components/LeftBar'
import SearchingBar from '../components/SearchingBar'
import images from '../store/dummyPlaylist';
import checkboxUnchecked from '../assets/UnCheckedBox.svg'
import checkboxChecked from '../assets/CheckedBox.svg'

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

const MakePlaylist = styled.div`
width : 570px;
color: #000;
text-align: center;
font-family: "Pretendard Variable";
font-size: 39px;
font-style: normal;
font-weight: 400;
line-height: 41px; /* 102.5% */
letter-spacing: -1px;
margin-left : 488px;
margin-top : 68px;
`

const PlaylistName=styled.div`
display : flex;
flex-direction : row;`

const Name = styled.div`
width: 180px;
height: 41px;
color: #000;
text-align: center;
font-family: "Pretendard Variable";
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 41px; /* 146.429% */
letter-spacing: -1px;
margin-left : 471px;
margin-top : 41px;
`
const Line = styled.div`
width: 428px;
height: 2.5px;
background: #D9D9D9;
margin-top : 82px;
margin-left : 6px;
`
const ImageContainer = styled.div`
display : flex;
flex-wrap: wrap;
justify-content: space-between;
margin-left : 111.57px;
margin-top : 35px;
margin-right : 67.53px;
`

const Image = styled.div`
position : relative;
margin-right : 30px;
margin-top : 20px;
width: 243px;
height: 243px;
border-radius: 10px;
cursor : pointer;

`
const ImageContent = styled.img`
border-radius: 10px;
width: 243px;
height: 243px;
`;

const Checkbox = styled.img`
  width: 26px;
  height: 26px;
  position: absolute;
  top: 14px;
  left: 15px;
  background-image: url(${(props) => (props.checked ? checkboxChecked : checkboxUnchecked)});
  visibility: ${(props) => (props.checked ? 'visible' : 'visible')}
  border : none;
  outline: none;
  box-shadow : none;
`; 

const ButtonContainer = styled.div`
display : flex;
flex-direction : row;
`
const Make = styled.button`
width: 445px;
height: 90px;
border-radius: 45.122px;
background: #04DB8F;
margin-left : 315px;
margin-top : 50px;
color: #FFF;
text-align: center;
font-family: "Pretendard Variable";
font-size: 35px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.35px;
cursor : pointer;
`

const Skip = styled.button`
width: 445px;
height: 90px;
border-radius: 45.122px;
stroke: #04DB8F;
background : #FFF;
color: #04DB8F;
text-align: center;
font-family: "Pretendard Variable";
font-size: 35px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.35px;
margin-left : 40px; 
margin-top : 50px;
cursor : pointer;
`


const Playlist = () => {
    const [checkedImages, setCheckedImages] = useState(images.map(()=> false));

  const toggleCheckbox = (index) => {
    const newCheckedImages = [...checkedImages];
    newCheckedImages[index] = !newCheckedImages[index];
    setCheckedImages(newCheckedImages); }

  return (
    <Layout>
        <LeftBar />
        <PageContainer>
            <SearchingBar />
            <MakePlaylist>나만의 재생목록을 만들어보세요</MakePlaylist>
            <PlaylistName>
              <Name>재생목록 이름: </Name>  
              <Line />
            </PlaylistName>
            <ImageContainer>
            {images.map((imageData, index) => (
            <Image 
            key={imageData.id}
              onClick={() => toggleCheckbox(index)}
            >
              <ImageContent 
              src={imageData.image} 
              alt={`Image ${imageData.id}`} />
              <Checkbox checked={checkedImages[index]} />
              </Image>
          ))}
      
            </ImageContainer>
            <ButtonContainer>
                <Make>게시물 넣어 생성하기</Make>
                <Skip>Skip</Skip>  
            </ButtonContainer>
            


        </PageContainer >

    </Layout>
  )
}

export default Playlist;
