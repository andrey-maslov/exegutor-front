import React from 'react'
import SectionHeader from "../../../Common/SectionHeader";
import Article from "../../../News/Article";


export default function(props) {

    const latestArticles = props.articlesData.articles.slice(0, 3);
    const thumbs = props.articlesData.thumbs;
    
    // For all the articles that are passed, add article
    const articlesToShow = latestArticles.map((item, index) => {
           return (
            <div className="col-lg-4" key={item.id} data-key={item.id} >
                <Article postData={item}/>
            </div>
        )
    });


    return (
        <section className="main-news section section-dark">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-12">
                        <SectionHeader title="Последние новости" subtitle="Тут все самое лучшее" />
                    </div>
                    <div className="col-xl-10 col-lg-9 col-md-12">
                        <div className="row">
                            {articlesToShow}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}