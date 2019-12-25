import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVk as vkontakte, faFacebook as facebook, faInstagram as instagram, faBandcamp as bandcamp} from '@fortawesome/free-brands-svg-icons';


import './Header.scss';
import axios from "axios";
import {NavLink} from "react-router-dom";

let admHost = process.env.REACT_APP_ADMIN_HOST;

class SocialMenu extends React.Component {

    state = {
        socialItems: [],
    };

    icons = [
        instagram,
        vkontakte,
        facebook,
        bandcamp
    ];

    componentDidMount() {
        axios.get(admHost + '/menus/v1/menus/social-menu')
            .then((response) => {
                return response.data.items;
            })
            .then((data) => {
                const items = data.map((item, index) => {

                    return (
                        <li key={index} className="social-menu-item">
                            <a href={item.url} target="_blank" rel="noopener noreferrer nofollow">
                                <FontAwesomeIcon icon={this.icons[index]} />
                            </a>
                        </li>
                    )
                });
                this.setState({socialItems: items});
            })
    }


    render() {
        return (
            <ul className="social-menu-list">
                {this.state.socialItems}
            </ul>
        )
    }


}

export default SocialMenu;