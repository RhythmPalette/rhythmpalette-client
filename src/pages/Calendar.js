import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import styled from 'styled-components';
import dummyStory from '../store/dummyStory';
import {ReactComponent as SvgImage} from '../assets/Image1.svg'


const CalendarWrapper = styled.div`
    display: grid;
    justify-content : center;
    align-items : center;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    max-width: 800px;
    margin : auto;
    margin-top : 30px;
`;

const DayHeader = styled.div`
    text-align: center;
    padding: 10px;
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
        const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => (
            <Day key={`empty-${i}`} />
          ));
        
            const days = Array.from({ length: daysInMonth }, (_, i) => {
            const imageData = dummyStory.find(item => item.day === i+1);


            return(
                <Day key={i+1}>
                    <div>
                      <span>{i+1}</span> 
                      {imageData && (
                        <ImageContainer> 
                            <Link to = {`/shotform`}>
                            {imageData.image.component}
                            </Link>
                        </ImageContainer>
                    )}
                    </div>
                </Day>
            );
        });
        return [...emptyDays, ...days];
    };

    const PrevMonthButton = ({ onClick }) => (
        <button onClick={onClick}>◀</button>
    );
    
        const NextMonthButton = ({ onClick }) => (
        <button onClick={onClick}>▶</button>
    );
    

    return (
   
        <CalendarWrapper>   
     
        <MonthHeader>
            {currentDate.format('YYYY.MM')} </MonthHeader> 
            {renderCalendar()}
            <NavigationButtons>
                <PrevMonthButton onClick={() => setCurrentDate(prevDate => prevDate.subtract(1, 'month'))}> ◀ </PrevMonthButton>
                <NextMonthButton onClick={() => setCurrentDate(prevDate => prevDate.add(1, 'month'))}>▶ </NextMonthButton>   
            </NavigationButtons>
            
    </CalendarWrapper>

    );
};



export default Calendar; 