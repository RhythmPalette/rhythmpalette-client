import { useState,  useRef, useCallback, Fragment } from "react";
import { useNavigate } from 'react-router-dom'; 
import styled from "styled-components";
import { useFeedView } from "../hooks/useFeedView";
import NavBar from "../components/NavBar";
import SearchBarContainer from "../components/SearchBarContainer";
import IconLike from "../assets/IconLike.svg";
import IconComment from "../assets/IconComment.svg";
import IconSave from "../assets/IconSave.svg";
import IconSeeMore from "../assets/IconSeeMore.svg";


const PageLayout = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    height: 1080px; 
    max-width: 1920px;
    margin: auto;
`;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column; 
    width: 100%;
    height: 1080px; 
    overflow: auto;
`;

const Content = styled.div`
    flex-grow: 1;
    padding: 20px;
    overflow-y: auto;
    margin-left: 402.42px;
    scrollbar-width: none; 
    -ms-overflow-style: none; 

    &::-webkit-scrollbar {
        display: none; 
    }
`;


const FeedHeader = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 400px; 
    font-size: 25px;
`;

const FeedContainer = styled.div`
    background-color: #F9F9F9; 
    padding: 16px; 
    width: 756.13px;
    height: 212.23px;
`;

const ContainerIcon = styled.div`
    display: flex;
    justify-content: start;
    gap: 19.33px;
`;


const IconConatiner = styled.div`
    display: flex;
    justify-content: start;
    gap: 19.33px;
    margin-right: 560px;
`;

const Icon = styled.img`
    width: 27.88px;
    height: 24px;
    cursor: pointer;
`


const Description = styled.div`
    color: #000000; 
    font-size: 25px; 
    margin-top: 8px; 
`;




function Home() {
    const [query, setQuery] = useState(''); 
    const [pageNumber, setPageNumber] = useState(1);

    const { feeds, hasMore, loading, error } = useFeedView(query, pageNumber);

    const observer = useRef();
    
    const lastFeedElementRef = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                console.log('entries[0].isInteresting : ', entries[0].isIntersecting);
                if (entries[0].isIntersecting && hasMore) {
                    setPageNumber((prevPageNumber) => prevPageNumber + 1);
                }
            });

            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );
    console.log('observer.current : ', observer.current);

    const handleSearch = (e) => {
        setQuery(e.target.value);
        setPageNumber(1);
      };

    const navigate = useNavigate();

    const goToShortForm = () => {
        navigate('/shortform');
    };

    return (
        <PageLayout>
            <NavBar />
            <PageContainer>
            <SearchBarContainer query={query} handleSearch={handleSearch} />
            <Content>
            {feeds.map((feed, index) => {
                const isLastFeed = feeds.length === index + 1;
                return (
                    <div key={feed.id} ref={isLastFeed ? lastFeedElementRef : null}>
                        <FeedHeader>
                            <div>{feed.username}</div>
                            <div>{feed.trackInfo}</div>
                        </FeedHeader>
                        <div onClick={goToShortForm}>
                            <feed.ImageComponent />
                            <FeedContainer>
                                <ContainerIcon>
                                    <IconConatiner>
                                        <Icon src={IconLike} alt="Like" />
                                        <Icon src={IconComment} alt="Comment"/>
                                    </IconConatiner>
                                    <IconConatiner>
                                        <Icon src={IconSave} alt="Save" />
                                        <Icon src={IconSeeMore} alt="See more"/>
                                    </IconConatiner>
                                </ContainerIcon>
                                <Description>{feed.description}</Description>
                            </FeedContainer>
                        </div>
                    </div>
                );
            })}
            {loading && '...loading'}
            {error && 'Error'}
            </Content>
            </PageContainer>
        </PageLayout>
    )
}

export default Home;