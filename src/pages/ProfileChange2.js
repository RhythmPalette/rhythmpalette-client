import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import LeftBar from '../components/LeftBar'
import SearchingBar from '../components/SearchingBar'
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
  const Wrap = styled.form`
    width: 1572px;
    height:918px;
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
    font-size: 39px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 40% */
    position: absolute;
    top: 93px;
    left: 459.84px
  `;
  
  const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 151.336px;
    height: 151.336px;
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
    top: 680px;
    left: 1195px;
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
margin-top : 783px;

`

const ProfileChange2 = () => {
    const [selectedBoxes, setSelectedBoxes] = useState(Array(11).fill(false));

    useEffect(() => {
    setSelectedBoxes((prevSelectedBoxes) => {
      const initialSelectedBoxes = [...prevSelectedBoxes];
      initialSelectedBoxes[0] = true;
      initialSelectedBoxes[3] = true;
      initialSelectedBoxes[8] = true;
      return initialSelectedBoxes;
    });
  }, []);
    

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
      navigate('/ProfileChange3');
  }

 
  return (
    <Layout>
        <LeftBar />
        <PageContainer>
            <SearchingBar />
      <Wrap>
        <Title>좋아하는 장르를 3가지 선택해주세요</Title>
        <Box
          selected={selectedBoxes[0]}
          onClick={() => handleBoxClick(0)}
          top={179.97}
          left={230.15}
        >
          장르
        </Box>
        <Box
          selected={selectedBoxes[1]}
          onClick={() => handleBoxClick(1)}
          top={297.53}
          left={394.52}
        >
          장르
        </Box>
        <Box
          selected={selectedBoxes[2]}
          onClick={() => handleBoxClick(2)}
          top={255.64}
          left={656.51}
        >
          장르
        </Box>
        <Box
          selected={selectedBoxes[3]}
          onClick={() => handleBoxClick(3)}
          top={258.06}
          left={945.5}
        >
          장르
        </Box>
        <Box
          selected={selectedBoxes[4]}
          onClick={() => handleBoxClick(4)}
          top={170}
          left={1201.71}
        >
          장르
        </Box>
        <Box
          selected={selectedBoxes[5]}
          onClick={() => handleBoxClick(5)}
          top={421.51}
          left={162}
        >
          장르
        </Box>
        <Box
          selected={selectedBoxes[6]}
          onClick={() => handleBoxClick(6)}
          top={548.45}
          left={357.72}
        >
          장르
        </Box>
        <Box
          selected={selectedBoxes[7]}
          onClick={() => handleBoxClick(7)}
          top={515.39}
          left={583}
        >
          장르
        </Box>
        <Box
          selected={selectedBoxes[8]}
          onClick={() => handleBoxClick(8)}
          top={435.46}
          left={808.29}
        >
          장르
        </Box>
        <Box
          selected={selectedBoxes[9]}
          onClick={() => handleBoxClick(9)}
          top={532.06}
          left={1004.01}
        >
          장르
        </Box>
        <Box
          selected={selectedBoxes[10]}
          onClick={() => handleBoxClick(10)}
          top={435.46}
          left={1233.93}
        >
          장르
        </Box>
        <ArrowBtn type="button" onClick={handleNext}>
          <img src={Arrow} alt="arrow" />
        </ArrowBtn>
      <Text4>해당 페이지에 수정사항이 없다면 다음으로 넘어가주세요</Text4>

      </Wrap>

        
        </PageContainer>
    </Layout>
  )
}
export default ProfileChange2;
