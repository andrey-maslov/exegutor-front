import React from 'react'
import {NavLink} from 'react-router-dom'
import {Audio} from 'svg-loaders-react'
import axios from 'axios'

import AlbumsItem from './AlbumsItem'

let admHost = process.env.REACT_APP_ADMIN_HOST;

class AlbumList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            albumsData: [],
            renderAlbums: []
        };
    }


    componentDidMount() {

        if (true) {
            console.log(this.state.albumsData);
        }

        axios
            .get(admHost + '/exegutor/v1/albums')
            .then(response => {
                const data = response.data;
                return data;
            })
            .then(data => {
                this.setState({albumsData: data})
                // this.renderAlbums(data);
            })
            .catch(error => {
                console.error(error)
            })

    }


    render() {
        if (!this.state.albumsData.length > 0) {
            return (
                <div className="loading">
                    <Audio stroke="#000" fill="#000"/>
                </div>
            )
        } else {
            return (
                <ul className="albums-list">
                    {this.state.albumsData.map((item, index) => (
                        <AlbumsItem album={item} key={index}/>
                    ))}
                </ul>
            )
        }

    }

}

export default AlbumList