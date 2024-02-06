import React from 'react'
import styled from 'styled-components'
import SayHello from '../components/SayHello'
import { ReactComponent as Logo } from "../assets/RhythmPaletteLogo.svg"

const Landing = () => {
  return (
    <>
      <PageBody>
        <Logo />
        <SayHello />
      </PageBody>
    </>
  )
}

export default Landing
const PageBody = styled.div`
  width: 100vw;  
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;