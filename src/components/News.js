import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [{}]


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }

    async componentDidMount() {
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=ded80ec1db304c63bf93e3c274cdce1b&page=1'
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
        })
    }


    handlePreviousClick = async () => {
        console.log('previous')
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ded80ec1db304c63bf93e3c274cdce1b&page=${this.state.page - 1}&pageSize=12`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles

        })
    }

    handleNextClick = async () => {

        console.log('next');
        if (Math.ceil(this.state.page + 1 > this.state.totalResults / 12)) { return; }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ded80ec1db304c63bf93e3c274cdce1b&page=${this.state.page + 1}&pageSize=12`;
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles

            })
        }
    }
    render() {
        let newsContainer = {
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            placeItems: 'center',
            gap: '1rem',
        }


        return (
            <div className="container my-3">
                <h2>Headlines</h2>
                <p>Total Articles: {this.state.totalResults}</p>
                <div className='news-container' style={newsContainer}>
                    {this.state.articles.map((element) => {
                        return <NewsItem
                            key={element.url}
                            title={element.title}
                            description={element.description}
                            imgUrl={element.urlToImage}
                            newsUrl={element.url} />
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-light" onClick={this.handlePreviousClick}> &larr; Previous</button>
                    <button className="btn btn-light" onClick={this.handleNextClick}> Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
