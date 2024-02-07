import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ExampleSquareImg } from '../assets/ExampleSquareImg.svg';
//서버에서 받은 이미지 주소를 받아서 생성

const Images = (props) => {
    return (
        <ImagesPackage>

            {/* <MadeImage src = {props.url} alt='만들어진 이미지'/> */}
            <ExampleSquareImg/>
        </ImagesPackage>
            
        
    );
};

export default Images;

const ImagesPackage = styled.div`

`;

// const MadeImage = styled.img`

// `;