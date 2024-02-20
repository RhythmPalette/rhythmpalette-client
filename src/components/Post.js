import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Post(props)  {

    const navigate = useNavigate();

    const goToShortForm =()=>{
        navigate(`/shortform`)

    }


    return (
        <div>
            <Poster src = {IMG_BASE_URL +props.posterPath} alt='게시물' onClick={goToShortForm}/>
        </div>
    );
}
//게시물들을 여기에 띄우면 되는데 게시물에 필요한게 이미지 데이터잖아 이거 클릭하면 숏폼 진입
//이거 클릭하면 숏폼 진입하게 해주면 된다. 게시물들은 이미지를 보여주면 되니까 
//props로 받은 url로 이미지 띄우면 됨
//이렇게 숏폼에 진입하고 숏폼에 데이터 전달하는 식으로 로직을 작성해서 하면 된다.
export default Post;
const Poster = styled.img`
max-width: 150px;
`