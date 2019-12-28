import React, {useState, useEffect} from 'react';

const axios = require('axios');
const url = process.env.REACT_APP_ADMIN_HOST + '/wp/v2/pages/11';

export default () => {

    const [pageData, setPageData] = useState({
        pageTitle: '',
        pageContent: ''
    });


    useEffect(() => {

        if(false) {
            return;
        }

        console.log('use');

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
        <div className="about-page page-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <h1 dangerouslySetInnerHTML={{__html: pageData.pageTitle}}/>
                        <div className="page-content" dangerouslySetInnerHTML={{__html: pageData.pageContent}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}