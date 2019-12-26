import React, {useState, useEffect} from 'react';

import './About.scss';

const axios = require('axios');
const url = process.env.REACT_APP_ADMIN_HOST + '/wp/v2/pages/11';

export default () => {

    const [pageData, setPageData] = useState({
        pageTitle: '',
        pageContent: ''
    });

    useEffect(() => {

        axios({
            method: 'GET',
            url: url
        })
            .then((response) => {
                if (response.status === 200 && response.data) {
                    const _pageData = response.data;
                    setPageData({
                        pageTitle: _pageData.title.rendered,
                        pageContent: _pageData.content.rendered
                    });
                }
            })
            .catch((error) => {
                console.error(error);
            })

    }, []);

    return (
        <div className="about-wrapper">
            <h3 dangerouslySetInnerHTML={{__html: pageData.pageTitle}}/>
            <div dangerouslySetInnerHTML={{__html: pageData.pageContent}}/>
        </div>
    )
}