import React, { Component } from 'react'
import { movies } from './movieData'

export default class Banner extends Component {
  render() {
    let movieArr = movies.results
    let movieEle = movies.results[Math.floor(Math.random() * movieArr.length)]
    let backDrop = movieEle.backdrop_path
    return (
      
        <div className="card banner-card">
        <img src={`https://image.tmdb.org/t/p/original${backDrop}`} className="card-img-top banner-img" alt="..."/>
        <h5 className="card-title banner-title">{`${movieEle.title}`}</h5>
        <p className="card-text banner-text">{`${movieEle.overview}`}</p>
        
      </div>
    )
  }
}
