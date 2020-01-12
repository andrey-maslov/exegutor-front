import React from 'react'
import {NavLink} from 'react-router-dom'

export default (props) => {
    return (
        <li className="albums-item">
            <img src={props.album.thumb} alt={props.album.title} className="albums-item-img"/>
            <div className="albums-item-content">
                <NavLink className="albums-item-title-link" to={`/music/${props.album.slug}`}>
                    <h3 dangerouslySetInnerHTML={{__html: props.album.title}}/>
                </NavLink>
                <p><small>Release year:</small> <strong dangerouslySetInnerHTML={{__html: props.album.year}}/></p>
                <p><small>Format:</small> <strong dangerouslySetInnerHTML={{__html: props.album.format}}/></p>
                {props.album.publisher &&
                <p>
                    <small>Publisher: </small>
                    <strong dangerouslySetInnerHTML={{__html: props.album.publisher}}/>
                </p>}

            </div>
        </li>
    )
}
