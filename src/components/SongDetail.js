import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ currentSelectedSong }) => {
    if (!currentSelectedSong) {
        return <div>Select a song</div>
    }
    return (
        <div style={{ marginLeft: '15px' }}>
            <p>
                Title: {currentSelectedSong.title}
                <br />
                Duration: {currentSelectedSong.duration}
            </p>

        </div >
    )
}

const mapStateToProps = (state) => {
    return { currentSelectedSong: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);