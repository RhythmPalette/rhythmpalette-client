import React, { useState } from 'react';
import styled from 'styled-components';
import Arrow from "./Img/화살표.svg";
import { useNavigate, useLocation } from 'react-router-dom';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  background: radial-gradient(140.12% 112.97% at -1.52% -17.47%, rgba(0, 201, 130, 0.50) 1.59%, rgba(241, 241, 241, 0.50) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.form`
  width: 1636.578px;
  height: 894.085px;
  flex-shrink: 0;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
`;

const Title = styled.div`
  display: flex;
  width: 657.865px;
  height: 30.391px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 40% */
  position: absolute;
  top: 100.63px;
  left: 521.91px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 178.554px;
  height: 178.554px;
  border-radius: 50%;
  flex-shrink: 0;
  fill: rgba(255, 255, 255, 0.70);
  stroke-width: 1px;
  stroke: #999;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.15));
  background: ${({ selected }) => (selected ? '#04DB8F' : 'white')};
  border: ${({ selected }) => (selected ? '0' : '1px solid #999')};
  color: '#000';
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 80px; /* 266.667% */
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
`;
const ArrowBtn = styled.button`
  background: white;
  border: 0;
  width: 141.629px;
  height: 77.66px;
  position: absolute;
  top: 749.8px;
  left: 1354.95px;
`

const Favorite_categories = () => {
  const [selectedBoxes, setSelectedBoxes] = useState(Array(11).fill(false));
  const location = useLocation();
  const { nickname, introduction, birth, gender } = location.state || {};

  const handleBoxClick = (index) => {
    const newSelectedBoxes = [...selectedBoxes];
    const selectedCount = newSelectedBoxes.filter((isSelected) => isSelected).length;
    if(selectedCount < 3 || newSelectedBoxes[index]){
      newSelectedBoxes[index]= !newSelectedBoxes[index];
      setSelectedBoxes(newSelectedBoxes);
    } 
  };
  
  const navigate = useNavigate();
  const handleNext = () => {
    // 이전 페이지에서 받아온 정보와 선택한 박스의 값을 합치기
    const preferenceGenres = selectedBoxes
      .map((selected, index) => (selected ? index + 1 : null))
      .filter((genre) => genre !== null);

    // 다음 페이지로 전송할 데이터 준비
    const dataToSend = {
      nickname,
      introduction,
      birth,
      gender,
      preferenceGenre1: preferenceGenres[0],
      preferenceGenre2: preferenceGenres[1],
      preferenceGenre3: preferenceGenres[2],
      // 데이터를 콘솔에 출력
    };
    console.log("전송할 데이터:", dataToSend);

    // 다음 페이지로 이동
    navigate('/Profile_music', { state: dataToSend });
  }

  return (
    <Background>
      <Wrap>
        <Title>좋아하는 장르를 3가지 선택해주세요</Title>
        <Box
          selected={selectedBoxes[0]}
          onClick={() => handleBoxClick(0)}
          top={181.01}
          left={177.47}
        >
          장르
        </Box>
        <Box
          selected={selectedBoxes[1]}
          onClick={() => handleBoxClick(1)}
          top={319.71}
          left={371.4}
        >
          장르
        </Box>
        <Box
          selected={selectedBoxes[2]}
          onClick={() => handleBoxClick(2)}
          top={270.28}
          left={680.51}
        >
          장르
        </Box>
        <Box
          selected={selectedBoxes[3]}
          onClick={() => handleBoxClick(3)}
          top={273.14}
          left={1021.47}
        >
          장르
        </Box>
        <Box
          selected={selectedBoxes[4]}
          onClick={() => handleBoxClick(4)}
          top={169.24}
          left={1323.77}
        >
          장르
        </Box>
        <Box
          selected={selectedBoxes[5]}
          onClick={() => handleBoxClick(5)}
          top={465.98}
          left={97.06}
        >
          장르
        </Box>
        <Box
          selected={selectedBoxes[6]}
          onClick={() => handleBoxClick(6)}
          top={615.75}
          left={327.99}
        >
          장르
        </Box>
        <Box
          selected={selectedBoxes[7]}
          onClick={() => handleBoxClick(7)}
          top={576.75}
          left={593.78}
        >
          장르
        </Box>
        <Box
          selected={selectedBoxes[8]}
          onClick={() => handleBoxClick(8)}
          top={482.44}
          left={859.58}
        >
          장르
        </Box>
        <Box
          selected={selectedBoxes[9]}
          onClick={() => handleBoxClick(9)}
          top={596.42}
          left={1090.5}
        >
          장르
        </Box>
        <Box
          selected={selectedBoxes[10]}
          onClick={() => handleBoxClick(10)}
          top={482.44}
          left={1361.78}
        >
          장르
        </Box>
        <ArrowBtn type="button" onClick={handleNext}>
          <img src={Arrow} alt="arrow" />
        </ArrowBtn>
      </Wrap>
    </Background>
  );
};

export default Favorite_categories;
