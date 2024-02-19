import styled from 'styled-components';

import { ReactComponent as FeedDummyImage1} from '../assets/FeedDummyImage1.svg'

const StyledFeedDummyImage1 = styled(FeedDummyImage1)`
    width: 757.55px;
    height: 604.13px;
`;

const dummyFeeds = [
    {
      feedId: 1,
      feedUsername: "user1",
      feedTrackInfo: "Track: 분홍신 - 아이유",
      feedTrackImage: StyledFeedDummyImage1,
      feedLikes: 20,
      feedComments: 5,
      feedDescription: "기분 좋은 하루"
    },
    {
      feedId: 2,
      feedUsername: "user2",
      feedTrackInfo: "Track: Ditto - NewJeans",
      feedTrackImage: StyledFeedDummyImage1,
      feedLikes: 15,
      feedComments: 3,
      feedDescription: "따뜻한 겨울"
    },
  ];
  
  export default dummyFeeds;