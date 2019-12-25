import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';


import './Header.scss';

export default function() {
    return (

            <button id="navToggle" className="nav-toggle-btn">
                <span className="nav-toggle-icon">
                    <FontAwesomeIcon icon={faBars}/>
                </span>
            </button>

    )
}
