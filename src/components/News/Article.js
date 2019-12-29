import React, {useState, useEffect} from 'react'
import {NavLink} from "react-router-dom";

//images
import defaultThmb from './../../img/hero.jpg'

export default (props) => {

    const [thumbData, setThumbData] = useState([
        {
            source_url: ''
        }
    ]);

    console.log(thumbData)

    useEffect(()=> {

        setThumbData(props.thumbs)


    }, []);

    return (
        <div className="news-item">
            <div className="news-item-inner" >
                <NavLink className="news-item-image" to="" >
                    <img src={thumbData || defaultThmb} alt="" className="img-responsive"/>
                </NavLink>
                <div className="news-item-content">
                    <div className="news-item-date">{props.data.date}</div>
                    <NavLink to="" className="news-item-title">{props.data.title.rendered}</NavLink>
                    <div className="news-item-excerpt" dangerouslySetInnerHTML={{__html: props.data.excerpt.rendered}} />
                </div>
            </div>
        </div>
    )
}
