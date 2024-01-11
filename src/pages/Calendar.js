import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';


const CalendarWrapper = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
gap: 8px;
max-width: 300px;
margin: auto;
`;

const Header = styled.div`
    text-align: center;
    padding: 8px;
    background-color: #f0f0f0;
    border-radius: 5px;
`;

const Day = styled.div`
    text-align: center;
    padding: 8px;
    background-color: ${props => props.isHeader ? '#f0f0f0' : 'white'};
    border-radius: 5px;
`;

const Calendar = ()  => {
    const [date, setDate] = useState(new Date());
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    const renderCalendar = () => {
        const calendar = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            calendar.push(<Day key={`empty-${i}`} className="day"></Day>);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            calendar.push(<Day key={i} className="day">{i}</Day>);
        }
        return calendar;
    };
    
    return(
        <CalendarWrapper>
            <Header>일</Header>
            <Header>월</Header>
            <Header>화</Header>
            <Header>수</Header>
            <Header>목</Header>
            <Header>금</Header>
            <Header>토</Header>
            {renderCalendar()}
        </CalendarWrapper>
    );
  
};

export default Calendar;
