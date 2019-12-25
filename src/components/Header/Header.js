import React, {Component} from 'react'

import SocialMenu from "./SocialMenu";
import Menu from "./Nav";
import Branding from "./Branding";
import Burger from "./Burger";

export default function () {
    return (
        <div className="main-header">
            <div className="main-header-bar">
                <Burger/>
                <Branding/>
                <Menu/>
                <SocialMenu/>
            </div>
        </div>
    )
}