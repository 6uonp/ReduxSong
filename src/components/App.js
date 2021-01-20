import React from 'react'
import SongList from './SongList'
import SongDetail from './SongDetail'

import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
`

const App = () => {
    return (
        <Wrapper>
            <SongList />
            <SongDetail />
        </Wrapper>
    )
}

export default App;