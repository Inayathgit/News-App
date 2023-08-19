import React, {useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

const[articles,setarticles] = useState([]);
const[loading,setloading] = useState(true)
const[page,setpage] = useState(1)
const[totalResults,settotalResults] = useState(0)

  const CapitalizeFirstLetter = (str) => {
    return str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str
  }

  
  //  document.title = `${this.CapitalizeFirstLetter(props.category)}- NewsMonkey`
  
  // async updateNews(){
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=653f1260d24d4dbdbe23ae47c11a256e&page=${this.state.page}&pageSize=${props.pageSize}`
  //   this.setState({loading: true})
  //   let data = await  fetch(url)
  //   let ParsedData = await data.json()
    
  //   this.setState({articles: ParsedData.articles, totalResults: ParsedData.totalResults ,loading: false}
  //     )

  // }
   const updateNews= async()=>{
    // props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setloading(true)
    let data = await  fetch(url)
    props.setProgress(50)
    let ParsedData = await data.json()
    setarticles(ParsedData.articles)
    settotalResults(ParsedData.totalResults)
    setloading(false)
    // this.setState({articles: ParsedData.articles, totalResults: ParsedData.totalResults ,loading: false}
      // )
      props.setProgress(100)
  }
  useEffect(() => {
    updateNews()
  }, []);
  //  async componentDidMount(){
  //   this.updateNews()
  // }
  const fetchMoreData = async() => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
   setpage(page + 1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    setloading(true)
    let data = await  fetch(url)
    let ParsedData = await data.json()
    setarticles(articles.concat(ParsedData.articles))
    settotalResults(ParsedData.totalResults)
    setloading(false)
      
  };
//   handlePrevious = async()=>{
    
//   if(this.state.page - 1 > Math.ceil(this.state.totalResults/props.pageSize)){

//   }
//   else{
//   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=653f1260d24d4dbdbe23ae47c11a256e&page=${this.state.page - 1}&pageSize=${props.pageSize}`
//   this.setState({loading: true})  
//   let data = await  fetch(url)
//     let ParsedData = await data.json()
    
//     this.setState({articles: ParsedData.articles, page : this.state.page - 1,loading: false})
//     }
//   }
//  handleNext = async()=>{
  
//   if(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)){

//   }
//   else{
//   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=653f1260d24d4dbdbe23ae47c11a256e&page=${this.state.page + 1}&pageSize=${props.pageSize}`
//   this.setState({loading: true})  
//   let data = await  fetch(url)
//     let ParsedData = await data.json()
    
//     this.setState({articles: ParsedData.articles, page : this.state.page + 1,loading: false})
//     }
// }
    
  
  
   
    return (
      
        <>
        
         <h2 style = {{textAlign : 'center' ,margin : '30px' ,marginTop: '90px'}}>Headlines on {CapitalizeFirstLetter(props.category)}</h2>
         {loading && <Spinner/>}

     
          
          <InfiniteScroll
           dataLength={articles.length}
           next={fetchMoreData}
            style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
          
           hasMore={articles.length !== totalResults}
          //  loader={this.state.loading && <Spinner/>}
            scrollableTarget="scrollableDiv"
              >
                <div className="container" >
                  <div className='row'>
            {articles.map( (element)=>{
              return   <div className="col-md-4"key={element.url}>
                
              <NewsItem title = {element.title} description = {element.description} imageUrl={element.urlToImage} newsUrl = {element.url} publishedAt = {element.publishedAt} source = {element.source.name}/>
            </div> 
           })}
           </div>
               </div>
               </InfiniteScroll>

            {/* <div className="container d-flex justify-content-between">
                <button disabled = {this.state.page <=1} type="button" className="btn btn-dark" onClick = {this.handlePrevious}>&larr; Previous</button>
                <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick = {this.handleNext}>Next &rarr;</button>
                </div> */}
             
            
            
       
       </>
     
    )
  }
  News.defaultProps = {
    country : 'in',
    pageSize : '6',
    category : 'general'
  };

   News.defaultTypes = {
    country : PropTypes.string
  };


export default News
