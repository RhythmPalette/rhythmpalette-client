import React from 'react';
import styled  from 'styled-components';
import { dummy } from '../store/postExampleDummyData';
import Post from '../components/Post';
const Posts = () => {
    return (
        <BigBox>
        <PostContainer>
        {
            dummy.results.map((item)=>{
                return (
                    <Post
                    posterPath = {item.poster_path}
                    />
                )
            }
            )
        }
        </PostContainer>
        </BigBox>
    );
};


export default Posts;
const BigBox = styled.div`

`

const PostContainer = styled.div`
    display: grid;
    grid-template-columns: 100px 100px 100px 100px 100px;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 10px ; 
    row-gap: 20px;
    column-gap: 80px;
    justify-content: center;
` 