import React, {useEffect, useState} from 'react'
import axios from 'axios'


export default (props) => {

    const albumSlug = props.match.params.album;

    const [albumData, setAlbumData] = useState({});
    console.log(props);

    useEffect(() => {

    },[]);



    return (
        <div>
            {albumSlug}
            {props.other}
        </div>
    )
}