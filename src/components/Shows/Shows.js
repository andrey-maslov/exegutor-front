import React, {useState} from 'react';

import s from './shows.module.scss';
import ShowsItem from "../Home/Content/ShowsBlock/ShowsItem/ShowsItem";

const moment = require('moment');

function Shows(props) {

    const [displayPast, setDisplayPast] = useState(false);

    const currDate = moment(new Date());

    function getSeparateShows() {

        const allShows = props.shows.showsData;

        const shows = {pastShows: [], actualShows: []};

        allShows.forEach(show => {

            const showDate = moment(show.date)
            const duration = moment.duration(showDate.diff(currDate));
            const durDays = Math.round(duration.as('days'));

            if (durDays < 0) {
                shows.pastShows.push(show)
            } else {
                shows.actualShows.push(show)
            }

        });
        return shows;
    }

    const sepShows = getSeparateShows();

    return (
        <div className="shows-page page-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <ul className={s.list}>
                            {displayPast && sepShows.pastShows.map(show => <ShowsItem key={show.id} show={show}/>)}
                            {sepShows.actualShows.map(show => <ShowsItem key={show.id} show={show}/>)}
                        </ul>
                        <button onClick={displayPastShows}>
                            {displayPast ?
                                'Показать только актуальные концерты' :
                                'Показать прошедшие концерты тоже'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )


    function displayPastShows() {
        setDisplayPast(!displayPast);
    }

}

export default Shows;