import { useState,  useRef, useCallback, Fragment } from "react";
import styled from "styled-components";
import { useFeedView } from "../hooks/useFeedView";
import NavBar from "../components/NavBar";
import IconLike from "../assets/IconLike.svg";
import IconComment from "../assets/IconComment.svg";
import IconAlarm from "../assets/IconAlarm.svg";
import IconProfile from "../assets/IconProfile.svg";
import IconSave from "../assets/IconSave.svg";
import IconSeeMore from "../assets/IconSeeMore.svg";


const PageLayout = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    height: 1080px; 
    max-width: 1910.81px;
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
    margin-left: 402px;
`;

const SearchBarContainer = styled.div`
    display: flex;
    width: 1560.78px;
    height: 161.33px;
    background-color: #F9F9F9;
`;

const SearchBar = styled.div`
  display: flex;
  flex-grow: 1; 
  align-items: center; 
`;

const SearchInput = styled.input`
    width: 770.37px; 
    height: 62px;
    padding: 12px 20px; 
    margin: 8px 0; 
    border: #262626;
    border-radius: 50px; 
    background-color: #E3E3E3;
    margin-left: 221.79px;
    margin-top: 49.85px;
    margin-bottom: 49.49px;
    &:focus {
        outline: none;
    }
    &::placeholder {
        font-size: 26px;
        color: #9A9A9A;
    }
`;

const IconsContainer = styled.div`
    display: flex;
    gap: 19.33px; 
    margin-top: 49.85px;
    margin-right: 83.73px;
`;

const IconAlarmStyled = styled.img`
    width: 36.79px;
    height: 39.23px;
    margin-top: 0px;
    margin-right: 20px;
`;

const IconProfileStyled = styled.img`
    width: 62.49px;
    height: 62.49px;
    margin-top: -10px;
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

    return (
        <PageLayout>
            <NavBar />
            <PageContainer>
            <SearchBarContainer>
                <SearchBar>
                    <SearchInput
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder="Search"
                    />
                </SearchBar>
                <IconsContainer>
                    <IconAlarmStyled src={IconAlarm} alt="Alarm" />
                    <IconProfileStyled src={IconProfile} alt="Profile" />
                </IconsContainer>
            </SearchBarContainer>
            <Content>
            {feeds.map((feed, index) => {
                const ImageComponent = feed.ImageComponent;
                const isLastFeed = feeds.length === index + 1;
                const feedContent = (
                    <Fragment key={feed.id}>
                        <FeedHeader>
                            <div>{feed.username}</div>
                            <div>{feed.trackInfo}</div>
                        </FeedHeader>
                        <ImageComponent />
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

                    </Fragment>
                );
            
                return isLastFeed 
                    ? <div ref={lastFeedElementRef}>{feedContent}</div> 
                    : feedContent;
            })}
            {loading && '...loading'}
            <div>{error && 'Error'}</div>
            </Content>
            </PageContainer>
        </PageLayout>
    )
}

export default Home;