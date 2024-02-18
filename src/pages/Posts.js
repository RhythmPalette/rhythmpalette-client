import React,{useState} from 'react';
import styled  from 'styled-components';
import { dummy } from '../store/postExampleDummyData';
import Post from '../components/Post';
const Posts = () => {

const [selectedFilter, setSelectedFilter] = useState('all');
const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };
    //이제 post들을 가져와서 띄우는 형식으로 보여주면 된다. Post들을 가져오는 부분을 여기에 짜고 Post에 정보들을 넘겨줘서 map으로 띄워주면 된다.
    return (
        <BigBox>
        <FilterDiv>
       
        <Filtering value={selectedFilter} onChange={handleFilterChange}>
          <option value="">필터</option>
          <option value="all">전체</option>
          <option value="latest">최신순</option>
          <option value="likes">좋아요순</option>
        </Filtering>
        
        </FilterDiv>
        
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
const Filtering = styled.select`
position: relative;
top: 183.79px;
left: 576.63px;
border-radius: 16px;
border: 1px;
font-family: Pretendard Variable;
font-size: 27px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0.01em;
text-align: center;
width: 126.05px;
height: 49.26px;
border: 1px solid #000000;
`;


const FilterDiv = styled.div`

`;

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