import React from 'react';

import HomeSlider from  './Slider/Slider';
import './Home.scss';
import {Hero} from "./Hero/Hero";
import NewsBlock from "./Content/NewsBlock/NewsBlock";
import Counter from "./Hero/Counter";

class Home extends React.Component {
    render() {
        return (
            <div className="home-wrapper">
                <div className="">
                    {/*<HomeSlider />*/}
                    <Hero />
                    {/*<Counter />*/}
                    <NewsBlock />
                </div>
            </div>
        )
    }
}

export default Home;