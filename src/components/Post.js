import React from 'react';
import styled from 'styled-components';
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Post(props)  {
    return (
        <div>
            <Poster src = {IMG_BASE_URL +props.posterPath} alt='영화포스터'/>
        </div>
    );
}

export default Post;
const Poster = styled.img`
max-width: 150px;
`