import React from 'react'

export default (props) => {

    return (
        <div className="section-header">
            <h2>{props.title}</h2>
            {props.subtitle ? <p>{props.subtitle}</p> : ''}
        </div>
    )
};