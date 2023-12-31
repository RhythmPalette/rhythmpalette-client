import React from 'react'
import styled from 'styled-components'

const SayHello = () => {
  return (
    <Outlay>
      <Hello>Hello!</Hello>
    </Outlay>

  )
}

export default SayHello

const Outlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Hello = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;