import React from 'react';

import './Shows.scss';
import ShowsItem from "../Home/Content/ShowsBlock/ShowsItem/ShowsItem";

function Shows(props) {

    const currentDate = Date.now();



    return (
        <div className="shows-wrapper">
            <div>{Math.floor(currentDate / 1000)}</div>
            <div>
                {(props.shows.showsData.length > 0) ?
                    props.shows.showsData.map(show => <ShowsItem show={show}/>)
                    : 'Нет концертов в ближайшее время'}
            </div>
        </div>
    )
}

export default Shows;