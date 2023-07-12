import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl } = this.props;
        return (

            <div className="card" style={{ width: '18rem', background: 'var(--offWhite)' }}>
                <img src={!imgUrl ? 'https://placeholder.co/1080/1080' : imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{!description ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' : description}</p>
                    <a href={newsUrl} rel='noreferrer' target='_blank' className="btn btn-sm btn-warning">Read More</a>
                </div>
            </div>

        )
    }
}

export default NewsItem
