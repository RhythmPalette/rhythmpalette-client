import React from 'react'
import styled from 'styled-components';

import {ReactComponent as Image1} from '../assets/Image1.svg'

const StyledImage1 = <Image1 width="80px" height="100px" />;

const dummyStory = [
    { day: 3, image: { component: StyledImage1, alt: 'Image 3' } },
    { day: 15, image: { component: StyledImage1, alt: 'Image 15' } },
  ];


export default dummyStory;