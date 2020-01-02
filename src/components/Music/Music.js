import React from 'react';
import BandcampPlayer from 'react-bandcamp'

import './Music.scss';

function Music() {
    return (
        <div className="music-wrapper">
            <h3>Music</h3>
            <BandcampPlayer
                album="1610199927"
                size="large"
                tracklist="true"
                width="500px"
                height="800px"
                bgcol="111111"
            />
        </div>
    )
}

export default Music;