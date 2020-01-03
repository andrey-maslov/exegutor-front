import React from 'react';
import BandcampPlayer from 'react-bandcamp'
import AlbumList from './Albums/AlbumsList';


function Music() {
    return (
        <div className="music-page page-wrapper">
            <div className="container">
                <AlbumList/>
            </div>
        </div>
    )
}

export default Music;