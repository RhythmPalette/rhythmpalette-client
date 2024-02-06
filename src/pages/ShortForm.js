import { useState,  useRef, useCallback, Fragment } from "react";
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
import IconEmotion from "../assets/IconEmotion.svg";
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

const TrackInfoOverlay = styled.div`
    position: absolute;
    top: 18.51px;  
    left: 26.02px;
    color: white; 
    font-size: 25px;
`;


const OverlayIcons = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    gap: 10px;
    
`;

const PlayIcon = styled.img`
    position: absolute;
    bottom: 19.68px; 
    left: 17.72px; 
`;

const LikeIcon = styled.img`
    position: absolute;
    bottom: 21.52px;
    left: 83.61px; 
`;

const CommentIcon = styled.img`
    position: absolute;
    bottom: 21.52px;
    left: 149.33px;
`;

const SaveIcon = styled.img`
    position: absolute;
    bottom: 19.56px;
    left: 421.48px; 
`;

const EmotionIcon = styled.img`
    position: absolute;  
    bottom: 669.89px;
    left: 26.26px;
`

const EditIcon = styled.img`
    position: absolute;  
    bottom: 729.18px;
    left: 392.7px;
`

const SeeMoreIcon = styled.img`
    position: absolute;  
    bottom: 729.18px;
    left: 444.77px;
`;



function Shortform() {
    const [query, setQuery] = useState(''); 
    const [pageNumber, setPageNumber] = useState(1);
    // const [isCommentModalOpen, setIsCommentModalOpen] =useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentEditId, setCurrentEditId] = useState(null);
    const [currentTrackInfo, setCurrentTrackInfo] = useState('');
    const [currentTrackImage, setCurrentTrackImage] = useState('');
    
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
    console.log('observer.current : ', observer.current);

    const handleSearch = (e) => {
        setQuery(e.target.value);
        setPageNumber(1);
      };

      //const openCommentModal = () => {
      //  setIsCommentModalOpen(true);
      //};
    
      //const closeCommentModal = () => {
      //  setIsCommentModalOpen(false);
      //};

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
                    const ImageComponent = short.ImageComponent;
                    const isLastShort = shorts.length === index + 1;
                    const ShortContent = (
                        <Fragment key={short.id}>
                            <FeedHeader>
                                {/* <div>{short.username}</div> */}
                            </FeedHeader>
                            <ImageWrapper>
                                <ImageComponent />
                                <TrackInfoOverlay>{short.trackInfo}</TrackInfoOverlay>
                                <OverlayIcons>
                                    <PlayIcon src={IconPlayWhite} alt="Play" />
                                    <LikeIcon src={IconLikeWhite} alt="Like" />
                                    <CommentIcon src={IconCommentWhite} alt="Comment" /*onClick={openCommentModal}*/ />
                                    <SaveIcon src={IconSaveWhite} alt="Save"/>
                                    <EmotionIcon src={IconEmotion} alt="Emotion"/>
                                    <EditIcon src={IconEdit} alt="EditButton" onClick={() => openEditModal(short.id, short.trackInfo, short.trackImage)} />
                                    <SeeMoreIcon src={IconSeeMoreWhite} alt="SeeMore"/>
                                </OverlayIcons>
                            </ImageWrapper>
                           {/* <Modal isOpen={isCommentModalOpen} close={closeCommentModal} /> */}
                        </Fragment>
                    );
                
                    return isLastShort 
                        ? <div ref={lastShortElementRef}>{ShortContent}</div> 
                        : ShortContent;
                })}
                {loading && '...loading'}
                <div>{error && 'Error'}</div>
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