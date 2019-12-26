import React from 'react';

//import HomeSlider from  './Slider/Slider';
import './Home.scss';
import {Hero} from "./Hero/Hero";
import NewsBlock from "./Content/NewsBlock/NewsBlock";
//import Counter from "./Hero/Counter";

export default function(props) {
    return (
        <div className="home-wrapper">
            <Hero />
            <NewsBlock articlesData={props.articlesData} />
        </div>
    )
}