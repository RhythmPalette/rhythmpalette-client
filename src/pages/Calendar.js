import React, { useState } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import dummyStory from '../store/dummyStory';
import {ReactComponent as SvgImage} from '../assets/Image1.svg'
// import 'dayjs/locale/ko'; // 한국어 설정

const CalendarWrapper = styled.div`
    display: grid;
    justify-content : center;
    align-items : center;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    max-width: 800px;
    margin : auto;
    
`;

const DayHeader = styled.div`
    text-align: center;
    padding: 8px;
    background-color: #f0f0f0;
    border-radius: 5px;
    margin-top : 100px;
`;

const Day = styled.div`
    text-align: center;
    padding : 10px;
    background-color: ${props => props.isHeader ? '#f0f0f0' : 'white'};
    width: 100px; /* 고정된 가로 크기 */
    height: 100px; /* 고정된 세로 크기 */
    display: flex;
    flex-direction: row; 
    align-items: flex-start;
    justify-content: center;
    
    
`;

const MonthHeader = styled.div`
    position : absolute;
    top : 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f0f0f0;
    padding: 8px;
    border-radius: 5px;
    width: 100%;
    text-align: center;
}
`
const NavigationButtons = styled.div`
position : absolute;
top : 0;
`;
const PrevMonthButton = styled.button`
position : absolute;
top : 0;
`;


const NextMonthButton = styled.button`
position : absolute;
align-self : flex- end;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(dayjs());

    const daysInMonth = currentDate.daysInMonth();
    const firstDayOfMonth = currentDate.startOf('month').day();

    const renderCalendar = () => {
        const calendar = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            calendar.push(<Day key={`empty-${i}`} ></Day>);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            const imageData = dummyStory.find(item => item.day === i);


            calendar.push(
                <Day key={i}>
                    <div>
                      <span>{i}</span> 
                      {imageData && (
                        <ImageContainer> 
                            {imageData.image.component}
                    </ImageContainer>
                    )}
                    </div>
                </Day>
            );
        }
        return calendar;
    };

    const PrevMonthButton = ({ onClick }) => (
        <button onClick={onClick}>◀</button>
    );
    
        const NextMonthButton = ({ onClick }) => (
        <button onClick={onClick}>▶</button>
    );
    

    return (
   
        <CalendarWrapper>   
        <DayHeader>일</DayHeader>
        <DayHeader>월</DayHeader>
        <DayHeader>화</DayHeader>
        <DayHeader>수</DayHeader>
        <DayHeader>목</DayHeader>
        <DayHeader>금</DayHeader>
        <DayHeader>토</DayHeader>
        <MonthHeader>
            {currentDate.format('MMMM YYYY')} </MonthHeader> 
            {renderCalendar()}
            <NavigationButtons>
                <PrevMonthButton onClick={() => setCurrentDate(prevDate => prevDate.subtract(1, 'month'))}> ◀ </PrevMonthButton>
                <NextMonthButton onClick={() => setCurrentDate(prevDate => prevDate.add(1, 'month'))}>▶ </NextMonthButton>   
            </NavigationButtons>
            
    </CalendarWrapper>

    );
};



export default Calendar; 