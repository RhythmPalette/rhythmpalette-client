import styled from 'styled-components';

import { ReactComponent as FeedDummyImage1} from '../assets/FeedDummyImage1.svg'

const StyledFeedDummyImage1 = styled(FeedDummyImage1)`
    width: 757.55px;
    height: 604.13px;
`;

const dummyFeeds = [
    {
      id: 1,
      username: "user1",
      trackInfo: "Track: 분홍신 - 아이유",
      ImageComponent: StyledFeedDummyImage1,
      likes: 20,
      comments: 5,
      description: "기분 좋은 하루"
    },
    {
      id: 2,
      username: "user2",
      trackInfo: "Track: Ditto - NewJeans",
      ImageComponent: StyledFeedDummyImage1,
      likes: 15,
      comments: 3,
      description: "따뜻한 겨울"
    },
  ];
  
  export default dummyFeeds;