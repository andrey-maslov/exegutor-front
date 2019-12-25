import React from 'react';
import axios from 'axios';

import {NavLink} from "react-router-dom";

let admHost = process.env.REACT_APP_ADMIN_HOST;


class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuItems: []
        };
    }

    static modifyUrl(str) {

        let pattern = new RegExp(/(http:\/\/admin.exegutor.loc\/)(.+)(\/)/);

        let newStr = str.replace(pattern, '$2');

        if (newStr !== 'http://admin.exegutor.loc/') {
            return newStr;
        } else {
            return '';
        }
    }


    componentDidMount() {
        axios.get( admHost + '/menus/v1/menus/main-menu')
            .then((response) => {
                return response.data.items;
            })
            .then((data) => {
                const items = data.map((item, index) => {
                    return (
                        <li className="nav-item" key={index}>
                            <NavLink to={Nav.modifyUrl(item.url)} exact
                                     activeClassName="current-menu-item">{item.title}</NavLink>
                        </li>
                    )
                });
                this.setState({menuItems: items});
            })

    }

    render() {
        return (
            <nav className="main-nav">
                <ul className="nav-list">
                    {this.state.menuItems}
                </ul>
            </nav>
        );
    }

}

export default Nav;