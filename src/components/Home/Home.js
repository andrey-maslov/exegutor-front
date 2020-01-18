import React from 'react';

//import HomeSlider from  './Slider/Slider';
import './Home.scss';
import {Hero} from "./Hero/Hero";
import NewsBlock from "./Content/NewsBlock/NewsBlock";
import ShowsBlock from "./Content/ShowsBlock/ShowsBlock";
//import Counter from "./Hero/Counter";

export default function(props) {

    return (
        <div className="home-wrapper">
            <Hero />
            <NewsBlock articlesData={props.articlesData} />
            <ShowsBlock shows={props.shows} />
        </div>
    )
}