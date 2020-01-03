import React from 'react'
import {NavLink} from 'react-router-dom'

export default (props) => {
    return (
        <li className="albums-item" key={props.album.id}>
            <img src={props.album.thumb} alt={props.album.title} className="albums-item-img" />
            <NavLink to="">
                <h3 dangerouslySetInnerHTML={{__html: props.album.title}} />
            </NavLink>
        </li>
    )
}
