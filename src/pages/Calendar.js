import React, { useState } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
// import 'dayjs/locale/ko'; // 한국어 설정

const CalendarWrapper = styled.div`
    display: grid;
    justify-content : center;
    align-items : center;
    grid-template-columns: repeat(7, 1fr);
    gap: 50px;
    max-width: 800px;
    margin : auto;
    
`;

const Header = styled.div`
    text-align: center;
    padding: 8px;
    background-color: #f0f0f0;
    border-radius: 5px;
    margin-top : 100px;
`;

const day = styled.div`
    text-align: center;
    padding: 10px;
    background-color: ${props => props.isHeader ? '#f0f0f0' : 'white'};
    border-radius: 5px;
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
`
const PreviousMonthButton = styled.div`
position : absolute;
top : 0;`

const NextMonthButton = styled.div`
position : absolute;
align-self : flex- end;
`


const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(dayjs());

    const daysInMonth = currentDate.daysInMonth();
    const firstDayOfMonth = currentDate.startOf('month').day();

    const renderCalendar = () => {
        const calendar = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            calendar.push(<div key={`empty-${i}`} className="day"></div>);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            calendar.push(<div key={i} className="day">{i}</div>);
        }
        return calendar;
    };


    const PreviousMonthButton = ({ onClick }) => (
    <button className="prev-month-button" onClick={onClick}>◀</button>
);

    const NextMonthButton = ({ onClick }) => (
    <button className="next-month-button" onClick={onClick}>▶</button>
);

    return (
        <CalendarWrapper>
        <Header>일</Header>
        <Header>월</Header>
        <Header>화</Header>
        <Header>수</Header>
        <Header>목</Header>
        <Header>금</Header>
        <Header>토</Header>
        <MonthHeader>
            {currentDate.format('MMMM YYYY')} </MonthHeader>
            {renderCalendar()}
            <NavigationButtons>
                <PreviousMonthButton onClick={() => setCurrentDate(prevDate => prevDate.subtract(1, 'month'))}>이전 달 </PreviousMonthButton>
                <NextMonthButton onClick={() => setCurrentDate(prevDate => prevDate.add(1, 'month'))}>다음 달 </NextMonthButton>   
            </NavigationButtons>
            
    </CalendarWrapper>

    );
};



export default Calendar;
