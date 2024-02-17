import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title, description} = this.props;
    return (
        <div class="card" style={{width: "18rem;"}}>
            <img src="https://images.indianexpress.com/2024/02/amit-shaaah.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
                <a href="#" class="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
          
          
          
    
    )
  }
}
