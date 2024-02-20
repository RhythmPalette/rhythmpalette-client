import React from 'react'
import styled from 'styled-components';

import {ReactComponent as Image2} from '../assets/Image2.svg'

const StyledImage2 = <Image2 width="92px" height="92px" />;

const post_id = [
    { day: 5, image: { component: StyledImage2, alt: 'Image 5' } },
    { day: 24, image: { component: StyledImage2, alt: 'Image 24' } },

    { day: 31, image: { component: StyledImage2, alt: 'Image 31' } },
  ];


export default post_id;
