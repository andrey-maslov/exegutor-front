import React from 'react';
import ShowsItem from "./ShowsItem/ShowsItem";
import s from './shows-block.module.scss';
import SectionHeader from "../../../Common/SectionHeader";

export default (props) => {
    return (
        <section className="main-news section section-dark">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-12">
                        <SectionHeader title="Ближайшие концерты" subtitle="Привет, котаны!"/>
                    </div>
                    <div className="col-xl-10 col-lg-9 col-md-12">
                        <div>
                            {(props.shows.showsData.length > 0) ?
                                props.shows.showsData.map(show => <ShowsItem show={show}/>)
                                : 'Нет концертов в ближайшее время'}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}