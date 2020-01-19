import React from 'react';
import AlbumList from './Albums/AlbumsList';


function Music(props) {
    return (
        <div className="music-page page-wrapper dark-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <AlbumList albums={props.albums} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Music;