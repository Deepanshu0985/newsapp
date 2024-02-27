import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';




export default class Newspage extends Component {

    capitalize =(string)=>{
        return string[0].toUpperCase() + string.slice(1);
    }
     
    constructor(props){
        super(props);
        this.state = {
            articles : [],
            loading : false,
            page : 1,
            result : 0
           
                       
        }
        document.title = `News - ${this.capitalize(this.props.category)}`
        
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=bdcbde0a23a340aa83e3ba4f7c092422&pageSize=12`;
        let data =  await fetch(url);
        this.setState({loading : true})
        let parseddata = await data.json(); 
        console.log(parseddata.totalResults);
        this.setState({articles: parseddata.articles,
            page:this.state.page ,
            result : parseddata.totalResults,
            loading:false
            
        });
       
        
    }

    async updatenews (){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=bdcbde0a23a340aa83e3ba4f7c092422&page=${this.state.page}&pageSize=12`;
        let data =  await fetch(url);
        this.setState({loading : true})
        let parseddata = await data.json(); 
        console.log(parseddata);
        this.setState({
            articles: parseddata.articles,
            result : parseddata.totalResults,
            loading:false
             
        }); 


    }

    handlenextclick =async()=>{   
        this.setState({page : this.state.page+1})  
        this.updatenews();  
    }

    handleprevclick =async()=>{
        this.setState({page : this.state.page-1})  
        this.updatenews();  

    }
  render() {
    
    return (
     
        <div className='container my-2'>
            <h2 className='text-center' style={{marginTop:"25px", marginBottom:"50px"}}> Top - {this.capitalize(this.props.category)} Headlines</h2>
            {this.state.loading && <Spinner />}
            <div className="row">
                {
                    !this.state.loading && this.state.articles.map((element)=>{
                    
                        return  <div className='col-md-3 ' key={element.url}>
                                    <Newsitem title = {element.title?element.title.slice(0,50):" "} description={element.description ? element.description.slice(0,100):" "} imageurl = {element.urlToImage?element.urlToImage:"https://icrier.org/wp-content/uploads/2022/09/Event-Image-Not-Found.jpg"} url = {element.url}
                                    author = {element.author ? element.author : "unknown"} time={new Date(element.publishedAt).toGMTString()} source={element.source.name}/>
                                </div>
                    })
                }

                
            </div>

            <div class="d-flex justify-content-between">
                <button disabled={this.state.page<2} type="button" class="btn btn-dark" onClick={this.handleprevclick}>&larr; Previous </button>
                <button disabled={this.state.page===Math.ceil(this.state.result/12)} type="button" class="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
            </div>

        </div>
      
    )
  }
}
