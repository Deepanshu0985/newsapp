import React, { Component } from 'react'
import Newsitem from './Newsitem'




export default class Newspage extends Component {
     
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false,
            page : 1,
            result : 0
           
                       
        }
        
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bdcbde0a23a340aa83e3ba4f7c092422&pageSize=12`;
        let data =  await fetch(url);
        let parseddata = await data.json(); 
        console.log(parseddata.totalResults);
        this.setState({articles: parseddata.articles,
            page:this.state.page ,
            result : parseddata.totalResults
            
        });
       
        
    }

    handlenextclick =async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bdcbde0a23a340aa83e3ba4f7c092422&page=${this.state.page+1}&pageSize=12`;
        let data =  await fetch(url);
        let parseddata = await data.json(); 
        console.log(parseddata);
        this.setState({
            page:this.state.page+1,
            articles: parseddata.articles,
            result : parseddata.totalResults
             
        });       
    }

    handleprevclick =async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bdcbde0a23a340aa83e3ba4f7c092422&page=${this.state.page-1}&pageSize=12`;
        let data =  await fetch(url);
        let parseddata = await data.json(); 
        console.log(parseddata);
        this.setState({
            page:this.state.page-1,
            articles: parseddata.articles,
            result : parseddata.totalResults
        })

    }
  render() {
    
    return (
     
        <div className='container my-2'>
            <h2>Top - Headlines</h2>
            <div className="row">
                {
                    this.state.articles.map((element)=>{
                    
                        return  <div className='col-md-3 ' key={element.url}>
                                    <Newsitem title = {element.title?element.title.slice(0,50):" "} description={element.description ? element.description.slice(0,100):" "} imageurl = {element.urlToImage?element.urlToImage:"https://icrier.org/wp-content/uploads/2022/09/Event-Image-Not-Found.jpg"} url = {element.url}/>
                                </div>
                    })
                }

                
            </div>

            <div class="d-flex justify-content-between">
                <button disabled={this.state.page===1} type="button" class="btn btn-dark" onClick={this.handleprevclick}>&larr; Previous </button>
                <button disabled={this.state.page===Math.ceil(this.state.result/12)} type="button" class="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
            </div>

        </div>
      
    )
  }
}
