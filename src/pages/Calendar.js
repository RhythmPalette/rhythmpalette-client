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
width: 1892.951px;
height: 1092.061px;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
const PageContainer= styled.div`
    display : flex;
    flex-direction : column;
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
margin-left : 1000px;
margin-top : 50px;
`;

const CalendarWrapper = styled.div`
    display: grid;
    justify-content : center;
    align-items : center;
    grid-template-columns: repeat(7, 1fr);
    gap: 20px;
    font-size : 30px;
    margin-left : 152.57px;
    margin-top : 31px;
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 60% */
    
`;


const Day = styled.div`
    text-align: center;
    padding : 10px;
    background-color: ${props => props.isHeader ? '#f0f0f0' : 'white'};
    width: 92px; /* 고정된 가로 크기 */
    height: 100px; /* 고정된 세로 크기 */
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    // 이미지와 텍스트를 감싸는 컨테이너에 대한 스타일
    .content-container {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position : relative;
    }
    // 텍스트에 대한 스타일
    span {
        position : absolute;
        z-index: 2; // 이미지 위에 텍스트를 표시하도록 z-index 조절
    }


`;
const ImageContainer = styled.div`

width : 100%;
height : 100%;
z-index: 1; // 이미지는 텍스트 위에 표시되도록 z-index 조절
 
svg{
    border-radius: 15px;}

`;    
    




const PrevMonthButton = styled.button`
position : absolute;
top : 0;
`;


const NextMonthButton = styled.button`
position : absolute;
align-self : flex- end;
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

    const PrevMonthButton = ({ onClick }) => (
        <button onClick={onClick}>◀</button>
    );
    
        const NextMonthButton = ({ onClick }) => (
        <button onClick={onClick}>▶</button>
    );
    

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
                        <PrevMonthButton onClick={() => setCurrentDate(prevDate => prevDate.subtract(1, 'month'))}> ◀ </PrevMonthButton>
                        <NextMonthButton onClick={() => setCurrentDate(prevDate => prevDate.add(1, 'month'))}>▶ </NextMonthButton>   
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