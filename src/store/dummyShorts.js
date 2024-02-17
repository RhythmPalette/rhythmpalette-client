import styled from 'styled-components';

import { ReactComponent as ShortDummyImage1} from '../assets/ShortDummyImage1.svg';
import { ReactComponent as ShortDummyImage2} from '../assets/IconEmotionGood.svg';
import { ReactComponent as ShortDummyImage3} from '../assets/ShortDummyImage1.svg';
import { ReactComponent as ShortDummyImage4} from '../assets/IconEmotionHappy.svg';

const StyledShortDummyImage1 = styled(ShortDummyImage1)`
    width: 483.58px;
    height: 786.43px;
`;

const StyledShortDummyImage2 = styled(ShortDummyImage2)`
    width: 37.36px;
    height: 48.37px;
`;

const StyledShortDummyImage3 = styled(ShortDummyImage3)`
    width: 483.58px;
    height: 786.43px;
`;

const StyledShortDummyImage4 = styled(ShortDummyImage4)`
    width: 37.36px;
    height: 48.37px;
`;


const dummyShorts = [
    {
      id: 3,
      username: "user1",
      trackInfo: "Track: 분홍신 - 아이유",
      ImageComponent: StyledShortDummyImage1,
      likes: 20,
      comments: 5,
      hashtags: "#분홍신 #이노래너무좋아요 #아이유너무좋아사랑해",
      emotion: StyledShortDummyImage2,
    },
    {
      id: 4,
      username: "user2",
      trackInfo: "Track: Ditto - NewJeans",
      ImageComponent: StyledShortDummyImage3,
      likes: 15,
      comments: 3,
      hashtags: "#뉴진스 #겨울감성 #오노추",
      emotion: StyledShortDummyImage4,
    },
  ];
  
  export default dummyShorts;