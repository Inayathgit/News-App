import React, { Component } from 'react'

const NewsItem = (props) => {
  
  
    let {title,description,imageUrl,newsUrl,publishedAt,source} = props
    
    
    return (
            
        <div className="card" >
  <img src={!imageUrl?"https://static.toiimg.com/thumb/msid-99863068,width-1070,height-580,imgsize-16410,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":imageUrl} className="card-img-top" alt="..."/>
  <span className="badge rounded-pill bg-danger" style={{display : 'flex',justifyContent:'flex-end',position: 'absolute',right:0}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
  <div className="card-body">
  
    <h5 className="card-title">{title}</h5>
    <p className='card-text'>{new Date(publishedAt).toISOString()}</p>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} className="btn btn-sm btn-primary">Readmore</a>


    
  </div>
  
  </div>
        
    
  
  
  

  
  
    )
  }


export default NewsItem
