import React from 'react'
import axios from 'axios'
import BandcampPlayer from 'react-bandcamp'

import TrackItem from './TrackItem/TrackItem'

import styles from './AlbumView.module.css'


class AlbumView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            albumData : {},
            tracklist: []
        };
        this.albumSlug = this.props.match.params.album;
        this.admHost = process.env.REACT_APP_ADMIN_HOST;
        this.playerHeight = '500px';
    }



    componentDidMount() {
        const fetchData = async () => {
            const result = await axios( this.admHost + '/exegutor/v1/albums/' + this.albumSlug );
            this.setState({
                albumData : result.data
            });
            return result.data;
        };
        fetchData()
            .then((data)=>{
                if(data.tracks) {

                    const _tracklist = data.tracks.map((item, index) => <TrackItem track={item} key={index.toString()} />)
                    this.setState({
                        tracklist: _tracklist
                    })

                }
            });
    }






    render() {
        
        if (this.state.albumData.title) {
            return (
                <div className={styles.pageWrapper + " page-wrapper"}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="content">
                                    <h1 
                                        className={styles.pageTitle}
                                        dangerouslySetInnerHTML={{__html: this.state.albumData.title}}
                                    />

                                    <div className="row">

                                        <div className="col-lg-4">
                                            <BandcampPlayer 
                                                album={this.state.albumData.host_id}
                                                height={this.playerHeight}
                                            />
                                        </div>

                                        <div className="col-lg-8">
                                            <p>
                                                <small>Release year: </small> 
                                                <strong dangerouslySetInnerHTML={{__html: this.state.albumData.year}}/>
                                                </p>
                                            <p>
                                                <small>Format: </small> 
                                                <strong dangerouslySetInnerHTML={{__html: this.state.albumData.format}}/>
                                                </p>
                                            {this.state.publisher &&
                                                <p>
                                                    <small>Publisher: </small>
                                                    <strong dangerouslySetInnerHTML={{__html: this.state.albumData.publisher}}/>
                                            </p>}

                                            {this.state.content &&<div dangerouslySetInnerHTML={{__html: this.state.albumData.content}} />}
                                            <p dangerouslySetInnerHTML={{__html: this.state.albumData.excerpt}}/>

                                            {this.state.tracklist && <ol>{this.state.tracklist}</ol>}

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div />
        }

    }

}

export default AlbumView;