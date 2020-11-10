import React from 'react'
import './FeedItem.scss'

function FeedItem(props) {
    const item = props.item
    return (
        <div className="card col-md-4">
            <img src={item.thumb} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.excerpt}</p>
            </div>
        </div>
    )
}

export default FeedItem