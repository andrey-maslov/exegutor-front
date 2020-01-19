import React from 'react'
import axios from "axios";


let admHost = process.env.REACT_APP_ADMIN_HOST;

class ArticleView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {},
            media: {}
        };

    }

    componentDidMount() {
        const slug = this.props.match.params.slug;

        const _url = admHost + '/wp/v2/posts?slug=' + slug;

        axios({
            method: 'GET',
            url: _url
        })
            .then(response => response.data[0])
            .then((data) => {
                this.setState({post: data});
                this.getMedia(data['_links']['wp:featuredmedia'][0]['href']);
            })
            .catch(error => {
                console.error(error)
            })

    }

    getMedia(url) {
        axios({
            method: 'GET',
            url: url
        })
            .then(response => response.data)
            .then(data => {
                this.setState({media: data});
            })
    }


    render() {
        let articleImg;
        let build;

        if (this.state.media.media_details) {
            articleImg = <img
                className="img-responsive article-thumb"
                src={this.state.media.media_details.sizes.large.source_url}
                alt={this.state.media.alt_text} />;
        } else {
            articleImg = <div />
        }

        if (this.state.post.title) {

            build = (
                <div className="article-page page-wrapper">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="content">
                                    {articleImg}
                                    <h1 dangerouslySetInnerHTML={{__html: this.state.post.title.rendered}}/>
                                    <div className="page-content"
                                         dangerouslySetInnerHTML={{__html: this.state.post.content.rendered}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            build = <div/>
        }
        return build;
    }

}

export default ArticleView;