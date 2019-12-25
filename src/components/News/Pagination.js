import React from 'react'

function setCurrentClass(p, current) {
    return (p === current) ? 'pagi-current' : '';
}

export default function(props) {

    let pagination = [];

    let currentPage = props.currentPage;

    for (let p = 1; p <= props.totalPages; p++) {
        let page = p;
        pagination.push(<button className={setCurrentClass(p, currentPage)} key={p} onClick={() => {
            props.setCurrentPage(page)
        }}>{p}</button>);
    }

    return (
        <div className="pagination">
            {pagination}
        </div>
    )

}