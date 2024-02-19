import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title, description,imageurl,url} = this.props;
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title +"..."}</h5>
                <p className="card-text">{description +"..."}</p>
                <a href={url} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
          
          
          
    
    )
  }
}
