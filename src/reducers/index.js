
import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Take on me', duration: '3:40' },
        { title: 'Godzila', duration: '3:20' },
        { title: 'Some body that i used to know', duration: '4:10' },
        { title: 'Rap god', duration: '6:13' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})