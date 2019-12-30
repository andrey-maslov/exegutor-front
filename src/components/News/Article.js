import React, {useState, useEffect} from 'react'
import {NavLink} from "react-router-dom";

//images
import defaultThmb from './../../img/hero.jpg'

export default (props) => {
    return (
        <div className="news-item">
            <div className="news-item-inner" >
                <NavLink className="news-item-image" to={`/${props.postData.slug}`} >
                    <img src={props.postData.thumb || defaultThmb} alt="" className="img-responsive"/>
                </NavLink>
                <div className="news-item-content">
                    <div className="news-item-date">{props.postData.date}</div>
                    <NavLink to="" className="news-item-title">{props.postData.title}</NavLink>
                    <div className="news-item-excerpt" dangerouslySetInnerHTML={{__html: props.postData.excerpt}} />
                </div>
            </div>
        </div>
    )
}
