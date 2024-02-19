import React,{useEffect, useState} from 'react';
import styled  from 'styled-components';
import { dummy } from '../store/postExampleDummyData';
import Post from '../components/Post';
import NavBar from '../components/NavBar';
import axios from 'axios';
const Posts = () => {

const [selectedFilter, setSelectedFilter] = useState('all');
const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };
//   useEffect(()=>{
//     const getPost = async ()=>{
//         try{
//             const response = await axios.get('http://52.78.99.156:8080/api/v1/posts',null,{
 
//             headers : {
//                     'Authorization': 'Bearer ' + access_token,
//                 },
//             });
//             console.log(response);
//         }
//         catch (error) {
            
//             console.error('API 호출 에러:', error);
//             console.error('어떤 에러:',error.response);
//           }

//     }
//     getPost();
// },[])

    

    //이제 post들을 가져와서 띄우는 형식으로 보여주면 된다. Post들을 가져오는 부분을 여기에 짜고 Post에 정보들을 넘겨줘서 map으로 띄워주면 된다.
    return (
        <PostsPackage>

        <NavBar/>
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
        </PostsPackage>
    );
};


export default Posts;
const PostsPackage = styled.div`
    display: flex;
    flex-direction: row;
`;
const Filtering = styled.select`
position: absolute;
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

`;

const PostContainer = styled.div`
    display: grid;
    grid-template-columns: 257.93px 257.93px 257.93px 257.93px ;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 10px ; 
    row-gap: 20px;
    column-gap: 80px;
    border-radius: 10px;
    justify-content: center;
    position: absolute;
    Top :243.45px;
    Left: 576.79px;
    overflow: scroll;
    min-height: 400px;
    max-height: 800px; 
    -ms-overflow-style:none; /* IE and Edge */
    scrollbar-width : none; /* Firefox */
    &::-webkit-scrollbar{
    display: none;
     };
` ;