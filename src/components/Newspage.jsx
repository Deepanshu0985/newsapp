import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';




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
        console.log("called");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=bdcbde0a23a340aa83e3ba4f7c092422&page=${1}&pageSize=5`;
        let data =  await fetch(url);
        let parseddata = await data.json(); 
        console.log(parseddata.totalResults);
        this.setState({
            articles: parseddata.articles,
            page:this.state.page ,
            result : parseddata.totalResults,            
        });       
        
    }

 

    fetchMoreData = async () => {
        console.log(this.state.page);
        console.log("fetchmore called ");
        // Update page in setState callback
        this.setState(page => ({ page: this.state.page + 1 }), async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=bdcbde0a23a340aa83e3ba4f7c092422&page=${this.state.page}&pageSize=5`;
            let data = await fetch(url);
            this.setState({ loading: true });
            let parseddata = await data.json();
            this.setState({
                articles: this.state.articles.concat(parseddata.articles),
                result: parseddata.totalResults,
                loading: false
            });
        });
    }
    
    

  render() {
    
    return (
     
        <div className='container my-2'>
            <h2 className='text-center' style={{marginTop:"25px", marginBottom:"50px"}}> Top - {this.capitalize(this.props.category)} Headlines</h2>
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length < this.state.result}
                loader={<h4>Loading...</h4>}
            >
                <div className="row">
                    {
                        this.state.articles.map((element)=>{
                        
                            return  <div className='col-md-3 ' key={element.url}>
                                        <Newsitem title = {element.title?element.title.slice(0,50):" "} description={element.description ? element.description.slice(0,100):" "} imageurl = {element.urlToImage?element.urlToImage:"https://icrier.org/wp-content/uploads/2022/09/Event-Image-Not-Found.jpg"} url = {element.url}
                                        author = {element.author ? element.author : "unknown"} time={new Date(element.publishedAt).toGMTString()} source={element.source.name}/>
                                    </div>
                        })
                    }    
                </div>
            </InfiniteScroll>

        </div>
      
    )
  }
}
