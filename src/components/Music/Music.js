import React from 'react';
import BandcampPlayer from 'react-bandcamp'
import AlbumList from './Albums/AlbumsList';


function Music() {
    return (
        <div className="music-page page-wrapper dark-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <AlbumList/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Music;