import styled from 'styled-components';

import { ReactComponent as ShortDummyImage1} from '../assets/ShortDummyImage1.svg';

const StyledShortDummyImage1 = styled(ShortDummyImage1)`
    width: 483.58px;
    height: 786.43px;
`;

const dummyShorts = [
    {
      id: 1,
      username: "user1",
      trackInfo: "Track: 분홍신 - 아이유",
      ImageComponent: StyledShortDummyImage1,
      likes: 20,
      comments: 5,
      description: "기분 좋은 하루"
    },
    {
      id: 2,
      username: "user2",
      trackInfo: "Track: Ditto - NewJeans",
      ImageComponent: StyledShortDummyImage1,
      likes: 15,
      comments: 3,
      description: "따뜻한 겨울"
    },
  ];
  
  export default dummyShorts;