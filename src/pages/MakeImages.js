import React ,{ useState} from 'react';
import styled from 'styled-components';
import Images from './Images';

//아마 여기서 서버에서 이미지를 받아서 사용할 예정 전 페이지에서 서버에 데이터를 요청함
const MakeImages = () => {

    const [imageData, setImageData] = useState("");


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

                <ChooseBtn>
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

`;
const RecreateBtn = styled.button`

`;
const ChooseBtn = styled.button`

`;