import React from "react";

function FeedItem(props) {
  const item = props.item;
  return (
    <div className="card col-md-4">
      <img src={item.thumb} className="card-img-top" alt="" />
      <div className="card-header">
        <small>{item.date}</small>
      </div>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.excerpt}</p>
        <a href={item.url} className="card-link">
          Czytaj więcej...
        </a>
      </div>
    </div>
  );
}

export default FeedItem;
