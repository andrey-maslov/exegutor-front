import React from 'react'
import {Audio} from 'svg-loaders-react'

import AlbumsItem from './AlbumsItem'

const AlbumList = (props) => {

        if (props.albums.albumsData.length === 0) {
            return (
                <div className="loading">
                    <Audio stroke="#000" fill="#000"/>
                </div>
            )
        } else {
            return (
                <ul className="albums-list">
                    {props.albums.albumsData.map((item, index) => (
                        <AlbumsItem album={item} key={index}/>
                    ))}
                </ul>
            )
        }
}

export default AlbumList