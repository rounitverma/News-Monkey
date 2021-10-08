import React, { Component } from "react";


export class NewsItem extends Component {
  render() {
      let {title, description, imageUrl, newsUrl, author, date, name} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl?imageUrl:"https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1732584344.jpg"} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title} <br/> <span class="badge bg-danger">{name}</span></h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-muted">By {author?author : "Anonymous"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
