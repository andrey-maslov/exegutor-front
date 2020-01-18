import React from 'react';
import s from './shows-item.module.scss'

export default (props) => {
    return (
        <div>
            {props.show.title}
        </div>
    )
}