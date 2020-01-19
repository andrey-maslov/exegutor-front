import React from 'react';
import ArticlesList from "./ArticlesList";

export default function News(props) {
    return (
        <div className="news-page page-wrapper">
            <div className="container">
                <h3>News</h3>
                <ArticlesList
                    currentPage={props.articlesData.currentPage}
                    setCurrentPage={props.articlesData.setCurrentPage}
                    articles={props.articlesData.getArticlesForPage(props.articlesData.currentPage, props.articlesData.articles, props.articlesData.articlesPages)}
                    totalPages={props.articlesData.totalPages}
                />
                {props.articlesData.loading && <p>Loading</p>}
            </div>
        </div>
    )
}