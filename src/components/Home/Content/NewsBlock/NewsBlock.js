import React from 'react'
import {SectionHeader} from "../../../Common/SectionHeader";
import Article from "../../../News/Article";


class NewsBlock extends React.Component {

    render() {

        return (
            <section className="main-news section section-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 col-lg-3 col-md-12">
                            <SectionHeader title="Latest News" subtitle="This is our news, guys" />
                        </div>
                        <div className="col-xl-10 col-lg-9 col-md-12">
                            <div className="row">
                                <div className="col-lg-4">
                                    <Article/>
                                </div>
                                <div className="col-lg-4">
                                    <Article/>
                                </div>
                                <div className="col-lg-4">
                                    <Article/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )

    }

}

export default NewsBlock