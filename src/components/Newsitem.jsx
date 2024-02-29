import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title, description,imageurl,url,author,time,source} = this.props;
    return (
        <div className="card" >
              <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger " style={{left:"90%",zIndex:'1'}}>{source}
                <span className="visually-hidden"></span>
              </span>
            <img src={imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title +"..."}</h5>
                <p className="card-text">{description +"..."}</p>
                <a href={url} rel="noopener noreferrer" target='_blank' className="btn btn-sm btn-primary">Read more</a>
                <p className="card-text"><small className="text-body-secondary">by {author} published on {time}</small></p>
          </div>
          </div> 
          
          
    
    )
  }
}
