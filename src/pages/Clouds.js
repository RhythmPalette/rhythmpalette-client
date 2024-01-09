import React from 'react';
import styled from 'styled-components';
import {ReactComponent as CloudExample} from "../assets/CloudExample.svg";
const Clouds = (props) => {
    return (
        <GetTotal>
           <GetImg>
           <CloudExample/>
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
`;
const GetText = styled.div`
position: relative;
bottom: 80px;
left: 40px;
z-index: 3;
`;