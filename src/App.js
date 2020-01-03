import React, {useEffect, useState} from 'react';
import {Route, BrowserRouter} from "react-router-dom";

import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import News from "./components/News/News";
import Shows from "./components/Shows/Shows";
import About from "./components/About/About";
import Music from "./components/Music/Music";
import SiteFooter from "./components/Footer/SiteFooter";

import Gallery from "./components/Gallery/Gallery";
import ArticleView from "./components/News/ArticleView";
import AlbumView from "./components/Music/Albums/AlbumView";

const axios = require('axios');

let admHost = process.env.REACT_APP_ADMIN_HOST;


/**
 * Returns articles for the current page
 * @returns [*]
 * @param {int} page
 * @param {array} articles
 * @param {object} articlesPages
 */
function getArticlesForPage(page = 1, articles, articlesPages) {

    if (!articlesPages[page]) {
        return [];
    }

    if (articles.length === 0) {
        return [];
    }

    let the_articles = [];

    // For each article ID inside of the provided page,
    // push the whole article object to the array
    for (var i = 0; i < articlesPages[page].length; i++) {
        var articleID = parseInt(articlesPages[page][i]);
        for (var a = 0; a < articles.length; a++) {
            if (parseInt(articles[a].id) === articleID) {
                the_articles.push(articles[a]);
                break;
            }
        }
    }

    // Return array of article objects.
    return the_articles;
}

function App() {


    //Signal to the app is already loaded or not
    const [loading, setLoading] = useState(false);

    //All articles that we have loaded
    const [articles, setArticles] = useState([]);

    //All thumbnails for posts
    const [thumbs, setThumbs] = useState([]);

    //Pages for articles ID`s
    const [articlesPages, setArticlesPages] = useState({});

    //Current page
    const [currentPage, setCurrentPage] = useState(1);

    //Total pages
    const [totalPages, setTotalPages] = useState(0);


    useEffect(() => {

        const page = currentPage;

        if (loading) {
            return;
        }

        // If we have articles for that page already, don't load.
        if (Object.keys(articlesPages).indexOf(page.toString()) >= 0) {
            return;
        }


        const _url = admHost + '/exegutor/v1/posts?page=' + page;

        axios({
            method: 'GET',
            url: _url
        })
            .then((response) => {
                if (response.status === 200 && response.data) {
                    // If we don't have the total pages already, get them from the headers sent by WP.
                    if (totalPages === 0 && Object.keys(response.headers).indexOf('x-wp-totalpages') >= 0) {
                        setTotalPages(parseInt(response.headers['x-wp-totalpages']));
                    }

                    const data = response.data;

                    let _articles = [...articles, ...data];

                    let _articlesPages = [];

                    _articlesPages[page] = [];

                    for (var a = 0; a < data.length; a++) {
                        _articlesPages[page].push(data[a].id);
                    }

                    setArticlesPages(_articlesPages);
                    setArticles(_articles);

                }

                setLoading(false);

            })
            .then(() => {
                // getMedia();
            })
            .catch((error) => {
                console.error(error);
            })


    }, [currentPage, loading, articlesPages, articles, totalPages, thumbs]);


    function getMedia() {

        const _url_media = admHost + '/wp/v2/media';

        axios({
            method: 'GET',
            url: _url_media
        })
            .then((response) => {
                if (response.status === 200 && response.data) {
                    const mediaData = response.data;

                    setThumbs(mediaData)

                }

            })
            .catch((error) => {
                console.error(error);
            })
    }


    let articlesData = {
        getArticlesForPage,
        currentPage,
        setCurrentPage,
        articles,
        articlesPages,
        totalPages,
        loading
        // thumbs
    };


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <main>
                    <Route exact path="/" render={() => <Home articlesData={articlesData}/>}/>
                    <Route exact path="/news" render={() => <News articlesData={articlesData}/>}/>
                    <Route exact path="/shows" render={() => <Shows/>}/>
                    <Route exact path="/about" render={() => <About/>}/>
                    <Route exact path="/music" render={() => <Music/>}/>
                    <Route exact path="/gallery" render={() => <Gallery/>}/>
                    <Route exact path="/news/:slug" render={({match}) => <ArticleView match={match} />}/>
                    <Route exact path="/music/:album" render={({match}) => <AlbumView match={match} />}/>
                </main>
                <SiteFooter/>
            </div>
        </BrowserRouter>
    );
}


export default App;
