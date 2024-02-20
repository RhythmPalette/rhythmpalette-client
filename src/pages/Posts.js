import React ,{ useEffect, useState} from 'react';
import styled  from 'styled-components';
import { dummy } from '../store/postExampleDummyData';
import Post from '../components/Post';
import NavBar from '../components/NavBar';
import axios from 'axios';
import SearchingBar from '../components/SearchingBar';
import { useLocation } from 'react-router-dom';
const Posts = () => {
const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbHNndXIyMyIsImlhdCI6MTcwODQ2MjI1NywiZXhwIjoxNzA4NDYzNjk3fQ.8y79V-LGgehL-vo9RuIqyykgutH4ZnPzUWJa6kvcAJs";
const [selectedFilter, setSelectedFilter] = useState('all');
const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };
const [userData, setUserData] = useState();
const [postData, setPostData] = useState();
const [firstTime,setFirstTime] = useState(true);
const genreData = useLocation();
//여기서 클라우드는 누른대로 해당 장르와 관련된 것을 검색하면 되는 것이고
//artist와 관련된 데이터로 들어오면 artist가 해당 artist랑 같은 post들을 띄워주면 되는거니까 ㅇㅇ
//그리고 필터링 기능은 솔직히 빼도 된다는 식으로 하면 된다.
useEffect(() => {


    const getUserData  = async (userName)=>{
        try{
            const response = await axios.get(`http://52.78.99.156:8080/api/v1/user/${userName}`,{
                headers : {
                    'Authorization': 'Bearer ' + access_token,
                },
              
            });
            console.log(response);
            console.log(response.data.data.userId);
            setUserData(response.data.data.userId);
            
        }
        catch (error) {
            console.error('유저데이터 송신의 API 호출 에러:', error);
            console.error('어떤 에러:',error.response);
          }
    }

    const getPost = async ()=>{
        try{
            const response = await axios.get('http://52.78.99.156:8080/api/v1/posts?',{
           
            headers : {
                    'Authorization': 'Bearer ' + access_token,
                },
            params : {
                userId : 45,
                pageable :{
                        "page": 0,
                        "size": 1,
                        "sort": [
                          "DESC"
                        ]
                }
            }
            });
            console.log(response);
            setPostData(response.data)
        }
        catch (error) {
            console.error('API 호출 에러:', error);
            console.error('어떤 에러:',error.response);
          }

    }
    
    getUserData("alsgur23");
    getPost();
    // //localStorage로 얻어온 userName으로 검색
    // if(genreData&&firstTime){
    //     getPost(genreData);
    //     setFirstTime(!firstTime);
    // }
    // else{
    //     getPost(selectedFilter);
    // }
},[])

    

    //이제 post들을 가져와서 띄우는 형식으로 보여주면 된다. Post들을 가져오는 부분을 여기에 짜고 Post에 정보들을 넘겨줘서 map으로 띄워주면 된다.
    return (
        <PostsPackage>
        <NavBar/>
        <SearchingBar/>
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
//여기서 이제 필터링에 따라 가져온 정렬을 다르게 해서 postData.data.contents로 맵핑하면 되게끔 되어있음
//여기에 map함수 쪽만 바꿔주면 제대로 실행됨 
//contents를 다 넘기고 imageurl받게설정
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