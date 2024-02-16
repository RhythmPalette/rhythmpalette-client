import { useState,  useRef, useCallback, Fragment, useEffect } from "react";
import styled from "styled-components";
import { useShortView } from "../hooks/useShortView";
import NavBar from "../components/NavBar";
import SearchBarContainer from "../components/SearchBarContainer";
import IconPlayWhite from "../assets/IconPlayWhite.svg";
import IconLikeWhite from "../assets/IconLikeWhite.svg";

import IconCommentWhite from "../assets/IconCommentWhite.svg";
import IconSaveWhite from "../assets/IconSaveWhite.svg";
import IconSeeMoreWhite from "../assets/IconSeeMoreWhite.svg";
import IconEdit from "../assets/IconEdit.svg";
import IconEmotion from "../assets/IconEmotionGood.svg";
import IconProfile from "../assets/IconProfile.svg";
import IconPause from "../assets/IconPause.svg";
import Modal from "../components/CommentModal";
import EditModal from "../components/EditModal";

const PageLayout = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    height: 1080px; 
    max-width: 1920px;
    margin: auto;
    background-color: #EEEEEE; 
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

const ImageWrapper = styled.div`
    position: relative;
    width: 483.58px;
    height: 786.43px;
`;

const InfoOverlay = styled.div`
    position: absolute;
    top: 18.51px;  
    left: 26.02px;
    color: white; 
    font-size: 25px;
`;

const ProfileOverlay = styled.div`
    display: flex;
    align-items: center;
    gap: 21.2px;
    margin-top: 10.49px;
`

const ProfileImg = styled.img`
`

const TopIcons = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    gap: 10px;
    
`;

const EditIcon = styled.img`
    position: absolute;
    width: 16.94px;
    height: 31.49px;
    top: 21.49px;
    left: 342.7px;
`

const SaveIcon = styled.img`
    position: absolute;
    width: 30.66px;
    height: 35.74px;
    top: 21.49px;
    left: 386.93px; 
`;

const SeeMoreIcon = styled.img`
    position: absolute;  
    width: 5.99px;
    height: 31.96px;
    top: 21.49px;
    left: 444.11px;
`;


const OverlayIcons = styled.div`
    position: absolute;
    top: 538.19px;
    left: 417.79px;
    display: flex;
    flex-direction: column;
    gap: 20.03px;
    
`;

const EmotionIcon = styled.img`
    width: 45px;
    height: 45px;
`;


const LikeIcon = styled.img`
    width: 41.1px;
    height: 37.86px;
  
`;

const CommentIcon = styled.img`
    width: 39.02px;
    height: 38.91px;
`;

const HashTags = styled.div`
    position: absolute;
    top: 704px; 
    left: 26.26px; 
    color: #FFFFFF;
    font-size: 20px;
    margin-top: 8.4px;
    white-space: normal; 
    width: 300px;
    overflow-wrap: normal;
