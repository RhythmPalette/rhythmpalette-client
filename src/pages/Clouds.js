import React from 'react';
import styled from 'styled-components';
import {ReactComponent as PaintImg} from "../assets/PaintImg.svg";
const Clouds = (props) => {
    return (
        <GetTotal>
           <GetImg>
           <PaintImg/>
            </GetImg>
            <GetText>
                {props.title}
            </GetText>
        </GetTotal>
    );
};

export default Clouds;

const GetTotal = styled.div`

`;
const GetImg = styled.div`
z-index: 1;
margin-bottom: 32px;
`;
const GetText = styled.div`
position: relative;
bottom: 80px;
left: 40px;
z-index: 3;
`;