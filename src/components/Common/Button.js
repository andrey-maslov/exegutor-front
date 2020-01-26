import React from 'react';

export default (props) => {
    return (
        <button className={`btn ${props.classes}`}>
            {props.text}
        </button>
    )
}