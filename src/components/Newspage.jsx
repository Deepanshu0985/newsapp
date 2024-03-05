import React, {useState,useEffect} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';




export default function Newspage(props) {

    const capitalize =(string)=>{
        return string[0].toUpperCase() + string.slice(1);
    }
    
     const [articles,Setarticles]=useState([])
     const [page,Setpage] = useState(1)
     const [result,Setresult] = useState(0)

   

    useEffect(() => {
        (async (props) => {
            console.log("useefect called ");
            document.title = `News - ${capitalize(props.category)}`
            props.setprog(30);
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${1}&pageSize=5`;
    
            let data = await fetch(url);
            props.setprog(50);
            let parseddata = await data.json(); 
            props.setprog(70);
            console.log(parseddata.totalResults);
            Setarticles(parseddata.articles);
            Setpage(page);
            Setresult(parseddata.totalResults);
            props.setprog(100);
    
        })(props);
    },[]);
    
    const fetchMoreData = async () => {
        console.log("fetchmore called ");
        props.setprog(30);
        const nextpage = page +1;
        Setpage(nextpage)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${nextpage}&pageSize=5`;
        let data = await fetch(url);
        props.setprog(50);
        let parseddata = await data.json();
        Setarticles(articles.concat(parseddata.articles))
        Setresult(parseddata.totalResults)
        props.setprog(100);
    }
      
    return (

        <>
     
            <h2 className='text-center' style={{marginTop:"100px", marginBottom:"50px"}}> Top - {capitalize(props.category)} Headlines</h2>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < result}
                loader={<Spinner/>}
            >
                <div className="container">
                    <div className="row">
                        {
                            articles.map((element)=>{
                            
                                return  <div className='col-md-3 ' key={element.url}>
                                            <Newsitem title = {element.title?element.title.slice(0,50):" "} description={element.description ? element.description.slice(0,100):" "} imageurl = {element.urlToImage?element.urlToImage:"https://icrier.org/wp-content/uploads/2022/09/Event-Image-Not-Found.jpg"} url = {element.url}
                                            author = {element.author ? element.author : "unknown"} time={new Date(element.publishedAt).toGMTString()} source={element.source.name}/>
                                        </div>
                            })
                        }    
                    </div>
                </div>
            </InfiniteScroll>

        
        </>
      
    )
  
}
