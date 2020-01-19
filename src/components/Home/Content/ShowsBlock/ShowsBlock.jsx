import React from 'react';
import ShowsItem from "./ShowsItem/ShowsItem";
import s from './shows-block.module.scss';
import SectionHeader from "../../../Common/SectionHeader";

const moment = require('moment');

export default (props) => {

    const currDate = moment(new Date());

    const actualShows = props.shows.showsData.map(show => {

        const showDate = moment(show.date)
        const duration = moment.duration(showDate.diff(currDate));
        const durDays = Math.round(duration.as('days'));


        if (durDays >= 0) {
            return <ShowsItem key={show.id} show={show}/>
        }
    });

    return (
        <section className="main-news section section-dark">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-12">
                        <SectionHeader title="Ближайшие концерты" subtitle="Привет, котаны!"/>
                    </div>
                    <div className="col-xl-8 col-lg-9 col-md-12">
                        <div>
                            {actualShows}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}