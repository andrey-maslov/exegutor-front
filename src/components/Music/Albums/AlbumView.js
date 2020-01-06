import React from 'react'
import axios from 'axios'


class AlbumView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.albumSlug = this.props.match.params.album;
        this.admHost = process.env.REACT_APP_ADMIN_HOST;
    }

    componentDidMount() {
        const fetchData = async () => {
            const result = await axios( this.admHost + '/exegutor/v1/albums/' + this.albumSlug );
            this.setState(result.data)
        };
        fetchData();
    }

    render() {
        
        return (
            <div>
                {this.state.title}
            </div>
        )
    }

}

export default AlbumView;