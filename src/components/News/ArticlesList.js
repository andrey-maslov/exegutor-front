import React from "react";
import Pagination from "./Pagination";
import Article from "./Article";

/**
 * Showing articles
 */

export default function ArticlesList(props) {


    // For all the articles that are passed, add article
    const articlesToShow = props.articles.map((item, index) => {
        return (
            <div className="col-lg-4" key={item.id} data-key={item.id}>
                <Article postData={item} />
            </div>
        )
    });

    return (
        <div className="articles">
            <div className="row">
                {articlesToShow}
            </div>
            <Pagination
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
                totalPages={props.totalPages}
            />
        </div>
    )
}