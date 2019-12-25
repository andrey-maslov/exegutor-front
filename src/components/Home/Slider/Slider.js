import React from "react";
import Slider from "react-slick";

//import images
import image1 from './../../../img/slider-1.jpg';
import image2 from './../../../img/slider-2.jpg';
import image3 from './../../../img/slider-3.jpg';
import image4 from './../../../img/slider-4.jpg';
import image5 from './../../../img/slider-5.jpg';

class HomeSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div>
                    <img src={image1} alt=""/>
                </div>
                <div>
                    <img src={image2} alt=""/>
                </div>
                <div>
                    <img src={image3} alt=""/>
                </div>
                <div>
                    <img src={image4} alt=""/>
                </div>
                <div>
                    <img src={image5} alt=""/>
                </div>
            </Slider>
        );
    }
}

export default HomeSlider;