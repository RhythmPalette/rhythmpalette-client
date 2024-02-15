import React, {useState} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import LeftBar from '../components/LeftBar'
import SearchingBar from '../components/SearchingBar'
import profile from '../assets/ProfileImage.svg'
import Arrow from "../assets/Arrow.svg";


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

  const Title = styled.div`
  display : flex;
 width : 200px;
 height : 40px;
color: #000;
text-align: center;
font-family: "Pretendard Variable";
font-size: 35px;
font-style: normal;
font-weight: 400;
line-height: 40px; /* 114.286% */
margin-top : 41px;
margin-left : 83px;
background : #FFF;
  `    

const Wrap1 = styled.form`
  width: 1572px;
  height: 758px;
  flex-shrink: 0;
  background: #FFF;
  display: flex;
  flex-direction : row;

 

 


  `
  
const Wrap0 = styled.div`
  width: 451.565px;
  height: 758px;
  display : flex;
  flex-direction: column;
 
  align-items: center;
  margin-left :550px;
  margin-top : 0px;
  
`

const Text1 = styled.div`
  display: flex;
  width: 150px;
  height: 32px;
  flex-direction: column;
  justify-content: center;
  align-items : center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  margin-top: 29.58px;
`
const Picture = styled.div`
  width: 123.291px;
  height: 123.291px;
  flex-shrink: 0;
  margin-top: 29.58px;
  border-radius:
  position: relative;
  overflow: hidden;
`
const Text2 = styled.div`
  display: flex;
  width: 344.719px;
  height: 30.391px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  margin-top: 20px;
`
const Input = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 361.619px;
  height: 58.451px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #999999;
  background: #FFFFFF;
  margin-top: 11.8px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 17.6px;
  padding-right: 17.6px;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 100% */
  $:placeholder{
    color:#BFBFBF;
  }
`
const Wrap2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 451.565px;
  weight: 58.451px;
  padding-right: 44.973px;
  margin-top: 11.8px;
`
const Wrap3 = styled.div`
  width: 361.619px;
  height: 58.451px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Wrap4 = styled.div`
  width: 361.619px;
  height: 58.451px;
  display: flex;
  align-items: center;
`
const Wrap5 = styled.div`
  width: 118.619px;
  height: 58.451px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #999;
  background: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Text3 = styled.div`
  display: flex;
  width: 37.473px;
  height: 30.391px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #707070;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 120% */
  margin-right: 7.5px;
`
const Select = styled.select`
width: 90px;
height: 30.451px;
flex-shrink: 0;
border: 0;
background: #FFF;
color: #000;
font-family: "Pretendard Variable";
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 72% */
`

const Option = styled.option`
  display: flex;
  width: 49.432px;
  height: 30.391px;
`
const FileInput = styled.input`
  display: none; /* 기본 파일 업로드 버튼 숨김 */
`;
const PictureWrapper = styled.label`
  cursor: pointer;
  position: relative;
`;
const PictureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const GenderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 58.927px;
  cursor: pointer;
  border: 1px solid #999;
  padding: 10px 20px;
  transition: background 0.3s;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  margin-right: 3px;

  ${(props) =>
    props.selected &&
    `
    background: #04DB8F;
    color: #FFF;
  `}
`
const ArrowBtn = styled.button`
display : flex;
  background: white;
  border: 0;
  width: 141.629px;
  height: 77.66px;
  margin-left: 219px;
  margin-top : 640px;


`
const Text4 = styled.div`
width : 470px;
height : 40px;
color: #000;
text-align: center;
font-family: "Pretendard Variable";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 40px; /* 200% */
margin-left : 1040px;



`
const ProfileChange = () => {
  const Year_List = Array.from( { length: 100 }, (_, i) => `${2024-i}`,);
  Year_List.unshift("년도");
  const Month_List = Array.from( {length: 12}, (_, i) => `${i+1}`);
  Month_List.unshift("월");
  const Day_List = Array.from( {length: 31}, (_, i) => `${i+1}`);
  Day_List.unshift("일");
  
  const [profileImage, setProfileImage] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);

  // 파일 선택 시 이벤트 처리 함수
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setProfileImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };
  const navigate = useNavigate();
  const handleNext = () => {
      navigate('/ProfileChange2');
  }
  return (
    <Layout>
        <LeftBar />
        <PageContainer>
            <SearchingBar />
        <Title>프로필 수정</Title>
        <Wrap1> 
          <Wrap0>
          <Text1>사용자 사진</Text1>
          <PictureWrapper>
          <Picture>
              {profileImage ? (
                <PictureImage src={profileImage} alt="프로필 사진" />
              ) : (
                <PictureImage src={profile} alt="프로필 사진" />
              )}
            </Picture>
            {/* 파일 업로드를 위한 input */}
            <FileInput
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </PictureWrapper>
          <Text2>닉네임</Text2>
          <Input placeholder='닉네임을 입력하세요'></Input>
          <Text2>자기소개</Text2>
          <Input placeholder='한줄 자기소개를 입력하세요'></Input>
          <Text2>생년월일</Text2>
          <Wrap2>
            <Text3>*선택</Text3>
            <Wrap3>
              <Wrap5>
                <Select>
                  {Year_List.map((year, index) => (
                    <Option key={index}>{year}</Option>
                ))}
                </Select>
              </Wrap5>
              <Wrap5>
                <Select>
                  {Month_List.map((month, index) => (
                    <Option key={index}>{month}</Option>
                ))}
                </Select>
              </Wrap5>
              <Wrap5>
                <Select>
                  {Day_List.map((day, index) => (
                    <Option key={index}>{day}</Option>
                ))}
                </Select>
              </Wrap5>
            </Wrap3>
          </Wrap2>
          <Text2>성별</Text2>
          <Wrap2>
            <Text3>*선택</Text3>
            <Wrap4>
              <GenderButton
                style={{borderTopLeftRadius:'10px', borderBottomLeftRadius: '10px'}}
                selected={selectedGender === 'male'}
                onClick={() => handleGenderSelection('male')}
              >
                남자
              </GenderButton>
              <GenderButton
                style={{borderBottomRightRadius:'10px', borderTopRightRadius: '10px'}}
                selected={selectedGender === 'female'}
                onClick={() => handleGenderSelection('female')}
              >
                여자
              </GenderButton>
            </Wrap4>    
          </Wrap2>
        </Wrap0>
        <ArrowBtn type="button" onClick={handleNext}>
            <img src={Arrow} alt="arrow" />
        </ArrowBtn>
        
      </Wrap1>
      <Text4>해당 페이지에 수정사항이 없다면 다음으로 넘어가주세요</Text4>




        </PageContainer>
    </Layout>
  )
}
export default ProfileChange;
