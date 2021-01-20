import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions/index'
import styled from 'styled-components'

const ListOfSong = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 700px;
    margin: auto;
`

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map(element => {
            return (
                <ListOfSong key={element.title}>
                    <h3>{element.title}</h3>
                    <button onClick={() => this.props.selectSong(element)}>SELECT</button>
                </ListOfSong>
            )
        })
    }
    render() {
        return <div>{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs }
}

export default connect(mapStateToProps, { selectSong: selectSong })(SongList)
// export default SongList