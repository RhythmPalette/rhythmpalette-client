import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'
import {ReactComponent as PaintImg} from "../assets/PaintImg.svg";
const Clouds = (props) => {
    const navigate = useNavigate();

    const onClickCloudItem = () => {
        navigate(`/posts/${props.title}`,{
            state : props
        })
    }

    return (
        <GetTotal onClick={onClickCloudItem}>
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