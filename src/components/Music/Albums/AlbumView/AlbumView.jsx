import React from 'react'
import axios from 'axios'
import BandcampPlayer from 'react-bandcamp'

import styles from './AlbumView.module.css'


class AlbumView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.albumSlug = this.props.match.params.album;
        this.admHost = process.env.REACT_APP_ADMIN_HOST;
    }

    playerHeight = '500px';

    

    componentDidMount() {
        const fetchData = async () => {
            const result = await axios( this.admHost + '/exegutor/v1/albums/' + this.albumSlug );
            this.setState(result.data)
        };
        fetchData();
    }

    render() {
        
        if (this.state.title) {
            return (
                <div className={styles.pageWrapper + " page-wrapper"}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="content">
                                    <h1 
                                        className={styles.pageTitle}
                                        dangerouslySetInnerHTML={{__html: this.state.title}}
                                    />

                                    <div className="row">

                                        <div className="col-lg-4">
                                            <BandcampPlayer 
                                                album={this.state.host_id} 
                                                height={this.playerHeight}
                                            />
                                        </div>

                                        <div className="col-lg-8">
                                            <p>
                                                <small>Release year: </small> 
                                                <strong dangerouslySetInnerHTML={{__html: this.state.year}}/>
                                                </p>
                                            <p>
                                                <small>Format: </small> 
                                                <strong dangerouslySetInnerHTML={{__html: this.state.format}}/>
                                                </p>
                                            {this.state.publisher &&
                                                <p>
                                                    <small>Publisher: </small>
                                                    <strong dangerouslySetInnerHTML={{__html: this.state.publisher}}/>
                                            </p>}

                                            {this.state.content &&<div dangerouslySetInnerHTML={{__html: this.state.content}} />}
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