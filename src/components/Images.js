import React, { useState } from 'react';
import styled from 'styled-components';
import CheckBtn from '../assets/CheckBtn.svg'
import GreenImg from '../assets/CheckImg.svg'
//서버에서 받은 이미지 주소를 받아서 생성

const Images = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const ImgCheck =()=>{
        props.setChosenImg(props.imgUrl);
        props.setImgChosen(true);
        setIsChecked(!isChecked);
    }

    const ImgUnCheck = ()=>{
        props.setChosenImg("");
        props.setImgChosen(false);
        setIsChecked(!isChecked);
    }

    return (
        <ImagesPackage>
            <MadeImage src = {props.imgUrl} alt='만들어진 이미지' onClick={ImgCheck
            }/>
           {isChecked &&( <CheckPackage>
                <GreenImage src={GreenImg} onClick={ImgUnCheck}/>
                <CheckImg src={CheckBtn} onClick={ImgUnCheck}/>
            </CheckPackage>)}

        </ImagesPackage>
            
        
    );
};

export default Images;
const GreenImage = styled.img`
position: absolute;
z-index: 2;
`;
const CheckPackage = styled.div`
background: #04DB8F80;
position: absolute;
z-index: 1;
display: flex;
align-items: center;
justify-content: center;
top: 129px;
left:129px;
`;
const ImagesPackage = styled.div`
  position: relative;
 display: inline-block;
`;
const CheckImg = styled.img`
position: absolute;

z-index: 3;
`;

const MadeImage = styled.img`
position: absolute;
Width:257.93px;
Height:257.93px;
z-index: 0;
border-radius: 10px;
`;