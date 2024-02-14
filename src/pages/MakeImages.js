import React ,{ useState} from 'react';
import styled from 'styled-components';
import Images from '../components/Images';
import { useNavigate } from 'react-router-dom';
//아마 여기서 서버에서 이미지를 받아서 사용할 예정 전 페이지에서 서버에 데이터를 요청함
const MakeImages = (props) => {

    // const [imageData, setImageData] = useState("");
    // //서버에서 이미지 데이터를 받아와서 사용함.
    // // setImageData()
    // setImageData();
    
    const navigate = useNavigate();
    
    const goToDecidePost = () =>
    {
        navigate(`/decideposts`);
        //여기서 url하고 트랙이름이랑 다 넘겨주면 된다.
    }


    const imageData = [
        {
            url : "example",
        }
    ]
    return (
        <MakegImagesPackage>
            <ImageGrid>
            {imageData.map((item)=>{
                return (
                    <Images
                    imgUrl = {item.url}
                    />
                )
            }
            )
          }
            </ImageGrid>
            <BtnBox>
                <RecreateBtn>
                    {"이미지 재생성"}
                </RecreateBtn>
                <ChooseBtn >
                    {"선택완료"}
                </ChooseBtn>
            </BtnBox>


        </MakegImagesPackage>
    );
};

export default MakeImages;

const MakegImagesPackage = styled.div`
`;

const ImageGrid = styled.div`

`;
const BtnBox = styled.div`
    position: absolute;
    top: 882.92px;
    left: 664.71px;
    display: flex;
    flex-direction: row;
    row-gap: 80px;
    column-gap: 80px;
`;
const RecreateBtn = styled.button`
    height: 90px;
    width: 300px;
    border-radius: 45.12px;
    background-color: #04DB8F;
    border: 0;
    font-family: Pretendard Variable;
    font-size: 35px;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0.01em;
    text-align: center;
    color: #ffff;

`;
const ChooseBtn = styled.button`
    height: 90px;
    width: 300px;
    border-radius: 45.12px;
    background-color: #F9C0C6;
    border: 0;
    font-family: Pretendard Variable;
    font-size: 35px;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0.01em;
    text-align: center;
    color: #ffff;
`;