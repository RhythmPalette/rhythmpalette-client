import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import styled from 'styled-components';
import post_id from '../store/dummyStory';
import LeftBar from '../components/LeftBar';
import {ReactComponent as SvgImage} from '../assets/Image1.svg'
import SearchingBar from '../components/SearchingBar';


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
    width: 100%;
    
    height : 1080px;
    
`
const YearContainer = styled.div`
display : flex;
`
const MonthHeader = styled.div`
    display : flex;
    flex-direction : column;
    text-align: center;
    
    div:first-child {
        display: flex;
        width: 196px;
        height: 50px;
        flex-direction: column;
        justify-content: center;
        margin-left : 152.57px;
        margin-top : 46.67px;
        color: #000;
        font-family: "Pretendard Variable";
        font-size: 65px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px; /* 27.692% */   
    }
    div:last-child {
        display: flex;
        width: 115px;
        height: 36px;
        flex-direction: column;
        justify-content: center;
        margin-left : 158.57px;
        margin-top : 44px;
        color: #000;
        font-family: "Pretendard Variable";
        font-size: 40px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px; /* 36% */  
    }
`

const NavigationButtons = styled.div`
display : flex;
width : 100px;
height : 50px;
margin-left : 700px;
margin-top : 70px;
margin-bottom : 10px;

`;

const ComboBox = styled.div`
  width: 150px;
  height: 68px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #999;
  background: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right : 15px;


  
`

const Dropdown = styled.select`
width: 150px;
height: 40.82
flex-shrink: 0;
border: 0;
background: #FFF;
color: #000;
font-family: "Pretendard";
font-size: 29px;
font-style: normal;
font-weight: 400;
line-height: normal;
display : flex;
justify-content: center;
align-items: center;
text-align : center;

`

const ListItem = styled.option`
  display: flex;
  width: 150px;
  height: 30.391px;
  margin-top : 10px;
`

const CalendarWrapper = styled.div`
    display: grid;
    justify-content : center;
    align-items : center;
    text-align : center;
    grid-template-columns: repeat(7, 150px);
    grid-template-rows: repeat(6, 92px);
    gap : 27px;
    margin-left : 152.57px;
    margin-right : 152.57px;
    margin-top : 31px;
    color: #000;
    font-size : 30px;
    font-family: "Pretendard Variable";
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 60% */
    
`;


const Day = styled.div`
    display: flex;
    flex-direction: row; 
    align-items : center;
    justify-content: center;
    text-align: center;
    background-color: ${props => props.isHeader ? '#f0f0f0' : 'white'};
    width: 92px; /* 고정된 가로 크기 */
    height: 92px; /* 고정된 세로 크기 */
    left : 50px;
    
    // 이미지와 텍스트를 감싸는 컨테이너에 대한 스타일
    .content-container {
        width: 92px;
        height: 92px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align : center;
        position : relative;
        

    }
    // 텍스트에 대한 스타일
    span {
        display : flex;
        align-items : center;
        justify-content : center;
        text-align : center;
        position : absolute;
        width : 100%;
        z-index: 2; 
    }
`;

const ImageContainer = styled.div`
width : 92px;
height : 92px;
z-index: 1; 
overflow : hidden;
svg {
    border-radius: 15px;
 }

`;    
    



const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(dayjs());

    const daysInMonth = currentDate.daysInMonth();
    const firstDayOfMonth = currentDate.startOf('month').day();
    const [selectedYear, setSelectedYear] = useState(currentDate.year());
    const [selectedMonth, setSelectedMonth] = useState(currentDate.month() + 1); 
    

    const renderCalendar = () => {
        const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => (
            <Day key={`empty-${i}`} />
          ));
        
            const days = Array.from({ length: daysInMonth }, (_, i) => {
            const imageData = post_id.find(item => item.day === i+1);


            return(
                <Day key={i+1}>
                <div className="content-container">
                    {imageData && (
                        <ImageContainer>
                            <Link to={`/shotform`}>
                                {imageData.image.component}
                            </Link>
                        </ImageContainer>
                    )}
                    <span>{i + 1}</span>
                </div>
            </Day>
        );
    });
        return [...emptyDays, ...days];
    };

    const YearList = Array.from( { length: 9 }, (_, i) => `${2024-i}`,);
        
  const MonthList = Array.from( {length: 12}, (_, i) => `${i+1}`);
    

    

    return (
        <Layout>
            <LeftBar />
            <PageContainer>
                <SearchingBar />
                <YearContainer>
                    <MonthHeader>
                    <div>{currentDate.format('YYYY')}</div>
                    <div>{currentDate.format('MM월')}</div>
                     </MonthHeader> 
                    <NavigationButtons>
                        <ComboBox>
                <Dropdown value={selectedYear} onChange={(e) => 
                    {const newYear = Number(e.target.value);
                        setSelectedYear(newYear);
                        setCurrentDate(dayjs().year(newYear).month(selectedMonth - 1));
                      }}>
                {YearList.map((year, index) => (
                <ListItem key={index} value={year}>
                    {year}
                </ListItem>
                 ))}
                </Dropdown>
              </ComboBox>
              <ComboBox>
              <Dropdown value={selectedMonth} onChange={(e) => 
                {const newMonth = Number(e.target.value);
                    setSelectedMonth(newMonth);
                    setCurrentDate(dayjs().year(selectedYear).month(newMonth - 1));
                    }}>
                {MonthList.map((month, index) => (
              <ListItem key={index} value={month}>
                {(Number(month)).toString().padStart(2, '0')}
            </ListItem>
                 ))}
                </Dropdown>
                </ComboBox>    
                    </NavigationButtons>
                </YearContainer>
                    <CalendarWrapper>
                    {renderCalendar()}
                    </CalendarWrapper>
            </PageContainer>
        </Layout>
    );
};



export default Calendar; 