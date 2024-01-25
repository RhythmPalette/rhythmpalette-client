import React from 'react'
import styled from 'styled-components'
import LeftBar from '../components/LeftBar'
import SearchingBar from '../components/SearchingBar'

const Layout = styled.div`
    display : flex;
    width: 1892.951px;
    height: 1092.061px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

const Profile = () => {
  return (
    <Layout>
        <LeftBar>

        </LeftBar>
        <SearchingBar>

        </SearchingBar>
    </Layout>
    
  )
}

export default Profile;
