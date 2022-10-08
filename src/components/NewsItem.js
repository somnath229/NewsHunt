// import React, { Component } from 'react'

// export class NewsItem extends Component {
const NewsItem = (props) =>{
    // render() {
        let { title, description, imgUrl, newsUrl, author, date, source } = props;
        return (
            <div>
                <div className={`card m-2`} style = {{color : 'black'}}>
                    <img src={!imgUrl ? "https://thumbs.dreamstime.com/b/newspaper-line-news-icon-press-article-paper-journal-212522658.jpg" : imgUrl} className="card-img-top" alt="..." />
                    <div style = {{ 
                        display: 'flex',
                        justifyContent : 'flex-end',
                        position:'absolute',
                        right: 0
                    }}>
                    <span className="badge rounded-pill bg-danger" style={{left: '83%',zIndex:'1'}}>{source}</span>
                    </div>
                <div className="card-body">
                    <h5 className="card-title">{title}..</h5>
                    <p className="card-text">{description}..</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : NaN} on {new Date(date).toGMTString()}.</small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read More..</a>
                </div>
            </div>
            </div >
        )
    // }
}

export default NewsItem