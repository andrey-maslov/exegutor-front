import React from 'react';
import {NavLink} from "react-router-dom";

import logo from '../../img/logo.png';

import './Header.scss';

export default function() {
    return (
        <div className="site-branding">
            <NavLink to="/">
                <img src={logo} className="site-logo" alt="logo"/>
            </NavLink>
            <div className="site-name">
                Exegutor
            </div>
        </div>
    )
}
