import React from 'react'

import image1 from './../../img/slider-2.jpg';
import {NavLink} from "react-router-dom";

export default (props) => {

    console.log(props);

    return (
        <div className="news-item">
            <div className="news-item-inner">
                <NavLink className="news-item-image" to="">
                    <img src={props.data.thumb} alt="" className="img-responsive"/>
                </NavLink>
                <div className="news-item-content">
                    <div className="news-item-date">{props.data.date}</div>
                    <NavLink to="" className="news-item-title">{props.data.title}</NavLink>
                    <div className="news-item-excerpt" dangerouslySetInnerHTML={{__html: props.data.excerpt}} />
                </div>
            </div>
        </div>
    )
}
