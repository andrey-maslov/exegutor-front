import React from 'react'

//images
import hero from './../../../img/hero.jpg'
import Counter from "./Counter";

export const Hero = () => {
    return (
        <div className="hero-wrapper dark-bg">
            <img src={hero} alt="exegutor" className="img-responsive"/>
        </div>
    )
};