`;








function Shortform() {
    const [query, setQuery] = useState(''); 
    const [pageNumber, setPageNumber] = useState(1);
    // const [isCommentModalOpen, setIsCommentModalOpen] =useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentEditId, setCurrentEditId] = useState(null);
    const [currentTrackInfo, setCurrentTrackInfo] = useState('');
    const [currentTrackImage, setCurrentTrackImage] = useState('');
    const [likes, setLikes] = useState({});
    const [postLikeList, setPostLikeList] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false); 
    const audioRef = useRef(null); 
    
    const { shorts, hasMore, loading, error } = useShortView(query, pageNumber);


    const observer = useRef();
    
    const lastShortElementRef = useCallback(
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


    const handleSearch = (e) => {
        setQuery(e.target.value);
        setPageNumber(1);
      };


    useEffect(() => {
        const fetchPostLikeList = async () => {
            try {
                const postId = "";
                const response = await fetch(`/posts/${postId}/like`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch post like list");
                }
                const data = await response.json();
                setPostLikeList(data.postLikeList);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchPostLikeList();
    }, []);

    const toggleLike = async (shortId) => {
        try {
            const method = likes[shortId] ? "DELETE" : "POST";
            const response = await fetch(`/posts/${shortId}/like`, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: "Toggle like" }),
            });
            if (!response.ok) {
                throw new Error("Failed to toggle like");
            }
            const data = await response.json();

            console.log("Success:", data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const item = {
        "preview_url": "https://p.scdn.co/mp3-preview/7339548839a263fd721d01eb3364a848cad16fa7?cid=613834041d6342f8b26d78e730c2c746", // 미리듣기 URL
        "external_urls": {
            "spotify": "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V" 
        }
    };

    const playPreview = (previewUrl) => {
        if (!audioRef.current) {
            audioRef.current = new Audio(previewUrl);
        } else {
            audioRef.current.src = previewUrl;
        }
        audioRef.current.play().catch(err => console.error("Audio play failed:", err));
        setIsPlaying(true);
    };

    const redirectToSpotify = (externalUrl) => {
        window.open(externalUrl, "_blank");
    };

    const togglePlay = () => {
        if (item.preview_url) {
            if (isPlaying && audioRef.current) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                playPreview(item.preview_url);
            }
        } else if (item.external_urls.spotify) {
            redirectToSpotify(item.external_urls.spotify);
        }
    };
    
    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);


    const openEditModal = (id, trackInfo, trackImage) => {
        setCurrentEditId(id);
        setCurrentTrackInfo(trackInfo);
        setCurrentTrackImage(trackImage);
        setIsEditModalOpen(true);
      }; 

    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setCurrentEditId(null);
    };


    return (
        <PageLayout>
            <NavBar />
            <PageContainer>
                <SearchBarContainer query={query} handleSearch={handleSearch} />
                <Content>
                {shorts.map((short, index) => {
                    const isLastShort = shorts.length === index + 1;
        
                    return (
                        <div key={short.id} ref={isLastShort ? lastShortElementRef : null}>
                            <FeedHeader>
                            </FeedHeader>
                            <ImageWrapper>
                                <short.ImageComponent />
                                <InfoOverlay>
                                    <div>{short.trackInfo}</div>
                                    <ProfileOverlay>
                                        <ProfileImg src={IconProfile} alt="프로필사진"/>
                                        <div>{short.username}</div>
                                    </ProfileOverlay>
                                </InfoOverlay>
                                <TopIcons>
                                    <EditIcon 
                                        src={IconEdit} 
                                        alt="EditButton" 
                                        onClick={() => openEditModal(short.id, short.trackInfo, short.trackImage)} />
                                    <SaveIcon src={IconSaveWhite} alt="Save"/>
                                    <SeeMoreIcon src={IconSeeMoreWhite} alt="SeeMore"/>
                                </TopIcons>
                                <HashTags>{short.hastags}</HashTags>
                                <OverlayIcons>
                                    <EmotionIcon src={IconEmotion} alt="Emotion"/>
                                    <img 
                                        src={isPlaying ? IconPause : IconPlayWhite}
                                        alt={isPlaying ? "Pause" : "Play"}
                                        onClick={togglePlay}
                                        style={{cursor: "pointer",
                                                width: isPlaying ? '41.3px' : '41.36px',
                                                height: isPlaying ? '37.19px' :'41.36px',
                                                }} />
                                    <LikeIcon 
                                        src={IconLikeWhite}
                                        alt="Like" 
                                        onClick={() => toggleLike(short.id)}
                                        style={{cursor:"pointer"}}
                                    />
                                    <CommentIcon src={IconCommentWhite} alt="Comment" />
        
                
                                
                                </OverlayIcons>
                            </ImageWrapper>
                        </div>
                    );
                })}
                {loading && '...loading'}
                {error && 'Error'}
                </Content>
                {isEditModalOpen && currentEditId !== null && (
                    <EditModal
                        isOpen={isEditModalOpen}
                        onRequestClose={closeEditModal}
                        trackInfo={currentTrackInfo}
                        trackImage={currentTrackImage}
                    />
                )}
            </PageContainer>
        </PageLayout>
    );
}

export default Shortform; 