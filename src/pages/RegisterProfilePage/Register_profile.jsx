import { useState } from 'react';
import styled from 'styled-components';
import profile from './Img/프로필사진.svg';
import Arrow from "./Img/화살표.svg";
import Arrow_2 from "./Img/화살표 (2).svg";
import { useNavigate } from 'react-router-dom';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  background: radial-gradient(140.12% 112.97% at -1.52% -17.47%, rgba(0, 201, 130, 0.50) 1.59%, rgba(241, 241, 241, 0.50) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap1 = styled.form`
  width: 1636.578px;
  height: 894.085px;
  flex-shrink: 0;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 78.81px;
`;

const Title = styled.div`
  display: flex;
  width: 274px;
  height: 52px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 60px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 30% */
  margin-top: 92px;
`;

const Text1 = styled.div`
  display: flex;
  width: 129px;
  height: 32px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 72% */
  margin-top: 44px;
`;

const Picture = styled.div`
  width: 123.291px;
  height: 123.291px;
  flex-shrink: 0;
  margin-top: 11px;
  margin-bottom: 17.57px;
  position: relative;
  overflow: hidden;
`;

const Text2 = styled.div`
  display: flex;
  width: 348px;
  height: 25px;
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
`;

const Input = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 380px;
  height: 58px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid rgba(153, 153, 153, 1);
  background: #FFFFFF;
  margin-top: 13px;
  padding-top: 13.8px;
  padding-bottom: 13.8px;
  padding-left: 22px;
  padding-right: 22px;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 100% */

  &::placeholder { /* 수정된 부분 */
    color: #BFBFBF;
  }
  outline: none;
`;

const Wrap2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 461px;
  weight: 58px;
  padding-right: 44.973px;
  margin-top: 11.8px;
`;

const Wrap3 = styled.div`
  width: 380px;
  height: 58px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrap4 = styled.div`
  width: 380px;
  height: 58px;
  display: flex;
  align-items: center;
`;

const Wrap5 = styled.div`
  width: 124.27px;
  height: 58px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid rgba(153, 153, 153, 1);
  background: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
`;

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
  outline: none;
`;

const Option = styled.option`
  display: flex;
  width: 49.432px;
  height: 30.391px;
`;

const FileInput = styled.input`
  display: none; /* 기본 파일 업로드 버튼 숨김 */
`;

const PictureWrapper = styled.label`
  cursor: pointer;
`;

const PictureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GenderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 58px;
  cursor: pointer;
  border: 1px solid rgba(153, 153, 153, 1);
  padding: 20px 30px;
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
    border: 0;
    background: #04DB8F;
    color: #FFF;
  `}
`;

const ArrowBtn = styled.button`
  background: white;
  border: 0;
  width: 141.629px;
  height: 77.66px;
  position: absolute;
  right: 154.43px;
  bottom: 65.59px;
`;

const RegisterProfile = () => {
  const Year_List = Array.from( { length: 100 }, (_, i) => `${2024-i}`);
  Year_List.unshift("년도");
  const Month_List = Array.from( {length: 12}, (_, i) => `${(i+1).toString().padStart(2, '0')}`);
  Month_List.unshift("월");
  const Day_List = Array.from( {length: 31}, (_, i) => `${(i+1).toString().padStart(2, '0')}`);
  Day_List.unshift("일");

  const [profileImage, setProfileImage] = useState(null);
  const [nickname, setNickname] = useState("");
  const [intro, setIntro] = useState("");
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
  
  const isFormValid = () => {
    return (
      profileImage !== null &&
      nickname.trim() !== "" &&
      intro.trim() !== ""
    );
  };

  const handleNext = () => {
    if (isFormValid()) {
      // 모든 입력이 올바르면 다음 페이지로 이동
      navigate('/Favorite_categories');
    } else {
      // 경고 메시지 등을 표시하거나 원하는 처리를 수행
      alert("모든 필수 항목을 입력해주세요.");
    }
  };

  return (
    <Background>
      <Wrap1>
        <Title>프로필 등록</Title>
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
        <Input
          placeholder='닉네임을 입력하세요'
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Text2>자기소개</Text2>
        <Input
          placeholder='한줄 자기소개를 입력하세요'
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
        />
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
        <ArrowBtn type="button" onClick={handleNext}>
          <img src={isFormValid() ? Arrow : Arrow_2} alt="arrow" />
        </ArrowBtn>
      </Wrap1>
    </Background>
  );
}

export default RegisterProfile;
