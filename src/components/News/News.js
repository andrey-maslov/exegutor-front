import React, {useState, useEffect} from 'react';
import ArticlesList from "./ArticlesList";

export default function News(props) {
    return (
        <div className="news-wrapper">
            <h3>News</h3>
            <ArticlesList
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
                articles={props.getArticlesForPage(props.currentPage, props.articles, props.articlesPages)}
                totalPages={props.totalPages}
            />
            {props.loading && <p>Loading</p>}
        </div>
    )
}